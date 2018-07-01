module.exports.run = async (bot, message, args, input) => {

let role = message.guild.roles.find("name", "Savageness Bot");

role.edit({

   color: "#ff0000"

}) 

}

module.exports.help = {
    name: "setdefaultperms"
}