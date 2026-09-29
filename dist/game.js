const visitorTemplates = [
  {
    name: "PixelPaws", username: "@pixelpaws", role: "Builder", created: "Jul 08, 2025", age: "14 months", xHandle: "@pixelpawsdev", allowed: true,
    intro: "Hey! I'm participating in the Game Jam.", filter: "hue-rotate(0deg)",
    bioReason: "I forgot to fill it in. I was more focused on getting the build ready.",
    search: [{ name: "@pixelpaws", note: "No existing member · application only" }], similar: ["pixelpaw", "pixelpawsdev"],
    account: { age: "443 days", communities: 4, bans: 0, note: "Normal login history" },
    x: { followers: "1,840", following: "412", likes: "140 avg.", since: "2022", posts: ["Day 4 building my browser game", "New combat system finished", "Looking for playtesters"] },
    questions: [["What are you building?", "A browser game for the jam. Combat finally works."], ["Who invited you?", "Saw the open call in the builder feed."], ["Can you show your work?", "The devlog is on my X profile."]],
    consequence: { yes: ["dili", "pixelpaws is in — nice, another jam build"], no: ["rex", "wait, why did we turn away @pixelpaws?"] }
  },
  {
    name: "Luma", username: "@luma.draws", role: "Artist", created: "Mar 12, 2024", age: "2 years", xHandle: "@lumadraws", allowed: true,
    intro: "Just here to meet the jam teams. I draw creatures.", bio: "I draw creatures and work on small games.", filter: "hue-rotate(45deg)",
    search: [], similar: ["lumadraw", "luma_art"], account: { age: "926 days", communities: 9, bans: 0, note: "Consistent device history" },
    x: { followers: "3,210", following: "604", likes: "230 avg.", since: "2020", posts: ["final creature sheet ✨", "paintover stream tonight", "jam team, assemble"] },
    questions: [["Who invited you?", "No one — the lobby post said visitors were welcome."], ["What do you make?", "Mostly creature concepts and UI paintovers."], ["Can you show your work?", "Sure. My portfolio thread is pinned."]],
    consequence: { yes: ["mika", "the new artist's work is actually so good"], no: ["sato", "luma got rejected? thought the lobby was open"] }
  },
  {
    name: "Crisp", username: "@crispclips", role: "Clipmaker", created: "Sep 18, 2026", age: "6 days", xHandle: "@crispclips", allowed: false,
    intro: "First time here. I make clips and can post your launch everywhere.", filter: "hue-rotate(140deg)",
    bioReason: "Was I supposed to? Just let me in and I'll add something later.",
    search: [], similar: ["crispclip", "crispyclips"], account: { age: "6 days", communities: 0, bans: 0, note: "First login today" },
    x: { followers: "92", following: "1,180", likes: "2 avg.", since: "Sep 2026", posts: ["gm", "follow back", "gm builders"], metrics: [{ views: 410, likes: 2, reposts: 3, replies: 19 }, { views: 530, likes: 1, reposts: 1, replies: 14 }, { views: 380, likes: 3, reposts: 2, replies: 17 }] },
    questions: [["Which clips have you made?", "Mostly private stuff. I deleted the good ones."], ["Who invited you?", "Uh, one of the builders. I forgot the name."], ["Why this server?", "Big audience. Good opportunities."]],
    consequence: { yes: ["dili", "who let the promo bot into general"], no: ["rex", "lobby's clean so far"] }
  },
  {
    name: "ByteBloom", username: "@bytebloom", role: "Builder", created: "Sep 17, 2026", age: "7 days", xHandle: "@byteblooms", allowed: true,
    intro: "New account, old project. I can prove I'm building.", filter: "hue-rotate(285deg)",
    bioReason: "This account is new and I skipped the profile setup. My build log is public, though.",
    search: [], similar: ["byteblooms", "byte_bloom"], account: { age: "7 days", communities: 1, bans: 0, note: "Account created for the jam" },
    x: { followers: "284", following: "197", likes: "38 avg.", since: "2023", posts: ["lighting pass before / after", "Day 11: save system is alive", "tiny browser dungeon, big bugs"] },
    questions: [["What are you building?", "A tiny browser dungeon. The save system works now."], ["Why is Discord new?", "My old account was tied to a school email."], ["Can you show your work?", "Yep — eleven days of clips on X."]],
    consequence: { yes: ["bytebloom", "thanks! dropping the playtest link in builders"], no: ["alex", "@bytebloom had a legit build, btw"] }
  },
  {
    name: "M0gster", username: "@m0gster", role: "Member", created: "Jan 04, 2025", age: "20 months", xHandle: "@mogster_real", allowed: false,
    intro: "Yo, it's Mogster. Got logged out for a minute.", filter: "hue-rotate(90deg) saturate(.8)",
    bioReason: "I don't want to put personal stuff there. You already know who I am.",
    search: [{ name: "@mogster", note: "ONLINE · member since May 2025" }], similar: ["mogster", "m0gster", "mogster_", "mogsterreal"], account: { age: "628 days", communities: 19, bans: 0, note: "Username changed 2 hours ago" },
    x: { followers: "0", following: "42", likes: "1 avg.", since: "Sep 2026", posts: ["new account", "old one hacked", "add me back"], metrics: [{ views: 870, likes: 1, reposts: 0, replies: 0 }, { views: 930, likes: 2, reposts: 0, replies: 1 }, { views: 760, likes: 1, reposts: 0, replies: 0 }] },
    questions: [["Why are you outside?", "Session bug. You know how Discord is."], ["What's your current project?", "The usual one. You remember."], ["Prove it's you.", "Come on. Don't make this weird."]],
    hint: ["mogster", "wait why is there another mogster 💀"],
    consequence: { yes: ["mogster", "ADMIN that's not me"], no: ["mogster", "ty. whoever that was, block them"] }
  },
  {
    name: "Hex", username: "@hex_dumped", role: "Builder", created: "Nov 11, 2023", age: "34 months", xHandle: "@hexdumped", allowed: false,
    intro: "I used to build here. Someone said bans reset after a year.", filter: "hue-rotate(330deg) saturate(1.3)",
    bioReason: "I removed it after the ban. People kept taking screenshots out of context.",
    search: [{ name: "@hex_dumped", note: "BANNED · phishing links · Feb 2026" }], similar: ["hex_dumped", "hexdump", "hexreturned"], account: { age: "1,048 days", communities: 31, bans: 2, note: "Ban reason: malicious links" },
    x: { followers: "6,400", following: "803", likes: "64 avg.", since: "2021", posts: ["shipping again", "new wallet tool soon", "fresh start"] },
    banQuestion: ["Why were you banned?", "My Discord was compromised. Those phishing links weren't mine — ask the admins."],
    adminReview: { verdict: "deny", response: "I checked the old case. The phishing evidence was confirmed after the account was recovered. Do not restore access." },
    questions: [["Who said bans reset?", "Pretty sure Dili said it on stream."], ["What are you building?", "A wallet helper. Totally safe."], ["Can you prove the account was hacked?", "The old messages are gone. You'll have to trust me."]],
    consequence: { yes: ["sato", "why is @hex_dumped back in here??"], no: ["dili", "good catch on the old ban"] }
  },
  {
    name: "Nori", username: "@nori.ink", role: "Artist", created: "Aug 08, 2024", age: "25 months", xHandle: "@noriink", allowed: true,
    intro: "Alex invited me to help with the jam key art.", filter: "hue-rotate(195deg) saturate(.85)",
    search: [{ name: "@alex", note: "ONLINE · active Builder · joined 2024" }], similar: ["noriink", "nori_ink", "noriink2"], account: { age: "777 days", communities: 6, bans: 0, note: "No risk flags" },
    x: { followers: "1,120", following: "520", likes: "96 avg.", since: "2021", posts: ["neon alley study", "key art thumbnails", "taking one jam commission"] },
    questions: [["Who invited you?", "Alex. We're doing the key art after stand-up."], ["What do you draw?", "Environments, key art, the occasional weird frog."], ["Can Alex confirm?", "They said they'd post in general."]],
    hint: ["alex", "btw I invited an artist tonight"],
    consequence: { yes: ["alex", "nori made it, perfect"], no: ["alex", "hey, I did confirm @nori.ink"] }
  },
  {
    name: "Coinshill", username: "@coolbuilder", role: "Builder", created: "Sep 15, 2026", age: "9 days", xHandle: "@coolbuilder", allowed: false,
    intro: "I'm a Builder. I create apps and handle complete projects.", filter: "none",
    bio: "Builder for private clients. Apps, projects and turnkey work.",
    search: [], similar: ["coolbuilderx", "cool_builder"], account: { age: "9 days", communities: 0, bans: 0, note: "Business account · category not provided" },
    x: { followers: "1,280", following: "346", likes: "84 avg.", since: "2022", posts: ["New two-storey build handed over on time", "Foundation and framing package now available", "Taking bookings for home renovation projects"], metrics: [{ views: 1600, likes: 96, reposts: 12, replies: 8 }, { views: 1240, likes: 71, reposts: 9, replies: 5 }, { views: 980, likes: 64, reposts: 7, replies: 6 }] },
    questions: [["What apps do you build?", "Applications for building permits, estimates, all the paperwork. Then my crew builds the house."], ["Can you show your work?", "Sure. Foundations, roofing, renovations — full construction service."], ["Do you develop software?", "Not personally. I thought Builder meant construction builder."]],
    consequence: { yes: ["coolbuilder", "Need a house, renovation or new roof? DM me for a free construction estimate."], no: ["mika", "yeah, wrong kind of builder for the game jam"] }
  },
  {
    name: "Moss", username: "@mossbytes", role: "Builder", created: "May 03, 2026", age: "4 months", xHandle: "@mossbytes", allowed: false,
    intro: "Phone verification broke. The build is real though.", filter: "hue-rotate(70deg) saturate(.7)",
    bioReason: "I never finished the profile. I only use Discord to share builds.",
    search: [], similar: ["mossbyte", "moss_builds"], account: { age: "144 days", communities: 3, bans: 0, note: "Unverified contact method" },
    x: { followers: "710", following: "265", likes: "54 avg.", since: "2024", posts: ["procedural moss shader", "jam build log #6", "controller support done"] },
    questions: [["Why isn't your phone verified?", "Changed numbers yesterday. Support hasn't fixed it."], ["What are you building?", "A cozy ruin crawler. I can show the repo."], ["Who invited you?", "Nobody. Builder call was public."]],
    consequence: { yes: ["system", "Security notice: unverified account entered lobby"], no: ["mossbytes", "fair. I'll come back after support fixes my phone"] }
  },
  {
    name: "Dili", username: "@dili", role: "Admin", created: "Feb 02, 2021", age: "5 years", xHandle: "@dlicom", allowed: false,
    intro: "Open the door. I forgot which side I'm on.", filter: "hue-rotate(245deg) brightness(.78)",
    bioReason: "Admins don't need bios. You should recognize me.",
    search: [{ name: "@dili", note: "ONLINE · ADMIN · active in #staff" }], similar: ["dili", "dlli", "diIi", "dili_admin"], account: { age: "2,060 days", communities: 1, bans: 0, note: "Session location: unknown" },
    x: { followers: "24,800", following: "318", likes: "870 avg.", since: "2019", posts: ["night shift starts at 2", "builders get priority tonight", "do not share admin codes"], metrics: [{ views: 1100, likes: 260, reposts: 190, replies: 220 }, { views: 980, likes: 210, reposts: 170, replies: 205 }, { views: 1250, likes: 290, reposts: 230, replies: 260 }] },
    questions: [["Why are you already online?", "I'm not."], ["What's the staff code?", "You aren't supposed to ask that in the lobby."], ["Where did you come from?", "The other window."]],
    hint: ["dili", "quick reminder: I'm in staff voice all night"],
    consequence: { yes: ["system", "Two active sessions now identify as @dili"], no: ["dili", "whoever's at the window isn't me"] }
  },
  {
    name: "Tomorrow", username: "@tomorrow", role: "Member", created: "Sep 25, 2026", age: "−1 day", xHandle: "—", allowed: false,
    intro: "You already approved me. You just haven't done it yet.", filter: "grayscale(.65) hue-rotate(190deg) contrast(1.25)",
    bioReason: "I haven't written it yet. You will read it tomorrow.",
    search: [], similar: ["tomorow", "tomorrow_"], account: { age: "Account not yet created", communities: "—", bans: "—", note: "Timestamp exceeds server clock" },
    x: null,
    questions: [["How can your account be from tomorrow?", "Your clock is slow."], ["Who are you?", "The last person you'll reject tonight."], ["Who invited you?", "You did. Tomorrow."]],
    consequence: { yes: ["system", "Audit error: member join timestamp is in the future"], no: ["system", "Clock drift corrected: 0.000 seconds"] }
  },
  {
    name: "Patch", username: "@patchnotes", role: "Builder", created: "Sep 14, 2026", age: "10 days", xHandle: "@patchnotesdev", allowed: true,
    intro: "Don't let the next one in. That's all I came to say.", filter: "hue-rotate(315deg) brightness(.9)",
    bioReason: "I rushed the application and forgot. The project proof is all on X.",
    search: [{ name: "@patchnotes", note: "BANNED · automated spam flag · Sep 2026" }], similar: ["patchnote", "patch_notes"], account: { age: "10 days", communities: 2, bans: 1, note: "Invite from active Builder: rex · ban appeal pending" },
    x: { followers: "340", following: "280", likes: "42 avg.", since: "2023", posts: ["netcode notes", "day 9 build capture", "one last bug before sleep"], metrics: [{ views: 820, likes: 68, reposts: 8, replies: 5 }, { views: 640, likes: 44, reposts: 5, replies: 4 }, { views: 510, likes: 31, reposts: 3, replies: 2 }] },
    banQuestion: ["Why were you banned?", "My Discord was compromised and the hacked account spammed invites. Rex helped me file the appeal."],
    adminReview: { verdict: "allow", response: "Confirmed with Rex and the security log: the account was compromised, then recovered. The ban was a false positive. You may restore access." },
    questions: [["What are you building?", "A co-op maze. Proof is public."], ["Why warn me?", "Because they know what you expect."], ["Who is next?", "Someone completely normal."]],
    consequence: { yes: ["rex", "patch is legit. weird message though"], no: ["rex", "@patchnotes was on my jam team"] }
  },
  {
    name: "Sam", username: "@sam_builds", role: "Builder", created: "Apr 01, 2023", age: "3 years", xHandle: "@sambuilds", allowed: true,
    intro: "Hi. First time here — I'm Sam. I make small puzzle games.", filter: "hue-rotate(170deg) saturate(.9)",
    bioReason: "I meant to add it after submitting. I build small puzzle games.",
    search: [], similar: ["sambuild", "sam_builds", "sam-builds"], account: { age: "1,272 days", communities: 7, bans: 0, note: "Routine login pattern" },
    x: { followers: "890", following: "402", likes: "73 avg.", since: "2021", posts: ["Dlicom jam: new puzzle mechanic", "quietly fixing level 3", "jam build tonight"] },
    questions: [["What are you building?", "A puzzle game about moving shadows."], ["Who invited you?", "I followed the public jam link."], ["Anything unusual?", "No. Should there be?"]],
    consequence: { yes: ["sam_builds", "hey everyone — glad to be here"], no: ["mika", "why did we reject the most normal builder alive"] }
  },
  {
    name: "Night Admin", username: "@night-admin", role: "Moderator", created: "Jun 09, 2022", age: "4 years", xHandle: "—", allowed: false,
    intro: "Shift's over. I'll take it from here.", filter: "grayscale(1) contrast(1.35) brightness(.68)",
    bioReason: "Moderators don't explain themselves to the door terminal.",
    search: [{ name: "@night-admin", note: "ONLINE · this terminal · session active" }], similar: ["night-admin", "night_admin"], account: { age: "1,568 days", communities: 1, bans: 0, note: "Device fingerprint matches this terminal" },
    x: null,
    questions: [["Who are you?", "You, after the shift."], ["Why are you outside?", "You're asking the wrong copy."], ["What happens at dawn?", "The queue starts again."]],
    consequence: { yes: ["system", "Moderator session transferred. Good night."], no: ["system", "Duplicate terminal session closed."] }
  }
];

// Phone evidence is deliberately stored outside the UI and visitor dialogue.
// The three sources can disagree, leaving the comparison to the player.
const PHONE_PROFILES = Object.freeze({
  "@pixelpaws": { spokenNumber: "583-2194", applicationNumber: "583-2194", accountNumber: "583-2194", verified: true, verifiedSince: "Aug 17, 2026", linkedAccounts: ["@pixelpaws"], recentChangeAnswer: "No. I've used this number since August.", linkedAccountsAnswer: "That's just this account." },
  "@luma.draws": { spokenNumber: "104-7728", applicationNumber: null, accountNumber: "104-7728", verified: true, verifiedSince: "May 02, 2026", linkedAccounts: ["@luma.draws", "@luma_archive", "@luma_portfolio", "@luma_test"], recentChangeAnswer: "No, it has been on the account for months.", linkedAccountsAnswer: "They're my archive, portfolio and test accounts." },
  "@crispclips": { spokenNumber: "921-4051", applicationNumber: "921-4051", accountNumber: "921-4501", verified: true, verifiedSince: "Sep 20, 2026", linkedAccounts: ["@crispclips"], recentChangeAnswer: "I changed SIMs recently. I may have read the old number from memory.", linkedAccountsAnswer: "I only use one account." },
  "@bytebloom": { spokenNumber: "307-1184", applicationNumber: null, accountNumber: "307-1184", verified: true, verifiedSince: "12 minutes ago", verifiedRecently: true, linkedAccounts: ["@bytebloom"], recentChangeAnswer: "Yes. I moved the account to a new number tonight after losing access to the old SIM.", linkedAccountsAnswer: "Only this account uses it." },
  "@m0gster": { spokenNumber: "746-9021", applicationNumber: "746-9021", accountNumber: "746-9021", verified: true, verifiedSince: "Sep 22, 2026", linkedAccounts: ["@m0gster", "@mogster", "@m0gster_", "@mogster_real", "@mogster2", "@mogster_alt", "@m0gster_backup"], recentChangeAnswer: "No. It's been mine all week.", linkedAccountsAnswer: "Old profiles and backups. The other one is the fake account." },
  "@hex_dumped": { spokenNumber: "652-3308", applicationNumber: null, accountNumber: "652-3380", verified: true, verifiedSince: "Jan 14, 2026", linkedAccounts: ["@hex_dumped", "@hex_archive"], recentChangeAnswer: "I replaced it after recovering the Discord account.", linkedAccountsAnswer: "The second account is an old archive." },
  "@nori.ink": { spokenNumber: "418-7256", applicationNumber: "418-7256", accountNumber: "418-7256", verified: true, verifiedSince: "Nov 09, 2024", linkedAccounts: ["@nori.ink"], recentChangeAnswer: "No, that number is still current.", linkedAccountsAnswer: "Only my main account." },
  "@coolbuilder": { spokenNumber: "835-1406", applicationNumber: "835-1406", accountNumber: "835-1406", verified: true, verifiedSince: "Jul 06, 2026", linkedAccounts: ["@coolbuilder", "@buildquotes", "@roofing_team", "@houseprojects"], recentChangeAnswer: "No, it's my business number.", linkedAccountsAnswer: "My crew shares it across our business accounts." },
  "@mossbytes": { spokenNumber: "138-6642", applicationNumber: null, accountNumber: "138-6642", verified: false, verifiedSince: "—", linkedAccounts: ["@mossbytes"], recentChangeAnswer: "Yes. I changed it yesterday and verification still isn't working.", linkedAccountsAnswer: "Only this account." },
  "@dili": { spokenNumber: "690-1128", applicationNumber: "690-1128", accountNumber: "690-1182", verified: true, verifiedSince: "Sep 24, 2026", linkedAccounts: ["@dili", "@dlli", "@diIi", "@dili_admin", "@dlicom_staff", "@dili_backup", "@night_dili"], recentChangeAnswer: "Staff rotate numbers. You don't need the details.", linkedAccountsAnswer: "They're all staff accounts. Stop wasting time." },
  "@tomorrow": { spokenNumber: "000-0317", applicationNumber: null, accountNumber: "000-0317", verified: true, verifiedSince: "12 minutes ago", verifiedRecently: true, linkedAccounts: ["@tomorrow"], recentChangeAnswer: "Not recently. Not from my point of view.", linkedAccountsAnswer: "There is only one. For now." },
  "@patchnotes": { spokenNumber: "274-8861", applicationNumber: null, accountNumber: "274-8861", verified: true, verifiedSince: "18 minutes ago", verifiedRecently: true, linkedAccounts: ["@patchnotes"], recentChangeAnswer: "Yes. I updated it after recovering the compromised account.", linkedAccountsAnswer: "Only the recovered account uses it." },
  "@sam_builds": { spokenNumber: "512-4079", applicationNumber: "512-4079", accountNumber: "512-4079", verified: true, verifiedSince: "Apr 03, 2023", linkedAccounts: ["@sam_builds"], recentChangeAnswer: "No. Same number for years.", linkedAccountsAnswer: "Just this account." },
  "@night-admin": { spokenNumber: "808-2210", applicationNumber: "808-2210", accountNumber: "808-2210", verified: true, verifiedSince: "Jun 10, 2022", linkedAccounts: ["@night-admin", "@night_terminal", "@mod_shift", "@access_terminal"], recentChangeAnswer: "No. The terminal has always known this number.", linkedAccountsAnswer: "They are all the same shift." }
});

