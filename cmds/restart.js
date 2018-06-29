module.exports.run = async(bot, message, args) => {


    if(!message.member.id === ('323989674399891459')) return message.channel.send('Restarting Savage Bot!')
    else message.channel.send("Restarting bot!")
    console.log("rs");


}
    module.exports.help = {
        name: "restart"
    }