module.exports.run = async (bot, message, args, input) => {
    
    var role = message.member.roles.find('name','Savageness Bot')
    
    role.edit({ color: "#ff0000"})
           


}

module.exports.help = {
    name: "defaultcolor"
}