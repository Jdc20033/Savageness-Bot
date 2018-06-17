const Discord = require("discord.js");
const bot = new Discord.Client

bot.on("ready", () => {
        console.log(`${bot.user.username} has started! With ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
        bot.user.setGame(`$help | Playing With ${bot.users.size} Users!`);
    
    });
    
        
        bot.on("guildCreate", guild => {
            console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
            bot.user.setGame(`$help | Playing With ${bot.channels.size} Users!`);
          });
         
          bot.on("guildDelete", guild => {
            console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
            bot.user.setGame(`$help | Playing With ${bot.channels.size} Users!`);
          });

bot.login(process.env.BOT_TOKEN);
