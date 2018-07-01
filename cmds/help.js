module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
     
let embed = new Discord.RichEmbed()
              .setDescription("**Commands**!")
              .setColor("#FF0000")
              .addField("1. **$8ball**", "Ask the legendary 8ball a question and get your long awaited answer. **Usage** $8ball Why don't girls love me?")
              .addField("2. **$avatar**", "Shows a users avatar. **Usage** $avatar @Bob")
              .addField("3. **$coinflip**", "Flips a coin to settle bets..Bob won smh. **Usage** $coinflip")
              .addField("4. **$help**", "Shows this page. **Usage** $help")
              .addField("5. **$insult**", "Insults someone. Preferably Bob. **Usage** $insult @Bob")
              .addField("6. **$ping**", "Shows bots connection to the current server. **Usage** $ping")
              .addField("7. **$poll**", "Ask a question and get other peoples opinions on it. Fuck off Bob we don't want your opinion. **Usage** $poll Ban bob?")
              .addField("8. **$repeat**", "Bot repeats what you say how many times you say. **Usage** $repeat Kys Bob 5")
              .addField("9. **$report**", "Send a custom error report about a command. **Usage** $report Ban doesn't work")
              .addField("10. **$roll**", "Roll a dice to settle bets..Bob still won smh. **Usage** $roll")
              .addField("11. **$say**", "Bot says something then deletes the evidence. **Usage** $say Bob I hate you")
              .addField("12. **$servericon**", "Shows the current servers icon if any. **Usage** $servericon")
              .addField("13. **$shoot**", "Shoot someone.. preferably Bob. **Usage** $shoot @Bob")
              //.addField("14. **$**", "")
              //.addField("15. **$**", "")
              //.addField("16. **$**", "")
              //.addField("17. **$**", "")
              //.addField("18. **$**", "")
              //.addField("19. **$**", "")
              //.addField("20. **$**", "")
              .addField("**Moderation**", "Requires a role with manage messages to work.")
              .addField("1. **$ban**", "Bans a user from current server. **Usage** $ban @Bob")
              .addField("2. **$mute**", "Mutes a user from current server for a certain amount of time. **Usage** $mute @Bob 5")
              .addField("3. **$unmute**", "Unmutes a muted user from current server. **Usage** $unmute @Jimmy")
              .addField("4. **$purge**", "Deletes messages from current channel up to 14 days old max of 100. **Usage** $purge 10")
             
              message.author.send(embed);
              message.reply("Sent. Check your direct messages.");

}
    module.exports.help = {
        name: "help"
    }
