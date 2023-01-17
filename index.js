const TelegramBot=require('node-telegram-bot-api');
const token ="5700381502:AAE0aIizByDmS73mjs_Ywl_9QhFzCGEGqbA";
const bot = new TelegramBot(token,{polling:true});
 bot.onText(/\/start/,msg=>{
    console.log(msg);
    bot.sendMessage(msg.chat.id,"به ربات تلگرام قطبینو خوش آمدید.");
 }
