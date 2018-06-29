module.exports.run = async(message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");

  let member = message.mentions.members.first();
  if(!member)
    return message.channel.send("You did not specify a user!");
  if(!member.bannable) 
    return message.channel.send("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

  let reason = args.slice(1).join(' ');
  if(!reason)
    return message.channel.send("Please indicate a reason for the ban!");
  
  await member.ban(reason)
    .catch(error => message.channel.send(`Sorry ${message.author} I couldn't ban the user. Reason: ${error}`));
  message.channel.send(`${member.user.tag} has been banned by ${message.author.tag} Reason: ${reason}`);
}

  module.exports.help = {
  name: "ban"
  }