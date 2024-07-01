//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRjT3k4MnRGeDZQN2dWcUYyd0xBZEg4VEx3amxHV0tVZlVUVHZGM1JVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3hmSExtVUwzRWwvYzdQZFVodFd0Y0VzNXRKTkt0SjlGZ0JEUU41KzlrST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Rzd0Z3R6eFZBVXB1MU9LeXNCdXZGWm51dE1FbDdFRXNWWjVTNk9pUjA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMdWQxZ0FoLzU2NW5BVjhzOFAxajdDeldCRUpDSXhRNW16N0o3bUx3V1RBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJbW84QjhnMmp1eUlxZDdKcTE2djdscnVBQmt3M2FMN2lEcndjY1RaV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdnRVp1RHE5Ym14Nll5L0ZKcXl6NmNhRnozeGFWWFc0ZUYzblNDZmQvVWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUc1cXNUVS9XbFFHU0YyeHMzaG02TzVqTWNFRC96OFRudjRDeHZ2RURubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFlVbGt0b3RHbkpiLzZ3c3BwK29MNTN4YmdBVUxuN1lUaktFNE9HWXR4ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im53MlFPTjFGY08yY0grQ0svK3pWUStpUW5iMDdiRVBzU3Bua3duNE5XcHJsaWppRWtwWmkwb2ZETFdBL3V3RldBMTMxOXdzOEd6dy9Za3FBb1BCZ0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJaZTM4YUhIRlJVZzdLUUl6VzNmZVpVWEFJUjI3VUdyMkh1aDU0bHZnTlFvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvWHU2Qk9yTFFZcVJKeFFJOXZnZW5RIiwicGhvbmVJZCI6IjkzZGEyNDU2LTM0YmItNDMyZi1iOTIzLWI0ZmUzYmEzY2RlZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWdFJJWlF5RG9tNU9IZTVrL0lKaVY1S3hzcFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlNDMDUwVGtuRXNaKzl0N2VzeDVxMHRYc1dnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikc4SzM3MzlZIiwibWUiOnsiaWQiOiI5NDc3MzgyNDI2Njo0MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLkuILjhJbhkK/kuKjjhJrljYJcbiBcbiAgXG4gIFxuICAgXG4gIFxuICBcblxuIOKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjSAgICAgICAgICAgICAgICAgICBcbiBcbiAgXG4g5LmD44SW44SaIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKR0tsUDBERUxDZGlMUUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPUDZoL2xRaWJGcDg0T3BtL2E4N0E0YVpkT25jQnRGaU5WYmFsREVBZkF3PSIsImFjY291bnRTaWduYXR1cmUiOiIxZllKMSsvdWhJUkRNS2RlVDNsbXVFZGVMWnI0RW1LcWJoQWxaTnVkWlpZb1oyM2JYRk9OdVN1RzZhVEFoLzhzd3hEUVhzbTBsUW13UlVnc0poQzBDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiKzhMNnFFNThpZDZ6SVZkaHhEREYyLzVIR0VoRCtPb0NVSkQ2WlpzekNlY2pNODNSUDVmQkRMV3U5T1Q3dWxlY3Z2SCtaUXlyTWlnanlzZEQvVUMxQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3MzgyNDI2Njo0MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaitvZjVVSW14YWZPRHFadjJ2T3dPR21YVHAzQWJSWWpWVzJwUXhBSHdNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5Nzk5NDg2fQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349066528353";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
