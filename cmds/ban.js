module.exports.run = async(bot, message, args) => {


  let member = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
  if(member === author.id) return message.channel.send("You cannot ban yourseld!");
  if(!member) return message.channel.send("You didn't mention a user!");
  let reason = args.join(" ").slice(22);
  if(!reason) return message.channel.send("You didn't provide a reason!");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");
  if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
  
  let banEmbed = new Discord.RichEmbed()
  .setDescription("**ban**")
  .setColor("#ff0000")
  .addField("Banned user", `${member} with ID ${member.id}`)
  .addField("Banned by", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);
  
  
  let logs = message.guild.channels.find(`name`, "logs");
  if(!logs) message.guild.createChannel('logs', 'text', [{
          id: message.guild.id,
          deny: ['MANAGE_MESSAGES'],
          deny: ['SEND_MESSAGES'],
          deny: ['READ_MESSAGES']
        }])
  
  message.guild.member(member).ban(reason);
  logs.send(banEmbed);
      }
exports.help = {
  name: 'ban'
}