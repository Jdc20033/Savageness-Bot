module.exports.run = async (bot, message, args, input) => {
const Discord = require("discord.js");

  
var sayings = ["It is certain",
"It is decidedly so",
"Without a doubt",
"Yes, definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"];



var result = Math.floor((Math.random() * sayings.length) + 0);

let embed = new Discord.RichEmbed()
.setColor("#FF0000")
.addField(":8ball: Your answer is", sayings[result])

message.channel.send(embed);

}

module.exports.help = {
    name: "8ball"
}
