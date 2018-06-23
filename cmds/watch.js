const Discord = require("discord.js");
const watched = new Discord.Collection();

  module.exports.run = async(bot, message, args) => {
  const channel = (client.channels.get(args[0]) || message.channel);
  if(watched.has(channel.id)) {
    watched.get(channel.id).stop();
    message.edit("Channel Watch Stopped on #"+channel.name);
    return watched.delete(channel.id);
  }
  
  message.edit("I have started watching #"+channel.name);
  const collector = channel.createMessageCollector(()=>true);
  collector.on("collect", (collected, collector) => console.log(`[WATCHED][${collected.author.username}][#${collected.channel.name}]${collected.content}`));
  watched.set(channel.id, collector);
};
module.exports.help = {
        name: "watch"
    }
