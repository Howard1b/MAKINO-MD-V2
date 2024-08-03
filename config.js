const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["263776312194"];
global.OwnerNumber = ["263776312194"];
global.ownertag = ["263776312194"]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "howard";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || ``
global.prefa = ["{"noiseKey":{"private":{"type":"Buffer","data":"OCj/apk0i9Z9dGfG0/ChNubpPb037gfWv2O9+Fn+zGc="},"public":{"type":"Buffer","data":"SAqHDEV8l9gpBgkF4tLlECuf8UuKMU4lyhcrR+aCpGA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"mJe4ACHhiVnys8QjUUJhXegK2crRaTB/r+SOZpR0B34="},"public":{"type":"Buffer","data":"WdItlGMmj8VMZuxzGW3fxlZZoUsqDdqrN8c/2xhkFEg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"yBIyWm6U4J6B458pVFVgIHPiw4zUbto3oC2LN319HlA="},"public":{"type":"Buffer","data":"U0M7gZrPbH43yNilxc14srIhH+87PMBVucH8UvkMTi8="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"wEzHfEmKwVQIpc+bkCy07ka5YRViy5pxTuXfsoGsoWA="},"public":{"type":"Buffer","data":"VJ456ZB3bCmgixoOG20IIRQt+xwezBjCADRVWJVBgms="}},"signature":{"type":"Buffer","data":"myM6AiHwyRoLb3YVxYhjDiD5PDlADoc468g1Qi18onAEABlkJso7WxkgfrBoqOI706tfJrlJeJ7OmuETARpRgg=="},"keyId":1},"registrationId":217,"advSecretKey":"Ai8dTV6Ua0u/nGgUifoWAzIozOKuPUZ11AvwwNjdWJ0=","processedHistoryMessages":[],"nextPreKeyId":61,"firstUnuploadedPreKeyId":61,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"gV1RKXyHQ3SGaH6YDlmbrw","phoneId":"a108ecad-f75a-40d1-bf06-40587b95140d","identityId":{"type":"Buffer","data":"RH/IZvwf3S1gLx4/f4stsrTCqWU="},"registered":true,"backupToken":{"type":"Buffer","data":"vGWuAuKYJg4a4nAQI+wPIJwE2QQ="},"registration":{},"pairingCode":"26WYM81D","me":{"id":"263776312194:90@s.whatsapp.net","name":"HUSENIX"},"account":{"details":"CPy9ufMCEIW3ubUGGAEgACgA","accountSignatureKey":"qznJY0Y5ET41J5Gr6XY8vjjisChXdhp/x25Yil2euiQ=","accountSignature":"fmY7Z/qzcr9iL6elq24HG7+g/I2zljljZ4E/H2w0+3jVELxQJBPXHB8fECWwiZLDL5ASIHnfrbrPH77pLAVJDg==","deviceSignature":"9FNiRXlCMzLPO8v7oRGz+9JFPfCqC/qcqSqDa94xg5kXs0XXuu152saJL/hqPuDIXh+y2rGfpFhG/KgI+hO4gw=="},"signalIdentities":[{"identifier":{"name":"263776312194:90@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bas5yWNGORE+NSeRq+l2PL444rAoV3Yaf8duWIpdnrok"}}],"platform":"smba","lastAccountSyncTimestamp":1722702740,"myAppStateKeyId":"AAAAAFQM"}"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
