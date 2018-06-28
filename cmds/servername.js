module.exports.run = async (bot, message, args) => {
if(message.author.hasPermission('MANAGE_SERVER')) return message.channel.send("You don't have the proper roles!");

const input = args.join(" ");
guild.setName(input)
}
module.exports.help = {
    name: "poll"
}