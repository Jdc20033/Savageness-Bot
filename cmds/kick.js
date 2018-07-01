module.exports.run = async(bot, message, args) => {
  const Discord = require("discord.js");

  let member = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
  if(member === message.author.id) return message.channel.send("You cannot kick yourself!");
  if(!member) return message.channel.send("You didn't mention a user!");
  let reason = args.join(" ").slice(22);
  if(!reason) reason = ("No reason was given.")
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");
  if(!member.kickable) return message.channel.send("I cannot kick this user! Do they have a higher role? Do I have ban permissions?");
  
  let kickembed = new Discord.RichEmbed()
  .setDescription("**Kick**")
  .setColor("#ff0000")
  .addField("Kicked user", `${member} with ID ${member.id}`)
  .addField("Kicked by", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);
  
  message.guild.member(member).ban(reason);
  
  let logs = message.guild.channels.find(`name`, "logs");
  if(!logs) return message.channel.send("No channel named logs!")
      if(logs) return logs.send(kickembed);
      }
      module.exports.help = {
    name: "kick"
}