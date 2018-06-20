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
	
	if (command === 'ping') {
		const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
	}
	else if (command === 'beep') {
		message.channel.send('Boop.');
	}
	else if (command === 'server') {
		if (message.guild.iconURL === null) 
		{ message.channel.send(`Server name: ${message.guild.name}\nServer icon: No server icon.\nTotal members: ${message.guild.memberCount}`); }
		else
		message.channel.send(`Server name: ${message.guild.name}\nServer icon: ${message.guild.iconURL}\nTotal members: ${message.guild.memberCount}`);
	}				
	else if (command === 'user-info') {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
	else if (command === 'info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`First argument: ${args[0]}`);
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
      return message.reply("Please indicate a reason for the kick!");
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick that user. Reason: ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag}. Reason: ${reason}`);

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
});
bot.login(process.env.BOT_TOKEN);
