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
    
    
    var result = Math.floor((Math.random() * links.length) + 0);

    message.channel.send(`${target}`, {
        file: links[Math.floor(Math.random() * links.length)]
    });


}
    module.exports.help = {
        name: "shoot"
    }