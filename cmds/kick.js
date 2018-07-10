module.exports.run = async(bot, message, args) => {

  let member = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
  if(member === message.author.id) return message.channel.send("You cannot kick yourself!");
  if(!member) return message.channel.send("You didn't mention a user!");
  let reason = args.join(" ").slice(22);
  if(!reason) reason = ("No reason was given.")
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");
  if(!member.kickable) return message.channel.send("I cannot kick this user! Do they have a higher role? Do I have ban permissions?");

  message.guild.member(member).ban(reason);
}
      module.exports.help = {
    name: "kick"
}