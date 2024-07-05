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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_18_24_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY3LFxuICAgICAgICA0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDkzLFxuICAgICAgICA5NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgyLFxuICAgICAgICA0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMixcbiAgICAgICAgMTM4LFxuICAgICAgICA4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg5LFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDksXG4gICAgICAgIDE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI5LFxuICAgICAgICA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUVVVVG5Vc2RJaWNndnV1UWdOeWlNQW56UitJWnRESUxvaEhHQTE2Lzc2ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieUxmUVFJZ0xSX08tWHcxVnR2UFlkQVwiLFxuICBcInBob25lSWRcIjogXCI0YjIzYzUzOS1lYjQ1LTQwOGUtODA5YS1hMWEzMzc1ODczOTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMjUzLFxuICAgICAgODksXG4gICAgICAzNSxcbiAgICAgIDc2LFxuICAgICAgOTQsXG4gICAgICAyNTQsXG4gICAgICA1NixcbiAgICAgIDEwMixcbiAgICAgIDIwMCxcbiAgICAgIDIzMCxcbiAgICAgIDQwLFxuICAgICAgNjIsXG4gICAgICA2OCxcbiAgICAgIDY2LFxuICAgICAgMjE0LFxuICAgICAgMTA1LFxuICAgICAgMTUzLFxuICAgICAgMjQsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAxNTgsXG4gICAgICA4OSxcbiAgICAgIDc3LFxuICAgICAgMjMzLFxuICAgICAgNjcsXG4gICAgICAxOTgsXG4gICAgICA3MixcbiAgICAgIDc4LFxuICAgICAgNjUsXG4gICAgICAxMSxcbiAgICAgIDIxNyxcbiAgICAgIDc1LFxuICAgICAgMzksXG4gICAgICA1NSxcbiAgICAgIDExMyxcbiAgICAgIDE3MSxcbiAgICAgIDExOCxcbiAgICAgIDE0MyxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJONEVYQkg0TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjc5NzQ1NjIzOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjc2MDM5MzEzNzc2ODk6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkdUZ05RQkVMZjBvTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnVFBHK0xYRi9pb2QyYTFodmplRk9HOWF4MzFrRVl6RUNTVUpUM0VTZUFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImovd2JaR2Y0b2wyMDFjbEVobUwwZ2pwYW03NHZacUdaeXh5R2k0WmVKUHVkT2x5dEc0UlpDK054ZmZ2dHpXdFZ4UVVjbVY5OW1ORkVNbkdmRjJ6cUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1uUXptVmdxRHk2UE85QkZWb09rTURqQU5xRFFMYXVrYkRSQ0NyUjFrTEYzY2pvYWpDeEpMT21CRkNpOFFUbFltMXNhZS9HNVJhWE9tOWRqWGdzNGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI3OTc0NTYyMzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMDM4MzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9PUT your SESSION_ID 


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