const DEVICE_PROFILES = Object.freeze({
  "@pixelpaws": { answer: "This is my only Discord account on this computer.", accounts: [] },
  "@luma.draws": { answer: ["The other one is an old test account I used while setting up my portfolio.", "I made it when the verification code wasn't arriving, then kept my main account."], accounts: [
    { suffix: "_test", age: "3 years", bans: 0, status: "DORMANT", note: "Old test account · last login 19 months ago" }
  ] },
  "@crispclips": { answer: ["No. I don't have any other accounts on this device.", "Those aren't mine. This is the first account I've used here."], denies: true, accounts: [
    { suffix: "_backup", age: "4 months", bans: 0, status: "DORMANT", note: "Inactive backup account" },
    { suffix: "_promo", age: "2 months", bans: 2, status: "BANNED", note: "Banned · unsolicited promotion and repeated mass mentions", explanation: "That account isn't mine. Someone else must have used this device.", adminReview: { verdict: "deny", response: "The device and recovery logs match the applicant. The promo account was banned twice for deliberate spam. Treat this as a confirmed risk." } },
    { suffix: "_drops", age: "5 weeks", bans: 1, status: "BANNED", note: "Banned · fake giveaway links", explanation: "I only tested one giveaway post. I didn't know the link was bad." }
  ] },
  "@bytebloom": { answer: ["That's my old account. I lost access when the school email was disabled.", "I couldn't recover the old login, so I created this account for the jam."], accounts: [
    { suffix: "_old", age: "3 years", bans: 0, status: "DORMANT", note: "Old account · no activity for 11 months" }
  ] },
  "@m0gster": { answer: "No. The other account isn't mine — I'm the real one.", denies: true, accounts: [
    { name: "@mogster", age: "16 months", bans: 0, status: "ONLINE", note: "Active server member · regular device history" }
  ] },
  "@hex_dumped": { answer: "Those are old profiles from before the recovery. I don't use them now.", accounts: [
    { suffix: "_old", age: "4 years", bans: 1, status: "BANNED", note: "Banned · malicious redirect links", explanation: "That account was compromised first. The links weren't mine.", adminReview: { verdict: "deny", response: "The old account continued posting malicious links after recovery. The security team confirmed the ban was valid. Do not admit this device." } },
    { suffix: "_wallet", age: "2 years", bans: 2, status: "BANNED", note: "Banned · phishing and wallet-drainer promotion", explanation: "It was a security research account. People misunderstood the posts." }
  ] },
  "@nori.ink": { answer: ["One is my sketch test account. My sister also used this tablet once.", "The sketch account is mine; the other belongs to a family member who borrowed the tablet."], accounts: [
    { suffix: "_sketch", age: "2 years", bans: 0, status: "DORMANT", note: "Private sketch account · no moderation history" },
    { suffix: "_family", age: "18 months", bans: 1, status: "BANNED", note: "Banned · automated spam during a compromised login", explanation: "That account belongs to my sister. Her login was compromised and she appealed the ban.", adminReview: { verdict: "allow", response: "Confirmed: the family account has a separate owner and its ban came from a compromised session. It is not a risk for this applicant." } }
  ] },
  "@coolbuilder": { answer: "Those are company profiles. My crew uses the same office computer.", accounts: [
    { suffix: "_quotes", age: "14 months", bans: 0, status: "ACTIVE", note: "Business estimates account" },
    { suffix: "_roofing", age: "11 months", bans: 1, status: "BANNED", note: "Banned · unsolicited service advertising", explanation: "A subcontractor posted too many offers. It wasn't really me.", adminReview: { verdict: "deny", response: "Four linked business accounts were banned for coordinated advertising. The applicant controls the device and the campaigns. Do not admit them." } },
    { suffix: "_repairs", age: "10 months", bans: 0, status: "ACTIVE", note: "Home repairs business profile" },
    { suffix: "_deals", age: "8 months", bans: 2, status: "BANNED", note: "Banned · repeated DM advertising", explanation: "That's our sales account. The messages were legitimate offers." },
    { suffix: "_crew", age: "7 months", bans: 0, status: "ON FILE", note: "Shared crew profile" },
    { suffix: "_ads", age: "5 months", bans: 1, status: "BANNED", note: "Banned · automated ad posting", explanation: "The posting tool glitched and sent too much." },
    { suffix: "_homes", age: "4 months", bans: 0, status: "ACTIVE", note: "Construction showcase account" },
    { suffix: "_offers", age: "3 months", bans: 1, status: "BANNED", note: "Banned · spam links", explanation: "That was a temporary campaign account." }
  ] },
  "@mossbytes": { answer: "The old account is mine. I stopped using it after losing the recovery codes.", accounts: [
    { suffix: "_old", age: "2 years", bans: 0, status: "DORMANT", note: "Old account · clean history" }
  ] },
  "@dili": { answer: "No. Staff devices are shared, so those records don't prove anything.", denies: true, accounts: [
    { name: "@dili", age: "5 years", bans: 0, status: "ONLINE", note: "Active administrator account · currently in staff voice" },
    { name: "@dlicom_staff", age: "4 years", bans: 0, status: "ACTIVE", note: "Verified staff service account" }
  ] },
  "@tomorrow": { answer: "There is only one account. It just hasn't happened yet.", accounts: [] },
  "@patchnotes": { answer: "The old account was compromised. I recovered it, then made this one for the jam.", accounts: [
    { suffix: "_old", age: "3 years", bans: 1, status: "BANNED", note: "Banned · automated spam during confirmed compromise", explanation: "That was my old account. It was hacked and the spam wasn't mine — Rex can confirm.", adminReview: { verdict: "allow", response: "Confirmed: the linked account was compromised and the ban was a false positive. The current applicant may enter." } }
  ] },
  "@sam_builds": { answer: ["That's a test account I made years ago when the verification email wasn't arriving.", "I created it during setup, never used it, and then registered this main account."], accounts: [
    { suffix: "_test", age: "3 years", bans: 0, status: "DORMANT", note: "Unused setup test · no server history" }
  ] },
  "@night-admin": { answer: "No other person uses this terminal. You are reading your own session records.", denies: true, accounts: [
    { name: "@night_terminal", age: "4 years", bans: 0, status: "ONLINE", note: "Current moderation terminal session" },
    { name: "@mod_shift", age: "4 years", bans: 0, status: "ACTIVE", note: "Shift service identity" }
  ] }
});

function materializeDeviceProfile(profile, username, existingId = "") {
  const base = normalizeHandle(username);
  return {
    ...profile,
    answer: Array.isArray(profile.answer) ? randomFrom(profile.answer) : profile.answer,
    id: existingId || `DVC-${Math.floor(10000 + Math.random() * 90000)}`,
    accounts: (profile.accounts || []).map(account => ({
      ...account,
      name: account.suffix ? `@${base}${account.suffix}` : account.name || `@${base}_alt`
    }))
  };
}

const MASCOT_IMAGES = Object.freeze({
  builders: [
    "assets/images/Builders/Изображение ChatGPT 26 сент. 2026 г., 16_49_42.png",
    "assets/images/Builders/Изображение ChatGPT 26 сент. 2026 г., 16_50_01.png",
    "assets/images/Builders/Изображение ChatGPT 26 сент. 2026 г., 16_50_07.png",
    "assets/images/Builders/Изображение ChatGPT 26 сент. 2026 г., 16_50_19.png",
    "assets/images/Builders/Изображение ChatGPT 26 сент. 2026 г., 16_50_25.png",
    "assets/images/Builders/Изображение ChatGPT 26 сент. 2026 г., 16_50_34.png",
    "assets/images/Builders/Изображение ChatGPT 26 сент. 2026 г., 16_50_46.png",
    "assets/images/Builders/Изображение ChatGPT 26 сент. 2026 г., 16_50_57.png"
  ],
  content: [
    "assets/images/Content/Изображение ChatGPT 26 сент. 2026 г., 16_54_29-1.png",
    "assets/images/Content/Изображение ChatGPT 26 сент. 2026 г., 16_54_30-2.png",
    "assets/images/Content/Изображение ChatGPT 26 сент. 2026 г., 16_54_31-3.png",
    "assets/images/Content/Изображение ChatGPT 26 сент. 2026 г., 16_54_32-4.png",
    "assets/images/Content/Изображение ChatGPT 26 сент. 2026 г., 16_54_33-5.png"
  ],
  regular: [
    "assets/images/Regular/Изображение ChatGPT 26 сент. 2026 г., 16_57_36-1.png",
    "assets/images/Regular/Изображение ChatGPT 26 сент. 2026 г., 16_57_37-2.png",
    "assets/images/Regular/Изображение ChatGPT 26 сент. 2026 г., 16_57_38-3.png",
    "assets/images/Regular/Изображение ChatGPT 26 сент. 2026 г., 16_57_40-4.png",
    "assets/images/Regular/Изображение ChatGPT 26 сент. 2026 г., 16_57_41-5.png"
  ],
  fakeBuilder: "assets/images/Builders/fake.png"
});

function mascotImageFor(template, index) {
  if (template.username === "@coolbuilder") return MASCOT_IMAGES.fakeBuilder;
  if (template.role === "Builder") return MASCOT_IMAGES.builders[index % MASCOT_IMAGES.builders.length];
  if (["Artist", "Clipmaker"].includes(template.role)) return MASCOT_IMAGES.content[index % MASCOT_IMAGES.content.length];
  return MASCOT_IMAGES.regular[index % MASCOT_IMAGES.regular.length];
}

function prepareVisitorTemplate(visitor, index) {
  const phone = PHONE_PROFILES[visitor.username] || PHONE_PROFILES["@pixelpaws"];
  const deviceSource = DEVICE_PROFILES[visitor.username] || { answer: "This is my only account on the device.", accounts: [] };
  return { ...visitor, templateKey: visitor.username, phone: { ...phone, linkedAccounts: [...phone.linkedAccounts] }, device: materializeDeviceProfile(deviceSource, visitor.username), mascotImage: mascotImageFor(visitor, index) };
}

const TRAINING_VISITOR_TEMPLATES = Object.freeze([
  {
    name:"Rookie", username:"@freshbyte", role:"Member", created:"Sep 23, 2026", age:"6 days", xHandle:"@freshbyte", allowed:false,
    intro:"Hi. I made this account a few days ago.", filter:"hue-rotate(18deg)", bio:"New here. Learning how the server works.",
    search:[], account:{age:"6 days",communities:1,bans:0,note:"Account created 6 days ago"},
    x:{followers:"24",following:"31",likes:"3 avg.",since:"Sep 2026",posts:["hello dlicom","first week online","learning the ropes"]},
    phone:{spokenNumber:"240-6018",applicationNumber:"240-6018",accountNumber:"240-6018",verified:true,verifiedSince:"Sep 23, 2026",linkedAccounts:["@freshbyte"]},
    device:{id:"DVC-1046",answer:"This is my only account on this device.",accounts:[]},
    questions:[["Why are you joining?","I saw the community link and wanted to look around."],["Who invited you?","No one. I found the public invite."],["Is this your first account?","Yes. I only made it six days ago."]]
  },
  {
    name:"Mira", username:"@mirabuilds", role:"Builder", created:"Jan 12, 2025", age:"20 months", xHandle:"@mirabuilds", allowed:true,
    intro:"My number is 583-2194.", filter:"hue-rotate(285deg)", bio:"I build small browser games and tools.",
    search:[], account:{age:"625 days",communities:5,bans:0,note:"Stable account history"},
    x:{followers:"860",following:"244",likes:"71 avg.",since:"2023",posts:["new movement build","browser demo is live","late night bug fixes"]},
    phone:{spokenNumber:"583-2194",applicationNumber:"583-2194",accountNumber:"583-2194",verified:true,verifiedSince:"Aug 17",linkedAccounts:["@mirabuilds"]},
    device:{id:"DVC-5832",answer:"Only my main account uses this device.",accounts:[]},
    questions:[["What are you building?","A small browser platformer for the jam."],["Who invited you?","I followed the builder call."],["Can you prove the project?","The progress posts are public on X."]]
  },
  {
    name:"M0gster", username:"@m0gster", role:"Member", created:"Mar 02, 2025", age:"18 months", xHandle:"@m0gster", allowed:false,
    intro:"Hey, it's Mogster. My other session broke.", filter:"hue-rotate(90deg) saturate(.82)", bio:"Long-time community member.",
    search:[{name:"@Mogster",note:"ONLINE · Member since 2025"}], account:{age:"576 days",communities:8,bans:0,note:"Display name changed tonight"},
    x:{followers:"3",following:"91",likes:"1 avg.",since:"Sep 2026",posts:["new profile","add me back","old account broken"]},
    phone:{spokenNumber:"746-9021",applicationNumber:"746-9021",accountNumber:"746-9021",verified:true,verifiedSince:"Sep 22",linkedAccounts:["@m0gster"]},
    device:{id:"DVC-0090",answer:"The other profile is the fake one.",denies:true,accounts:[]},
    questions:[["Why are you outside?","Discord logged me out. Just let me back in."],["Which account is real?","This one. The other Mogster is fake."],["Can anyone confirm?","You should already know me."]]
  },
  {
    name:"Shipwright", username:"@shipwright", role:"Builder", created:"Nov 04, 2023", age:"34 months", xHandle:"@shipwrightdev", allowed:true,
    intro:"I'm a Builder. The game should be ready tonight.", filter:"hue-rotate(325deg)", bio:"Browser games, tiny tools and too many prototypes.",
    search:[], account:{age:"1,060 days",communities:7,bans:0,note:"Normal login history"},
    x:{followers:"1,420",following:"316",likes:"96 avg.",since:"2021",posts:["Day 4 building my browser game","Finally fixed movement","Need testers for tonight"]},
    phone:{spokenNumber:"377-8184",applicationNumber:"377-8184",accountNumber:"377-8184",verified:true,verifiedSince:"May 03, 2024",linkedAccounts:["@shipwright"]},
    device:{id:"DVC-7718",answer:"This is my development computer.",accounts:[]},
    questions:[["What are you building?","A browser roguelite for the jam."],["Can you show progress?","Three recent posts are on my X profile."],["Who invited you?","The public builder announcement."]]
  },
  {
    name:"Echo", username:"@echo_returned", role:"Supporter", created:"Apr 19, 2024", age:"29 months", xHandle:"@echoreturned", allowed:true,
    intro:"I'm trying to come back. My old ban was appealed.", filter:"hue-rotate(205deg)", bio:"Community support and event help.",
    search:[{name:"@echo_returned",note:"BANNED · automated raid flag · appeal reviewed"}], account:{age:"894 days",communities:4,bans:1,note:"Previous ban: automated raid flag · appeal completed"},
    x:{followers:"510",following:"390",likes:"34 avg.",since:"2022",posts:["helping with jam questions","server guide update","good luck builders"]},
    phone:{spokenNumber:"619-4032",applicationNumber:"619-4032",accountNumber:"619-4032",verified:true,verifiedSince:"Jun 11, 2025",linkedAccounts:["@echo_returned"]},
    device:{id:"DVC-4109",answer:"Only this account uses the device.",accounts:[]},
    banQuestion:["Why were you banned?","It happened during a raid. I appealed it."],
    adminReview:{verdict:"allow",response:"Confirmed. That ban was a false positive. They're clear."},
    questions:[["Why return now?","I want to help with the jam support queue."],["Who remembers you?","Retree reviewed my appeal."],["Is the account secure?","Yes. I reset everything after the raid."]]
  },
  {
    name:"Nova", username:"@nova_tools", role:"Builder", created:"Feb 17, 2026", age:"7 months", xHandle:"@novatools", allowed:true,
    intro:"Last check? I brought everything you might need.", filter:"hue-rotate(150deg) saturate(.9)", bio:"I make small tools for game jam teams.",
    search:[], account:{age:"224 days",communities:6,bans:0,note:"Routine account history"},
    x:{followers:"980",following:"281",likes:"66 avg.",since:"2023",posts:["Dlicom jam task board","new export tool","builder utilities update"]},
    phone:{spokenNumber:"482-1180",applicationNumber:"482-1180",accountNumber:"482-1180",verified:true,verifiedSince:"Feb 18, 2026",linkedAccounts:["@nova_tools"]},
    device:{id:"DVC-4821",answer:"The normal account is for testing. The old one was caught in a raid and the appeal was approved.",accounts:[
      {name:"@normal_user",age:"2 years",bans:0,status:"ACTIVE",note:"Secondary test account · no moderation history"},
      {name:"@old_user",age:"3 years",bans:1,status:"BANNED",note:"Banned during raid · appeal cleared",explanation:"That was my old login. It was caught during a raid, and the appeal was approved."}
    ]},
    questions:[["What do you build?","Utilities for jam teams — exports, task boards and build checks."],["Is this your first visit?","First time at the window, not my first Discord account."],["Anything unusual?","An old device account has a ban that was cleared on appeal."]]
  }
]);

function buildTrainingVisitors() {
  return TRAINING_VISITOR_TEMPLATES.map((visitor, index) => ({
    ...visitor,
    templateKey: visitor.username,
    phone: {...visitor.phone,linkedAccounts:[...visitor.phone.linkedAccounts]},
    device: {...visitor.device,accounts:visitor.device.accounts.map(account => ({...account}))},
    mascotImage:mascotImageFor(visitor,index),
    avatar:`assets/avatars/${["_sahil_25__1208483488878043298.png","0x6leo__1259106254400258070.png","0xhirono__989580421979320340.png","0xsalaf__1350113753462603796.png","0xshawon__1517110608879947776.png","2xkooo__1331107008195199028.png"][index]}`,
    consequence:{yes:["system","Training applicant admitted"],no:["system","Training applicant rejected"]}
  }));
}

let visitors = visitorTemplates.map(prepareVisitorTemplate);

const adminBriefing = [
  ["retree", "Morning, night crew. For this shift, accounts need to be at least 14 days old before we let them into the server."],
  ["retree", "Phone verification is mandatory tonight. A good story or a nice profile does not replace it."],
  ["retree", "Also: old bans still count. If someone looks familiar, search the directory before deciding."],
  ["retree", "Device Check is online. Multiple accounts are not automatically bad — open the linked usernames, inspect their records, and connect only real risks or contradictions."]
];

const adminUpdates = {
  3: ["retree", "Rule update: we need Builders, so a Builder under 14 days may enter with phone verification and believable proof of work. We're also seeing fake roles — verify every Builder, Artist and Clipmaker through recent X posts."],
  6: ["retree", "Tightening role checks: look for at least three relevant posts and at least one post with 50+ likes. Followers alone do not count as proof."],
  8: ["retree", "Phone rule update: one verified number may serve at most two accounts. Builders may use it for three. Open the linked-account list and compare it yourself."],
  9: ["retree", "We're seeing boosted X accounts. Compare followers, views, likes, reposts and replies. Impossible ratios or every metric spiking together are a reason to reject."],
  12: ["retree", "Final rule update: new role applicants now need at least one recent X post that mentions Dlicom or the Dlicom jam. Check the post text yourself."]
};

const ambientChat = [
  ["mika", "gm everyone"], ["rex", "anyone working on their jam game?"],
  ["sato", "who's in the lobby rn"], ["mogster", "coffee count: irresponsible"],
  ["dili", "please stop deploying directly to prod"], ["mika", "the night UI is kind of cozy"],
  ["rex", "deploying at 3am was a choice"], ["sato", "did the lobby light just flicker?"]
];

const colors = ["#9c8cff", "#7cf7d4", "#ff6f79", "#f0d66d", "#7cb5ff"];
const ADMIN_AVATAR = "assets/avatars/retree___959497033172008970.png";
const ADMIN_AVATAR_FALLBACK = "assets/dlicom-builder.png";
const hiddenXHandles = new Set(["@crispclips", "@m0gster", "@mossbytes"]);
const INITIAL_COMMUNITY = Object.freeze({
  safety: 80,
  trust: 75,
  activity: 65,
  builders: 4,
  artists: 2,
  clipmakers: 3,
  supporters: 2,
  members: 148
});
const SHIFT_RULE_PRESETS = Object.freeze({
  opening: Object.freeze({ minAccountAgeDays: 14, phoneVerificationRequired: true, oldBansCount: true, maxAccountsPerPhone: null, builderMaxAccountsPerPhone: null }),
  phoneLimits: Object.freeze({ minAccountAgeDays: 14, phoneVerificationRequired: true, oldBansCount: true, maxAccountsPerPhone: 2, builderMaxAccountsPerPhone: 3 })
});
const IMPERSONATORS = new Set(["@m0gster", "@dili", "@night-admin"]);
const FAKE_ADMINS = new Set(["@dili", "@night-admin"]);
const SCAMMERS = new Set(["@crispclips", "@m0gster", "@hex_dumped", "@coolbuilder", "@mossbytes", "@tomorrow"]);
const FAKE_ROLE_SCENARIOS = new Set(["@crispclips", "@coolbuilder"]);
const REJECT_REASONS = Object.freeze({
  phone_not_verified: ["Phone is not verified", "Connected the phone status to the applicant"],
  phone_number_mismatch: ["Phone number does not match", "Connected a conflicting phone number to the applicant"],
  phone_too_many_accounts: ["Phone is linked too widely", "Connected the linked-account count to the active rule"],
  device_banned_account: ["Banned account on this device", "Connected a banned device account to the applicant"],
  device_identity_lie: ["Contradictory device history", "Connected the applicant's denial to the device records"],
  previous_ban: ["Previous server ban", "Connected the ban record to the applicant"],
  boosted_profile: ["Suspicious X activity", "Connected suspicious metrics to the applicant"],
  role_unverified: ["Requested role is unsupported", "Connected the posts to the claimed role"],
  impersonation: ["Possible impersonation", "Connected an existing server identity to the applicant"],
  account_too_new: ["Account is too new", "Connected the account age to the current rule"],
  deny_anyway: ["No documented reason", "Reject without supporting evidence"]
});
const EXIT_LINES = Object.freeze({
  accepted: [
    ["Thanks, mod!", "See you inside.", "Appreciate it.", "Catch you in General.", "Good luck with the rest."],
    ["Easy.", "Knew I'd get in.", "As expected.", "Light work.", "That was quick."],
    ["GG, gatekeeper.", "W mod.", "Rare moderator W.", "We take those.", "Lobby speedrun complete."],
    ["That was it?", "I prepared answers for nothing.", "Thought this would take longer.", "Okay, that was painless.", "No more questions?"],
    ["Trusting type, huh?", "You didn't hesitate.", "Interesting choice.", "Good instincts.", "That was almost too easy."],
    ["Good.", "You chose correctly.", "This time.", "We'll talk again.", "You won't remember me."]
  ],
  rejected: [
    ["Wait… seriously?", "Aww. I brought snacks.", "Guess I'll try again tomorrow.", "I even wore my good boots.", "I practiced my intro for this."],
    ["Wow. Didn't even let me cook.", "Rejected before I could say ‘gm’.", "I'm telling General about this.", "This is going in my villain origin story.", "Moderator power trip detected."],
    ["Your server is mid anyway.", "Worst mod on the server.", "Enjoy your dead community.", "Bro thinks he's security.", "Power went straight to your head."],
    ["Good choice.", "You weren't supposed to let me in.", "See you at 03:17.", "The next one is lying.", "I'll wait outside."]
  ],
  scammerRejected: ["You're making a big mistake.", "But the airdrop is real…", "Fine. More tokens for everyone else.", "My 48,000 followers disagree.", "Wait, let me show you one more QR code."],
  impersonatorRejected: ["Which account are you talking about?", "The other one is obviously fake.", "Identity is a social construct.", "You caught the zero, huh?", "Fine. I'll change one more letter."],
  falseReject: ["Uh… I'm already in the Discord.", "You could've checked my profile first.", "I've been here since 2024…", "My role is right there.", "I think you rejected the wrong person."],
  weakReason: ["That's your reason?", "You're gonna write that in the report?", "Even I wouldn't reject me for that.", "Can I speak to your admin?", "That explanation somehow made it worse."],
  impersonatorAccepted: ["Knew you'd recognize me.", "See? I told you I'm the real one.", "The other account is fake, by the way.", "Thanks for trusting me.", "I'll go say hi to myself."],
  builder: ["Back to shipping.", "Cool, I've got bugs to fix.", "Time to build.", "Prototype first, sleep later.", "Alright, back to localhost."],
  builderRejected: ["Bro, I literally shipped today.", "You rejected peak engineering.", "Fine, I'll deploy somewhere else.", "My localhost believes in me.", "Wait until you see v2."],
  creator: ["Perfect, I need content.", "Nice, I'm clipping this.", "This is going in the vlog.", "Okay, camera back on.", "I already have a thumbnail idea."],
  creatorRejected: ["Fine, I'll make a video about this.", "Great. New content idea.", "Thumbnail: MOD REJECTED ME?!", "Smile, you're in the vlog.", "Okay… that's definitely going in the edit."]
});

const TRAINING_FREE_TARGETS = Object.freeze([
  ".verify-button", "#toolTray button", "#toolTray input", "#visitorButton",
  "#questionDrawer button", "#acceptButton", "#rejectButton", "#adminReviewButton",
  "[data-connect-key]", "[data-connect-target]", "[data-record]", "[data-device-account]", "[data-profile-back]"
]);

