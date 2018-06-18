const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});


    bot.on("ready", () => {
        console.log(`${bot.user.username} has started! With ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
        bot.user.setGame(`$help | Playing With ${bot.channels.size} Servers!`)
    
    });
    
        
        bot.on("guildCreate", guild => {
            console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
            bot.user.setGame(`$help | Playing With ${bot.channels.size} Servers!`);
          });
         
          bot.on("guildDelete", guild => {
            console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
            bot.user.setGame(`$help | Playing With ${bot.channels.size} Servers!`);
          });

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.channel.send(`Hello! My prefix is "$"! Invite me to your server with the following link {https://discordapp.com/oauth2/authorize?client_id=458018248190066730&permissions=8&scope=bot}} Or join our server main! {https://discord.gg/5Du3jDt} Thanks!`);

});

//8ball

var sayings = ["It is certain",
"It is decidedly so",
"Without a doubt",
"Yes, definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"];



var result = Math.floor((Math.random() * sayings.length) + 0);

let embed = new Discord.RichEmbed()
.setColor("#FF0000")
.addField(":8ball: Your answer is", sayings[result])

message.channel.send(embed);

}

//avatar
let message = await message.channel.send("Loading avatar...")
      let target = message.mentions.users.first() || message.author;
   
   
      await message.channel.send({files: [
      {   
          attachment: target.displayAvatarURL,
          name: "avatar.png"
      }
       ]});

       message.delete();
    }
//roll
    var result = Math.floor((Math.random() * 100) + 1);
       
        let embed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .addField(":game_die: You rolled a: ", + result);
        
   message.channel.send(embed);
 
}    
bot.login(process.env.BOT_TOKEN);
