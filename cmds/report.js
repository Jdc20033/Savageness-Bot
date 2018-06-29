module.exports.run = async (bot, message, args, input) => {
    const Discord = require("discord.js");
    
    {
        const User = message.author.username
        const UserDis = message.author.discriminator
        const Info = message.author.id
       
        const sayMessage = args.join(" ");
    
    console.log(`${User}#${UserDis} ID = ${Info} Reported: ${(sayMessage)}`)
    
    
    
    let embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .addField("Report sent.", `Thank you for your support @here!`)
    
    
    message.author.send(embed)
    
    
    
    
    
    
    
    
    
    
    
    }}
    
    module.exports.help = {
        name: "report"
    }