const Discord = require('discord.js');
const { prefix } = require('./config.json');
const bot = new Discord.Client();


bot.on("ready", () => {
        console.log(`${bot.user.username} has started! With ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
        bot.user.setGame(`in ${bot.guilds.size} servers! | $help`);
    
});
    
        
bot.on("guildCreate", guild => {
         console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
         bot.user.setGame(`in ${bot.guilds.size} servers! | $help`);
});
         
bot.on("guildDelete", guild => {
          console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
          bot.user.setGame(`in ${bot.guilds.size} servers! | $help`);
});
bot.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
  
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	const fs = require("fs");
	
	if (command === 'ping') {
		const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
	}
	else if (command === 'ban') {
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");

                let member = message.mentions.members.first();
                if(!member)
                return message.reply("You did not specify a user!");
                if(!member.bannable) 
                return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

                let reason = args.slice(1).join(' ');
                if(!reason)

                await member.ban(reason)
                .catch(error => message.reply(`Sorry ${message.author} I couldn't ban the user. Reason: ${error}`));
                message.channel.send(`**${member.user.tag} was banned!**`);
}
	else if (command === 'server') {
		if (message.guild.iconURL === null) 
		{ message.channel.send(`Server name: ${message.guild.name}\nServer icon: No server icon.\nTotal members: ${message.guild.memberCount}`); }
		else
		message.channel.send(`Server name: ${message.guild.name}\nServer icon: ${message.guild.iconURL}\nTotal members: ${message.guild.memberCount}`);
	}				
	else if (command === 'userinfo') {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
	else if (command === 'kick') {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");
    
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("You did not specify a user!");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
   
    let reason = args.slice(1).join(' ');
    if(!reason)
 
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick that user. Reason: ${error}`));
    message.channel.send(`**${member.user.tag} was kicked!**`);

  }

	else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL}`;
		});

		message.channel.send(avatarList);
	}
	else if (command === 'purge') {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to purge messages in this channel!');
		});
	}
        else if (command === "say") {
                const sayMessage = args.join(" ");
                message.delete().catch(O_o=>{}); 
                message.channel.send(sayMessage);
        }
        else if (command === "invite") {
		message.reply("Here's my invite! https://discordapp.com/api/oauth2/authorize?client_id=458029145700433924&permissions=474344695&scope=bot");
	}
	else if (command === "mute") {  
		bot.setInterval(() => {
                     for(let i in bot.mutes) {
                     let time = bot.mutes[i].time;
                     let guildId = bot.mutes[i].guild;
                     let guild = bot.guilds.get(guildId);
                     let member = guild.members.get(i);
                     let mutedRole = guild.roles.find(r => r.name === "Muted");
                     if(!mutedRole) continue;  
        

                     if(Date.now() > time) {
        
                     member.removeRole(mutedRole);
                     delete bot.mutes[i];
       
                 
                     fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
                              if (err) throw err;
                   });
                }
            }       
        }, 60000); 
		
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");
               
              let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
              if(!toMute) return message.channel.send("You did not specify a user!");
            
              if(toMute.id === message.author.id) return message.channel.send("You cant mute yourself!");
              if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("I cannot mute this user! Do they have a higher role? Do I have mute permissions?");
  
              let role = message.guild.roles.find(r => r.name === "Muted");
             if(!role) {
              try{
               role =  await message.guild.createRole({
                       name: "Muted",
                       color: "#4b4b4b",
                       permissions: []                   
                      });
  
                      message.guild.channels.forEach(async (channel, id) => {
                         await channel.overwritePermissions(role, {
                                 SEND_MESSAGES: false,
                                 ADD_REACTIONS: false
                          });
                     });
              } catch(e) {
                console.log(e.stack);
              }
          }
          if(toMute.roles.has(role.id)) return message.channel.send("This user is already muted!");
       
        bot.mutes[toMute.id] = {
            guild: message.guild.id,
            time: Date.now() + parseInt(args[1]) * 1000
        }

        await toMute.addRole(role);  
    
        fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
            if(err) throw err;
            message.channel.send(`Muted ${toMute.user.tag}.` );
    });
}
	
	
	
	else if (command === "help") {
	       let embed = new Discord.RichEmbed()
              .setAuthor("ØneŁife")
              .setDescription("This is the bot creator's info!")
              .setColor("#FF0000")
              .addField("Full Username", `ØneŁife#1800`)
              .addField("ID", "323989674399891459")
              .addField("Created At", message.author.createdAt);      
let embed2 = new Discord.RichEmbed()
              .setDescription("Commands!")
              .setColor("#FF0000")
              .addField("**Everyone.**", "Commands For Everyone Are Below.")
              .addField("1. **__$avatar__**", "Posts profile picture of target. If no target is selected, It will show the command callers profile picture.")
              .addField("2. **__$server__**", "Shows info about the server.")
              .addField("3. **__$ping__**", "Shows the bots ping to the server.")
              .addField("4. **__$say__**", "Makes the bot repeat what you enter.")
              //.addField("5. **__$roll__**", "Rolls a number.")
            //  .addField("6. **__$coinflip__**", "Flips a coin.")
           //   .addField("7. **__$spider__**", "Posts a spider.")
           //   .addField("9. **__$meme__**", "Posts a meme.")
           //   .addField("8. **__$spam__**", "Spams amount of messages hardcore. <$spam  <message> <5>")
            //  .addField("10. **__$rules__**", "Posts recommended server rules.")
           //   .addField("11. **__$8ball__**", "Ask the 8ball a question...")
            //  .addField("12. **__$report__**", "Type in a broken code or command.")
            //  .addField("13. **__$love__**", "Type in a broken code or command.")
            //  .addField("14. **__$kiss__**", "Kisses whoever you @.")
           //   .addField("15. **__$revive__**", "Revives whoever you @.")
           //   .addField("16. **__$shoot__**", "Shoots whoever you @.")
            //  .addField("17. **__$slap__**", "Slaps whoever you @.")
          //    .addField("18. **__$stab__**", "Stabs whoever you @.")
              .addField("**Admins only.**", "Commands For Admins Are Below.")
              .addField("1. **__$kick__**", "Kicks member from server. <$kick @ >")
              .addField("2. ** __$ban__**", "Bans a member from server. <$ban @ >")
         //   .addField("3. **__$mute__**", "Mutes a member. <$mute @ >. Or Mutes a member for amount of mins entered. <$mute <amount of mins>>")
         //   .addField("4. **__$unmute__**", "Unmutes a member. <$unmute @ >")          
          //  .addField("5. **__$announcements__**", "Create a channel named announcements then enter <$announce <message here>.")
              .addField("6. **__$purge__**", "Wipes up to 100 messages that are within 14 days old. <$purge 10>") 
              message.author.send(embed);
              message.author.send(embed2);
              message.reply("Sent. Check your direct messages.");


}
  });                     

bot.login(process.env.BOT_TOKEN);
