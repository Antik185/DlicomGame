import json
import re
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "dist" / "assets" / "regChats"
OUTPUT = ROOT / "dist" / "assets" / "regChats" / "participants.json"
AVATAR_OUTPUT = ROOT / "dist" / "assets" / "regional-avatars"


def normalized_avatar_path(folder: Path, relative_path: str):
    return folder.joinpath(*relative_path.replace("\\", "/").split("/"))


def write_avatar(source: Path, destination: Path):
    with Image.open(source) as image:
        image.seek(0)
        image = image.convert("RGBA")
        image = ImageOps.fit(image, (256, 256), method=Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=82, method=6)


def main():
    roster = {}
    for folder in sorted(path for path in SOURCE.iterdir() if path.is_dir()):
        source = (folder / "participants.txt").read_text(encoding="utf-8")
        region_match = re.search(r"^Region:\s*(.+)$", source, re.MULTILINE)
        channel_match = re.search(r"^Channel:\s*(.+)$", source, re.MULTILINE)
        region = region_match.group(1).strip() if region_match else folder.name.split("__")[0]
        channel = channel_match.group(1).strip() if channel_match else folder.name.split("__")[-1]

        for line in source.splitlines()[7:]:
            if not line.strip():
                continue
            parts = [part.strip() for part in line.split(" | ")]
            if len(parts) < 5:
                continue
            discord_id = parts[-3]
            if not re.fullmatch(r"\d{10,}", discord_id):
                continue
            avatar_source = normalized_avatar_path(folder, parts[-1])
            existing = roster.get(discord_id)
            if existing:
                existing["messages"] += int(parts[-2]) if parts[-2].isdigit() else 0
                if region not in existing["regions"]:
                    existing["regions"].append(region)
                if channel not in existing["channels"]:
                    existing["channels"].append(channel)
                continue
            roster[discord_id] = {
                "username": parts[0],
                "nickname": " | ".join(parts[1:-3]) or parts[0].lstrip("@"),
                "messages": int(parts[-2]) if parts[-2].isdigit() else 0,
                "source_avatar": avatar_source,
                "regions": [region],
                "channels": [channel],
            }

    participants = sorted(roster.values(), key=lambda person: person["messages"], reverse=True)
    AVATAR_OUTPUT.mkdir(parents=True, exist_ok=True)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    for index, person in enumerate(participants, start=1):
        avatar_name = f"member-{index:04d}.webp"
        write_avatar(person.pop("source_avatar"), AVATAR_OUTPUT / avatar_name)
        person["key"] = f"member-{index:04d}"
        person["avatar"] = f"assets/regional-avatars/{avatar_name}"

    regions = sorted({region for person in participants for region in person["regions"]})
    counts = {
        region: sum(region in person["regions"] for person in participants)
        for region in regions
    }
    OUTPUT.write_text(json.dumps({
        "version": 2,
        "count": len(participants),
        "regions": regions,
        "counts": counts,
        "participants": participants,
    }, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"Prepared {len(participants)} minimized participants across {len(regions)} regions")


if __name__ == "__main__":
    main()
