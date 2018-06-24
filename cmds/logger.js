const Discord = require("discord.js");
const watched = new Discord.Collection();
module.exports.run = async(bot, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper roles!");
const server = message.guild.id;
message.server.createChannel('logs', 'text', [{
        id: guild.id,
         deny: ['MANAGE_MESSAGES'],
         deny: ['SEND_MESSAGES'],
         deny: ['READ_MESSAGES']
        }])
    const channel2 = bot.channels.get(`id`, "logs").id; 
    const channel = (bot.channels.get(args[0]) || message.channel);
    if(watched.has(channel.id)) {
    watched.get(channel.id).stop();
    bot.channels.get(`id`, channel2).sendMessage("Channel Watch Stopped on #"+channel.name);
    return watched.delete(channel.id);
  }

function makeChannel(message){
    var server = message.guild;
    var name = message.author.username;
}
bot.channels.get(`id`, channel2).sendMessage("I have started watching #"+channel.name);
  const collector = channel.createMessageCollector(()=>true);
  collector.on("collect", (collected, collector) => bot.channels.get(`id`, channel2).sendMessage(`[Watched][${collected.author.username}][#${collected.channel.name}]${collected.content}`));
  watched.set(channel.id, collector);
};
module.exports.help = {
        name: "watch"
    }