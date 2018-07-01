module.exports.run = async(bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
    const links = ("./images.js")
    
    var result = Math.floor((Math.random() * links.length) + 0);

    await message.channel.send(`${target}`, {files: [
        {   
            attachment: links[result],
            name: "meme.png"
        }
         ]});


}
    module.exports.help = {
        name: "shoot"
    }