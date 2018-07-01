module.exports.run = async(bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
    const links = [" https://giphy.com/gifs/shot-VdcYTcb2nRSIU?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=",
    " https://giphy.com/gifs/4cz3D8Yhyzcg8?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=",
    " https://giphy.com/gifs/gun-vhs-cS9lGF8gIBdQs?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=",
    " https://giphy.com/gifs/MZDXTFeePBia4?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=",
    " https://giphy.com/gifs/9umH7yTO8gLYY?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=",
    " https://giphy.com/gifs/shooting-oyl-RXbc4wDSqYs3m?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=",
    " https://giphy.com/gifs/kurt-russell-john-caenter-big-trouble-in-little-china-FEq9xWq9fauLC?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=",
    " https://i.makeagif.com/media/5-08-2014/ircXAq.gif",
    " https://i.makeagif.com/media/7-29-2014/9_vBku.gif",
    " http://i.imgur.com/IoJ4AGS.gif",
    " http://i.imgur.com/JwmiE.gif"];
    
    
    var result = Math.floor((Math.random() * links.length) + 0);

    await message.channel.send(`${target}`, {upload: [
        {   
            attachment: links[result]
        }
         ]});


}
    module.exports.help = {
        name: "shoot"
    }