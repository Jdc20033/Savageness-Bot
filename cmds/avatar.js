module.exports.run = async(bot, message, args) => {
      if(!args[0] || args[0 === "help"]) return message.reply("Usage: $profile @user")
      let msg = await message.channel.send("Loading avatar...")
      let target = message.mentions.users.first() || message.author;
   
   
      await message.channel.send({files: [
      {   
          attachment: target.displayAvatarURL,
          name: "avatar.png"
      }
       ]});

       msg.delete();
    }

module.exports.help = {
    name: "avatar"
}
