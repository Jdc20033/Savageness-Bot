const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");
  
              let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
              if(!toMute) return message.channel.send("You did not specify a user!");
             
 
              let role = message.guild.roles.find(r => r.name === "Muted");     
  
              if(!role  || !toMute.roles.has(role.id)) return message.channel.send("This user is not muted!");   
        
              await toMute.removeRole(role);  
             
              delete bot.mutes[toMute.id];

              fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
                if(err) throw err;
                message.channel.send(`Unmuted ${toMute.user.tag}.` );
              
               })} 


                
 module.exports.help = {
 name: "unmute"
}