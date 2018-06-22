module.exports.run = async(bot, message, args) => {



        	const result = Math.floor((Math.random() * 2) + 1);
        	if (result == 1) {
        		message.channel.send("The coin landed on heads!");
        	} else if (result == 2) {
        		message.channel.send("The coin landed on tails! ");
        	}}
        


        module.exports.help = {
            name: "coinflip"
        }
