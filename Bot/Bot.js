const {Telegraf} = require("telegraf");
const TOKEN = "6468195330:AAFnXgcWuw4nUg2xRoo6uyWhUmNU7_07Wts"
const bot = new Telegraf(TOKEN);

const web_link = "https://sparkly-babka-2313f9.netlify.app"
bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch(); 