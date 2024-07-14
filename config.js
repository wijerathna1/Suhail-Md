const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_51_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NixcbiAgICAgICAgMTk1LFxuICAgICAgICA4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNixcbiAgICAgICAgNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NSxcbiAgICAgICAgNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDYxLFxuICAgICAgICA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5GTDRYcXNPN3o2TTJvSjB6RVpEM2JzeDAyQ1JTRWozSlJXVENVRUlZZmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjA3NzQ0NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJBRDhCMTI3RDdCRjVERjY0QTlGNzdDNzhDMzg3NzJDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDk2NTEwMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjWEJuZEU3QlJSMlVQaTRUMmhKS3JnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQyMGIzY2E1LTZhMDktNGM5MS05N2U3LWU0NzA0NjM1NWY5MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAyMDMsXG4gICAgICAyNTQsXG4gICAgICAxMzgsXG4gICAgICA3NSxcbiAgICAgIDUwLFxuICAgICAgMTUyLFxuICAgICAgMzIsXG4gICAgICAxMzQsXG4gICAgICAxNzcsXG4gICAgICA5NSxcbiAgICAgIDEyOSxcbiAgICAgIDc3LFxuICAgICAgMTEyLFxuICAgICAgNixcbiAgICAgIDI1MixcbiAgICAgIDUxLFxuICAgICAgMTAyLFxuICAgICAgMTMyLFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDEzOCxcbiAgICAgIDE4LFxuICAgICAgMTY4LFxuICAgICAgMTA0LFxuICAgICAgNTMsXG4gICAgICAxMTUsXG4gICAgICAyMixcbiAgICAgIDE4OSxcbiAgICAgIDE3NCxcbiAgICAgIDE1NyxcbiAgICAgIDIwNSxcbiAgICAgIDEyOSxcbiAgICAgIDE1MSxcbiAgICAgIDg0LFxuICAgICAgMjI2LFxuICAgICAgODgsXG4gICAgICAxNSxcbiAgICAgIDIwMCxcbiAgICAgIDEwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09DVXJHMFE0cS9QdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVjN2cHRrektGZ2dIMUFNT25IcEpLTFhIVzc4ZlhuRm45bnI3TmZ1Um9Xdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJibS9LQmsxV1ZZWEdkbUVvYVVEdERpZHN2L2lWTHdwODZjSlg5WnkzNTNnTDVnYTI5dE84TVBjT05wQjd1ck5MSkJZZnBhdTQ4ZkpXa21wRmlFM29EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5cUlaSCt5UmNxR0plZExhMHBHcm83K0htUFJ3MDlseThLTkdRQW9rZ0ovRy9ZZklkTHp6VTdlTmFzalpwS1JCN1JIaElnTkw4OGZnaHh2QTFxZ2pqZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYwNzc0NDQ1OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzkxMjI3NDA0NDkzODM6NjRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2MDc3NDQ0NTo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTY1MDk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUh4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFSHguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3UmFHdzN1UnAvUVFweUtkR0kxSmZuSVZqQVV5SDl2dW1DcHVuZDlkRFFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyOTMxMzExOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUh5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSFZFbXVHcUk4U2p1blRVYWYzWVhvdFMvTDQzR0FGWUdxcWNaYjZFRER2WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjkzMTMxMTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5NjUwNzQ2NjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
