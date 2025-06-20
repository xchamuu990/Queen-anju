//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FwMWV6TDNUOElEY1JpZDN2Nmo5OEVZd2tlWm9DdUJuZnlsYlZLdkRWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2Qra3BFVWw3ZmgzV2FuQ2lIckhwbTUxZWl6ekcvd3BSTHlhQm5tMElScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQ0o4REpOOEx3aU80N0swQ1c2T2MxN0wyRy8wV2FUVUMyVlVKUll5V2tJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Y21JVGRqZFNRUFRMbjV3UFA4L1EwL2dsYWltTEhESHl5c0xrWUZRT0hJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldKMGVkOUJZUW5HUkdHOFB3M0w4cURCNm1aS0JpTjE4WlBmYU5uVDZ0WFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp0MFdza0RidVBOTjM0VUJqakxSeEtlNUZOVGVndXZjeEtqbjl1RUpHaU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZBUFJ3R0luQitPZnR6YlF6RCt6c3pxK0QreG5hWi9xT3I2YVQ5TjFsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3cydmZ4UWlnVEJXcTd0ZW1FS3lLR3ZZdExGbm1RY2xGenJ5N2NFbVNTST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndmMjRwSzg0emQrQWtOTXFSY3h1OEZ3TUJZVUwwMHM4UksxQjFQT3QvTmNpZjNhaDgxQWFZSDVmZEgrb1lNT0FRV1pyZXI1TytaOThPZ3d3MXplTWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6IlE0OFNMckpJbnJ5bXNnVU1uNmZIaXRTWkRyWDlJdyt5UzV6QVJxRVRpSTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBFbElmZU1ZUlB1eGQtWUJVUTVMWFEiLCJwaG9uZUlkIjoiYTAzMjIxZmMtOWQzNi00MjEzLTgyYzktNTRjMDMxOTQxYTM4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpEWXd2ZHBuNFNhYnpzQUNPTnFMQkhGL2tTUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUaGw0bnR0RnNiN2FqZWZjczNsSVE3NEIrQVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOTM0MUFIWVYiLCJtZSI6eyJpZCI6Ijk0NzAxNzMwNzU3OjI5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzY2MjI4NTQxMzE5NDg6MjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPSFg2ajRRcTgzVHdnWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwd05yWExGZ0M5QXdtbFNsenBiUTJXMjh6TlhxUllncU0rTkFkckZVV0hNPSIsImFjY291bnRTaWduYXR1cmUiOiJSaHZZUDZRS0xsRnlQQ0hNUmlIMCtNUCtzV2pLSEtOWjBQeVRsUWYzKzZncXY4dXZORXVGaUhsWWVmQ3gwTG9VdzBOa204ZUlvR2FENXZaNHdONVJCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoib0VsZFlMamNrSmIvVmZzeXc4b1djTUQyWTFRanRMMHVjTTd4ZXZSeUk2ekNiZWNZQ2MyOHJwdlBOSEZrUUkrMTVTdi95SllrK2s0am5UaXYwbnNnaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMTczMDc1NzoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhY0RhMXl4WUF2UU1KcFVwYzZXME5sdHZNelY2a1dJS2pQalFIYXhWRmh6In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQU1JQ1E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTAzOTQ1NTIsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJeTAifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
