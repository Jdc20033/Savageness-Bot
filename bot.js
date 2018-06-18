const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

  	client.on('message', message => {
    if(message.content === '.on') {
        console.log('Received #' + message.id + ': ' + message.content);
        message.channel.send('Testing Bot is now Online, Greetings, ' + message.author.username)
        .then(message => console.log('Sent #' + message.id + ': ' + message.content))
        .catch(console.error);
    }
});
    

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
