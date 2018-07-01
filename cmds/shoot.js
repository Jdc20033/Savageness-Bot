module.exports.run = async(bot, message, args) => {
    const {MessageAttachment} = require('discord.js');
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');

    message.channel.send(attachment);


}
    module.exports.help = {
        name: "shoot"
    }