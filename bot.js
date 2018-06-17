const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});



bot.login(process.env.BOT_TOKEN);
