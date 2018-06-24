module.exports.run = async (bot, message, args, input) => {
    const Discord = require("discord.js");
    
    sayMessage = args.join(" ");
       
        


    var i;
    
    var originalString = sayMessage;
    var tempString = "";
    var tempInput = "";
    
       
    for(var x = 0; x < originalString.length; x++){

        if(isNaN(parseInt(originalString.charAt(x)))){
            
            tempString += originalString.charAt(x);           
        }
        else{

           tempInput += originalString.charAt(x);
        }
    }

    sayMessage = tempString;
    input = parseInt(tempInput);

    var length = parseInt(input);
    for( i = 0; i < length; i++){
       
        message.channel.send(`${sayMessage}`);
    }

    


}
    module.exports.help = {
        name: "spam"
    }