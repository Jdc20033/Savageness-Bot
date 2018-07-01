module.exports.run = async (bot, message, args) => {
    const Discord = require("discord.js");
    const fs = require("fs");
    const ms = require("ms");
    
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You don't have the proper roles!");
    let member = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
    if(!member) return message.channel.send("You didn't mention a user!");
    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I cannot warn this user! Do they have a higher role? Do I have permissions?")
    let reason = args.join(" ").slice(22);
    if(!reason) reason = "No reason given"
    
    if(!warns[member.id]) warns[member.id] = {
      warns: 0
    };
    
    warns[member.id].warns++;
    
    fs.writeFile("./warnings", JSON.stringify(warns));
      console.log("Did it.");
    
    
    let warnembed = new Discord.RichEmbed()
    .setDescription("**Warn**")
    .setAuthor(message.author.username)
    .setColor("#ff0000")
    .addField("Warned user", member.tag)
    .addField("Warned in", message.channel)
    .addField("Number of Warnings", warns[member.id].warns)
    .addField("Reason", reason);
    
    let logs = message.guild.channels.find(`name`, "logs");
    if(!logs) 
    
    logs.send(warnembed);
    
    if(warns[member.id].warns == 2){
      let muterole = message.guild.roles.find(`name`, "muted");
      if(!muterole) return message.channel.send("Create a role named Muted");
      
      let mutetime = "10s";
      await(member.addRole(muterole.id));
      message.channel.send(`${member.tag} has been muted for ${mutetime}`);
    
      setTimeout(function(){
      member.removeRole(muterole.id)
      message.channel.reply(`${member.tag} has been unmuted.`);
      })
    }
    if(warns[member.id].warns == 3){
      message.guild.member(member).ban(reason);
      message.channel.send(`${member.tag} has been banned.`)
    }
  }
    module.exports.help = {
      name: "warn"
    }