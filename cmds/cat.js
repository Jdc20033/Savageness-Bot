const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent

    .get(`http://aws.random.cat//meow`)

    let catembed = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle("Cat")
  .setImage(body.url);

  message.channel.send(catembed);

  

}
module.exports.help = {
 name: "cat"
}