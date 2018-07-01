module.exports.run = async(bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
    
    const links = [" https://media.giphy.com/media/CZpro4AZHs436/giphy.gif",
    " https://media.giphy.com/media/CZpro4AZHs436/giphy.gif",
    " https://media.giphy.com/media/CZpro4AZHs436/giphy.gif",
    " https://media.giphy.com/media/CZpro4AZHs436/giphy.gif",
    " https://media.giphy.com/media/CZpro4AZHs436/giphy.gif",
    " https://media.giphy.com/media/CZpro4AZHs436/giphy.gif",
    " https://media.giphy.com/media/CZpro4AZHs436/giphy.gif",
    " https://media.giphy.com/media/CZpro4AZHs436/giphy.gif",
    " https://media.giphy.com/media/CZpro4AZHs436/giphy.gif",
    " https://media.giphy.com/media/CZpro4AZHs436/giphy.gif",
    " https://media.giphy.com/media/CZpro4AZHs436/giphy.gif"];
    

    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');

    message.channel.send(attachment);


}
    module.exports.help = {
        name: "shoot"
    }