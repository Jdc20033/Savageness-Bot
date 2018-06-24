const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



  let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!tomute) return message.reply("You did not mention a user!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the proper roles!");
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
      
     bot.setInterval(() => {
        for(let i in mutetime) {
    let time = bot.mutes[i].time;

            
                   
                }
            }       
        , 60000)
     
     let mutetime = parseInt(args[1]) * 1000
     if (!mutetime) return message.reply("You didn't add a time!");

     await(tomute.addRole(muterole.id));
     message.reply(`<@${tomute.id}> has been muted!`);
   
     setTimeout(function(){
       tomute.removeRole(muterole.id);
       message.channel.send(`<@${tomute.id}> has been unmuted!`);
     }, (mutetime));

}

module.exports.help = {
  name: "mute"
}