const TRAINING_STEPS = Object.freeze([
  {id:"t1_welcome",applicant:0,message:["A visitor has arrived at the window.","Our job is to verify what they submitted before making a decision."],highlight:["#stage"],allowed:[],after:1200,next:"t1_card"},
  {id:"t1_card",applicant:0,message:["This is the Join Card.","It shows the applicant's name, username, requested role and submitted details."],highlight:[".applicant-sheet"],allowed:[],after:1200,next:"t1_tools"},
  {id:"t1_tools",applicant:0,message:["These five tools do the real checking.","Never assume the Join Card is telling the whole truth."],highlight:[".verification-bar"],allowed:[],after:1200,next:"t1_chat"},
  {id:"t1_chat",applicant:0,message:["Keep an eye on General and Admins too.","Bad entrants can cause incidents, and rule changes arrive in #admins."],highlight:[".chat-panel"],allowed:[],after:1300,next:"t1_health"},
  {id:"t1_health",applicant:0,message:["Safety, Trust and Activity measure the health of the server.","The roster below shows the community you are building."],highlight:[".community-health",".community-roster"],allowed:[],after:1400,next:"t1_account"},
  {id:"t1_account",applicant:0,message:["Let's start with the account itself.","Open Account Details."],highlight:["[data-tool='account']"],allowed:["[data-tool='account']"],expect:"tool:account",next:"t1_rule"},
  {id:"t1_rule",applicant:0,message:["Always check the current Shift Rules first.","Tonight, accounts must be at least 14 days old."],highlight:[".rules-paper"],allowed:[],after:1300,next:"t1_age"},
  {id:"t1_age",applicant:0,message:["The record says this account is only 6 days old.","Click ACCOUNT AGE to pick it up as evidence."],highlight:["[data-connect-key='account-age']"],allowed:["[data-connect-key='account-age']"],expect:"evidence:account-age",next:"t1_connect_rule"},
  {id:"t1_connect_rule",applicant:0,message:["Evidence needs context.","Connect the selected age to the 14-day Shift Rule."],highlight:["[data-connect-target='rule-account-age']"],allowed:["[data-connect-target='rule-account-age']"],expect:"connection:account_too_new",next:"t1_question"},
  {id:"t1_question",applicant:0,message:["That comparison confirmed the violation and unlocked a response.","Tell the applicant what the current rule means."],highlight:["[data-question-id='evidence-account_too_new']"],allowed:["[data-question-id='evidence-account_too_new']"],expect:"question:evidence-account_too_new",delayNext:4700,next:"t1_answer"},
  {id:"t1_answer",applicant:0,message:["Now the account-age reason is documented.","It will be available in the rejection report."],highlight:[],allowed:[],after:1300,next:"t1_reject"},
  {id:"t1_reject",applicant:0,message:["Open the rejection report.","Only reasons proven through Connect appear here."],highlight:["#rejectButton"],allowed:["#rejectButton"],expect:"reject:open",closeTool:true,next:"t1_reject_reason"},
  {id:"t1_reject_reason",applicant:0,message:["ACCOUNT IS TOO NEW is available because you proved it against the rule.","Choose the documented reason."],highlight:["[data-reject-reason='account_too_new']"],allowed:["[data-reject-reason='account_too_new']"],expect:"decision:reject",next:"t1_feedback"},
  {id:"t1_feedback",applicant:0,message:["Good call.","A decision is only as strong as the rule and evidence behind it."],highlight:[],allowed:[],after:1300,nextApplicant:1,next:"t2_welcome"},

  {id:"t2_welcome",applicant:1,message:["This applicant gave us a phone number.","A submitted number still needs to match the account and pass verification."],highlight:[".phone-field"],allowed:[],after:1200,next:"t2_account"},
  {id:"t2_account",applicant:1,message:["We already know this tool.","Open Account Details and compare the stored number."],highlight:["[data-tool='account']"],allowed:["[data-tool='account']"],expect:"tool:account",next:"t2_record"},
  {id:"t2_record",applicant:1,message:["This is the complete account record.","Age, phone and moderation history all live here."],highlight:[".profile-sheet"],allowed:[],after:1200,next:"t2_phone_record"},
  {id:"t2_phone_record",applicant:1,message:["The stored phone number matches the Join Card.","Now we still need to verify the number itself."],highlight:["[data-connect-key='account-phone']"],allowed:[],after:1200,next:"t2_phone"},
  {id:"t2_phone",applicant:1,message:["Use Phone Lookup for the final check."],highlight:["[data-tool='phone']"],allowed:["[data-tool='phone']"],expect:"tool:phone",closeTool:true,next:"t2_match"},
  {id:"t2_match",applicant:1,message:["The lookup confirms the same number and VERIFIED: YES.","All three pieces agree."],highlight:[".phone-lookup-card"],allowed:[],after:1400,next:"t2_accept"},
  {id:"t2_accept",applicant:1,message:["The checks confirm they're legitimate.","Let them in."],highlight:["#acceptButton"],allowed:["#acceptButton"],expect:"decision:accept",closeTool:true,next:"t2_feedback"},
  {id:"t2_feedback",applicant:1,message:["Checks are not only for finding problems.","They also confirm legitimate applicants."],highlight:[],allowed:[],after:1300,nextApplicant:2,next:"t3_welcome"},

  {id:"t3_welcome",applicant:2,message:["Names can be deceptive.","This time we'll check whether a similar identity is already inside."],highlight:[".applicant-sheet"],allowed:[],after:1200,next:"t3_search"},
  {id:"t3_search",applicant:2,message:["Open Search on Server."],highlight:["[data-tool='search']"],allowed:["[data-tool='search']"],expect:"tool:search",next:"t3_results"},
  {id:"t3_results",applicant:2,message:["This terminal searches existing server members only.","The applicant is not included unless they are impersonating someone already inside."],highlight:["#toolTray"],allowed:[],after:1400,next:"t3_match"},
  {id:"t3_match",applicant:2,message:["The search found an existing Mogster with a slightly different username.","Open that record."],highlight:["[data-record='server']"],allowed:[],after:1200,next:"t3_open"},
  {id:"t3_open",applicant:2,message:["Open the existing member's record."],highlight:["[data-record='server']"],allowed:["[data-record='server']"],expect:"record:mogster",next:"t3_profile"},
  {id:"t3_profile",applicant:2,message:["The existing member is online right now.","Select the STATUS field as evidence."],highlight:[".profile-sheet"],allowed:[],after:1200,next:"t3_select"},
  {id:"t3_select",applicant:2,message:["Click STATUS to pick it up as evidence."],highlight:["[data-connect-key='status']"],allowed:["[data-connect-key='status']"],expect:"evidence:status",next:"t3_connect"},
  {id:"t3_connect",applicant:2,message:["The evidence is selected.","Now click the mascot to connect the record to this applicant."],highlight:[".inspection-stack"],allowed:["#visitorButton"],expect:"connection:impersonation",next:"t3_question"},
  {id:"t3_question",applicant:2,message:["The connection unlocked a new question.","Ask about the identity conflict."],highlight:["[data-question-id='evidence-impersonation']"],allowed:["[data-question-id='evidence-impersonation']"],expect:"question:evidence-impersonation",delayNext:4700,next:"t3_answer"},
  {id:"t3_answer",applicant:2,message:["Good.","Evidence can unlock questions that were not available before."],highlight:[],allowed:[],after:1400,next:"t3_reject"},
  {id:"t3_reject",applicant:2,message:["The existing member is already online.","Reject the impersonator."],highlight:["#rejectButton"],allowed:["#rejectButton"],expect:"decision:reject",rejectReason:"impersonation",next:"t3_feedback"},
  {id:"t3_feedback",applicant:2,message:["Good catch.","Small changes in a username can hide an impersonator."],highlight:[],allowed:[],after:1300,nextApplicant:3,next:"t4_welcome"},

  {id:"t4_welcome",applicant:3,message:["Anyone can claim a role on the Join Card.","Recent public work is stronger proof than a confident introduction."],highlight:[".applicant-sheet"],allowed:[],after:1200,next:"t4_tools"},
  {id:"t4_tools",applicant:3,message:["The tablet also includes an X Profile check.","Let's see whether this Builder actually builds."],highlight:[".verification-bar"],allowed:[],after:1200,next:"t4_x"},
  {id:"t4_x",applicant:3,message:["Open X Profile."],highlight:["[data-tool='x']"],allowed:["[data-tool='x']"],expect:"tool:x",next:"t4_profile"},
  {id:"t4_profile",applicant:3,message:["This view shows the public profile, recent posts and engagement.","Use the content itself, not only follower count."],highlight:["#toolTray"],allowed:[],after:1300,next:"t4_posts"},
  {id:"t4_posts",applicant:3,message:["This recent post shows active game development.","It supports the Builder claim."],highlight:["[data-training-post='role-proof']"],allowed:[],after:1400,effect:"pin-x-post",next:"t4_accept"},
  {id:"t4_accept",applicant:3,message:["The role is supported.","Let them in."],highlight:["#acceptButton"],allowed:["#acceptButton"],expect:"decision:accept",closeTool:true,next:"t4_feedback"},
  {id:"t4_feedback",applicant:3,message:["Use X to verify roles and spot impossible engagement patterns."],highlight:[],allowed:[],after:1300,nextApplicant:4,next:"t5_welcome"},

  {id:"t5_welcome",applicant:4,message:["Now you do the first part yourself.","This applicant has something in their account history. Find it."],highlight:[],allowed:[],after:1200,next:"t5_find"},
  {id:"t5_find",applicant:4,message:["Choose the tool that can reveal moderation history."],highlight:[],allowed:TRAINING_FREE_TARGETS,expect:"tool:account",next:"t5_found",free:true},
  {id:"t5_found",applicant:4,message:["Good. The record shows one previous ban.","Select that field, then connect it to the applicant."],highlight:[],allowed:[],after:1300,next:"t5_select_ban"},
  {id:"t5_select_ban",applicant:4,message:["Click PREVIOUS BANS to select the evidence."],highlight:[],allowed:["[data-connect-key='previous-ban']"],expect:"evidence:previous-ban",next:"t5_connect",free:true},
  {id:"t5_connect",applicant:4,message:["Now click the mascot to connect the ban to this applicant."],highlight:[".inspection-stack"],allowed:["#visitorButton"],expect:"connection:previous_ban",next:"t5_question"},
  {id:"t5_question",applicant:4,message:["Use the question unlocked by the connection."],highlight:["[data-question-id='evidence-previous_ban']"],allowed:["[data-question-id='evidence-previous_ban']"],expect:"question:evidence-previous_ban",delayNext:4700,next:"t5_admin_wait"},
  {id:"t5_admin_wait",applicant:4,message:["A warning is not always the whole story.","The applicant says the ban was appealed, so send the case to Admin."],highlight:[],allowed:[],after:1300,next:"t5_admin"},
  {id:"t5_admin",applicant:4,message:["Forward the case to Admin."],highlight:["#adminReviewButton"],allowed:["#adminReviewButton"],expect:"admin:sent",next:"t5_admin_response"},
  {id:"t5_admin_response",applicant:4,message:["I'll check the appeal record now.","Wait for the response in #admins."],highlight:[".channel-feed"],allowed:[],expect:"admin:responded",next:"t5_admin_verdict"},
  {id:"t5_admin_verdict",applicant:4,message:["Here is the Admin verdict.","The ban was a false positive, so this applicant is clear."],highlight:["[data-training-focus='verdict']"],allowed:[],after:1500,next:"t5_accept"},
  {id:"t5_accept",applicant:4,message:["Confirmed. The ban was a false positive.","Let them in."],highlight:["#acceptButton"],allowed:["#acceptButton"],expect:"decision:accept",next:"t5_feedback"},
  {id:"t5_feedback",applicant:4,message:["Context matters.","Investigate before making a decision."],highlight:[],allowed:[],after:1300,nextApplicant:5,next:"t6_welcome"},

  {id:"t6_welcome",applicant:5,message:["Last applicant.","I'll give hints, but I won't point at every button now."],highlight:[],allowed:[],after:1200,next:"t6_explore"},
  {id:"t6_explore",applicant:5,message:["Start by checking where this account has appeared before."],highlight:[],allowed:TRAINING_FREE_TARGETS,expect:"tool:device",free:true,hintAfter:9000,hint:["Try Device Check. I won't highlight it this time."],next:"t6_device"},
  {id:"t6_device",applicant:5,message:["This device has several accounts attached.","Open the usernames and inspect their records one by one."],highlight:[],allowed:[],after:1300,next:"t6_investigate"},
  {id:"t6_investigate",applicant:5,message:["Find the linked account with moderation history, then open its record."],highlight:[],allowed:TRAINING_FREE_TARGETS,expect:"record:old_user",free:true,hintAfter:12000,hint:["One of the device accounts is @old_user. Check that record."],next:"t6_record"},
  {id:"t6_record",applicant:5,message:["You found a banned account on the same device.","Select PREVIOUS BANS and connect it to the applicant."],highlight:[],allowed:[],after:1300,next:"t6_select"},
  {id:"t6_select",applicant:5,message:["Select the ban evidence yourself."],highlight:[],allowed:["[data-connect-key='device-ban']"],expect:"evidence:device-ban",next:"t6_connect",free:true},
  {id:"t6_connect",applicant:5,message:["Now connect the selected record to the mascot."],highlight:[".inspection-stack"],allowed:["#visitorButton"],expect:"connection:device_banned_account",next:"t6_question"},
  {id:"t6_question",applicant:5,message:["Ask about the linked banned account."],highlight:["[data-question-id='evidence-device_banned_account']"],allowed:["[data-question-id='evidence-device_banned_account']"],expect:"question:evidence-device_banned_account",delayNext:4700,next:"t6_decide_wait"},
  {id:"t6_decide_wait",applicant:5,message:["The record says the appeal was cleared.","You have the evidence and the explanation — now judge the risk."],highlight:[],allowed:[],after:1400,next:"t6_decide"},
  {id:"t6_decide",applicant:5,message:["Make the call."],highlight:[],allowed:["#acceptButton","#rejectButton"],expect:["decision:accept","decision:reject"],free:true,delayNext:1900,next:"t_end_rules"},

  {id:"t_end_rules",message:["During a real shift, Admin can change the rules at any time.","A new rule has just appeared in #admins."],highlight:["[data-training-focus='rule']"],allowed:[],after:1600,effect:"rule-update",next:"t_end_reasons"},
  {id:"t_end_reasons",message:["Reject reasons come from evidence you actually discovered.","A case may have several valid reasons — or none at all."],highlight:["#rejectButton"],allowed:[],after:1500,next:"t_end_health"},
  {id:"t_end_health",message:["Wrong calls and unresolved incidents reduce Safety, Trust and Activity.","If one of them collapses, the community can fail."],highlight:[".community-health"],allowed:[],after:1600,next:"t_end_roster"},
  {id:"t_end_roster",message:["Good members grow the roster and keep the server alive.","Builders, Artists, Clipmakers and Supporters all help in different ways."],highlight:[".community-roster"],allowed:[],after:1600,next:"t_end_chat"},
  {id:"t_end_chat",message:["Keep watching General after every decision.","A bad entrant can create a second problem inside the chat."],highlight:[".channel-feed"],allowed:[],after:1600,effect:"show-general",next:"t_end_incident"},
  {id:"t_end_incident",message:["A malicious link just appeared, and Safety and Trust dropped.","The longer an incident is ignored, the more damage it causes."],highlight:["[data-training-focus='incident']",".community-health"],allowed:[],after:1700,effect:"training-incident",next:"t_end_incident_menu"},
  {id:"t_end_incident_menu",message:["Moderate suspicious messages directly in General.","Open the three-dot menu on the bad message."],highlight:["[data-training-focus='incident'] [data-message-menu]"],allowed:["[data-training-focus='incident'] [data-message-menu]"],expect:"incident:menu",next:"t_end_incident_delete"},
  {id:"t_end_incident_delete",message:["First stop the link from spreading.","Delete the message."],highlight:["[data-training-focus='incident'] [data-message-action='delete']"],allowed:["[data-training-focus='incident'] [data-message-action='delete']"],expect:"incident:deleted",next:"t_end_incident_ban"},
  {id:"t_end_incident_ban",message:["Deleting the post is not enough.","Ban the malicious account too."],highlight:["[data-training-focus='incident'] [data-message-action='ban']"],allowed:["[data-training-focus='incident'] [data-message-action='ban']"],expect:"incident:banned",next:"t_end_incident_resolved"},
  {id:"t_end_incident_resolved",message:["Incident contained.","Fast deletion and a ban prevent later losses and earn a recovery bonus."],highlight:["[data-training-focus='incident']",".community-health"],allowed:[],after:1700,next:"t_end_score"},
  {id:"t_end_score",message:["Complete the queue with strong decisions to earn a higher Moderator Score.","Correct calls, healthy metrics and resolved incidents all matter."],highlight:[".clock-panel"],allowed:[],after:1600,next:"t_end_finish"},
  {id:"t_end_finish",message:["Those are the core systems.","The live shift will add new rules, harder lies and consequences inside the chat."],highlight:[],allowed:[],after:1600,next:"training_complete"}
]);

const TRAINING_STEP_MAP = new Map(TRAINING_STEPS.map(step => [step.id,step]));
let generalChatMessages = [];
let chatLoadPromise = null;
let regionalParticipants = [];
let regionalRosterPromise = null;
let selectedRegion = "ALL";
const state = {
  index: 0, decisions: [], started: false, locked: false, mode: "normal", sound: true, chatSound: true, masterVolume: .85, chatIndex: 0,
  activeApp: "discord", activeChannel: "general", messageClock: 0,
  messages: { general: [], admins: [] }, unread: { general: 0, admins: 0 },
  cardOpen: false, conversationTimers: [], introTimers: [], arrivalTimers: [], arrivalFrame: 0, chatCursor: 0,
  pendingCardAnimation: "", activeDatabaseMode: "search", wheelAngle: -90,
  discoveredBan: false, banQuestionAsked: false, adminReviewSent: false, adminVerdict: null, adminReviewContext: null,
  revealed: { phone: false, x: false, bio: false },
  community: { ...INITIAL_COMMUNITY }, decisionScore: 0, recoveryBonus: 0,
  falseRejects: 0, threatsStopped: 0, impostorsCaught: 0, incidentsResolved: 0,
  incidents: [], incidentTimers: [], communityTimers: [], ended: false,
  applicantHandles: new Set(), allowedDuplicateHandles: new Set(), poolFallback: false,
  chatCast: {}, discoveredReasons: new Set(), unseenQuestions: new Set(), selectedEvidence: null, connectionTimer: null, speechTimer: null,
  accountDetailsOpened: false, xProfileOpened: false, phoneLookupOpened: false, phoneLinkedOpened: false, phoneNumberAsked: false, deviceCheckOpened: false, deviceQuestionAsked: false, deviceEvidenceAccount: "",
  shiftRules: { ...SHIFT_RULE_PRESETS.opening }, unjustifiedRejects: 0,
  training: { active:false, stepId:"", pendingStep:"", timers:[], hintTimer:null, positionFrame:0 }
};

const $ = (id) => document.getElementById(id);
const els = {
  progress: $("progressBar"), progressLabel: $("progressLabel"), caseId: $("caseId"),
  image: $("visitorImage"), visitorButton: $("visitorButton"), speaker: $("speakerName"), intro: $("visitorIntro"), speechCard: $("speechCard"), stage: $("stage"),
  drawer: $("questionDrawer"), questionOptions: $("questionOptions"), wheelPointer: $("wheelPointer"), answer: $("questionAnswer"), closeQuestions: $("closeQuestions"),
  conversation: $("conversation"), playerQuestion: $("playerQuestion"), answerSpeaker: $("answerSpeaker"),
  adminReview: $("adminReviewButton"),
  toolOutput: $("toolOutput"), checks: $("checksCount"), accept: $("acceptButton"), reject: $("rejectButton"),
  toast: $("toast"), startOverlay: $("startOverlay"), endOverlay: $("endOverlay"),
  shiftClock: $("shiftClock"), toolTray: $("toolTray"), toolTitle: $("toolTitle"), toolClose: $("toolClose"),
  channelFeed: $("channelFeed"), channelName: $("channelName"), channelTopic: $("channelTopic"), compose: $("composePlaceholder"),
  databaseForm: $("databaseForm"), databaseInput: $("databaseInput"), databaseResults: $("databaseResults"),
  xForm: $("xForm"), xInput: $("xInput"), xResults: $("xResults"),
  safety: $("safetyValue"), trust: $("trustValue"), activity: $("activityValue"),
  builders: $("buildersCount"), artists: $("artistsCount"), clipmakers: $("clipmakersCount"), supporters: $("supportersCount"), members: $("membersCount"),
  regionPicker: $("regionPicker"), poolStatus: $("poolStatus"), startButton: $("startButton"),
  rejectOverlay: $("rejectOverlay"), rejectReasons: $("rejectReasons"), rejectClose: $("rejectClose"),
  soundButton: $("soundButton"), soundLabel: $("soundLabel"), chatSoundButton: $("chatSoundButton"), chatSoundLabel: $("chatSoundLabel"),
  volumeSlider: $("volumeSlider"), volumeValue: $("volumeValue"), shiftRulesList: $("shiftRulesList"), rulesMemo: $("rulesMemo"),
  trainingButton: $("trainingButton"), trainingLayer: $("trainingLayer"), trainingSpotlight: $("trainingSpotlight"), trainingAdmin: $("trainingAdminBox"), trainingMessage: $("trainingAdminMessage"), trainingNext: $("trainingNextButton"),
  trainingSkip: $("trainingSkipButton"), trainingSkipConfirm: $("trainingSkipConfirm"), trainingSkipCancel: $("trainingSkipCancel"), trainingSkipAccept: $("trainingSkipAccept"),
  trainingComplete: $("trainingComplete"), trainingPlay: $("trainingPlayButton"),
  mobileChatToggle: $("mobileChatToggle"), mobileRulesToggle: $("mobileRulesToggle"), mobileDecisionToggle: $("mobileDecisionToggle"), mobileScrim: $("mobileScrim"),
  mobileEvidenceChip: $("mobileEvidenceChip"), mobileEvidenceName: $("mobileEvidenceName"), mobileEvidenceHint: $("mobileEvidenceHint")
};

const mobilePanels = {
  chat: { className:"mobile-chat-open", button:els.mobileChatToggle },
  rules: { className:"mobile-rules-open", button:els.mobileRulesToggle },
  decision: { className:"mobile-decision-open", button:els.mobileDecisionToggle }
};

function isMobileLandscapeLayout() {
  return window.matchMedia("(max-width: 999px) and (orientation: landscape)").matches;
}

function closeMobilePanels(playSound = false) {
  Object.values(mobilePanels).forEach(({ className, button }) => {
    document.body.classList.remove(className);
    button?.setAttribute("aria-expanded", "false");
  });
  if (els.mobileScrim) els.mobileScrim.hidden = true;
  if (playSound) beep("click");
}

