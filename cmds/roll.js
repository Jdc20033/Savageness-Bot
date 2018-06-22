module.exports.run = async(bot, message, args) => {
    const Discord = require("discord.js");    
   
        
        var result = Math.floor((Math.random() * 100) + 1);
       
        let embed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .addField(":game_die: You rolled a: ", + result);
        
   message.channel.send(embed);
 
}
module.exports.help = {
    name: "roll"
}
