import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "source-data", "general-chat-export.json");
const avatarDirectory = path.join(root, "dist", "assets", "avatars");
const outputPath = path.join(root, "dist", "assets", "chat-messages.json");

const [exportData, avatarFiles] = await Promise.all([
  readFile(sourcePath, "utf8").then(JSON.parse),
  readdir(avatarDirectory),
]);

const avatarById = new Map();
for (const file of avatarFiles) {
  const match = file.match(/__([0-9]+)\.(?:png|gif|jpe?g|webp)$/i);
  if (match) avatarById.set(match[1], file);
}

const messages = (exportData.messages || [])
  .filter(message => !message.author?.isBot && String(message.content || "").trim())
  .map(message => {
    const author = message.author || {};
    const content = String(message.content)
      .replace(/\r?\n+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 280);
    const avatar = avatarById.get(String(author.id || ""));
    return {
      id: String(message.id || ""),
      name: String(author.nickname || author.name || "member").slice(0, 40),
      handle: String(author.name || "member").slice(0, 40),
      content,
      time: String(message.timestamp || "").slice(11, 16) || "02:17",
      color: author.color || null,
      avatar: avatar ? `assets/avatars/${avatar}` : null,
    };
  })
  .filter(message => message.content);

await writeFile(outputPath, JSON.stringify({ version: 1, count: messages.length, messages }));
console.log(`Prepared ${messages.length} chat messages at ${outputPath}`);
