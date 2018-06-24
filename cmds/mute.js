const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



  let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!tomute) return message.channel.send("You did not mention a user!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");
  let muterole = message.guild.roles.find(`name`, "Muted");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#4b4b4b",
        permissions: []
       })
       message.guild.channels.forEach(async (channel, id) => {
         await channel.overwritePermission(muterole, {
           SEND_MESSAGES: false,
           ADD_REACTIONS: false
         });
        });
      }catch(e){
         consle.log(e.stack);
      }
     } 
      
     let mutetime = parseInt(args[1]) * 60000
     if (!mutetime) return message.channel.send("You didn't add a time!");

     await(tomute.addRole(muterole.id));
     message.channel.send(`Muted ${toMute.user.tag}.` );
   
     setTimeout(function(){
       tomute.removeRole(muterole.id);
       message.channel.send(`Unmuted ${toMute.user.tag}.` );
     }, (mutetime));

}

module.exports.help = {
  name: "mute"
}
