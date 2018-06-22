module.exports.run = async(bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");

  let member = message.mentions.members.first();
  if(!args[0] || args[0 === "help"]) return message.channel.send("Usage: $ban @user")
  if(!member.bannable) 
    return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

  let reason = args.slice(1).join(' ');
  if(!reason)
    return message.reply("Please indicate a reason for the ban!");
  
  await member.ban(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't ban the user. Reason: ${error}`));
  message.reply(`${member.user.tag} has been banned by ${message.author.tag} Reason: ${reason}`);
}


module.exports.help = {
    name: "ban"
}
