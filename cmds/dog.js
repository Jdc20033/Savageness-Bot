const Discord = require("discord.js");
const superagent =require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle("Dog")
  .setImage(body.url);

   if(setImage = null) setImage = ("https://random.dog/9826-9348-20028.jpg");

  message.channel.send(dogembed);

  

}
module.exports.help = {
 name: "dog"
}