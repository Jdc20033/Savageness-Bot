const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});


    bot.on("ready", () => {
        console.log(`${bot.user.username} has started! With ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
        bot.user.setActivity(`$help | Playing With ${bot.channels.size} Servers!`)
    
    });
    
        
        bot.on("guildCreate", guild => {
            console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
            bot.user.setActivity(`$help | Playing With ${bot.channels.size} Servers!`);
          });
         
          bot.on("guildDelete", guild => {
            console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
            bot.user.setActivity(`$help | Playing With ${bot.channels.size} Servers!`);
          });

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.channel.send(`Hello! My prefix is "$"! Invite me to your server with the following link {https://discordapp.com/oauth2/authorize?client_id=458018248190066730&permissions=8&scope=bot}} Or join our server main! {https://discord.gg/5Du3jDt} Thanks!`);

});


bot.login(process.env.BOT_TOKEN);
