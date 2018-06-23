const fs = module.require("fs");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();
bot.mutes = require("./cmds/mutes.json");

module.exports.run = async (bot, message, args) => {
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
    
        fs.appendFile('./cmds/'+mutes.json,'appending this text to file','utf8',(err)=>{if(err) throw err; console.log('data was appended to '+mutes.json)})
            message.channel.send(`Muted ${toMute.user.tag}.` );
}
   
    
    module.exports.help = {
        name: "mute"
    }
