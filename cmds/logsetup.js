module.exports.run = async (bot, message, args, input) => {

guild.createChannel('logs', 'text', [{
    id: guild.id,
    deny: ['MANAGE_MESSAGES'],
    deny: ['SEND_MESSAGES'],
    deny: ['READ_MESSAGES']
}])

}
module.exports.help = {
    name: "report"
}