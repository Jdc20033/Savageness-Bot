module.exports.run = async (bot, message, args, input) => {
    const Discord = require("discord.js");
    
    let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!person) return message.channel.send("You did not mention a user!");
    let reason = args.join(" ").slice(22);
    if(!reason) return message.channel.send("You did not give a reason!")

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#ff0000")
    .addField("Reported User", `${person} with ID: ${person.id}`)
    .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);
    
    let logs = message.guild.channels.find(`name`, "logs");
    if(!logs) message.guild.createChannel('logs', 'text', [{
        id: message.guild.id,
        deny: ['MANAGE_MESSAGES'],
        deny: ['SEND_MESSAGES'],
        deny: ['READ_MESSAGES']
      }])
      .catch(error => message.channel.send(`Couldn't access logs channel because of: ${error}`));
     
      if(logs) return logs.send(reportEmbed)
     
      message.delete().catch(O_o=>{});

}    
    module.exports.help = {
        name: "report"
    }