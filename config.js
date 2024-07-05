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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_16_07_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDY2LFxuICAgICAgICA1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgODUsXG4gICAgICAgIDEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxNixcbiAgICAgICAgNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MixcbiAgICAgICAgMjQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUwLFxuICAgICAgICA1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM1LFxuICAgICAgICA1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExLFxuICAgICAgICAxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDc1LFxuICAgICAgICA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICA3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZk42VDF2TkcrRVBEdjRXcnlSWXc2UzRRa2QreVlkeVJPZXBNMnVZZ054bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV2R1bkl3c3NSaGFSLTQwZnQxTTl4Z1wiLFxuICBcInBob25lSWRcIjogXCJiMWE5OGEyNy0zMjdkLTRkOTUtODM1OS04MzlhMjAwMDI3OGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICA3NixcbiAgICAgIDEzNSxcbiAgICAgIDEyLFxuICAgICAgMTc5LFxuICAgICAgMjQzLFxuICAgICAgNTEsXG4gICAgICAxMjAsXG4gICAgICAyMSxcbiAgICAgIDI1NSxcbiAgICAgIDYwLFxuICAgICAgODIsXG4gICAgICAxMTIsXG4gICAgICA2NSxcbiAgICAgIDIyNCxcbiAgICAgIDQ5LFxuICAgICAgMjE5LFxuICAgICAgMjE5LFxuICAgICAgMTI4LFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICAxMjEsXG4gICAgICAxMzAsXG4gICAgICA2NSxcbiAgICAgIDcxLFxuICAgICAgMzAsXG4gICAgICAyMzAsXG4gICAgICAxOCxcbiAgICAgIDYsXG4gICAgICAxNTUsXG4gICAgICAxNDQsXG4gICAgICAxMDEsXG4gICAgICAxODcsXG4gICAgICAyNDYsXG4gICAgICA2MyxcbiAgICAgIDM3LFxuICAgICAgMTMwLFxuICAgICAgMjQ5LFxuICAgICAgMTU3LFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLRk1CNDZWR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjc5NzQ1NjIzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjc2MDM5MzEzNzc2ODk6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSStUZ05RQkVKeTBvTFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnVFBHK0xYRi9pb2QyYTFodmplRk9HOWF4MzFrRVl6RUNTVUpUM0VTZUFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkphK3lDQlVkdGxIODVKM25WTVhySUdWUnZYODBkU2FoZjF5ZlhCMHUrRkpIQllmY25zRGM4NlNjUkNUY0RNMzFIZ3dpZERKVklFTGdwQ3V1Y00zOEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNud0pRalBDc3Q4WEZ0VHhWMHhRSXNUQ2N1Q2RIZm9HQUQ1MXhLNUozQmFyeVQ2cm9XQVZBZTkwenVmSkRpOC8yL3A3bE1BbFZKMUlmTWJkMFFrZkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI3OTc0NTYyMzoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxOTU2MTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJUDdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlQNy5qc29uIjogIntcImtleURhdGFcIjpcIjRmc3k2S1VGMFB6UTBsdFpNL0hQUW4rVGI5d0Urb0JyYXRiMzNTRTVERGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQ0NTk4NjcwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=PUT your SESSION_ID 


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