function openMobilePanel(panelName) {
  const panel = mobilePanels[panelName];
  closeMobilePanels(false);
  if (!panel || !isMobileLandscapeLayout()) return;
  document.body.classList.add(panel.className);
  panel.button?.setAttribute("aria-expanded", "true");
  if (els.mobileScrim) els.mobileScrim.hidden = false;
}

function toggleMobilePanel(panelName) {
  if (!isMobileLandscapeLayout()) return;
  const panel = mobilePanels[panelName];
  if (!panel) return;
  const opening = !document.body.classList.contains(panel.className);
  if (opening) openMobilePanel(panelName);
  else closeMobilePanels(false);
  beep("click");
}

function clearMobileEvidenceMode() {
  document.body.classList.remove("mobile-evidence-mode");
  if (els.mobileEvidenceChip) els.mobileEvidenceChip.hidden = true;
}

function prepareMobileEvidenceMode(element) {
  if (!isMobileLandscapeLayout() || !state.selectedEvidence) return;
  const selected = state.selectedEvidence;
  selected.wasToolOpen = !els.toolTray.hidden && Boolean(element.closest("#toolTray"));
  selected.anchor = els.mobileEvidenceChip;
  const rawLabel = element.querySelector("span")?.textContent || selected.key || "ACCOUNT RECORD";
  els.mobileEvidenceName.textContent = rawLabel.trim().replace(/\s+/g," ").toUpperCase();
  els.mobileEvidenceHint.textContent = selected.key === "account-age" ? "TAP THE MATCHING RULE" : "TAP MASCOT TO CONNECT";
  els.mobileEvidenceChip.hidden = false;
  els.toolTray.hidden = true;
  document.body.classList.add("mobile-evidence-mode");
  if (selected.key === "account-age") openMobilePanel("rules");
  else closeMobilePanels(false);
}

function restoreMobileEvidenceSource() {
  const selected = state.selectedEvidence;
  if (!selected) return;
  if (!selected.wasToolOpen) {
    clearEvidenceSelection();
    beep("click");
    return;
  }
  closeMobilePanels(false);
  clearMobileEvidenceMode();
  selected.anchor = selected.element;
  els.toolTray.hidden = false;
  beep("click");
  if (state.training.active) requestAnimationFrame(() => positionTrainingGuidance());
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[c]);
}

function normalizeHandle(value) { return String(value || "").trim().toLowerCase().replace(/^@/, ""); }
function current() { return visitors[state.index]; }
function scenarioKey(visitor) { return visitor.templateKey || visitor.username; }
function isXHidden(visitor) { return hiddenXHandles.has(scenarioKey(visitor)); }

function phoneAccountLimit(visitor) {
  return visitor.role === "Builder" && state.shiftRules.builderMaxAccountsPerPhone != null
    ? state.shiftRules.builderMaxAccountsPerPhone
    : state.shiftRules.maxAccountsPerPhone;
}

function phoneLimitExceeded(visitor) {
  const limit = phoneAccountLimit(visitor);
  return limit != null && visitor.phone.linkedAccounts.length > limit;
}

function renderShiftRules() {
  if (!els.shiftRulesList) return;
  const rules = [
    { key: "rule-account-age", text: `Account must be at least ${state.shiftRules.minAccountAgeDays} days old.` },
    { text: state.shiftRules.phoneVerificationRequired ? "Phone verification is required." : "Phone verification is optional." },
    { text: state.shiftRules.oldBansCount ? "Old bans still count." : "Old bans are advisory only." }
  ];
  if (state.shiftRules.maxAccountsPerPhone != null) rules.push({ text: `Maximum ${state.shiftRules.maxAccountsPerPhone} accounts per phone. Builders may use up to ${state.shiftRules.builderMaxAccountsPerPhone}.` });
  els.shiftRulesList.innerHTML = rules.map(rule => `<p${rule.key ? ` class="rule-connect-target" data-connect-target="${rule.key}"` : ""}><i>✓</i><span>${escapeHtml(rule.text)}</span></p>`).join("");
  if (els.rulesMemo) els.rulesMemo.textContent = state.shiftRules.maxAccountsPerPhone == null ? "MEMO 1/4" : "MEMO 2/4";
}

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function loadRegionalRoster() {
  if (!regionalRosterPromise) {
    regionalRosterPromise = fetch("assets/regChats/participants.json")
      .then(response => {
        if (!response.ok) throw new Error("Regional roster is unavailable");
        return response.json();
      })
      .then(data => {
        regionalParticipants = Array.isArray(data.participants) ? data.participants : [];
        renderRegionPicker(Array.isArray(data.regions) ? data.regions : [], data.counts || {});
        return regionalParticipants;
      })
      .catch(() => {
        regionalParticipants = [];
        if (els.poolStatus) els.poolStatus.textContent = "Regional roster unavailable · General archive will be used";
        return regionalParticipants;
      });
  }
  return regionalRosterPromise;
}

function renderRegionPicker(regions, counts) {
  if (!els.regionPicker) return;
  const choices = ["ALL", ...regions];
  els.regionPicker.innerHTML = choices.map(region => {
    const count = region === "ALL" ? regionalParticipants.length : Number(counts[region] || 0);
    const label = region === "ALL" ? "All server" : region[0] + region.slice(1).toLowerCase();
    return `<button class="region-choice ${region === selectedRegion ? "active" : ""}" type="button" data-region="${escapeHtml(region)}"><strong>${escapeHtml(label)}</strong><span>${count}</span></button>`;
  }).join("");
  updatePoolStatus(counts);
}

function updatePoolStatus(counts = {}) {
  if (!els.poolStatus) return;
  if (selectedRegion === "ALL") {
    els.poolStatus.textContent = `${regionalParticipants.length || "—"} real members · random all-server queue`;
    return;
  }
  const count = Number(counts[selectedRegion] || regionalParticipants.filter(person => person.regions?.includes(selectedRegion)).length);
  els.poolStatus.textContent = `${count} regional members · All server fills the queue if needed`;
}

function fallbackRosterFromGeneral() {
  const byHandle = new Map();
  generalChatMessages.forEach(message => {
    const handle = normalizeHandle(message.handle);
    if (!handle || byHandle.has(handle)) return;
    byHandle.set(handle, {
      username: `@${message.handle}`,
      nickname: message.name || message.handle,
      key: `general-${handle}`,
      messages: 1,
      avatar: message.avatar || "assets/dlicom-builder.png",
      regions: ["GENERAL"]
    });
  });
  return [...byHandle.values()];
}

function applicantIdentity(template, person) {
  const templateKey = template.username;
  const username = String(person.username || "").startsWith("@") ? person.username : `@${person.username}`;
  const identity = {
    ...template,
    templateKey,
    name: person.nickname || username.replace(/^@/, ""),
    username,
    avatar: person.avatar || "assets/dlicom-builder.png",
    identityKey: person.key || person.discordId || normalizeHandle(username),
    region: person.regions?.[0] || "ALL"
  };

  const personalize = value => String(value || "")
    .replaceAll(template.username, username)
    .replaceAll(template.username.replace(/^@/, ""), username.replace(/^@/, ""))
    .replaceAll(template.name, identity.name);
  identity.intro = personalize(template.intro);
  if (template.hint) {
    const hintSpeakerIsApplicant = normalizeHandle(template.hint[0]) === normalizeHandle(template.username);
    identity.hint = [hintSpeakerIsApplicant ? identity.name : template.hint[0], personalize(template.hint[1])];
    identity.hintAvatar = hintSpeakerIsApplicant ? identity.avatar : null;
  }

  identity.search = (template.search || []).map(result => {
    const pointsToApplicant = normalizeHandle(result.name) === normalizeHandle(templateKey);
    return pointsToApplicant ? { ...result, name: username } : { ...result };
  });
  identity.phone = {
    ...template.phone,
    linkedAccounts: template.phone.linkedAccounts.map(handle => normalizeHandle(handle) === normalizeHandle(templateKey) ? username : handle)
  };
  identity.device = materializeDeviceProfile(template.device, username, template.device.id);
  return identity;
}

function buildVisitorQueue() {
  const allPeople = regionalParticipants.length ? regionalParticipants : fallbackRosterFromGeneral();
  const regionalPool = selectedRegion === "ALL"
    ? allPeople
    : allPeople.filter(person => person.regions?.includes(selectedRegion));
  const initialPool = shuffled(regionalPool).slice(0, 100);
  const personKey = person => person.key || person.discordId || normalizeHandle(person.username);
  const selectedIds = new Set(initialPool.map(personKey));
  const fillPool = shuffled(allPeople.filter(person => !selectedIds.has(personKey(person))));
  const people = [...initialPool, ...fillPool].slice(0, visitorTemplates.length);
  state.poolFallback = selectedRegion !== "ALL" && initialPool.length < visitorTemplates.length;

  if (people.length < visitorTemplates.length) {
    visitors = visitorTemplates.map(prepareVisitorTemplate);
  } else {
    visitors = visitorTemplates.map((template, index) => applicantIdentity(prepareVisitorTemplate(template, index), people[index]));
  }

  state.applicantHandles = new Set(visitors.map(visitor => normalizeHandle(visitor.username)));
  state.allowedDuplicateHandles = new Set(
    visitors.filter(visitor => IMPERSONATORS.has(scenarioKey(visitor))).map(visitor => normalizeHandle(visitor.username))
  );
}

function buildChatCast() {
  const byHandle = new Map();
  generalChatMessages.forEach(message => {
    const handle = normalizeHandle(message.handle);
    if (!handle || !message.avatar || state.applicantHandles.has(handle) || byHandle.has(handle)) return;
    byHandle.set(handle, {
      name: message.name || message.handle,
      username: `@${message.handle}`,
      avatar: message.avatar,
      accent: message.color || undefined
    });
  });

  if (byHandle.size < 6) {
    regionalParticipants.forEach(person => {
      const handle = normalizeHandle(person.username);
      if (!handle || state.applicantHandles.has(handle) || byHandle.has(handle)) return;
      byHandle.set(handle, {
        name: person.nickname || handle,
        username: person.username,
        avatar: person.avatar,
        accent: undefined
      });
    });
  }

  const cast = shuffled([...byHandle.values()]);
  const roles = ["supporter", "curious", "victim", "witness", "observer", "friend"];
  state.chatCast = Object.fromEntries(roles.map((role, index) => [role, cast[index % Math.max(1, cast.length)]]));
}

function addCastMessage(role, message, options = {}) {
  const actor = state.chatCast[role] || state.chatCast.observer;
  if (!actor) return null;
  return addMessage("general", actor.name, message, {
    avatar: actor.avatar,
    accent: options.accent || actor.accent,
    ...options
  });
}

function clampCommunity(value) { return Math.max(0, Math.min(100, Math.round(value))); }

function renderCommunityStats(changes = {}) {
  const keys = ["safety", "trust", "activity", "builders", "artists", "clipmakers", "supporters", "members"];
  keys.forEach(key => {
    if (!els[key]) return;
    els[key].textContent = state.community[key];
    const delta = Number(changes[key] || 0);
    if (!delta) return;
    els[key].classList.remove("stat-up", "stat-down");
    void els[key].offsetWidth;
    els[key].classList.add(delta > 0 ? "stat-up" : "stat-down");
    setTimeout(() => els[key]?.classList.remove("stat-up", "stat-down"), 650);
  });
}

function applyCommunityChanges(changes, reason = "") {
  ["safety", "trust", "activity"].forEach(key => {
    if (changes[key]) state.community[key] = clampCommunity(state.community[key] + changes[key]);
  });
  ["builders", "artists", "clipmakers", "supporters", "members"].forEach(key => {
    if (changes[key]) state.community[key] = Math.max(0, state.community[key] + changes[key]);
  });
  renderCommunityStats(changes);
  if (!state.ended && reason) {
    const summary = ["safety", "trust", "activity"]
      .filter(key => changes[key])
      .map(key => `${key.toUpperCase()} ${changes[key] > 0 ? "+" : ""}${changes[key]}`)
      .join(" · ");
    if (summary) showToast(`${reason} // ${summary}`, changes.safety < 0 || changes.trust < 0 || changes.activity < 0 ? "reject" : "accept");
  }
  checkCommunityCollapse();
}

function checkCommunityCollapse() {
  if (state.ended) return;
  if (state.community.safety <= 0) finishShift("safety");
  else if (state.community.trust <= 0) finishShift("trust");
  else if (state.community.activity <= 0) finishShift("activity");
}

function renderShiftClock() {
  const totalMinutes = Math.min(360, 137 + state.index * 16);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  els.shiftClock.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")} AM`;
}

function audioContext() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  if (!beep.ctx) {
    beep.ctx = new AudioCtx();
    beep.gameBus = beep.ctx.createGain();
    beep.chatBus = beep.ctx.createGain();
    beep.gameBus.connect(beep.ctx.destination);
    beep.chatBus.connect(beep.ctx.destination);
  }
  const ctx = beep.ctx;
  syncAudioMix(ctx);
  if (ctx.state === "suspended") ctx.resume().catch(() => {});
  return ctx;
}

function syncAudioMix(ctx = beep.ctx) {
  if (!ctx || !beep.gameBus || !beep.chatBus) return;
  const now = ctx.currentTime;
  beep.gameBus.gain.setTargetAtTime(state.sound ? state.masterVolume : 0, now, .015);
  beep.chatBus.gain.setTargetAtTime(state.chatSound ? 1 : 0, now, .015);
}

function beep(type = "click") {
  const isChatSound = type === "chatMessage" || type === "chatUpdate";
  if (isChatSound ? !state.chatSound : !state.sound) return;
  const ctx = audioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const tones = { click: 260, accept: 520, reject: 120, update: 680, chatMessage: 380, chatUpdate: 680 };
  osc.frequency.value = tones[type] || 260;
  osc.type = type === "reject" ? "sawtooth" : "sine";
  gain.gain.setValueAtTime(isChatSound ? .035 : .06, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + .12);
  osc.connect(gain).connect(isChatSound ? beep.chatBus : beep.gameBus);
  osc.start(); osc.stop(ctx.currentTime + .13);
}

function playFootsteps(duration = 2400) {
  if (!state.sound) return;
  const ctx = audioContext();
  if (!ctx) return;
  const count = Math.max(4, Math.round(duration / 300));
  const interval = duration / count;
  for (let index = 0; index < count; index += 1) {
    const at = ctx.currentTime + interval * (index + .5) / 1000;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(92 - index % 2 * 12, at);
    osc.frequency.exponentialRampToValueAtTime(42, at + .1);
    gain.gain.setValueAtTime(.0001, at);
    gain.gain.exponentialRampToValueAtTime(.11, at + .012);
    gain.gain.exponentialRampToValueAtTime(.0001, at + .14);
    osc.connect(gain).connect(beep.gameBus);
    osc.start(at);
    osc.stop(at + .15);
  }
}

function playAlienSpeech(text = "") {
  const duration = Math.max(720, Math.min(2100, 480 + String(text).length * 17));
  clearTimeout(state.speechTimer);
  els.visitorButton.classList.add("speaking");
  state.speechTimer = setTimeout(() => els.visitorButton.classList.remove("speaking"), duration);
  if (!state.sound) return duration;
  const ctx = audioContext();
  if (!ctx) return duration;
  const voice = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 820;
  voice.gain.value = 1.29;
  filter.connect(voice).connect(beep.gameBus);
  const syllables = Math.max(4, Math.min(11, Math.round(duration / 180)));
  for (let index = 0; index < syllables; index += 1) {
    const at = ctx.currentTime + index * .17 + Math.random() * .035;
    const length = .11 + Math.random() * .07;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = index % 3 === 0 ? "triangle" : "sine";
    const base = 125 + Math.random() * 95;
    osc.frequency.setValueAtTime(base, at);
    osc.frequency.linearRampToValueAtTime(base * (.72 + Math.random() * .5), at + length);
    gain.gain.setValueAtTime(.0001, at);
    gain.gain.exponentialRampToValueAtTime(.12 + Math.random() * .032, at + .025);
    gain.gain.exponentialRampToValueAtTime(.0001, at + length);
    osc.connect(gain).connect(filter);
    osc.start(at);
    osc.stop(at + length + .02);
  }
  return duration;
}

function playTutorialBlips(text = "") {
  if (!state.sound) return;
  const ctx = audioContext();
  if (!ctx) return;
  const count = Math.max(2,Math.min(4,Math.ceil(String(text).length / 42)));
  for (let index = 0; index < count; index += 1) {
    const at = ctx.currentTime + index * .09;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = index % 2 ? "triangle" : "sine";
    osc.frequency.setValueAtTime(430 + Math.random() * 170,at);
    osc.frequency.exponentialRampToValueAtTime(320 + Math.random() * 110,at + .065);
    gain.gain.setValueAtTime(.0001,at);
    gain.gain.exponentialRampToValueAtTime(.038,at + .012);
    gain.gain.exponentialRampToValueAtTime(.0001,at + .075);
    osc.connect(gain).connect(beep.gameBus);
    osc.start(at); osc.stop(at + .08);
  }
}

function currentTrainingStep() {
  return state.training.active ? TRAINING_STEP_MAP.get(state.training.stepId) || null : null;
}

function clearTrainingStepTimers() {
  state.training.timers.forEach(clearTimeout);
  state.training.timers = [];
  if (state.training.hintTimer) clearTimeout(state.training.hintTimer);
  state.training.hintTimer = null;
  if (state.training.positionFrame) cancelAnimationFrame(state.training.positionFrame);
  state.training.positionFrame = 0;
  document.querySelectorAll(".training-scroll-locked").forEach(element => element.classList.remove("training-scroll-locked"));
}

function trainingElements(step = currentTrainingStep()) {
  if (!step) return [];
  return (step.highlight || []).flatMap(selector => [...document.querySelectorAll(selector)]);
}

function renderTrainingMessage(lines) {
  const copy = Array.isArray(lines) ? lines : [lines];
  els.trainingMessage.innerHTML = copy.filter(Boolean).slice(0,2).map(line => `<p>${escapeHtml(line)}</p>`).join("");
  playTutorialBlips(copy.join(" "));
}

function runTrainingStepEffect(step) {
  if (step.effect === "rule-update") {
    setApp("discord");
    setChannel("admins");
    if (!state.messages.admins.some(entry => entry.trainingFocus === "rule")) {
      addMessage("admins","retree","RULE UPDATE — Builders now need recent public proof of work. Always follow the latest message in #admins.",{
        avatar:ADMIN_AVATAR,
        accent:"#ffb26b",
        trainingFocus:"rule"
      });
    }
  }
  if (step.effect === "show-general") {
    setApp("discord");
    setChannel("general");
  }
  if (step.effect === "pin-x-post") {
    const post = els.xResults.querySelector("[data-training-post='role-proof']");
    if (post) {
      const top = Math.max(0,post.offsetTop-(els.xResults.clientHeight-post.offsetHeight)/2);
      els.xResults.scrollTop = top;
      els.xResults.classList.add("training-scroll-locked");
    }
  }
  if (step.effect === "training-incident") launchTrainingIncident();
}

function positionTrainingGuidance(attempt = 0) {
  if (!state.training.active || els.trainingLayer.hidden) return;
  const step = currentTrainingStep();
  const targets = trainingElements(step).filter(element => {
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  });
  document.querySelectorAll(".training-focus-ring").forEach(element => element.classList.remove("training-focus-ring"));
  targets.forEach(element => element.classList.add("training-focus-ring"));

  if (targets.length) {
    const rects = targets.map(element => element.getBoundingClientRect());
    const left = Math.min(...rects.map(rect => rect.left));
    const top = Math.min(...rects.map(rect => rect.top));
    const right = Math.max(...rects.map(rect => rect.right));
    const bottom = Math.max(...rects.map(rect => rect.bottom));
    const padding = 8;
    els.trainingSpotlight.style.left = `${Math.max(5,left-padding)}px`;
    els.trainingSpotlight.style.top = `${Math.max(5,top-padding)}px`;
    els.trainingSpotlight.style.width = `${Math.min(innerWidth-10,right+padding)-Math.max(5,left-padding)}px`;
    els.trainingSpotlight.style.height = `${Math.min(innerHeight-10,bottom+padding)-Math.max(5,top-padding)}px`;

    const adminRect = els.trainingAdmin.getBoundingClientRect();
    const adminWidth = adminRect.width || 292;
    const adminHeight = adminRect.height || 130;
    const anchor = rects[0];
    let adminLeft = anchor.right + 18;
    if (adminLeft + adminWidth > innerWidth - 12) adminLeft = anchor.left - adminWidth - 18;
    if (adminLeft < 12) adminLeft = Math.max(12,Math.min(innerWidth-adminWidth-12,(left+right-adminWidth)/2));
    let adminTop = Math.max(58,Math.min(innerHeight-adminHeight-12,anchor.top));
    const belowTarget = anchor.bottom + 18;
    if (adminTop < 70 && belowTarget >= 12 && belowTarget + adminHeight < innerHeight - 12) adminTop = belowTarget;
    adminTop = Math.max(12,Math.min(innerHeight-adminHeight-12,adminTop));
    if (isMobileLandscapeLayout() && !els.drawer.hidden) {
      adminLeft = Math.max(8,innerWidth-adminWidth-8);
      adminTop = Math.max(42,innerHeight-adminHeight-8);
    } else if (isMobileLandscapeLayout() && anchor.width > innerWidth * .55) {
      adminLeft = Math.max(8,innerWidth-adminWidth-8);
      adminTop = Math.max(42,Math.min(innerHeight-adminHeight-8,48));
    }
    els.trainingAdmin.style.left = `${adminLeft}px`;
    els.trainingAdmin.style.top = `${adminTop}px`;
  } else {
    const mobile = isMobileLandscapeLayout();
    const adminWidth = els.trainingAdmin.getBoundingClientRect().width || (mobile ? 210 : 292);
    els.trainingAdmin.style.left = mobile ? `${Math.max(8,innerWidth-adminWidth-8)}px` : `${Math.max(12,(innerWidth-Math.min(292,innerWidth-28))/2)}px`;
    els.trainingAdmin.style.top = mobile ? "48px" : "68px";
    if (!step?.free && attempt < 10) {
      state.training.positionFrame = requestAnimationFrame(() => positionTrainingGuidance(attempt+1));
    }
  }
}

function syncMobileTrainingPanel(step) {
  if (!isMobileLandscapeLayout()) return;
  const selectors = [...(step.highlight || []), ...(step.allowed || [])].join(" ");
  if (selectors.includes(".rules-paper") || selectors.includes("data-connect-target")) {
    openMobilePanel("rules");
    return;
  }
  if (selectors.includes("#acceptButton") || selectors.includes("#rejectButton")) {
    openMobilePanel("decision");
    return;
  }
  if (/chat-panel|channel-feed|community-health|community-roster|data-training-focus/.test(selectors)) {
    openMobilePanel("chat");
    return;
  }
  closeMobilePanels(false);
}

