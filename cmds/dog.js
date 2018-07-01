const Discord = require("discord.js");
const superagent =require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle("Dog")
  setImage(body.url);

  message.channel.send(dogembed);

  

}
moduel.exports.help = {
 name: "dog"
}

