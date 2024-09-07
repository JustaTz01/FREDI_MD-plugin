const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="frediezra60@gmail.com"
global.location="Dar Es Salam,Tanzania."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/Fred1e/FREDI_MD/tree/main";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/63d832ae9db153376e575.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "255752593977,255620814108,255764182801" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255753116662";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/63d832ae9db153376e575.jpg" // FREDI Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "255620814108,255764182895,255752593977";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "255620814108,255764182801,255752593977";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255620814108,255764182801,255752593977";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://wa.me/255752593977";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hXNWNISmxURFNGRnJPbFdLMVJiUGN5VS9jMExweEFsbWkwZnVXNHYwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VzMXNPbWlrWlBJUkZ3dmhRaVZzb1NKNUFheHpaZEVQcWMzcGRjd2xtOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQmZnQWRxYlRNVzBOTXFidnlxckdxUGZvMCtVUU9SVWIraHFabHc1YWtrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTcnJkUFRMQ1FrWDd4KzBtakpET291MW1CSytBUHV5MVhiQ0RIY0ZobHpnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFZjlEdXdXWUgyYkF4eUJudklWLzlZRldDNHpjcWM0TzlsWXRINTkzMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFKSk92RlNmamNmWll1Rld2bUNLMXdiTjI3emIyUlF0V2RVSlJwcVlIeXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUxaNlR1YVNuU3dPZkFPR3AzbVZFVXJYbkhtdXQ3MW1MS0VhYTNoQTczND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiangzdTdUS2JRcWQ5Tjh5Z3I0M0toTXFUdEJIU2NOYnRXd1ZmQTNHWjYzRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhVdnhDdkp4Q3c5R0g0amRxa0dTd1BsTW1RVXAzQ2hrQU9MbG5RNHZpWmtYU0t0U0tMVisrWlFvTlp2eDcvZFplU1BHSUR4UVZOMnFyUWVacm5ib0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDAsImFkdlNlY3JldEtleSI6IlR5WFZ2QW5Sbm9hdGpGd013U1E5RkxqVkRCelNQTkxDc0RjdmhKMVhKMmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpDRWt5MFQzUWZhYi1fYkNWY1czUEEiLCJwaG9uZUlkIjoiM2I3NTYwMTQtMGI0OC00ZWIxLWI2ODgtNjUyZjY4NTljYjQyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF3YVBxWDZ6ejNsYWRlVnpjNjc4amxNdTQ1Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJenZ0TTJTN1d0aEVwa3FzNURuRFcwNmVOL2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTllONEVOUUQiLCJtZSI6eyJpZCI6IjI1NTc1MzExNjY2Mjo3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPVFEwK0lHRU9tbThMWUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwY2pYQlpLWXF6M0NJcWl2NG1mbkRuOTdxUjVKTUd3QjRYOVVXZVlVNlFzPSIsImFjY291bnRTaWduYXR1cmUiOiJFaHYvUVhjUTZYdHBTQ0FUYkphSEV1SW1xRXRVWERUR3Rna3hhRnVlVEQ2ejFWZmo1KytIdHZGM0ZJeFFNQ0M1MHpaRXBaTjQ0ODJsTFpsOXdJTm5DUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia1d0amdtUS9pUUhITE5xU0IrVmxKSUdwbytpOGpNeitxTWVFSFdiU01hZGJzMnVzU0lEVTU4akNsVS9XK0R1U2NYTmtUcHNNV2dlb0hEUzZpcHRpRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3NTMxMTY2NjI6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkSEkxd1dTbUtzOXdpS29yK0puNXc1L2U2a2VTVEJzQWVGL1ZGbm1GT2tMIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1Njk4OTM1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFHciJ9" ;


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Fredi_Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "FREDI_MD✅" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ғʀᴇᴅɪ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ғʀᴇᴅɪ ᴛᴇᴄʜ』*\n youtube.com/@freeonlinetvT1"),
 
  author : process.env.PACK_AUTHER|| "Mr Fredi",
  packname: process.env.PACK_NAME || "🐯",
  botname : process.env.BOT_NAME  || "FREDI_MD",
  ownername:process.env.OWNER_NAME|| "JUSTATZ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FREDI"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
