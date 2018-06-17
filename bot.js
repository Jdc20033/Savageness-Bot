const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", () => {
        bot.user.setGame(`$help | Playing With ${bot.users.size} Users!`)
    
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


bot.login(process.env.BOT_TOKEN);
