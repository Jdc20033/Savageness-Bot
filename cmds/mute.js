const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



  let member = await message.guild.fetchMember(author.id);
  if (message.author.id !== message.guild.ownerID && message.member.highestRole.comparePositionTo(member.highestRole) <= 0) return bot.log.info(bot.i18n.error(message.guild.language, 'lowerRole'));

  args.reason = args.reason.join(' ');

  if (args.server) {
    let mutedRole = message.guild.roles.find('name', 'Muted');
    if (!mutedRole) {
      mutedRole = await message.guild.createRole({ name:'Muted' });
    }

    await member.addRole(mutedRole, args.reason);

    for (let channel of message.guild.channels.filter(channel => channel.type === 'text')) {
      channel = channel[1];
      if (!channel.permissionOverwrites.get(mutedRole.id)) {
        await channel.overwritePermissions(mutedRole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      }
    }
  }
  else {
    await message.channel.overwritePermissions(user, {
      SEND_MESSAGES: false,
      ADD_REACTIONS: false
    }, args.reason);

    if (args.timeout) {
      args.timeout = Math.abs(args.timeout);

      if (!args.timeout || args.timeout > 1440) args.timeout = 1440;

      bot.setTimeout(async () => {
        try {
          let permissionOverwrites = message.channel.permissionOverwrites.get(user.id);
          if (permissionOverwrites) {
            await permissionOverwrites.delete();
          }
        }
        catch (e) {
          bot.log.error(e);
        }
      }, args.timeout * 60 * 1000);
    }
  }

}

module.exports.help = {
  name: "mute"
}
