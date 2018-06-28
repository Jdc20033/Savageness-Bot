module.exports.run = async (bot, message, args) => {
    
         message.react('👍'), 
   await message.react('👎'),
   await message.react('🤔');
}
module.exports.help = {
    name: "poll"
}