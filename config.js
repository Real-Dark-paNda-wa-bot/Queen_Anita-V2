//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVAvVjFvczBqNmcvaDF6WEFrbWNCcEZUR05tT0lBVXFTNDBhaXF2QzNsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEgxa25mRE1iRU0yT3NsNktGUGhYUEw2dHpZUFg4SFFMMjZNNW5kaE1BYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQi9ubi9xcThGVm5BZVJnRXdHcWhobVFEVk1LcHgxSlZQM3R3bDQ0VEdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3T3cybVZMekU2VGRIWW4rQnZUaEpPaG9NQVdPa1FQWHJycFhHWWwyTEQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNQZHZiRXZzQUJiK250bUVlRlV5S290SVdPQW0zL1FOQUtmNGxjZ3E4R3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBTQWJ4L1RubmxwbVNaSGtrQnVOZE1lVkxzeDMxOGhoNFpKYUVjM1JKV1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9tRjZ1Z21LRjI0MzhDU0x6MVgwYUdzZlFpbXBRVkZtRHJkRHdsVFdsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0tvTjFYZGV4MGdYalo2SGJXZlJwSU5lNi9lWTVaZTFzNzcycnBFanMxRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJsSml1MElTUFpxbmJ4QkVGd1FEVURnZkhKdXZPcEtDRitkL041TURCcVp5T1NUbnZrWUVvbGNCdG95bjhycWloMVF2dHBtQ05UVS9Rd3huV2VGbkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJGdkZnd3lEZ2Q5ZTNmUCtpZ0RxWjcyY25JMlU3Qis0blluY3FBeW1DcHFFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzQ3FDMi1TMlJDQ1FENXZ2SUdOUnZ3IiwicGhvbmVJZCI6IjM3MDM5ZTMzLTE5ZWMtNGQyMC05NDc3LTY0Mjg5MTE1NjM2YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYSy9CcXo5OGhNSklKdHhlRmFiMFpkMExrNTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5kVXFoSlVkYmkwMHVKNUR2UVFJMFprYjRrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpRTERKQ0dYIiwibWUiOnsiaWQiOiI5NDc3MzgyNDI2Njo0OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLkuILjhJbhkK/kuKjjhJrljYJcbiBcbiAgXG4gIFxuICAgXG4gIFxuICBcblxuIOKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjeKAjSAgICAgICAgICAgICAgICAgICBcbiBcbiAgXG4g5LmD44SW44SaIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKR0tsUDBERU1uVGliUUdHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPUDZoL2xRaWJGcDg0T3BtL2E4N0E0YVpkT25jQnRGaU5WYmFsREVBZkF3PSIsImFjY291bnRTaWduYXR1cmUiOiJmKzlYMUJRNmhmdWxhajB6ZkFrZnJuQTRZYzArRktzbW9YTFk1QU44aUJhdk96L3N5a2U0VnZrMUlkVllwSDhUcythKzQycWsxbUZkeWF1YzNSV1JEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRnB1Tnlyc3JlMC9Bd2tXQnplWU5QTmw3MVJSa2MxSHRTMGdXOW1pVzVNbVVmZW9rRnRPOG9maUw0cENvSGg2NldYczRIdWxnU2ZwcTBIVzVhcDhnRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3MzgyNDI2Njo0OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaitvZjVVSW14YWZPRHFadjJ2T3dPR21YVHAzQWJSWWpWVzJwUXhBSHdNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5ODIyODA1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9IUSJ9";
global.MONGODB = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94773824266";
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