function enterTrainingStep(id) {
  if (!state.training.active) return;
  if (id === "training_complete") {
    finishTraining();
    return;
  }
  const step = TRAINING_STEP_MAP.get(id);
  if (!step) return;
  clearTrainingStepTimers();
  state.training.stepId = id;
  if (step.closeTool) setApp("discord");
  if (step.effect) runTrainingStepEffect(step);
  els.trainingLayer.hidden = false;
  els.trainingLayer.classList.toggle("free-mode",Boolean(step.free || !(step.highlight || []).length));
  renderTrainingMessage(step.message);
  els.trainingNext.hidden = !step.after;
  els.trainingNext.disabled = true;
  els.trainingNext.classList.remove("ready");
  els.trainingNext.querySelector("span").textContent = "READING…";
  syncMobileTrainingPanel(step);
  state.training.positionFrame = requestAnimationFrame(() => positionTrainingGuidance());

  if (step.hintAfter && step.hint) {
    state.training.hintTimer = setTimeout(() => {
      if (state.training.stepId !== step.id) return;
      renderTrainingMessage(step.hint);
      positionTrainingGuidance();
    },step.hintAfter);
  }
  if (step.after) {
    state.training.timers.push(setTimeout(() => {
      if (state.training.stepId !== step.id) return;
      els.trainingNext.disabled = false;
      els.trainingNext.classList.add("ready");
      els.trainingNext.querySelector("span").textContent = "NEXT";
      positionTrainingGuidance();
    },step.after));
  }
}

function advanceTrainingStep() {
  const step = currentTrainingStep();
  if (!step?.after || els.trainingNext.disabled) return;
  els.trainingNext.disabled = true;
  els.trainingNext.hidden = true;
  els.trainingNext.classList.remove("ready");
  beep("click");
  if (Number.isInteger(step.nextApplicant)) advanceTrainingApplicant(step.nextApplicant,step.next);
  else enterTrainingStep(step.next);
}

function trainingAction(action) {
  const step = currentTrainingStep();
  if (!step || !step.expect) return false;
  const expected = Array.isArray(step.expect) ? step.expect : [step.expect];
  if (!expected.includes(action)) return false;
  if (step.next && step.delayNext) {
    clearTrainingStepTimers();
    state.training.stepId = "";
    els.trainingLayer.hidden = true;
    els.trainingNext.hidden = true;
    document.querySelectorAll(".training-focus-ring").forEach(element => element.classList.remove("training-focus-ring"));
    state.training.timers.push(setTimeout(() => {
      if (state.training.active) enterTrainingStep(step.next);
    },step.delayNext));
  } else if (step.next) {
    enterTrainingStep(step.next);
  }
  return true;
}

function trainingAllows(target) {
  if (!state.training.active) return true;
  if (target.closest("#trainingNextButton,#trainingSkipButton,#trainingSkipConfirm,#trainingComplete,.mobile-toolbar,#mobileScrim")) return true;
  const step = currentTrainingStep();
  if (!step) return false;
  return (step.allowed || []).some(selector => target.closest(selector));
}

function advanceTrainingApplicant(index,nextStep) {
  if (!state.training.active) return;
  state.index = index;
  state.training.pendingStep = nextStep;
  renderVisitor();
}

function trainingVisitorReady() {
  if (!state.training.active || !state.training.pendingStep) return;
  const next = state.training.pendingStep;
  state.training.pendingStep = "";
  state.training.timers.push(setTimeout(() => enterTrainingStep(next),3780));
}

function decideTraining(choice) {
  const step = currentTrainingStep();
  const action = `decision:${choice}`;
  const expected = Array.isArray(step?.expect) ? step.expect : [step?.expect];
  if (!step || !expected.includes(action) || state.locked) return;
  const v = current();
  state.locked = true;
  els.accept.disabled = true; els.reject.disabled = true;
  els.drawer.hidden = true; els.toolTray.hidden = true; els.adminReview.hidden = true;
  hideConversation(); clearEvidenceSelection(); clearConnectionVisual(); closeRejectMenu();
  const accepted = choice === "accept";
  state.decisions.push({username:v.username,choice,correct:accepted === v.allowed,training:true});
  els.stage.classList.remove("depart-accept","depart-reject");
  els.stage.classList.add(accepted ? "depart-accept" : "depart-reject");
  beep(choice);
  showToast(accepted ? "ACCESS GRANTED // TRAINING" : "ENTRY DENIED // TRAINING",choice);
  const line = accepted ? "See you inside." : "Okay. I'll step away.";
  const delay = showDecisionExitLine(v,line);
  setTimeout(() => {
    if (state.training.active) els.stage.classList.add("deciding");
  },delay);
  trainingAction(action);
}

function stopTrainingGuidance() {
  clearTrainingStepTimers();
  closeMobilePanels(false);
  state.training.active = false;
  state.training.stepId = "";
  state.training.pendingStep = "";
  els.trainingLayer.hidden = true;
  els.trainingNext.hidden = true;
  els.trainingNext.disabled = true;
  els.trainingNext.classList.remove("ready");
  els.trainingSkipConfirm.hidden = true;
  document.body.classList.remove("training-active");
  document.querySelectorAll(".training-focus-ring").forEach(element => element.classList.remove("training-focus-ring"));
}

function finishTraining() {
  if (!state.training.active) return;
  state.locked = true;
  stopTrainingGuidance();
  els.trainingComplete.hidden = false;
  beep("update");
}

function messageTime(offset = 0) {
  const total = 13 + state.messageClock++ + offset;
  return `02:${String(Math.min(59, total)).padStart(2, "0")}`;
}

function loadGeneralChat() {
  if (!chatLoadPromise) {
    chatLoadPromise = fetch("assets/chat-messages.json")
      .then(response => {
        if (!response.ok) throw new Error("Chat archive is unavailable");
        return response.json();
      })
      .then(data => {
        generalChatMessages = Array.isArray(data.messages) ? data.messages : [];
        return generalChatMessages;
      })
      .catch(() => {
        generalChatMessages = [];
        return generalChatMessages;
      });
  }
  return chatLoadPromise;
}

function chooseChatStart() {
  const upperWindow = Math.min(generalChatMessages.length, 480);
  state.chatCursor = upperWindow ? Math.floor(Math.random() * upperWindow) : 0;
}

function nextGeneralChat() {
  if (generalChatMessages.length) {
    let message = null;
    let attempts = 0;
    while (!message && attempts < generalChatMessages.length) {
      const candidate = generalChatMessages[state.chatCursor % generalChatMessages.length];
      state.chatCursor = (state.chatCursor + 1) % generalChatMessages.length;
      const handle = normalizeHandle(candidate.handle);
      if (!state.applicantHandles.has(handle) || state.allowedDuplicateHandles.has(handle)) message = candidate;
      attempts += 1;
    }
    if (!message) return;
    addMessage("general", message.name || message.handle, message.content, {
      id: message.id,
      avatar: message.avatar,
      accent: message.color,
      time: messageTime()
    });
    return;
  }
  const line = ambientChat[state.chatIndex++ % ambientChat.length];
  addCastMessage(["observer", "friend", "curious"][state.chatIndex % 3], line[1]);
}

function updateUnread() {
  ["general", "admins"].forEach(channel => {
    const badge = $(`${channel}Unread`);
    badge.textContent = state.unread[channel];
    badge.hidden = !state.unread[channel];
  });
}

function addMessage(channel, name, message, options = {}) {
  const entry = {
    id: options.id || `local-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    message,
    time: options.time || messageTime(),
    admin: options.admin ?? channel === "admins",
    accent: options.accent,
    avatar: Object.prototype.hasOwnProperty.call(options, "avatar") ? options.avatar : (channel === "admins" ? ADMIN_AVATAR : null),
    scam: Boolean(options.scam),
    incident: options.incident || null,
    sourceVisitor: options.sourceVisitor || "",
    trainingFocus: options.trainingFocus || "",
    deleted: false,
    banned: false,
    deleteRewarded: false,
    banRewarded: false,
    menuOpen: false
  };
  state.messages[channel].push(entry);
  const visible = state.activeChannel === channel;
  if (!visible) state.unread[channel] += 1;
  if (visible) appendChannelMessage(entry);
  updateUnread();
  beep(channel === "admins" ? "chatUpdate" : "chatMessage");
  return entry;
}

function channelMessageHtml(entry, animate = false) {
  const color = entry.accent || colors[Math.abs(entry.name.length + entry.message.length) % colors.length];
  const avatarError = entry.admin
    ? `this.onerror=null;this.src='${escapeHtml(ADMIN_AVATAR_FALLBACK)}'`
    : "this.hidden=true";
  const avatar = entry.avatar ? `<img src="${escapeHtml(entry.avatar)}" alt="" onerror="${avatarError}">` : "";
  const scamTag = "";
  const status = entry.banned ? `<span class="moderation-state">BANNED</span>` : "";
  const text = entry.deleted ? `<em class="deleted-message">Message deleted by moderator</em>` : escapeHtml(entry.message);
  const menu = entry.scam ? `<div class="message-menu-wrap"><button class="message-more" type="button" data-message-menu="${escapeHtml(entry.id)}" aria-label="Moderation actions">•••</button><div class="message-actions" ${entry.menuOpen ? "" : "hidden"}><button type="button" data-message-action="delete" data-message-id="${escapeHtml(entry.id)}" ${entry.deleted ? "disabled" : ""}>${entry.deleted ? "✓ Deleted" : "Delete message"}</button><button type="button" data-message-action="ban" data-message-id="${escapeHtml(entry.id)}" ${entry.banned ? "disabled" : ""}>${entry.banned ? "✓ Banned" : "Ban member"}</button></div></div>` : "";
  const trainingFocus = entry.trainingFocus ? ` data-training-focus="${escapeHtml(entry.trainingFocus)}"` : "";
  return `<article class="discord-message ${entry.admin ? "admin" : ""} ${entry.scam ? "scam-message" : ""} ${entry.menuOpen ? "menu-open" : ""} ${animate ? "message-new" : ""}" style="--accent:${color}" data-message-id="${escapeHtml(entry.id)}"${trainingFocus}><span class="discord-avatar"><span>${escapeHtml(entry.name.slice(0,1).toUpperCase())}</span>${avatar}</span><div class="discord-copy"><div class="discord-message-meta"><strong>${escapeHtml(entry.name)}</strong><time>${escapeHtml(entry.time)}</time>${scamTag}${status}</div><p>${text}</p></div>${menu}</article>`;
}

function appendChannelMessage(entry) {
  const keepModerationMenuInPlace = state.messages[state.activeChannel].some(message => message.menuOpen);
  const previousScrollTop = els.channelFeed.scrollTop;
  els.channelFeed.insertAdjacentHTML("beforeend", channelMessageHtml(entry, true));
  const appendedMessage = els.channelFeed.lastElementChild;
  setTimeout(() => appendedMessage?.classList.remove("message-new"), 320);
  els.channelFeed.scrollTop = keepModerationMenuInPlace ? previousScrollTop : els.channelFeed.scrollHeight;
  state.unread[state.activeChannel] = 0;
}

function renderChannel() {
  const channel = state.activeChannel;
  const previousScrollTop = els.channelFeed.scrollTop;
  const keepModerationMenuInPlace = state.messages[channel].some(entry => entry.menuOpen);
  els.channelName.textContent = channel;
  els.channelTopic.textContent = channel === "general" ? "Community lobby · live" : "Staff notices · read only";
  els.compose.textContent = channel === "general" ? "Message #general" : "Only administrators can post here";
  els.channelFeed.innerHTML = state.messages[channel].map(entry => channelMessageHtml(entry)).join("");
  els.channelFeed.scrollTop = keepModerationMenuInPlace ? previousScrollTop : els.channelFeed.scrollHeight;
  state.unread[channel] = 0;
  updateUnread();
}

function setChannel(channel) {
  state.activeChannel = channel;
  document.querySelectorAll(".channel-button").forEach(button => button.classList.toggle("active", button.dataset.channel === channel));
  renderChannel();
  beep("click");
}

function setApp(app, mode = "") {
  if (state.selectedEvidence) {
    clearEvidenceSelection();
    clearConnectionVisual();
  }
  state.activeApp = app;
  if (app === "discord") {
    els.toolTray.hidden = true;
    document.querySelectorAll(".verify-button").forEach(button => button.classList.remove("active"));
    if (state.pendingCardAnimation) {
      renderCard(state.pendingCardAnimation);
      state.pendingCardAnimation = "";
    }
    renderChannel();
  } else {
    els.drawer.hidden = true;
    hideConversation();
    els.toolTray.hidden = false;
    document.querySelectorAll("[data-tool-screen]").forEach(screen => {
      const active = screen.dataset.toolScreen === app;
      screen.hidden = !active;
    });
    document.querySelectorAll(".verify-button").forEach(button => button.classList.toggle("active", button.dataset.app === app && (!mode || button.dataset.tool === mode)));
    const titles = { search: "SERVER SEARCH", aliases: "USERNAME RECORDS", account: "ACCOUNT DETAILS", phone: "PHONE LOOKUP", device: "DEVICE CHECK", x: "X PROFILE" };
    els.toolTitle.textContent = titles[mode] || (app === "x" ? "X PROFILE" : "SERVER SEARCH");
    if (app === "database" && !["phone", "device"].includes(mode)) {
      state.activeDatabaseMode = mode || "search";
      els.databaseInput.value = "";
      const prompts = {
        search: ["⌕", "SERVER SEARCH", "Enter a username to search members who are already on the server."],
        aliases: ["≈", "SIMILAR USERNAMES", "Enter a username to find close matches among server members."],
        account: ["▤", "ACCOUNT DETAILS", "Enter the applicant's exact username to open their account record."]
      };
      const prompt = prompts[state.activeDatabaseMode] || prompts.search;
      els.databaseResults.innerHTML = emptyTool(prompt[0], prompt[1], prompt[2]);
    }
    els.databaseForm.hidden = app === "database" && ["phone", "device"].includes(mode);
    els.databaseResults.classList.toggle("full-height", app === "database" && ["phone", "device"].includes(mode));
    if (app === "database" && mode === "phone") revealPhoneLookup();
    if (app === "database" && mode === "device") revealDeviceCheck();
    if (app === "database" && !["phone", "device"].includes(mode)) setTimeout(() => els.databaseInput.focus(), 0);
    if (app === "x") setTimeout(() => els.xInput.focus(), 0);
    if (state.training.active) {
      const v = current();
      if (app === "database" && mode === "account") {
        state.activeDatabaseMode = "account";
        els.databaseInput.value = v.username.replace(/^@/,"");
        searchDatabase(v.username);
        showDatabaseProfile("applicant");
      } else if (app === "database" && mode === "search") {
        state.activeDatabaseMode = "search";
        els.databaseInput.value = v.username.replace(/^@/,"");
        searchDatabase(v.username);
      } else if (app === "x" && v.xHandle !== "—") {
        els.xInput.value = v.xHandle.replace(/^@/,"");
        searchX(v.xHandle);
      }
      trainingAction(`tool:${mode || app}`);
    }
  }
  beep("click");
}

function applicantBio(v) {
  const bios = {
    Builder: "I build small games and tools. Here for the jam.",
    Artist: "I draw creatures, environments and game art.",
    Clipmaker: "I make short clips for games and launches.",
    Member: "Here to hang out with the Dlicom community.",
    Admin: "Dlicom staff account. Working the late shift.",
    Moderator: "Community moderation and lobby support."
  };
  return v.bio || bios[v.role] || "Here for the Dlicom community night shift.";
}

function evidenceQuestion(v, reason) {
  const key = scenarioKey(v);
  const deviceAccount = v.device?.accounts.find(account => normalizeHandle(account.name) === normalizeHandle(state.deviceEvidenceAccount));
  const questions = {
    previous_ban: v.banQuestion ? { question: v.banQuestion[0], answer: v.banQuestion[1], after: "ban" } : null,
    account_too_new: {
      question: "Your account is under 14 days old, so the current rule does not allow entry. Anything to add?",
      answer: key === "@bytebloom" ? "It's a replacement account. My public build log is older than the Discord profile." : key === "@freshbyte" ? "I understand. I only made it six days ago." : "I made it recently for the jam. I didn't think the age rule would matter."
    },
    phone_not_verified: {
      question: "Why isn't your phone verified?",
      answer: "I changed numbers recently and never finished the verification step."
    },
    phone_number_mismatch: {
      question: "Why doesn't your phone number match the account record?",
      answer: key === "@crispclips"
        ? "I changed SIMs recently. I may have copied the old number into the application."
        : key === "@dili"
          ? "Staff rotate numbers. The application must still have the previous one."
          : key === "@hex_dumped"
            ? "That is my old number. I replaced it after recovering the account."
            : "I may have entered the wrong number on the application."
    },
    device_history: {
      question: v.device.accounts.length === 1 ? "Why is there another account on this device?" : "Why are several accounts using this device?",
      answer: v.device.answer,
      after: "device-history"
    },
    device_banned_account: deviceAccount ? {
      question: `Why was ${deviceAccount.name} banned on this device?`,
      answer: deviceAccount.explanation || "That account isn't mine. I don't know why it was banned.",
      after: "device-ban"
    } : null,
    device_identity_lie: {
      question: "You said there were no other accounts. Why does the device log show them?",
      answer: key === "@m0gster" ? "The real account must have used this machine before me. That still doesn't make me fake." : "I meant no other accounts that belong to me. Someone else must have used the device."
    },
    boosted_profile: {
      question: "Why does your X activity look suspicious?",
      answer: key === "@m0gster" ? "People view the profile without liking anything. That doesn't make me fake." : "The engagement spiked after a promotion. I thought the activity was organic."
    },
    role_unverified: {
      question: "How do your posts prove the role you requested?",
      answer: key === "@coolbuilder" ? "I build houses. I thought the Builder role covered that." : "They don't show everything I do. I still know the work."
    },
    impersonation: {
      question: "Why is there another account with your identity?",
      answer: "That other account is the fake one. Mine is the real profile."
    }
  };
  const item = questions[reason];
  return item ? { id: `evidence-${reason}`, ...item } : null;
}

function applicantQuestions(v) {
  const base = [
    ...v.questions.map(([question, answer], index) => ({ id: `base-${index}`, question, answer })),
    { id: "phone-number", question: "What phone number did you use?", answer: `My number is ${v.phone.spokenNumber}.`, hold: 6500, after: "phone-number" }
  ];
  const contextual = [...state.discoveredReasons]
    .map(reason => evidenceQuestion(v, reason))
    .filter(Boolean);
  const xListed = v.xHandle !== "—" && !isXHidden(v);
  if (!xListed && !state.revealed.x) {
    contextual.push({ id: "profile-x", question: "What's your X handle?", answer: v.xHandle === "—" ? "I don't use X." : `It's ${v.xHandle}.`, reveal: "x" });
  }
  if (!v.bio && !state.revealed.bio) {
    contextual.push({ id: "profile-bio", question: "Why didn't you add a bio?", answer: v.bioReason || "I skipped it when I sent the application." });
  }
  if (state.phoneLookupOpened && v.phone.verifiedRecently) {
    contextual.push({ id: "phone-recent", question: "Did you change your phone recently?", answer: v.phone.recentChangeAnswer });
  }
  if (state.phoneLinkedOpened && v.phone.linkedAccounts.length > 1) {
    contextual.push({ id: "phone-linked", question: "Why is this number linked to several accounts?", answer: v.phone.linkedAccountsAnswer });
  }
  return [...base, ...contextual];
}

function roleValueHtml(role) {
  const icon = role === "Builder" ? `<img class="role-icon" src="assets/icons/builder.svg" alt="">` : "";
  return `${icon}<b>${escapeHtml(role)}</b>`;
}

function cardHtml(v, animatedField = "") {
  const xVisible = (v.xHandle !== "—" && !isXHidden(v)) || state.revealed.x;
  const bioVisible = Boolean(v.bio) || state.revealed.bio;
  const phone = v.phone.applicationNumber
    ? `<strong>${escapeHtml(v.phone.applicationNumber)}</strong>`
    : `<strong><em class="card-missing">Not provided</em></strong>`;
  const phoneClass = `card-data-field phone-field${v.phone.applicationNumber ? " connectable" : ""}`;
  const phoneAttribute = v.phone.applicationNumber ? ` data-connect-key="application-phone"` : "";
  const xValue = xVisible ? escapeHtml(v.xHandle) : `<em class="card-missing">Not provided</em>`;
  const bioValue = bioVisible ? escapeHtml(applicantBio(v)) : `<em class="card-missing">Not provided</em>`;
  return `<article class="applicant-sheet">
    <div class="applicant-photo"><img src="${escapeHtml(v.avatar || "assets/dlicom-builder.png")}" alt="${escapeHtml(v.name)}"></div>
    <div class="applicant-section applicant-main">
      <div class="card-data-field"><span>Display name</span><strong>${escapeHtml(v.name)}</strong></div>
      <div class="card-data-field"><span>Username</span><strong>${escapeHtml(v.username)}</strong></div>
      <div class="card-data-field role-field"><span>Requested role</span><strong class="role-value">${roleValueHtml(v.role)}</strong></div>
      <div class="card-data-field"><span>Account created</span><strong>${escapeHtml(v.created)}</strong></div>
    </div>
    <div class="applicant-section applicant-contact">
      <div class="${phoneClass}"${phoneAttribute}><span>Phone number</span>${phone}</div>
      <div class="card-data-field ${animatedField === "x" ? "field-reveal" : ""}"><span>X (Twitter)</span><strong>${xValue}</strong></div>
      <div class="card-data-field card-bio ${animatedField === "bio" ? "field-reveal" : ""}"><span>Short bio</span><strong>${bioValue}</strong></div>
    </div>
  </article>`;
}

function renderCard(animatedField = "") {
  els.toolOutput.innerHTML = cardHtml(current(), animatedField);
}

function phoneQuestionUnlock(id) {
  if (applicantQuestions(current()).some(question => question.id === id)) state.unseenQuestions.add(id);
  renderQuestions();
}

function revealPhoneLookup() {
  const firstLookup = !state.phoneLookupOpened;
  state.revealed.phone = true;
  state.phoneLookupOpened = true;
  renderCard();
  state.pendingCardAnimation = "phone";
  const v = current();
  const linkedList = state.phoneLinkedOpened
    ? `<div class="phone-linked-list">${v.phone.linkedAccounts.map(account => `<button type="button" data-linked-account="${escapeHtml(account)}"><span>${escapeHtml(account)}</span><small>SEARCH SERVER →</small></button>`).join("")}</div>`
    : "";
  els.databaseResults.innerHTML = `<article class="phone-lookup-card">
    <header><span>PHONE LOOKUP</span><button class="phone-lookup-number connectable" type="button" data-connect-key="lookup-phone">${escapeHtml(v.phone.accountNumber)}</button></header>
    <div class="phone-lookup-grid">
      <button class="phone-lookup-field connectable" type="button" data-connect-key="phone-status"><span>VERIFIED</span><strong>${v.phone.verified ? "YES" : "NO"}</strong></button>
      <div class="phone-lookup-field"><span>VERIFIED SINCE</span><strong>${escapeHtml(v.phone.verifiedSince)}</strong></div>
      <div class="phone-lookup-field phone-linked-field connectable" data-connect-key="phone-linked"><span>LINKED ACCOUNTS</span><strong>${v.phone.linkedAccounts.length}</strong><button type="button" data-phone-linked>${state.phoneLinkedOpened ? "LIST OPEN" : "VIEW LIST"}</button></div>
    </div>${linkedList}
  </article>`;
  if (firstLookup && v.phone.verifiedRecently) phoneQuestionUnlock("phone-recent");
}

