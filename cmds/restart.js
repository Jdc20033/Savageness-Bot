module.exports.run = async(bot, message, args) => {
    
    
    if (message.author.id !== '323989674399891459') return message.channel.send('This is a owner only permission.')
    else if (message.channel.send("Restarting bot!"))
    console.log("Requested restart!");
    bot.destroy()
    bot.login(process.env.BOT_TOKEN);
} 
    module.exports.help = {
        name: "restart"
    }