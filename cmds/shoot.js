module.exports.run = async(bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
    const fs = require("fs")
    const links = fs.readdir("./images.json")
    
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