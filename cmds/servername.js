module.exports.run = async (bot, message, args) => {

let person = (message.guild.members.get(args[0]));

const input = args.join(" ");

guild.setName(input)
}
module.exports.help = {
    name: "setservername"
}