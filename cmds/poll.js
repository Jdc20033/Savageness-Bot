module.exports.run = async (bot, message, args) => {
    
    message.react(':thumbsup:')
    message.react(':thumbsdown:')
    message.react(':thinking:')

}
module.exports.help = {
    name: "poll"
}