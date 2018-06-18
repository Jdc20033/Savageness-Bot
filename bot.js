const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", () => {
        console.log(`${bot.user.username} has started! With ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
        bot.user.setActivity(`$help | Playing With ${bot.channels.size} Servers!`);
    
    });
        
bot.on("guildCreate", guild => {
         bot.user.setGame(`$help | Playing With ${bot.channels.size} Users!`);
});
         
bot.on("guildDelete", guild => {
         bot.user.setGame(`$help | Playing With ${bot.channels.size} Users!`);
});

bot.on("message", message => {
     if (message.content === '$ping') {
       message.reply("pong");
       }
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.channel.send(`Hello! My prefix is "$"! Invite me to your server with the following link {}} Or join our server main! {https://discord.gg/5Du3jDt} Thanks!`);

    let messageArray = message.content.split(/\s+/g);
    let commands = messageArray[0];
    let args = messageArray.slice(1);
    let input = messageArray[1];
});


bot.login(process.env.BOT_TOKEN);
