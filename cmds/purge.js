module.exports.run = async (bot, message, args, input) => {

const deleteCount = parseInt(input(" ") + 1);
    
    if(!deleteCount || deleteCount < 1 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

module.exports.help = {
    name: "purge"
}
