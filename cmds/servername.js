module.exports.run = async (bot, message, args) => {

let person = (message.guild.members.get(args[0]));

if(person.hasPermission('MANAGE_SERVER')) return message.channel.send("You don't have the proper roles!");

const input = args.join(" ");

guild.setName(input)
}
module.exports.help = {
    name: "setservername"
}