module.exports.run = async (bot, message, args, input) => {

let role = message.guild.roles.find("name", `${args.join(" ")}`);

role.edit({

   color: "#ff0000",
   permissions: ["ADMINISTRATOR"]

}) 

}

module.exports.help = {
    name: "setroleadmin"
}