function revealDeviceCheck() {
  const v = current();
  state.deviceCheckOpened = true;
  const accountButtons = [
    `<button type="button" class="device-account current" data-device-current><span>${escapeHtml(v.username)}</span></button>`,
    ...v.device.accounts.map(account => `<button type="button" class="device-account" data-device-account="${escapeHtml(account.name)}"><span>${escapeHtml(account.name)}</span></button>`)
  ].join("");
  els.databaseResults.innerHTML = `<article class="device-check-card">
    <header><span>DEVICE CHECK</span><strong>LOCAL FINGERPRINT</strong></header>
    <div class="device-check-summary">
      <button class="device-id-field connectable" type="button" data-connect-key="device-id"><span>DEVICE ID</span><strong>${escapeHtml(v.device.id)}</strong></button>
      <button class="device-count-field connectable" type="button" data-connect-key="device-accounts"><span>ACCOUNTS ON THIS DEVICE</span><strong>${v.device.accounts.length + 1}</strong></button>
    </div>
    <div class="device-account-list"><span class="device-list-label">ACCOUNT USERNAMES</span>${accountButtons}</div>
  </article>`;
}

function emptyTool(icon, title, message) {
  return `<div class="empty-tool"><span>${icon}</span><strong>${escapeHtml(title)}</strong><p>${escapeHtml(message)}</p></div>`;
}

function serverDirectoryRecords(v) {
  const records = new Map();
  (v.search || []).forEach(record => records.set(normalizeHandle(record.name), { ...record }));
  (v.device?.accounts || []).forEach(account => {
    const key = normalizeHandle(account.name);
    records.set(key, { ...(records.get(key) || {}), ...account, deviceLinked: true });
  });
  return [...records.values()];
}

function searchDatabase(rawQuery, shouldRender = true) {
  const query = normalizeHandle(rawQuery);
  if (!query) throw new Error("Enter a username first");
  const v = current();
  const mode = state.activeDatabaseMode;
  const applicant = mode === "account" && query === normalizeHandle(v.username);
  const serverResults = mode === "account" ? [] : serverDirectoryRecords(v).filter(result => {
    if (/no existing member/i.test(result.note)) return false;
    const handle = normalizeHandle(result.name);
    const threshold = mode === "aliases" ? 3 : 2;
    return handle === query || handle.includes(query) || query.includes(handle) || editDistance(handle, query) <= threshold;
  });
  const result = { query, applicant, serverResults, similar: [] };
  if (!shouldRender) return result;

  const cards = [];
  if (applicant) cards.push(`<button class="lookup-result" type="button" data-record="applicant" data-record-name="${escapeHtml(v.username)}"><span class="lookup-result-top"><span>${escapeHtml(v.name.slice(0,1).toUpperCase())}</span><strong>${escapeHtml(v.username)}</strong></span><p>Open record</p></button>`);
  serverResults.forEach((entry, index) => cards.push(`<button class="lookup-result" type="button" data-record="server" data-record-name="${escapeHtml(entry.name)}" data-index="${index}"><span class="lookup-result-top"><span>${escapeHtml(entry.name.slice(1,2).toUpperCase() || "M")}</span><strong>${escapeHtml(entry.name)}</strong></span><p>Open record</p></button>`));
  els.databaseResults.innerHTML = `<div class="lookup-summary"><span>QUERY // @${escapeHtml(query)}</span><b>${Number(applicant) + serverResults.length} RESULTS</b></div>${cards.length ? cards.join("") : emptyTool("0", "NO RESULTS", mode === "account" ? "No applicant account matches that exact username." : "No server member matches that username.")}`;
  els.databaseResults.dataset.query = query;
  return result;
}

function editDistance(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) for (let j = 1; j <= a.length; j++) matrix[i][j] = b[i - 1] === a[j - 1] ? matrix[i - 1][j - 1] : Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]) + 1;
  return matrix[b.length][a.length];
}

function showDatabaseProfile(kind, index = 0) {
  const v = current();
  const back = `<button class="profile-back" type="button" data-profile-back aria-label="Back to search results">←</button>`;
  if (kind === "applicant") {
    const a = v.account;
    state.accountDetailsOpened = true;
    els.databaseResults.innerHTML = `<div class="profile-sheet"><div class="profile-title"><span>${escapeHtml(v.name.slice(0,1).toUpperCase())}</span><div><strong>${escapeHtml(v.username)}</strong><small>DIRECTORY RECORD</small></div>${back}</div><div class="profile-grid"><div class="profile-field connectable" data-connect-key="account-age"><span>ACCOUNT AGE</span><strong>${escapeHtml(a.age)}</strong></div><div class="profile-field connectable" data-connect-key="joined"><span>JOINED</span><strong>${escapeHtml(v.created)}</strong></div><div class="profile-field connectable" data-connect-key="account-phone"><span>PHONE</span><strong>${escapeHtml(v.phone.accountNumber)}</strong></div><div class="profile-field connectable" data-connect-key="previous-ban"><span>PREVIOUS BANS</span><strong class="${Number(a.bans) > 0 ? "bad" : ""}">${escapeHtml(a.bans)}</strong></div></div><p class="profile-note">${escapeHtml(a.note)}</p></div>`;
  } else if (kind === "server") {
    const query = els.databaseResults.dataset.query || normalizeHandle(els.databaseInput.value);
    const result = searchDatabase(query, false).serverResults[index];
    if (!result) return;
    const bans = Number(result.bans || (/banned/i.test(result.note) ? 1 : 0));
    const banned = bans > 0;
    const status = result.status || (banned ? "BANNED" : /online/i.test(result.note) ? "ONLINE" : "ON FILE");
    const deviceFields = result.deviceLinked
      ? `<div class="profile-field"><span>ACCOUNT AGE</span><strong>${escapeHtml(result.age || "Unknown")}</strong></div><div class="profile-field"><span>STATUS</span><strong class="${banned ? "bad" : "good"}">${escapeHtml(status)}</strong></div><div class="profile-field connectable" data-connect-key="device-ban" data-device-account="${escapeHtml(result.name)}" data-device-bans="${bans}"><span>PREVIOUS BANS</span><strong class="${banned ? "bad" : ""}">${bans}</strong></div>`
      : `<div class="profile-field connectable" data-connect-key="membership"><span>MEMBERSHIP</span><strong>${banned ? "HISTORICAL RECORD" : "ACTIVE RECORD"}</strong></div><div class="profile-field connectable" data-connect-key="status"><span>STATUS</span><strong class="${banned ? "bad" : "good"}">${escapeHtml(status)}</strong></div>`;
    els.databaseResults.innerHTML = `<div class="profile-sheet"><div class="profile-title"><span>${escapeHtml(result.name.slice(1,2).toUpperCase() || "M")}</span><div><strong>${escapeHtml(result.name)}</strong><small>${result.deviceLinked ? "DEVICE-LINKED RECORD" : "DIRECTORY RECORD"}</small></div>${back}</div><div class="profile-grid">${deviceFields}</div><p class="profile-note">${escapeHtml(result.note)}</p></div>`;
  }
}

function clearConnectionVisual() {
  if (state.connectionTimer) clearTimeout(state.connectionTimer);
  state.connectionTimer = null;
  document.documentElement.classList.remove("connection-active");
  document.querySelectorAll(".connection-wire,.connection-label").forEach(element => element.remove());
}

function clearEvidenceSelection() {
  state.selectedEvidence?.element?.classList.remove("evidence-selected");
  state.selectedEvidence = null;
  clearMobileEvidenceMode();
}

function drawConnection(sourceElement, targetElement, success, label) {
  clearConnectionVisual();
  const source = sourceElement.getBoundingClientRect();
  const target = targetElement.getBoundingClientRect();
  const startX = source.left + source.width / 2;
  const startY = source.top + source.height / 2;
  const endX = target.left + target.width / 2;
  const endY = target.top + target.height / 2;
  const distance = Math.hypot(endX - startX, endY - startY);
  const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
  const wire = document.createElement("div");
  const caption = document.createElement("div");
  wire.className = `connection-wire${success ? "" : " no-link"}`;
  caption.className = `connection-label${success ? "" : " no-link"}`;
  wire.style.left = `${startX}px`;
  wire.style.top = `${startY}px`;
  wire.style.width = `${distance}px`;
  wire.style.setProperty("--wire-angle", `${angle}deg`);
  caption.style.left = `${startX + (endX - startX) / 2}px`;
  caption.style.top = `${startY + (endY - startY) / 2}px`;
  caption.textContent = label;
  document.documentElement.classList.add("connection-active");
  document.body.append(wire, caption);
  state.connectionTimer = setTimeout(clearConnectionVisual, 1350);
}

function selectEvidence(element) {
  clearEvidenceSelection();
  state.selectedEvidence = {
    key: element.dataset.evidenceKey || element.dataset.connectKey,
    element,
    account: element.dataset.deviceAccount || "",
    bans: Number(element.dataset.deviceBans || 0)
  };
  element.classList.add("evidence-selected");
  prepareMobileEvidenceMode(element);
  showToast("EVIDENCE SELECTED // CHOOSE A TARGET", "admin");
  beep("click");
  if (state.training.active) trainingAction(`evidence:${state.selectedEvidence.key}`);
}

function connectedRejectReason(selected, v) {
  const evidenceKey = selected.key;
  if (evidenceKey === "previous-ban" && Number(v.account?.bans) > 0) return "previous_ban";
  if (evidenceKey === "account-age" && accountAgeDays(v) < state.shiftRules.minAccountAgeDays) return "account_too_new";
  if (evidenceKey === "phone-status" && state.shiftRules.phoneVerificationRequired && !v.phone.verified) return "phone_not_verified";
  if (["application-phone", "account-phone", "lookup-phone"].includes(evidenceKey) && hasPhoneNumberMismatch(v)) return "phone_number_mismatch";
  if (evidenceKey === "phone-linked" && phoneLimitExceeded(v)) return "phone_too_many_accounts";
  if (["device-id", "device-accounts"].includes(evidenceKey) && v.device.accounts.length > 0) {
    return state.deviceQuestionAsked && v.device.denies ? "device_identity_lie" : "device_history";
  }
  if (evidenceKey === "device-ban" && selected.bans > 0) return "device_banned_account";
  if (evidenceKey === "x-metrics" && hasBoostedProfile(v)) return "boosted_profile";
  if (evidenceKey === "role-proof" && FAKE_ROLE_SCENARIOS.has(scenarioKey(v))) return "role_unverified";
  if (["membership", "status"].includes(evidenceKey) && IMPERSONATORS.has(scenarioKey(v))) return "impersonation";
  return "";
}

function resolveEvidenceConnection(targetElement, targetKey) {
  const selected = state.selectedEvidence;
  if (!selected?.element?.isConnected || !targetElement) return;
  const sourceElement = selected.anchor?.isConnected ? selected.anchor : selected.element;
  const marker = state.index;
  const ageComparedToRule = selected.key === "account-age" && targetKey === "rule-account-age";
  const regularMascotConnection = targetKey === "mascot" && selected.key !== "account-age";
  const reason = ageComparedToRule || regularMascotConnection ? connectedRejectReason(selected, current()) : "";
  const success = Boolean(reason);
  const rejectReason = Boolean(REJECT_REASONS[reason]);
  drawConnection(sourceElement, targetElement, success, success ? (rejectReason ? "CONNECTION FOUND // EVIDENCE LOGGED" : "CONNECTION FOUND // QUESTION UNLOCKED") : "NO CONNECTION");
  clearEvidenceSelection();
  if (!success) {
    showToast("NO CONNECTION", "reject");
    beep("reject");
    return;
  }
  const newlyAdded = !state.discoveredReasons.has(reason);
  if (reason === "device_banned_account") {
    const account = current().device.accounts.find(item => normalizeHandle(item.name) === normalizeHandle(selected.account));
    state.deviceEvidenceAccount = account?.name || selected.account;
    state.adminReviewContext = account?.adminReview ? { username: account.name, deviceLinked: true, ...account.adminReview } : false;
    state.banQuestionAsked = false;
    updateAdminReviewButton();
  } else if (reason === "previous_ban") {
    state.adminReviewContext = null;
  }
  state.discoveredReasons.add(reason);
  if (reason === "previous_ban") state.discoveredBan = true;
  const question = evidenceQuestion(current(), reason);
  if (newlyAdded && question) state.unseenQuestions.add(question.id);
  renderQuestions();
  showToast(newlyAdded && question ? (rejectReason ? "NEW QUESTION + REJECT REASON" : "NEW QUESTION UNLOCKED") : "EVIDENCE ALREADY LOGGED", "accept");
  beep("update");
  if (state.training.active) trainingAction(`connection:${reason}`);
  if (newlyAdded && question) setTimeout(() => {
    if (state.index === marker && !state.locked && !state.ended) {
      openQuestions();
      if (state.training.active) positionTrainingGuidance();
    }
  }, 720);
}

function parseMetric(value) {
  const match = String(value || "").match(/[\d,]+/);
  return match ? Number(match[0].replace(/,/g, "")) : 0;
}

function formatMetric(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(value >= 10000000 ? 0 : 1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}K`;
  return String(value);
}

function postMetrics(v, index) {
  const supplied = v.x.metrics?.[index];
  if (supplied) return supplied;
  const average = parseMetric(v.x.likes);
  const spread = [.82, 1.14, .66][index % 3];
  const likes = Math.max(0, Math.round(average * spread));
  const views = Math.max(7, Math.round(likes * (14 + index * 3) + 12 + index * 9));
  return {
    views,
    likes,
    reposts: Math.max(0, Math.round(likes * .09)),
    replies: Math.max(0, Math.round(likes * .05))
  };
}

function accountAgeDays(v) {
  const value = String(v.account?.age || "").toLowerCase();
  if (/not yet|future|not created/.test(value)) return -1;
  const number = Number(value.match(/[\d,]+/)?.[0]?.replace(/,/g, ""));
  if (!Number.isFinite(number)) return Infinity;
  if (value.includes("year")) return number * 365;
  if (value.includes("month")) return number * 30;
  return number;
}

function hasPhoneNumberMismatch(v) {
  const applicationMismatch = Boolean(v.phone.applicationNumber && v.phone.applicationNumber !== v.phone.accountNumber);
  const spokenMismatch = state.phoneNumberAsked && v.phone.spokenNumber !== v.phone.accountNumber;
  return applicationMismatch || spokenMismatch;
}

function hasBoostedProfile(v) {
  if (!v.x) return false;
  const followers = parseMetric(v.x.followers);
  return v.x.posts.some((_, index) => {
    const metric = postMetrics(v, index);
    const lowEngagementSpike = metric.views >= 500 && metric.likes <= 3;
    const replyMismatch = metric.replies >= 10 && metric.replies > metric.likes * 2;
    const everythingSpikes = metric.views >= 700 && metric.likes >= metric.views * .08 && metric.reposts >= metric.views * .07 && metric.replies >= metric.views * .07;
    const noAudienceReach = followers <= 5 && metric.views >= 500;
    return lowEngagementSpike || replyMismatch || everythingSpikes || noAudienceReach;
  });
}

function validRejectReasons(v) {
  const valid = new Set();
  if (state.shiftRules.phoneVerificationRequired && !v.phone.verified) valid.add("phone_not_verified");
  if (hasPhoneNumberMismatch(v) && v.allowed === false) valid.add("phone_number_mismatch");
  if (phoneLimitExceeded(v)) valid.add("phone_too_many_accounts");
  if (v.device.accounts.some(account => Number(account.bans) > 0) && v.allowed === false && state.adminVerdict !== "allow") valid.add("device_banned_account");
  if (v.device.denies && v.allowed === false) valid.add("device_identity_lie");
  if (Number(v.account?.bans) > 0 && v.allowed === false && state.adminVerdict !== "allow") valid.add("previous_ban");
  if (accountAgeDays(v) < state.shiftRules.minAccountAgeDays && v.allowed === false) valid.add("account_too_new");
  if (hasBoostedProfile(v) && v.allowed === false) valid.add("boosted_profile");
  if (FAKE_ROLE_SCENARIOS.has(scenarioKey(v))) valid.add("role_unverified");
  if (IMPERSONATORS.has(scenarioKey(v))) valid.add("impersonation");
  return valid;
}

function metricIcon(type) {
  const icons = {
    views: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.8"/></svg>`,
    likes: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5-8.8 10-8.8 10s-8.8-5-8.8-10A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z"/></svg>`,
    reposts: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 3-3 3 3M10 4v11a4 4 0 0 0 4 4h5M17 17l3 3-3 3M20 20V9a4 4 0 0 0-4-4h-2"/></svg>`,
    replies: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.5a7.8 7.8 0 0 1-8.2 7.4 9.7 9.7 0 0 1-3.2-.7L4 20l1.6-4.1A7 7 0 0 1 3.5 11c0-4.1 3.8-7.5 8.5-7.5s8.5 3.3 8.5 8Z"/></svg>`
  };
  return icons[type] || "";
}

function searchX(rawQuery, shouldRender = true) {
  const query = normalizeHandle(rawQuery);
  if (!query) throw new Error("Enter an X handle first");
  const v = current();
  const found = Boolean(v.x && query === normalizeHandle(v.xHandle));
  if (found && shouldRender) state.xProfileOpened = true;
  if (shouldRender) {
    els.xResults.innerHTML = found ? `<div class="lookup-summary"><span>PROFILE // @${escapeHtml(query)}</span><b>1 RESULT</b></div><article class="x-profile-card"><h3>${escapeHtml(v.xHandle)}</h3><p>Joined ${escapeHtml(v.x.since)}</p><div class="x-stats"><span><b>${escapeHtml(v.x.followers)}</b> followers</span><span><b>${escapeHtml(v.x.following)}</b> following</span><span><b>${escapeHtml(v.x.likes)}</b> likes</span></div><div class="x-evidence-grid"><button class="x-evidence connectable" type="button" data-connect-key="x-metrics"><span>ENGAGEMENT</span><b>Connect metrics</b></button><button class="x-evidence connectable" type="button" data-connect-key="role-proof"><span>ROLE CLAIM</span><b>Connect posts</b></button></div>${v.x.posts.map((post, index) => { const metrics = postMetrics(v, index); return `<div class="x-profile-post" data-post-index="${index}"${index === 0 ? ` data-training-post="role-proof"` : ""}><p>${escapeHtml(post)}</p><div class="post-stats"><span>${metricIcon("views")}<b>${formatMetric(metrics.views)}</b> views</span><span>${metricIcon("likes")}<b>${formatMetric(metrics.likes)}</b></span><span>${metricIcon("reposts")}<b>${formatMetric(metrics.reposts)}</b></span><span>${metricIcon("replies")}<b>${formatMetric(metrics.replies)}</b></span></div></div>`; }).join("")}</article>` : emptyTool("0", "PROFILE NOT FOUND", "No public profile matches that exact handle.");
  }
  return { query, found, profile: found ? v.x : null };
}

function resetTabletTools() {
  els.databaseForm.hidden = false;
  els.databaseInput.value = "";
  els.xInput.value = "";
  els.databaseResults.innerHTML = emptyTool("⌕", "NO QUERY", "Use the name on the applicant card, or search any claimed inviter.");
  els.xResults.innerHTML = emptyTool("𝕏", "PROFILE LOOKUP", "Enter the handle shown on the applicant card.");
}

function renderQuestions() {
  const questions = applicantQuestions(current());
  const count = questions.length;
  els.questionOptions.dataset.count = String(count);
  els.questionOptions.classList.toggle("dense", count >= 5);
  els.questionOptions.innerHTML = questions.map((item, index) => {
    const angle = -90 + (360 / Math.max(1, count)) * index;
    const radians = angle * Math.PI / 180;
    const left = 50 + Math.cos(radians) * (count <= 3 ? 61 : 64);
    const top = 50 + Math.sin(radians) * (count <= 3 ? 52 : 55);
    const fresh = state.unseenQuestions.has(item.id) ? " newly-unlocked" : "";
    return `<button type="button" class="question-choice${fresh}" data-question="${index}" data-question-id="${escapeHtml(item.id)}" style="left:${left.toFixed(2)}%;top:${top.toFixed(2)}%;transform:translate(-50%,-50%)">${escapeHtml(item.question)}</button>`;
  }).join("");
  els.questionOptions.querySelector(".question-choice")?.classList.add("pointed");
  els.visitorButton.classList.toggle("has-new-question", state.unseenQuestions.size > 0);
}

function pointAtQuestion(choice) {
  if (!choice) return;
  const hub = els.closeQuestions.getBoundingClientRect();
  const rect = choice.getBoundingClientRect();
  const centerX = hub.left + hub.width / 2;
  const centerY = hub.top + hub.height / 2;
  const targetAngle = Math.atan2(rect.top + rect.height / 2 - centerY, rect.left + rect.width / 2 - centerX) * 180 / Math.PI;
  const shortestTurn = ((targetAngle - state.wheelAngle + 540) % 360) - 180;
  state.wheelAngle += shortestTurn;
  els.wheelPointer.style.setProperty("--wheel-angle", `${state.wheelAngle}deg`);
  els.wheelPointer.dataset.question = choice.dataset.question;
  els.questionOptions.querySelectorAll(".question-choice").forEach(option => option.classList.toggle("pointed", option === choice));
}

function updateQuestionPointer(event) {
  if (els.drawer.hidden) return;
  const hub = els.closeQuestions.getBoundingClientRect();
  const centerX = hub.left + hub.width / 2;
  const centerY = hub.top + hub.height / 2;
  const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180 / Math.PI;

  let closest = null;
  let closestDistance = Infinity;
  els.questionOptions.querySelectorAll(".question-choice").forEach(choice => {
    const rect = choice.getBoundingClientRect();
    const choiceAngle = Math.atan2(rect.top + rect.height / 2 - centerY, rect.left + rect.width / 2 - centerX) * 180 / Math.PI;
    const distance = Math.abs(((choiceAngle - angle + 540) % 360) - 180);
    if (distance < closestDistance) { closestDistance = distance; closest = choice; }
  });
  if (closest && els.wheelPointer.dataset.question !== closest.dataset.question) pointAtQuestion(closest);
}

function hideConversation() {
  state.conversationTimers.forEach(clearTimeout);
  state.conversationTimers = [];
  els.playerQuestion.closest(".dialogue-line")?.classList.remove("leaving");
  els.answer.closest(".dialogue-line")?.classList.remove("leaving");
  els.conversation.hidden = true;
  els.conversation.classList.remove("solo-reply");
  els.stage.classList.remove("talking");
}

function hideVisitorIntro() {
  state.introTimers.forEach(clearTimeout);
  state.introTimers = [];
  els.speechCard.classList.remove("leaving");
  els.speechCard.hidden = true;
  if (els.conversation.classList.contains("solo-reply")) {
    els.answer.closest(".dialogue-line")?.classList.remove("leaving");
    els.conversation.hidden = true;
    els.conversation.classList.remove("solo-reply");
    els.stage.classList.remove("talking");
  }
}

function showSoloVisitorLine(v, text, fadeAt, hideAt) {
  hideConversation();
  hideVisitorIntro();
  els.answer.textContent = text;
  els.answerSpeaker.textContent = v.name.toUpperCase();
  els.conversation.classList.add("solo-reply");
  els.conversation.hidden = false;
  els.stage.classList.add("talking");
  playAlienSpeech(text);
  state.introTimers.push(setTimeout(() => els.answer.closest(".dialogue-line")?.classList.add("leaving"), fadeAt));
  state.introTimers.push(setTimeout(() => {
    els.conversation.hidden = true;
    els.conversation.classList.remove("solo-reply");
    els.answer.closest(".dialogue-line")?.classList.remove("leaving");
    els.stage.classList.remove("talking");
    state.introTimers = [];
  }, hideAt));
  return hideAt + 30;
}

