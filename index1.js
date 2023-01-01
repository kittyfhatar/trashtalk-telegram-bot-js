// BOT VERSION TRASHTALK V 1BETA
const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers.js')
const token = '5731636749:AAF7RSgPCzhy0fZVLlcqHeKP5E7xF2uljNk'
const bot = new TelegramBot(token, {polling: true})
const fs = require('fs'); // File System


bot.setMyCommands([
    {command: '/start', description: 'Краткая инфа про бота'},
    {command: '/donate', description: 'Donate to coder'}
])

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, "🔔 <b>Вызываю меню...</b>", {parse_mode: "HTML", reply_markup: {
        keyboard: [
            ["🇷🇺", "🇺🇸"]
        ]
    }})
    // await bot.sendMessage(chatId, "**",)
    await bot.sendMessage(chatId, "*👋 Привет, этот бот сделан для того, что бы ты не казался нищим в глазах своих врагов \n\n✉️ Кинуть свой трештолк лист можешь мне в лс @doxmedoxmedoxme*", {parse_mode: "MarkdownV2",reply_markup: {
        inline_keyboard: [
            [
            {
                text: "👷‍♂️ Кодер",
                url: 'tg://user?id=5305307232'
            }
        ]
        ]
    }})
})

bot.onText(/^🇷🇺$/, (message) => {
 
    const text = fs.readFileSync('trash.txt', 'utf8');
    const strings = text.split('\n');
    const randomString = strings[Math.floor(Math.random() * strings.length)];
    bot.sendMessage(message.chat.id, "`"+randomString+"`" , {parse_mode: "MarkdownV2" ,reply_markup: {
        inline_keyboard: [
            [
            {
                text: "👷‍♂️ Кодер",
                url: 'tg://user?id=5305307232'
            }
        ]
        ]}});
  });

bot.onText(/^🇺🇸$/, (message) => {
 
    const text = fs.readFileSync('trasheng.txt', 'utf8');
    const strings = text.split('\n');
    const randomString1 = strings[Math.floor(Math.random() * strings.length)];
  
    bot.sendMessage(message.chat.id, "`"+randomString1+"`", {parse_mode: "MarkdownV2",reply_markup: {
        inline_keyboard: [
            [
            {
                text: "👷‍♂️ Кодер",
                url: 'tg://user?id=5305307232'
            }
        ]
        ]}});
});


bot.onText(/\/donate/, async (msg, match) => {
    const text = msg.text;
    const username = msg.from.username;
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId,"\n`USDT`", {parse_mode: "MarkdownV2"}) 
    
});

bot.onText(/\/test/, (msg) => {
    const user_id = msg.from.id;
    const username = msg.from.username;
    console.log(`Твой TG ID: ${user_id}`);
    console.log(`Твой юзернейм: @${username}`);
    try {
        bot.sendMessage(user_id, `Твой ID: <code>${user_id}</code>\nТвой username: ${username}`, {parse_mode: "HTML", reply_markup: {
            inline_keyboard: [
                [
                {
                    text: "👷‍♂️ Ты",
                    url: `tg://user?id=${user_id}`
                }
            ]
            ]
        }
    });
    } catch(err){
        console.error(err);
    }
})




bot.on("polling_error", console.log);
