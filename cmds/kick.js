module.exports.run = async(bot, message, args) => {
    
    
    
    
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

  module.exports.help = {
    name: "kick"
}