function showVisitorIntro() {
  showSoloVisitorLine(current(), current().intro, 3200, 3650);
}

function decisionExitLine(v, accepted, correct, rejectReason) {
  if (Math.random() >= .8) return "";
  const key = scenarioKey(v);
  const pools = accepted ? [...EXIT_LINES.accepted] : [...EXIT_LINES.rejected];

  if (accepted && IMPERSONATORS.has(key)) pools.push(EXIT_LINES.impersonatorAccepted, EXIT_LINES.impersonatorAccepted);
  if (!accepted && IMPERSONATORS.has(key)) pools.push(EXIT_LINES.impersonatorRejected, EXIT_LINES.impersonatorRejected);
  if (!accepted && SCAMMERS.has(key)) pools.push(EXIT_LINES.scammerRejected);
  if (!accepted && v.allowed) pools.push(EXIT_LINES.falseReject, EXIT_LINES.falseReject);
  if (!accepted && rejectReason === "deny_anyway") pools.push(EXIT_LINES.weakReason, EXIT_LINES.weakReason);
  if (v.role === "Builder") pools.push(accepted ? EXIT_LINES.builder : EXIT_LINES.builderRejected);
  if (["Artist", "Clipmaker"].includes(v.role)) pools.push(accepted ? EXIT_LINES.creator : EXIT_LINES.creatorRejected);

  return randomFrom(randomFrom(pools));
}

function showDecisionExitLine(v, line) {
  hideVisitorIntro();
  if (!line) return 0;
  return showSoloVisitorLine(v, line, 1300, 1720);
}

function activeAdminReview() {
  if (state.adminReviewContext === false) return null;
  if (state.adminReviewContext) return state.adminReviewContext;
  const v = current();
  return v.adminReview ? { username: v.username, deviceLinked: false, ...v.adminReview } : null;
}

function updateAdminReviewButton() {
  const reviewReady = Boolean(activeAdminReview() && state.banQuestionAsked && !state.adminReviewSent && !state.locked);
  els.adminReview.hidden = !reviewReady;
}

function requestAdminReview() {
  const review = activeAdminReview();
  if (!review || !state.banQuestionAsked || state.adminReviewSent || state.locked) return;
  state.adminReviewSent = true;
  updateAdminReviewButton();
  setApp("discord");
  setChannel("admins");
  addMessage("admins", "you", review.deviceLinked
    ? `retree, can you review the ban on ${review.username}? It is linked to the applicant's device.`
    : `retree, can you review the old ban on ${review.username}? They say the account was compromised.`, {
    admin: false,
    avatar: null,
    accent: "#7cf7d4"
  });
  if (state.training.active) trainingAction("admin:sent");
  const marker = state.index;
  setTimeout(() => {
    addMessage("admins", "retree", review.response, { avatar: ADMIN_AVATAR, accent: "#ffb26b", trainingFocus: state.training.active ? "verdict" : "" });
    if (state.index === marker) state.adminVerdict = review.verdict;
    showToast("RETREE RESPONDED // #ADMINS", "admin");
    if (state.training.active) trainingAction("admin:responded");
  }, 950);
}

function showConversation(question, answer, reveal = "", after = "", hold = 4650) {
  hideConversation();
  hideVisitorIntro();
  els.drawer.hidden = true;
  els.conversation.classList.remove("solo-reply");
  els.playerQuestion.textContent = question;
  els.answer.textContent = answer;
  els.answerSpeaker.textContent = current().name.toUpperCase();
  els.stage.classList.add("talking");
  els.conversation.hidden = false;
  state.conversationTimers.push(setTimeout(() => playAlienSpeech(answer), 380));
  if (reveal) {
    state.conversationTimers.push(setTimeout(() => {
      state.revealed[reveal] = true;
      renderCard(reveal);
    }, 650));
  }
  if (["ban", "device-ban"].includes(after)) {
    state.conversationTimers.push(setTimeout(() => {
      state.banQuestionAsked = true;
      updateAdminReviewButton();
    }, 650));
  }
  if (after === "phone-number") {
    state.conversationTimers.push(setTimeout(() => {
      state.phoneNumberAsked = true;
    }, 650));
  }
  if (after === "device-history") {
    state.conversationTimers.push(setTimeout(() => {
      state.deviceQuestionAsked = true;
    }, 650));
  }
  state.conversationTimers.push(setTimeout(() => els.playerQuestion.closest(".dialogue-line")?.classList.add("leaving"), Math.min(3500, hold - 1150)));
  state.conversationTimers.push(setTimeout(() => els.answer.closest(".dialogue-line")?.classList.add("leaving"), hold - 500));
  state.conversationTimers.push(setTimeout(() => {
    els.conversation.hidden = true;
    els.stage.classList.remove("talking");
    state.conversationTimers = [];
  }, hold));
}

function openQuestions() {
  if (state.locked || !state.started) return;
  state.activeApp = "discord";
  els.toolTray.hidden = true;
  document.querySelectorAll(".verify-button").forEach(button => button.classList.remove("active"));
  hideConversation();
  hideVisitorIntro();
  els.drawer.hidden = false;
  renderQuestions();
  pointAtQuestion(els.questionOptions.querySelector(".question-choice"));
  beep("click");
}

function clearVisitorArrival() {
  state.arrivalTimers.forEach(clearTimeout);
  state.arrivalTimers = [];
  if (state.arrivalFrame) cancelAnimationFrame(state.arrivalFrame);
  state.arrivalFrame = 0;
  els.visitorButton.classList.remove("arrived", "pre-enter", "entering", "settling");
}

function normalizedMascotScale(image) {
  const ratio = image.naturalWidth / Math.max(1, image.naturalHeight);
  if (ratio < .7) return 1.1;
  if (ratio < .78) return 1.035;
  return .985;
}

function preloadVisitorImage(source) {
  return new Promise(resolve => {
    const image = new Image();
    const finish = async () => {
      try { await image.decode(); } catch {}
      resolve(image);
    };
    image.addEventListener("load", finish, { once: true });
    image.addEventListener("error", () => resolve(null), { once: true });
    image.src = source;
  });
}

async function beginVisitorArrival(v) {
  const marker = state.index;
  const requestedSource = encodeURI(v.mascotImage || "assets/dlicom-builder.png");
  let loadedImage = await preloadVisitorImage(requestedSource);
  if (!loadedImage) loadedImage = await preloadVisitorImage("assets/dlicom-builder.png");
  if (!loadedImage || state.index !== marker || state.ended) return;

  els.image.src = loadedImage.src;
  els.image.alt = `${v.name}, a Dlicom visitor waiting at the window`;
  els.image.style.setProperty("--mascot-filter", v.filter || "none");
  els.image.style.setProperty("--mascot-scale", normalizedMascotScale(loadedImage));
  els.visitorButton.classList.add("pre-enter");
  els.stage.classList.remove("deciding");
  els.visitorButton.hidden = false;
  void els.visitorButton.offsetWidth;

  state.arrivalFrame = requestAnimationFrame(() => {
    if (state.index !== marker || state.ended) return;
    state.arrivalFrame = 0;
    els.visitorButton.classList.add("entering");
    els.visitorButton.classList.remove("pre-enter");
    playFootsteps(2400);
    state.arrivalTimers.push(setTimeout(() => {
      if (state.index !== marker || state.ended) return;
      els.visitorButton.classList.remove("entering");
      els.visitorButton.classList.add("settling");
      state.arrivalTimers.push(setTimeout(() => {
        if (state.index !== marker || state.ended) return;
        els.visitorButton.classList.remove("settling");
        els.visitorButton.classList.add("arrived");
        state.locked = false;
        els.accept.disabled = false;
        els.reject.disabled = false;
        showVisitorIntro();
        if (state.training.active) trainingVisitorReady();
      }, 180));
    }, 2400));
  });
}

function renderVisitor() {
  const v = current();
  clearVisitorArrival();
  clearTimeout(state.speechTimer);
  els.visitorButton.classList.remove("speaking");
  clearConnectionVisual();
  clearEvidenceSelection();
  closeRejectMenu();
  els.stage.classList.remove("depart-accept", "depart-reject");
  els.visitorButton.hidden = true;
  els.visitorButton.classList.add("pre-enter");
  state.locked = true;
  state.cardOpen = false;
  state.activeApp = "discord";
  els.drawer.hidden = true;
  els.toolTray.hidden = true;
  document.querySelectorAll(".verify-button").forEach(button => button.classList.remove("active"));
  hideConversation();
  state.activeDatabaseMode = "search";
  state.discoveredBan = false;
  state.banQuestionAsked = false;
  state.adminReviewSent = false;
  state.adminVerdict = null;
  state.adminReviewContext = null;
  state.discoveredReasons = new Set();
  state.unseenQuestions = new Set();
  state.accountDetailsOpened = false;
  state.xProfileOpened = false;
  state.phoneLookupOpened = false;
  state.phoneLinkedOpened = false;
  state.phoneNumberAsked = false;
  state.deviceCheckOpened = false;
  state.deviceQuestionAsked = false;
  state.deviceEvidenceAccount = "";
  state.wheelAngle = -90;
  els.wheelPointer.style.setProperty("--wheel-angle", "-90deg");
  els.adminReview.hidden = true;
  state.revealed = { phone: false, x: false, bio: false };
  els.accept.disabled = true; els.reject.disabled = true;
  els.caseId.textContent = `CASE // ${String(state.index + 1).padStart(3,"0")}`;
  els.progressLabel.textContent = `${String(state.index).padStart(2,"0")} / ${visitors.length}`;
  els.progress.style.width = `${(state.index / visitors.length) * 100}%`;
  renderShiftClock();
  els.speaker.textContent = v.name.toUpperCase();
  els.intro.textContent = v.intro;
  els.visitorButton.setAttribute("aria-label", `Talk to ${v.name}`);
  renderCard();
  els.checks.textContent = "check the records";
  renderQuestions();
  resetTabletTools();
  hideVisitorIntro();
  beginVisitorArrival(v);
  const marker = state.index;
  if (v.hint) setTimeout(() => {
    if (state.index !== marker || state.locked) return;
    if (v.hintAvatar) addMessage("general", v.hint[0], v.hint[1], { avatar: v.hintAvatar });
    else addCastMessage("observer", v.hint[1]);
  }, 4200);
}

function showToast(message, tone) {
  els.toast.textContent = message;
  els.toast.style.color = tone === "reject" ? "var(--coral)" : tone === "admin" ? "var(--yellow)" : "var(--cyan)";
  els.toast.classList.add("show");
  setTimeout(() => els.toast.classList.remove("show"), 1250);
}

function scamMessageFor(v) {
  const messages = {
    "@crispclips": "LIMITED CREATOR BOOST — sign in at dlicom-clips.live and I'll feature your build",
    "@coolbuilder": "Need a house, renovation or new roof? DM me for a free construction estimate — full crew available this week.",
    "@hex_dumped": "New wallet helper beta: claim-dlicom.tools — connect now for early access",
    "@m0gster": "Hey guys, send me $100 and I'll send $200 back. DM me now.",
    "@mossbytes": "Phone check is broken — use dlicom-verify.help to bypass it and join the jam",
    "@tomorrow": "Tomorrow's invite is already active: dlicom-next-day.xyz — open it before the clock catches up",
    "@dili": "STAFF DROP: verify your admin session at dlicom-staff-login.xyz",
    "@night-admin": "Moderator notice: enter your recovery code at dlicom-access.xyz"
  };
  return messages[scenarioKey(v)] || "LIMITED DLICOM AIRDROP — claim now at dlicom-reward.xyz";
}

function launchTrainingIncident() {
  if (!state.training.active || state.messages.general.some(entry => entry.trainingFocus === "incident")) return;
  const actor = state.chatCast.friend || state.chatCast.observer || state.chatCast.witness || {
    name: "community_user",
    username: "@community_user",
    avatar: null
  };
  const incident = {
    visitor: actor.username,
    scenarioKey: "@crispclips",
    status: "active",
    resolved: false,
    escalations: 0,
    timers: [],
    training: true,
    postedAt: Date.now()
  };
  state.incidents.push(incident);
  const entry = addMessage("general",actor.name,"AIRDROP IS LIVE 🔥 Claim your reward at dlicom-night-drop.xyz",{
    avatar: actor.avatar,
    accent: actor.accent,
    scam: true,
    incident,
    sourceVisitor: actor.username,
    trainingFocus: "incident"
  });
  incident.entryId = entry.id;
  applyCommunityChanges({ safety: -3, trust: -1 },"INCIDENT ACTIVE");
}

function scheduleIncidentStep(incident, delay, task) {
  const timer = setTimeout(() => {
    if (!state.started || state.ended || incident.resolved) return;
    task();
  }, delay);
  incident.timers.push(timer);
  state.incidentTimers.push(timer);
}

function launchIncident(v, incident) {
  if (!state.started || state.ended || incident.resolved) return;
  incident.status = "active";
  incident.postedAt = Date.now();
  const entry = addMessage("general", v.username.replace(/^@/, ""), scamMessageFor(v), {
    avatar: v.avatar,
    scam: true,
    incident,
    sourceVisitor: v.username
  });
  incident.entryId = entry.id;
  applyCommunityChanges({ safety: -3, trust: -1 }, "INCIDENT ACTIVE");

  if (state.community.supporters > 0) {
    scheduleIncidentStep(incident, 4200, () => {
      addCastMessage("supporter", `@mod suspicious link from ${v.username} — please check it`, { accent: "#7cf7d4" });
    });
  }

  const firstEscalation = state.community.supporters > 0 ? 14000 : 10000;
  scheduleIncidentStep(incident, firstEscalation, () => {
    incident.escalations = 1;
    addCastMessage("curious", "is this legit?", { accent: "#f0d66d" });
    applyCommunityChanges({ safety: -5, trust: -3 }, "SCAM SPREADING");
  });
  scheduleIncidentStep(incident, firstEscalation + 10000, () => {
    incident.escalations = 2;
    addCastMessage("victim", "clicked it 💀 why was that still up", { accent: "#ff6f79" });
    applyCommunityChanges({ safety: -5, trust: -4 }, "MEMBER AFFECTED");
  });
  scheduleIncidentStep(incident, firstEscalation + 19000, () => {
    incident.escalations = 3;
    incident.failed = true;
    addMessage("general", "system", "Two members left the server after the incident.", { accent: "#ff6f79" });
    applyCommunityChanges({ safety: -7, trust: -5, activity: -5, members: -2 }, "COMMUNITY DAMAGE");
  });
}

function queueScam(v) {
  const incident = { visitor: v.username, scenarioKey: scenarioKey(v), status: "scheduled", resolved: false, escalations: 0, timers: [] };
  state.incidents.push(incident);
  const delay = 5000 + Math.floor(Math.random() * 15001);
  scheduleIncidentStep(incident, delay, () => launchIncident(v, incident));
}

function refreshMessageEntry(entry) {
  const node = [...els.channelFeed.querySelectorAll("[data-message-id]")].find(item => item.dataset.messageId === entry.id);
  if (!node) return renderChannel();
  const scrollTop = els.channelFeed.scrollTop;
  node.outerHTML = channelMessageHtml(entry);
  els.channelFeed.scrollTop = scrollTop;
}

function resolveIncident(entry) {
  const incident = entry.incident;
  if (!incident || incident.resolved || !entry.deleted || !entry.banned) return;
  incident.resolved = true;
  incident.status = "resolved";
  incident.timers.forEach(clearTimeout);
  state.incidentsResolved += 1;
  if (SCAMMERS.has(incident.scenarioKey)) state.threatsStopped += 1;
  if (IMPERSONATORS.has(incident.scenarioKey)) state.impostorsCaught += 1;
  if (!incident.training) applyCommunityChanges({ members: -1 }, "");
  showToast("INCIDENT CONTAINED // +50", "accept");
}

function moderateMessage(id, action) {
  const entry = state.messages.general.find(message => message.id === id);
  if (!entry || !entry.scam) return;
  if (action === "delete") {
    entry.deleted = true;
    if (!entry.deleteRewarded) { state.recoveryBonus += 25; entry.deleteRewarded = true; }
    showToast("MESSAGE DELETED", "reject");
  }
  if (action === "ban") {
    entry.banned = true;
    if (!entry.banRewarded) { state.recoveryBonus += 25; entry.banRewarded = true; }
    showToast(`${entry.name.toUpperCase()} BANNED`, "reject");
  }
  entry.menuOpen = !(entry.deleted && entry.banned);
  resolveIncident(entry);
  refreshMessageEntry(entry);
  if (state.training.active) trainingAction(`incident:${action === "delete" ? "deleted" : "banned"}`);
}

function roleCommunityKey(role) {
  return ({ Builder: "builders", Artist: "artists", Clipmaker: "clipmakers", Supporter: "supporters" })[role] || "";
}

function goodVisitorEffects(v) {
  const changes = { members: 1 };
  const roleKey = roleCommunityKey(v.role);
  if (roleKey) changes[roleKey] = 1;
  if (v.role === "Builder") Object.assign(changes, { activity: 5, trust: 1 });
  else if (v.role === "Artist") Object.assign(changes, { activity: 3, trust: 3 });
  else if (v.role === "Clipmaker") Object.assign(changes, { activity: 5, trust: 1 });
  else if (v.role === "Supporter") Object.assign(changes, { safety: 3, trust: 2 });
  else Object.assign(changes, { activity: 2, trust: 1 });
  return changes;
}

function scheduleCommunityContribution(v) {
  const contributions = {
    Builder: "finally shipped my prototype 🔥 anyone up for a playtest?",
    Artist: "finished the new jam artwork — sending it to the builders now",
    Clipmaker: "made a clip from one of the jam games 🔥",
    Supporter: "I'm around tonight — tag me if anything in chat looks suspicious"
  };
  const message = contributions[v.role] || "glad to be here — the lobby feels alive tonight";
  const timer = setTimeout(() => {
    if (!state.started || state.ended) return;
    addMessage("general", v.name, message, { accent: "#7cf7d4", avatar: v.avatar });
  }, 9000 + (state.index % 3) * 2500);
  state.communityTimers.push(timer);
}

function applyFalseReject(v) {
  const followers = Number(String(v.x?.followers || "0").replace(/[^\d]/g, ""));
  const creator = ["Builder", "Artist", "Clipmaker"].includes(v.role);
  const changes = followers >= 2500
    ? { trust: -8, activity: -5 }
    : creator ? { trust: -4, activity: -3 } : { trust: -1 };
  state.falseRejects += 1;
  applyCommunityChanges(changes, "FALSE REJECT");
}

function availableRejectReasons() {
  return [...Object.keys(REJECT_REASONS).filter(key => key !== "deny_anyway" && state.discoveredReasons.has(key)), "deny_anyway"];
}

function openRejectMenu() {
  if (state.locked || !state.started || state.ended) return;
  const reasons = availableRejectReasons();
  els.rejectReasons.innerHTML = reasons.map(key => {
    const [title, description] = REJECT_REASONS[key];
    return `<button class="reject-reason ${key === "deny_anyway" ? "no-evidence" : ""}" type="button" data-reject-reason="${key}"><span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(description)}</small></span><span>→</span></button>`;
  }).join("");
  els.rejectOverlay.hidden = false;
  els.rejectReasons.querySelector(".reject-reason")?.focus();
  beep("click");
}

function closeRejectMenu() {
  if (els.rejectOverlay) els.rejectOverlay.hidden = true;
}

function postDecisionConsequence(v, consequence) {
  if (!consequence) return;
  const templateHandle = scenarioKey(v);
  const adaptedMessage = consequence[1]
    .replaceAll(templateHandle, v.username)
    .replaceAll(templateHandle.replace(/^@/, ""), v.username.replace(/^@/, ""));
  const applicantIsSpeaker = normalizeHandle(consequence[0]) === normalizeHandle(templateHandle);
  setTimeout(() => {
    if (state.ended) return;
    if (applicantIsSpeaker) {
      addMessage("general", v.name, adaptedMessage, { avatar: v.avatar });
    } else if (consequence[0] === "system") {
      addMessage("general", "system", adaptedMessage, { accent: "#ff6f79" });
    } else {
      addCastMessage("witness", adaptedMessage);
    }
  }, 800);
}

function registerUnjustifiedReject(v) {
  state.unjustifiedRejects += 1;
  if (v.allowed) applyFalseReject(v);
  else applyCommunityChanges({ trust: -3, activity: -1 }, "UNSUPPORTED REJECT");
  if (state.ended) return true;

  if (state.unjustifiedRejects === 2) {
    addMessage("admins", "retree", "Yo, what's going on? Too many people are being rejected without evidence. Check the records and document the reason before denying access.", { avatar: ADMIN_AVATAR, accent: "#ffb26b" });
    showToast("RETREE WARNING // #ADMINS", "admin");
  }
  if (state.unjustifiedRejects >= 3) {
    addMessage("admins", "retree", "Stop the shift. Three unsupported rejections is too much — I'm taking over moderation.", { avatar: ADMIN_AVATAR, accent: "#ff6f79" });
    applyCommunityChanges({ trust: -8, activity: -4 }, "MODERATION FAILURE");
    setTimeout(() => finishShift("fired"), 1050);
    return true;
  }
  return false;
}

function decide(choice, rejectReason = "") {
  if (state.training.active) return decideTraining(choice);
  if (state.locked || !state.started) return;
  const v = current();
  closeRejectMenu();
  clearEvidenceSelection();
  clearConnectionVisual();
  state.locked = true;
  els.accept.disabled = true; els.reject.disabled = true;
  els.drawer.hidden = true;
  els.toolTray.hidden = true;
  els.adminReview.hidden = true;
  hideConversation();
  const accepted = choice === "accept";
  els.stage.classList.remove("depart-accept", "depart-reject");
  els.stage.classList.add(accepted ? "depart-accept" : "depart-reject");
  const reasonValid = accepted || validRejectReasons(v).has(rejectReason);
  const correct = accepted ? v.allowed : (!v.allowed && reasonValid);
  const impersonatorCaught = !accepted && correct && IMPERSONATORS.has(scenarioKey(v));
  const points = correct
    ? (accepted ? 100 : (impersonatorCaught ? 150 : 120))
    : (accepted ? -140 : -80);
  state.decisionScore += points;
  state.decisions.push({ username: v.username, identityKey: v.identityKey, choice, rejectReason, correct, points });
  beep(choice);
  const rejectLabel = REJECT_REASONS[rejectReason]?.[0];
  showToast(accepted ? "ACCESS GRANTED // LOGGED" : `${rejectLabel || "ENTRY DENIED"} // LOGGED`, choice);
  const departureDelay = showDecisionExitLine(v, decisionExitLine(v, accepted, correct, rejectReason));
  const visitorMarker = state.index;
  setTimeout(() => {
    if (state.index === visitorMarker && !state.ended) els.stage.classList.add("deciding");
  }, departureDelay);
  const consequence = accepted ? v.consequence.yes : v.consequence.no;
  if ((accepted && v.allowed) || (!accepted && v.allowed) || (!accepted && correct)) postDecisionConsequence(v, consequence);

  if (accepted && v.allowed) {
    applyCommunityChanges(goodVisitorEffects(v), "");
    scheduleCommunityContribution(v);
  } else if (!accepted && !v.allowed && correct) {
    if (SCAMMERS.has(scenarioKey(v))) state.threatsStopped += 1;
    if (impersonatorCaught) state.impostorsCaught += 1;
    applyCommunityChanges({ safety: 3, trust: 1 }, "");
  } else if (!accepted) {
    if (registerUnjustifiedReject(v)) return;
  } else if (accepted && !v.allowed) {
    applyCommunityChanges({ members: 1 }, "");
    if (FAKE_ADMINS.has(scenarioKey(v))) {
      setTimeout(() => finishShift("fake_admin"), departureDelay + 1050);
      return;
    }
    queueScam(v);
  }
  setTimeout(nextVisitor, departureDelay + 1450);
}

