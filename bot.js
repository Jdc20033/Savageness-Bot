const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");

    bot.on("ready", () => {
        console.log(`${bot.user.username} has started! With ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
        bot.user.setGame(`in ${bot.channels.size} servers! | $help`)
    
    });
    
        
        bot.on("guildCreate", guild => {
            console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
            bot.user.setGame(`in ${bot.channels.size} servers! | $help`);
          });
         
          bot.on("guildDelete", guild => {
            console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
            bot.user.setGame(`in ${bot.channels.size} servers! | $help`);
          });

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.channel.send(`Hello! My prefix is "$"! Invite me to your server with the following link {https://discordapp.com/oauth2/authorize?client_id=458018248190066730&permissions=8&scope=bot}} Or join our server main! {https://discord.gg/5Du3jDt} Thanks!`);
});
//roll
bot.on("message", message => {
    if (message.content === "$roll") {
    var result = Math.floor((Math.random() * 100) + 1);
       
        let embed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .addField(":game_die: You rolled a: ", + result);
        
   message.channel.send(embed);
 
}  
});
//avatar
bot.on("message", message => {
    if (message.content === "$avatar") {

      let item = message.channel.send("Loading avatar...")
      let target = message.mentions.users.first() || message.author;
   
   
       message.channel.send({files: [
      {   
          attachment: target.displayAvatarURL,
          name: "avatar.png"
      }
       ]});

       
    }
});
//ping
bot.on("message", async message => {
    if (message.content === "$ping") {

const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
      }
});       
//help
bot.on("message", async message => {

    if (message.content === "$help") {
let embed = new Discord.RichEmbed()
              .setAuthor("ØneŁife")
              .setDescription("This is the bot creator's info!")
              .setColor("#FF0000")
              .addField("Full Username", `ØneŁife`)
              .addField("ID", "323989674399891459")
              .addField("Bot Created At", "6/17/2018");      
let embed2 = new Discord.RichEmbed()
              .setDescription("Commands!")
              .setColor("#FF0000")
              .addField("**Everyone.**", "Commands For Everyone Are Below.")
              .addField("1. **__$avatar__**", "Posts profile picture of target. If no target is selected, It will show the command callers profile picture.")
              .addField("2. **__$servericon__**", "Shows the current server icon.")
              .addField("3. **__$ping__**", "Shows the bots ping to the server.")
              .addField("4. **__$say__**", "Makes the bot repeat what you enter.")
              .addField("5. **__$roll__**", "Rolls a number.")
              .addField("6. **__$coinflip__**", "Flips a coin.")
              .addField("7. **__$spider__**", "Posts a spider.")
              .addField("9. **__$meme__**", "Posts a meme.")
              .addField("8. **__$spam__**", "Spams amount of messages hardcore. <$spam  <message> <5>")
              .addField("10. **__$rules__**", "Posts recommended server rules.")
              .addField("11. **__$8ball__**", "Ask the 8ball a question...")
              .addField("12. **__$report__**", "Type in a broken code or command.")
              .addField("13. **__$love__**", "Type in a broken code or command.")
              .addField("14. **__$kiss__**", "Kisses whoever you @.")
              .addField("15. **__$revive__**", "Revives whoever you @.")
              .addField("16. **__$shoot__**", "Shoots whoever you @.")
              .addField("17. **__$slap__**", "Slaps whoever you @.")
              .addField("18. **__$stab__**", "Stabs whoever you @.")
              .addField("**Admins only.**", "Commands For Admins Are Below.")
              .addField("1. **__$kick__**", "Kicks member from server. <$kick @ >")
              .addField("2. ** __$ban__**", "Bans a member from server. <$ban @ >")
              .addField("3. **__$mute__**", "Mutes a member. <$mute @ >. Or Mutes a member for amount of mins entered. <$mute <amount of mins>>")
              .addField("4. **__$unmute__**", "Unmutes a member. <$unmute @ >")          
              .addField("5. **__$announcements__**", "Create a channel named announcements then enter <$announce <message here>.")
              message.author.send(embed);
              message.author.send(embed2);
              message.reply("Sent. Check your direct messages.");
}
});    
//kick
bot.on("message", message => {
    if (message.content === "$kick") {
        let messageArray = message.content.split(/\s+/g);
        let input = messageArray[1];
        let reason = input(" ")
        let member = message.mentions.members.first();
        member.kick(reason).then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});
 bot.login(process.env.BOT_TOKEN);
