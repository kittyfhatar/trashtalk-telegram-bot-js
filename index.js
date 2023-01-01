// CHAT VERSION TRASHTALK V1
const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers.js')
const token = '5963467911:AAHVC9_xiIEFRjKszAyALquENbvfnLIaLQk'
const bot = new TelegramBot(token, { polling: true })
const fs = require('fs'); // File System


bot.setMyCommands([
    { command: '/start', description: 'Краткая инфа про бота' },
    { command: '/about', description: 'ПРОЧИТАЙ/READ' },
    { command: '/trashtalkru', description: 'Trash' },
    { command: '/trashtalkeng', description: 'TrashENG' },
    { command: '/donate', description: 'Donate to coder' }
])


bot.onText(/\/start/, async(msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, "🔔 <b>Вызываю меню...</b>", { parse_mode: "HTML" })
        // await bot.sendMessage(chatId, "**",)
    await bot.sendMessage(chatId, "*👋 Привет, этот бот сделан для того, что бы ты не казался нищим в глазах своих врагов\n\n👨‍💻Пропиши /trashtalkru или  /trashtalkeng что бы урыть соперника\n\n✉️ Кинуть свой трештолк лист можешь мне в лс @doxmedoxmedoxme*", {
        parse_mode: "MarkdownV2",
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "👷‍♂️ Кодер",
                    url: 'tg://user?id=5305307232'
                }]
            ]
        }
    })
});


bot.onText(/\/menu/, async(msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, "🔔 <b>Вызываю меню...</b>", { parse_mode: "HTML" })
});

bot.onText(/\/trashtalkru/, (message) => {
    const text = fs.readFileSync('trash.txt', 'utf8');
    const strings = text.split('\n');
    const randomString = strings[Math.floor(Math.random() * strings.length)];
    bot.sendMessage(message.chat.id, "`" + randomString + "`", {
        parse_mode: "MarkdownV2",
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "👷‍♂️ Кодер",
                    url: 'tg://user?id=5305307232'
                }]
            ]
        }
    })
});



bot.onText(/\/trashtalkeng/, (message) => {

    const text = fs.readFileSync('trasheng.txt', 'utf8');
    const strings = text.split('\n');
    const randomString1 = strings[Math.floor(Math.random() * strings.length)];

    bot.sendMessage(message.chat.id, "`" + randomString1 + "`", {
        parse_mode: "MarkdownV2",
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "👷‍♂️ Кодер",
                    url: 'tg://user?id=5305307232'
                }]
            ]
        }
    })
});

bot.onText(/\/test/, (msg) => {
    const user_id = msg.from.id;
    const username = msg.from.username;
    // console.log(`Твой TG ID: ${user_id}`);
    // console.log(`Твой юзернейм: @${username}`);
    try {
        bot.sendMessage(user_id, `🆔 <b>Твой ID:</b> <code>${user_id}</code>\n🧾 <b>Твой юзернейм:</b> <code>${username}</code>`, { parse_mode: "HTML" });
    } catch (err) {
        console.error(err);

    }
});

bot.onText(/\/donate/, async(msg, match) => {
    const text = msg.text;
    const username = msg.from.username;
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, "\n`0xd4161a3FFa35C0BF4d525BED3c94cAe0e6f851f2` USDT", {
        parse_mode: "MarkdownV2",
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "👷‍♂️ Кодер",
                    url: 'tg://user?id=5305307232'
                }]
            ]
        }
    })

});

bot.onText(/\/about/, async(msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "<b>💎 Привет, это краткая информация про бота. \n\n❓ Бот сделан за пару часов(я срал) начинающим Node.js девелопером, сделан для проверки своих возможностей, на данный момент в коде 119 строк. \n\n🌠 Бот может кому-то помочь переспорить опонента. Эта версия поддерживает добавления и использование бота в чатах/группах, просьба написать что добавить/изменить в бота, если у вас есть трештолк лист и вы хотите им поделится, просьба написать в лс(кнопка ниже). Всего хорошего.\n\n📚 Основные команды расписаны в команде /start, на данный момент бот не на хостинге, так что если он работает - вам повезло. Канал с обновлениями/новостями - https://t.me/somestuffforu</b>", {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "👷‍♂️ Кодер",
                    url: 'tg://user?id=5305307232'
                }]
            ]
        }
    })
})

bot.on("polling_error", console.log);