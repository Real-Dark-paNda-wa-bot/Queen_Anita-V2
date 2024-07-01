//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUh6SnBjbmhoMDhGQ2ppcVk2U0ZKdndreUl4YmxVRzdtUjh3S2xSSlMyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU25rSUxtaUwxeWJ4N2pWNWd5VXhFTGNCazRlZTRYbFIzQWVscFNRNjlocz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrR1hPVUVLWlpaMHpZUHdkUWV5TG04U29QaUZJQVlZZ2dLZUlEZm9ZTmxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYZlJ0azlRaDE0SUN6bkRRNVZWUzhiSWpzU0I0M2kxdStHNEFiTHpuWUIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVLNlpnU05RdkpIRys2V25pM2pRazJTam9VYWIyMG9iUzVvNXFqNXFCWFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjByclZidzF5bENYT083UzlGZ1lWSUpESnRZdmdycC9RTzYvbXNXMytTM009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEtQSUcrOCtIQ0NGcGFFcUJqTE5SR2lkMGRhbTdFeGZtVHpOcWhVdGdsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3IrRnh2NFBIV2UyYTVHcEdwZ0kzYVFic2pZSGtkdnVqUjNPeTBoRWFFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl1S0RuTHhBN2g3OHZSZEVxU1JjM3ZCUFdrSjA0ajczekdvUEM0b3piYUs3Sk90S2M4SVB4enA1SURBRFBKMnltbzJqaGZwR0xvTlFmVTdWZ3JQUWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6IlJHK0xXblZZcHA1a0FXK1pxMVZ2YXhIL3p5bk0yYkVQSDU2TWk5dnlwSVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlNMYU10UDFzU2cyV1F2Qld4OGU4Q3ciLCJwaG9uZUlkIjoiNzc3Yjk2MzQtNTdiNS00OTNkLWI2YTktMjA0OTA2OWU0ZjQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNtVGRxZTNXUDRzQVp2eE1mbUNWU3Q3Sm95bz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzTitjUE5GbXcwUlNtTjhhdFcxN3o5dVBacEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSk1IUUJEUVgiLCJtZSI6eyJpZCI6Ijk0NzczODI0MjY2OjQ3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuS4guOEluGQr+S4qOOEmuWNglxuIFxuICBcbiAgXG4gICBcbiAgXG4gIFxuXG4g4oCN4oCN4oCN4oCN4oCN4oCN4oCN4oCN4oCN4oCN4oCN4oCN4oCN4oCN4oCN4oCN4oCN4oCN4oCNICAgICAgICAgICAgICAgICAgIFxuIFxuICBcbiDkuYPjhJbjhJoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pHS2xQMERFT201aWJRR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9QNmgvbFFpYkZwODRPcG0vYTg3QTRhWmRPbmNCdEZpTlZiYWxERUFmQXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9UWlRVS3RHU3lLc3JXaUJ1S0cyMzNQdFFSbGpjZHZLOVNRRW5jL3J5aWhnODhvbk5Oc0VjVE55eHArTDNYVjhCRExNd0M2U3pjMjF6NUY2cGFZWUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSZWFUWkN1T1N1em9WQWZMbktWUnRDb0Z5ZGEvejdQbjFURENkTHlsQmtVZmd3dnZSVVowYU9zOTRUczZOUVRPVkRuTE9zbTJGaWhDY2dRcTNzVWFpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzczODI0MjY2OjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRqK29mNVVJbXhhZk9EcVp2MnZPd09HbVhUcDNBYlJZalZXMnBReEFId00ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk4MTk1MDl9";
global.MONGODB = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority";
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
