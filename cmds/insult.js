module.exports.run = async (bot, message, args, input) => {
const Discord = require("discord.js");

  
var sayings = ["I'd like to see things from your point of view, but my head doesn't go that far up my ass.",
"I believe in respect for the dead, in fact, I could only respect you if you were dead.",
"Is your ass jealous of all the shit that just came out of your mouth?",
"Which sexual position produces the ugliest children? Ask your mother.",
"Your birth certificate is an apology letter from the condom factory.",
"Your face looks like it caught on fire and someone tried putting it out with a hammer.",
"Calling you a idiot would be a insult to all stupid people.",
"Shut the fuck up, you'll never be the man your mother is.",
"I was going to give you a nasty look, but you alread have one.",
"I have more talent in my fart than you have ever had.",
"Jesus may love you, but everyone else thinks you're an asshole.",
"You're so ugly, when your mom dropped you off at school she got a fine for littering.",
"Everytime someone calls you fat you get depressed, so you cut yourself a piece of cake.",
"I don't think you are stupid, You just have bad luck every single time you think.",
"It's better to let someone think you are an Idiot than to open your mouth and prove it.",
"Just because you have a dick doesn't mean you have to act like a dick.",
"You have the right to remain silent because whatever you say will probably be stupid anyway.",
"Roses are red violets are blue, God made me pretty, what happened to you?",
`You: "I look fat. Can you give me a compliment?" Your other: "You have perfect eyesight."`,
"Behind every fat woman there is a beautiful woman. No seriously, gtfo the way."];

var result = Math.floor((Math.random() * sayings.length) + 0);

let target = message.mentions.users.first()
if(!target) return message.channel.send(sayings[result]);
    
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
message.channel.send(target + sayings[result]);

}

module.exports.help = {
    name: "insult"
}
