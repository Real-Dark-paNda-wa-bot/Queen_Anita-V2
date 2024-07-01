//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktIUjlsZVNlMHoyY05UNWJlaXhGN0w2ZGw5U0NwSUNEZlFQZDZzZ0NHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGZ6YUNVbEhnd0k1THlyZ3I0QnVtOU00WlRqSklkMkxKUHpxWVdidnBIWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SGNZd1JkY29iZEdiQ1g0cHREZEVQT2ozTXRoN005S0xxSU96SVZqem5RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnOEV6YVYrTW1KSWpWSE1PVDhSOC85d3BrQm1MaFBSeC9VOGpGL3BIV0JFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJeWk3Wm9UQmppVlNFVm5TeDZxOXhZMEZZS01ORW0zVTgzL2R6bGZYRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklTREdhTi82TzdYdEZXdCtpTnUzbGFScU5OL2VZalp1RUFnYXptVzM1dzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBIOVNqNDM3aDdMNnpzMUsrQlBQdXpBemF6VWJCVFliYzlTOFdndkFVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWFnd2JKNUVJRGxOdmhDcXQ2YUtLdndBUTM5OU5VeFVlSFJMQnhwMlkybz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVqVmhudEU5TmNlWHpFRkVRRXI3bVBHRkV2MSs2bU1pUHRXZlFocG80azZFQVhucHhVQVRDSXlRV1NuMFpBa0g5OTR2WmxValFNRHdzemRaRW1KYmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE4LCJhZHZTZWNyZXRLZXkiOiJIUUFMTXY1WEZLaUQ5eWFrTjNyRmVoRXlXWktwOXlWWGVnTllkTFRvbFFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1QVpKbDRtTlFjV1FPNEtqVE1OUm1RIiwicGhvbmVJZCI6ImZjOTRhOTg2LWVjNjEtNDMwOS05NjNkLTg1NTI1ODdmYzAyMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIweG9zMnNIOG13RjJ2SHl1cjR2R05YaUlvYVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXl5YkhORzVQTGNmZzdPUWdNais5cmNRQmdjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllZU0c0UkVXIiwibWUiOnsiaWQiOiI5NDc3MzgyNDI2Njo0M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLkuILjhJbhkK/kuKjjhJrljYJcbiBcbiAgXG4gIFxuICAgXG4gIFxuICBcblxuIOKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjSAgICAgICAgICAgICAgICAgICBcbiBcbiAgXG4g5LmD44SW44SaIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKR0tsUDBERU51dGlMUUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPUDZoL2xRaWJGcDg0T3BtL2E4N0E0YVpkT25jQnRGaU5WYmFsREVBZkF3PSIsImFjY291bnRTaWduYXR1cmUiOiJkYjFlWDhrcTJUYWlTK0VObnZlblYwYVd5eUxjVWNBOUFUYXlidkJhblVsMXBKekl2Ty8ycHowemhjaDJLWlFVM29YZlNoV2Z2dW5mV0VZT21DUUtDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMkJ2VHc0Y2VvdVMwWEl6Y1crUW1nTzBpdGt0cUZwUHRDT2hJWEh0N3RTa1pZZk5zUFVwNEpuVHJDcVRGNUhETDdqcDRmUXNUL1RKcEdBYXo1cWRHaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3MzgyNDI2Njo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaitvZjVVSW14YWZPRHFadjJ2T3dPR21YVHAzQWJSWWpWVzJwUXhBSHdNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5ODAxNTc2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9ISiJ9";
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
