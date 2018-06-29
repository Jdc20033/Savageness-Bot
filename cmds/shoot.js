module.exports.run = async (message) => {


const links = ["https://media.giphy.com/media/VdcYTcb2nRSIU/giphy.gif",
"http://media.giphy.com/media/4cz3D8Yhyzcg8/giphy.gif",
"http://media.giphy.com/media/cS9lGF8gIBdQs/giphy.gif",
"http://media.giphy.com/media/MZDXTFeePBia4/giphy.gif",
"http://media.giphy.com/media/9umH7yTO8gLYY/giphy.gif",
"http://media.giphy.com/media/RXbc4wDSqYs3m/giphy.gif",
"http://media.giphy.com/media/FEq9xWq9fauLC/giphy.gif",
"https://i.makeagif.com/media/5-08-2014/ircXAq.gif",
"https://i.makeagif.com/media/7-29-2014/9_vBku.gif",
"http://i.imgur.com/IoJ4AGS.gif",
"http://i.imgur.com/JwmiE.gif"];

var result = Math.floor((Math.random() * links.length) + 0);

let target = message.mentions.members.first();
if(!target) return message.reply(links[result]);
    message.channel.send(target +  links[result]);

}
    module.exports.help = {
        name: "shoot"
    }