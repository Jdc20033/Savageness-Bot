module.exports.run = async (bot, message, args) => {

let person = (message.guild.members.get(args[0]));

let caller = message.author
  if(caller.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");

const input = args.join(" ");

guild.setName(input)
}
module.exports.help = {
    name: "setservername"
}