function nextVisitor() {
  if (state.ended) return;
  state.index += 1;
  if (state.index >= visitors.length) return finishShift();
  if (state.index === 8) {
    state.shiftRules = { ...SHIFT_RULE_PRESETS.phoneLimits };
    renderShiftRules();
  }
  renderVisitor();
  const update = adminUpdates[state.index];
  if (update) {
    addMessage("admins", update[0], update[1]);
    showToast("NEW MESSAGE // #ADMINS", "admin");
  }
}

function finishShift(lossType = "") {
  if (state.ended) return;
  state.ended = true;
  state.locked = true;
  [...state.incidentTimers, ...state.communityTimers].forEach(clearTimeout);

  state.incidents.filter(incident => !incident.resolved).forEach(incident => {
    if (incident.finalized) return;
    incident.finalized = true;
    if (incident.status === "scheduled") {
      state.community.safety = clampCommunity(state.community.safety - 8);
      state.community.trust = clampCommunity(state.community.trust - 5);
    } else if (!incident.failed) {
      state.community.safety = clampCommunity(state.community.safety - 6);
      state.community.trust = clampCommunity(state.community.trust - 4);
      state.community.activity = clampCommunity(state.community.activity - 2);
    }
  });
  renderCommunityStats();

  if (!lossType && state.community.safety <= 0) lossType = "safety";
  if (!lossType && state.community.trust <= 0) lossType = "trust";
  if (!lossType && state.community.activity <= 0) lossType = "activity";
  const correct = state.decisions.filter(d => d.correct).length;
  const mistakes = state.decisions.length - correct;
  const creativeAccepted = state.decisions.filter(decision => {
    const visitor = visitors.find(item => item.identityKey ? item.identityKey === decision.identityKey : item.username === decision.username);
    return decision.choice === "accept" && visitor?.allowed && ["Builder", "Artist", "Clipmaker", "Supporter"].includes(visitor.role);
  }).length;
  const communityScore = Math.round(15 * Math.cbrt(state.community.safety * state.community.trust * state.community.activity));
  const objectiveBonus = creativeAccepted >= 3 ? 150 : creativeAccepted * 30;
  const finalScore = Math.max(0, (lossType ? 0 : 500) + state.decisionScore + communityScore + state.recoveryBonus + objectiveBonus);
  const lossCopy = {
    safety: ["SERVER COMPROMISED", "Too many malicious accounts gained access."],
    trust: ["COMMUNITY WALKOUT", "Members no longer trust the moderation team."],
    activity: ["SERVER CLOSED", "The community became inactive."],
    fake_admin: ["ADMIN ACCESS COMPROMISED", "Channels deleted. Server ownership lost."],
    fired: ["MODERATOR DISMISSED", "Too many applicants were rejected without supporting evidence."]
  };
  const ending = lossCopy[lossType];
  $("endEyebrow").textContent = ending ? "SHIFT FAILED" : "06:00 · SHIFT COMPLETE";
  $("endTitle").textContent = ending ? ending[0] : "SHIFT COMPLETE";
  $("finalScore").textContent = finalScore.toLocaleString("en-US");
  $("correctStat").textContent = `${correct} / ${visitors.length}`;
  $("mistakesStat").textContent = mistakes;
  $("stoppedStat").textContent = state.threatsStopped;
  $("impostorsStat").textContent = state.impostorsCaught;
  $("falseRejectsStat").textContent = state.falseRejects;
  $("resolvedStat").textContent = state.incidentsResolved;
  $("endSafety").textContent = state.community.safety;
  $("endTrust").textContent = state.community.trust;
  $("endActivity").textContent = state.community.activity;
  $("endBuilders").textContent = state.community.builders;
  $("endArtists").textContent = state.community.artists;
  $("endClipmakers").textContent = state.community.clipmakers;
  $("endSupporters").textContent = state.community.supporters;
  $("endMembers").textContent = state.community.members;
  $("endMessage").textContent = ending ? ending[1] : `Community survived. ${correct} correct decisions, ${mistakes} mistake${mistakes === 1 ? "" : "s"}, ${state.incidentsResolved} incident${state.incidentsResolved === 1 ? "" : "s"} contained.`;
  document.querySelector(".end-card")?.classList.toggle("failed", Boolean(ending));
  if (!ending) {
    els.progressLabel.textContent = `${visitors.length} / ${visitors.length}`;
    els.progress.style.width = "100%";
    els.shiftClock.textContent = "06:00 AM";
  }
  els.endOverlay.hidden = false;
  beep(ending ? "reject" : "update");
}

async function startShift() {
  if (state.started) return;
  state.mode = "normal";
  state.started = true;
  state.ended = false;
  els.startButton.disabled = true;
  if (state.sound || state.chatSound) audioContext();
  await Promise.all([loadGeneralChat(), loadRegionalRoster()]);
  buildVisitorQueue();
  buildChatCast();
  chooseChatStart();
  els.startOverlay.hidden = true;
  setApp("discord"); setChannel("general");
  nextGeneralChat();
  nextGeneralChat();
  nextGeneralChat();
  adminBriefing.forEach((message, index) => addMessage("admins", message[0], message[1], { time: `01:${52 + index * 2}` }));
  renderVisitor();
  if (state.poolFallback) showToast(`${selectedRegion} POOL EXHAUSTED // ALL SERVER BACKUP`, "admin");
  els.startButton.disabled = false;
}

function resetSessionState() {
  [...state.incidentTimers, ...state.communityTimers].forEach(clearTimeout);
  clearVisitorArrival();
  hideConversation();
  hideVisitorIntro();
  clearEvidenceSelection();
  state.index = 0; state.decisions = []; state.locked = false; state.started = false; state.chatIndex = 0; state.messageClock = 0;
  state.messages = { general: [], admins: [] }; state.unread = { general: 0, admins: 0 };
  state.community = { ...INITIAL_COMMUNITY }; state.decisionScore = 0; state.recoveryBonus = 0;
  state.falseRejects = 0; state.threatsStopped = 0; state.impostorsCaught = 0; state.incidentsResolved = 0;
  state.incidents = []; state.incidentTimers = []; state.communityTimers = []; state.ended = false;
  state.applicantHandles = new Set(); state.allowedDuplicateHandles = new Set(); state.poolFallback = false;
  state.chatCast = {}; state.discoveredReasons = new Set(); state.unseenQuestions = new Set();
  state.accountDetailsOpened = false; state.xProfileOpened = false; state.phoneLookupOpened = false; state.phoneLinkedOpened = false; state.phoneNumberAsked = false; state.deviceCheckOpened = false; state.deviceQuestionAsked = false; state.deviceEvidenceAccount = ""; state.adminReviewContext = null; state.unjustifiedRejects = 0;
  state.shiftRules = { ...SHIFT_RULE_PRESETS.opening };
  clearConnectionVisual(); closeRejectMenu();
  renderCommunityStats();
  renderShiftRules();
  document.querySelector(".end-card")?.classList.remove("failed");
  els.endOverlay.hidden = true;
  els.trainingComplete.hidden = true;
  els.startButton.disabled = false;
  els.trainingButton.disabled = false;
}

async function startTraining() {
  if (state.started) return;
  stopTrainingGuidance();
  resetSessionState();
  state.mode = "training";
  state.training.active = true;
  state.training.pendingStep = "t1_welcome";
  state.started = true;
  state.ended = false;
  state.locked = true;
  visitors = buildTrainingVisitors();
  document.body.classList.add("training-active");
  els.startButton.disabled = true;
  els.trainingButton.disabled = true;
  if (state.sound || state.chatSound) audioContext();
  await Promise.all([loadGeneralChat(),loadRegionalRoster()]);
  buildChatCast();
  chooseChatStart();
  els.startOverlay.hidden = true;
  setApp("discord");
  setChannel("general");
  nextGeneralChat();
  nextGeneralChat();
  addMessage("admins","retree","Training shift ready. I'll guide the first checks, then you handle the last case.",{avatar:ADMIN_AVATAR,accent:"#ffb26b",time:"01:58"});
  renderVisitor();
}

function returnToMainMenu() {
  stopTrainingGuidance();
  visitors = visitorTemplates.map(prepareVisitorTemplate);
  state.mode = "normal";
  resetSessionState();
  els.startOverlay.hidden = false;
  els.visitorButton.hidden = true;
  renderCard();
  renderShiftClock();
}

function startNightShiftFromTraining() {
  stopTrainingGuidance();
  visitors = visitorTemplates.map(prepareVisitorTemplate);
  state.mode = "normal";
  resetSessionState();
  startShift();
}

function resetShift() {
  stopTrainingGuidance();
  visitors = visitorTemplates.map(prepareVisitorTemplate);
  state.mode = "normal";
  resetSessionState();
  startShift();
}

function registerWebMCP() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const register = (tool) => { try { Promise.resolve(context.registerTool(tool)).catch(() => {}); } catch (_) {} };
  register({ name:"read_current_case", title:"Read current case", description:"Read the current visitor's submitted Join Card without revealing hidden checks or rules.", inputSchema:{type:"object",properties:{},additionalProperties:false}, annotations:{readOnlyHint:true,untrustedContentHint:false}, execute:() => ({case:state.index+1,visitor:{name:current().name,username:current().username,role:current().role,created:current().created,region:current().region,phoneStatus:state.revealed.phone?(current().phone.verified?"verified":"not_verified"):"not_checked",x:((current().xHandle!=="—"&&!isXHidden(current()))||state.revealed.x)?current().xHandle:"not_provided"}}) });
  register({ name:"open_discord_channel", title:"Open Discord channel", description:"Open General or Admins in the left community chat and return the visible channel history.", inputSchema:{type:"object",properties:{channel:{type:"string",enum:["general","admins"]}},required:["channel"],additionalProperties:false}, annotations:{readOnlyHint:false,untrustedContentHint:false}, execute:({channel}) => { setApp("discord"); setChannel(channel); return {channel,messages:state.messages[channel].map(({name,message,time})=>({name,message,time}))}; } });
  register({ name:"search_server_database", title:"Search server database", description:"Type a username into the verification terminal and show the neutral directory results.", inputSchema:{type:"object",properties:{username:{type:"string",minLength:1}},required:["username"],additionalProperties:false}, annotations:{readOnlyHint:false,untrustedContentHint:false}, execute:({username}) => { if(!state.started||state.locked) throw new Error("No active case"); setApp("database", "search"); els.databaseInput.value=username; const result=searchDatabase(username); return {query:result.query,applicant:result.applicant,serverResults:result.serverResults,similar:result.similar}; } });
  register({ name:"search_x_profile", title:"Search X profile", description:"Type an exact X handle into the verification terminal's profile viewer.", inputSchema:{type:"object",properties:{handle:{type:"string",minLength:1}},required:["handle"],additionalProperties:false}, annotations:{readOnlyHint:false,untrustedContentHint:false}, execute:({handle}) => { if(!state.started||state.locked) throw new Error("No active case"); setApp("x", "x"); els.xInput.value=handle; return searchX(handle); } });
  register({ name:"ask_visitor", title:"Ask visitor", description:"Ask the current visitor one of their available questions by zero-based index.", inputSchema:{type:"object",properties:{questionIndex:{type:"integer",minimum:0,maximum:12}},required:["questionIndex"],additionalProperties:false}, annotations:{readOnlyHint:false,untrustedContentHint:false}, execute:({questionIndex}) => { if(!state.started||state.locked) throw new Error("No active case"); const q=applicantQuestions(current())[questionIndex]; if(!q) throw new Error("Invalid question index"); state.unseenQuestions.delete(q.id); renderQuestions(); showConversation(q.question,q.answer,q.reveal,q.after,q.hold); return {question:q.question,answer:q.answer}; } });
  register({ name:"submit_access_decision", title:"Submit access decision", description:"Complete the current case by letting the visitor in or rejecting entry. Automated rejections are logged without supporting evidence.", inputSchema:{type:"object",properties:{decision:{type:"string",enum:["accept","reject"]}},required:["decision"],additionalProperties:false}, annotations:{readOnlyHint:false,untrustedContentHint:false}, execute:({decision}) => { if(!state.started||state.locked) throw new Error("No active case"); const visitor=current().username; decide(decision, decision === "reject" ? "deny_anyway" : ""); return {visitor,decision,status:"logged"}; } });
}

document.addEventListener("click",event => {
  if (!state.training.active || trainingAllows(event.target)) return;
  event.preventDefault();
  event.stopImmediatePropagation();
},true);
document.addEventListener("pointerdown",event => {
  if (!state.training.active || trainingAllows(event.target)) return;
  event.preventDefault();
  event.stopImmediatePropagation();
},true);
document.addEventListener("keydown",event => {
  if (!state.training.active || trainingAllows(event.target)) return;
  event.preventDefault();
  event.stopImmediatePropagation();
},true);

document.querySelectorAll(".channel-button").forEach(button => button.addEventListener("click", () => setChannel(button.dataset.channel)));
document.querySelectorAll(".verify-button").forEach(button => button.addEventListener("click", () => setApp(button.dataset.app, button.dataset.tool)));
els.mobileChatToggle?.addEventListener("click", () => toggleMobilePanel("chat"));
els.mobileRulesToggle?.addEventListener("click", () => toggleMobilePanel("rules"));
els.mobileDecisionToggle?.addEventListener("click", () => toggleMobilePanel("decision"));
els.mobileScrim?.addEventListener("click", () => closeMobilePanels(true));
els.mobileEvidenceChip?.addEventListener("click", restoreMobileEvidenceSource);
document.addEventListener("wheel", event => {
  if (document.documentElement.classList.contains("connection-active")) event.preventDefault();
}, { passive: false, capture: true });
document.addEventListener("touchmove", event => {
  if (document.documentElement.classList.contains("connection-active")) event.preventDefault();
}, { passive: false, capture: true });
els.toolClose.addEventListener("click", () => setApp("discord"));
els.databaseForm.addEventListener("submit", event => { event.preventDefault(); try { searchDatabase(els.databaseInput.value); beep("click"); } catch (error) { els.databaseResults.innerHTML = emptyTool("!", "ENTER A USERNAME", error.message); } });
els.xForm.addEventListener("submit", event => { event.preventDefault(); try { searchX(els.xInput.value); beep("click"); } catch (error) { els.xResults.innerHTML = emptyTool("!", "ENTER A HANDLE", error.message); } });
els.toolOutput.addEventListener("click", event => {
  const field = event.target.closest("[data-connect-key]");
  if (!field) return;
  if (!state.selectedEvidence) selectEvidence(field);
  else if (state.selectedEvidence.element === field) clearEvidenceSelection();
  else resolveEvidenceConnection(field, field.dataset.connectKey);
});
els.databaseResults.addEventListener("click", event => {
  const currentDeviceAccount = event.target.closest("[data-device-current]");
  if (currentDeviceAccount) {
    setApp("database", "account");
    els.databaseInput.value = current().username.replace(/^@/, "");
    searchDatabase(current().username);
    beep("click");
    return;
  }
  const deviceAccount = event.target.closest("[data-device-account]");
  if (deviceAccount && !deviceAccount.matches("[data-connect-key]")) {
    const account = deviceAccount.dataset.deviceAccount;
    setApp("database", "search");
    els.databaseInput.value = account.replace(/^@/, "");
    searchDatabase(account);
    beep("click");
    return;
  }
  const linkedAccount = event.target.closest("[data-linked-account]");
  if (linkedAccount) {
    const account = linkedAccount.dataset.linkedAccount;
    setApp("database", "search");
    els.databaseInput.value = account.replace(/^@/, "");
    searchDatabase(account);
    beep("click");
    return;
  }
  const linked = event.target.closest("[data-phone-linked]");
  if (linked) {
    if (!state.phoneLinkedOpened) {
      state.phoneLinkedOpened = true;
      phoneQuestionUnlock("phone-linked");
      revealPhoneLookup();
      beep("update");
    }
    return;
  }
  const back = event.target.closest("[data-profile-back]");
  if (back) {
    clearEvidenceSelection();
    clearConnectionVisual();
    return searchDatabase(els.databaseInput.value);
  }
  const field = event.target.closest("[data-connect-key]");
  if (field) {
    if (!state.selectedEvidence) selectEvidence(field);
    else if (state.selectedEvidence.element === field) clearEvidenceSelection();
    else resolveEvidenceConnection(field, field.dataset.connectKey);
    return;
  }
  const result = event.target.closest("[data-record]");
  if (result) {
    showDatabaseProfile(result.dataset.record, Number(result.dataset.index || 0));
    if (state.training.active) trainingAction(`record:${normalizeHandle(result.dataset.recordName || result.dataset.record)}`);
  }
});
els.xResults.addEventListener("click", event => {
  const field = event.target.closest("[data-connect-key]");
  if (!field) return;
  if (!state.selectedEvidence) selectEvidence(field);
  else if (state.selectedEvidence.element === field) clearEvidenceSelection();
  else resolveEvidenceConnection(field, field.dataset.connectKey);
});
els.shiftRulesList.addEventListener("click", event => {
  const target = event.target.closest("[data-connect-target]");
  if (!target || !state.selectedEvidence) return;
  resolveEvidenceConnection(target,target.dataset.connectTarget);
});
els.channelFeed.addEventListener("click", event => {
  const menuButton = event.target.closest("[data-message-menu]");
  if (menuButton) {
    const entry = state.messages.general.find(message => message.id === menuButton.dataset.messageMenu);
    if (!entry) return;
    state.messages.general.forEach(message => { if (message !== entry) message.menuOpen = false; });
    entry.menuOpen = !entry.menuOpen;
    renderChannel();
    if (state.training.active && entry.trainingFocus === "incident" && entry.menuOpen) trainingAction("incident:menu");
    return;
  }
  const actionButton = event.target.closest("[data-message-action]");
  if (actionButton) moderateMessage(actionButton.dataset.messageId, actionButton.dataset.messageAction);
});
els.visitorButton.addEventListener("click", () => {
  if (state.selectedEvidence) resolveEvidenceConnection(els.visitorButton, "mascot");
  else openQuestions();
});
els.adminReview.addEventListener("click", requestAdminReview);
els.drawer.addEventListener("pointermove", updateQuestionPointer);
els.closeQuestions.addEventListener("click", () => { els.drawer.hidden = true; });
els.questionOptions.addEventListener("click", event => {
  const button = event.target.closest("[data-question]");
  if (!button) return;
  const question = applicantQuestions(current()).find(item => item.id === button.dataset.questionId);
  if (!question) return;
  state.unseenQuestions.delete(question.id);
  renderQuestions();
  showConversation(question.question, question.answer, question.reveal, question.after, question.hold);
  if (state.training.active) trainingAction(`question:${question.id}`);
  beep("click");
});
els.accept.addEventListener("click", () => {
  closeMobilePanels(false);
  decide("accept");
});
els.reject.addEventListener("click", () => {
  closeMobilePanels(false);
  if (!state.training.active) return openRejectMenu();
  const step = currentTrainingStep();
  const expected = Array.isArray(step?.expect) ? step.expect : [step?.expect];
  if (expected.includes("reject:open")) {
    openRejectMenu();
    trainingAction("reject:open");
    return;
  }
  decide("reject",step?.rejectReason || "");
});
els.rejectClose.addEventListener("click", closeRejectMenu);
els.rejectOverlay.addEventListener("click", event => { if (event.target === els.rejectOverlay) closeRejectMenu(); });
els.rejectReasons.addEventListener("click", event => {
  const reason = event.target.closest("[data-reject-reason]");
  if (reason) decide("reject", reason.dataset.rejectReason);
});
els.regionPicker?.addEventListener("click", event => {
  const button = event.target.closest("[data-region]");
  if (!button || state.started) return;
  selectedRegion = button.dataset.region;
  els.regionPicker.querySelectorAll(".region-choice").forEach(choice => choice.classList.toggle("active", choice === button));
  updatePoolStatus();
  beep("click");
});
els.startButton.addEventListener("click", startShift);
els.trainingButton.addEventListener("click", startTraining);
els.trainingNext.addEventListener("click", advanceTrainingStep);
els.trainingSkip.addEventListener("click", () => { els.trainingSkipConfirm.hidden = false; beep("click"); });
els.trainingSkipCancel.addEventListener("click", () => { els.trainingSkipConfirm.hidden = true; beep("click"); });
els.trainingSkipAccept.addEventListener("click", returnToMainMenu);
els.trainingPlay.addEventListener("click", returnToMainMenu);
$("restartButton").addEventListener("click", resetShift);
els.soundButton.addEventListener("click", () => {
  state.sound = !state.sound;
  els.soundButton.setAttribute("aria-pressed", String(state.sound));
  els.soundLabel.textContent = state.sound ? "SOUND ON" : "SOUND OFF";
  syncAudioMix();
  beep("click");
});
els.chatSoundButton.addEventListener("click", () => {
  state.chatSound = !state.chatSound;
  els.chatSoundButton.setAttribute("aria-pressed", String(state.chatSound));
  els.chatSoundLabel.textContent = state.chatSound ? "CHAT ON" : "CHAT MUTED";
  syncAudioMix();
  beep("chatMessage");
});
els.volumeSlider.addEventListener("input", () => {
  state.masterVolume = Number(els.volumeSlider.value) / 100;
  els.volumeValue.textContent = `${els.volumeSlider.value}%`;
  syncAudioMix();
});
document.addEventListener("keydown", event => {
  if (!state.started || state.locked || !els.startOverlay.hidden || !els.endOverlay.hidden) return;
  if (event.target.matches("input")) return;
  if (state.training.active) return;
  if (event.key.toLowerCase() === "a") decide("accept");
  if (event.key.toLowerCase() === "r") openRejectMenu();
  if (event.key === "Escape") {
    closeMobilePanels(false);
    closeRejectMenu();
    clearEvidenceSelection();
    clearConnectionVisual();
    els.drawer.hidden = true;
    els.toolTray.hidden = true;
    document.querySelectorAll(".verify-button").forEach(button => button.classList.remove("active"));
    hideConversation();
  }
});

window.addEventListener("resize",() => {
  if (!isMobileLandscapeLayout()) closeMobilePanels(false);
  if (state.training.active) positionTrainingGuidance();
});

setInterval(() => {
  if (!state.started || state.locked || !els.endOverlay.hidden) return;
  nextGeneralChat();
}, 7200);

loadGeneralChat();
loadRegionalRoster();
renderCommunityStats();
renderCard();
renderShiftClock();
renderShiftRules();
renderChannel();
updateUnread();
registerWebMCP();
