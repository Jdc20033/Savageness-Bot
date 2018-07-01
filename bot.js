const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();


fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

     let jsfiles = files.filter(f => f.split(".").pop() === "js");
     if(jsfiles.length <= 0) {
         console.log("No commands to load!");
            return;
       }

       console.log(`Loading ${jsfiles.length} commands!`);

      jsfiles.forEach((f, i) => {
          let props = require(`./cmds/${f}`);
          console.log(`${i + 1}: ${f} loaded!`);
          bot.commands.set(props.help.name, props);
       });
    });      
  
    bot.on("ready", () => {
        console.log(`${bot.user.username} has started! With ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
        bot.user.setActivity(`${bot.users.size} Users! | $help`, {type: "WATCHING"});
    
    });
        
    bot.on("guildCreate", guild => {
        console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
            bot.user.setActivity(`${bot.users.size} Users! | $help`, {type: "WATCHING"});
    });
         
    bot.on("guildDelete", guild => {
        console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
        bot.user.setActivity(`${bot.users.size} Users! | $help`, {type: "WATCHING"});          
    });
    
    bot.on("guildMemberAdd", async member => {
        let welcomechannel = member.guild.channels.find(`name`, "welcome_goodbye");
        welcomechannel.send(`${member} just joined. Hold my beer.`);
    });
        
    bot.on("guildMemberRemove", async member => {
        let welcomechannel = member.guild.channels.find(`name`, "welcome_goodbye");
        welcomechannel.send(`We didn't need you anyway ${member}!`);
        });

 bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(/\s+/g);
    let commands = messageArray[0];
    let args = messageArray.slice(1);
    let input = messageArray[1];

    if(!commands.startsWith(prefix)) return;
    

    let cmd = bot.commands.get(commands.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args, input);
  
});


bot.login(process.env.BOT_TOKEN);