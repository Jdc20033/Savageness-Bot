module.exports.run = async(bot, message, args) => {


    if(!message.member.id === ('023989674399891459')) return message.channel.send('Restarting Savage Bot!')
    else message.channel.send("Restarting bot!")
    console.log("Requested restart!");
    bot.destroy()

}
    module.exports.help = {
        name: "restart"
    }