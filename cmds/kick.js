module.exports.run = async(bot, message, args) => {
    
    
    
    
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");
    
    
    let member = message.mentions.members.first();
    if(!member)
      return message.channel.send("You did not specify a user!");
    if(!member.kickable) 
      return message.channel.send("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
   
    await member.kick(message.channel.send("Broke the rules."))
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick that user. Reason: ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag}.`);

  }

  module.exports.help = {
    name: "kick"
}