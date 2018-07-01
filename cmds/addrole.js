    module.exports.run = async (bot, message, args) => {
        const Discord = require("discord.js");
      
        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You don't have the proper roles!");
        let member = message.guild.member(message.mentions.members.first()) || message.guild.members.get(args[0]);
        if(!member) return message.channel.send("You didn't mention a user!");
        let role = args.join(" ").slice(22);
        if(!role) return message.channel.send("Invalid role!");
        let role2 = message.guild.roles.find(`name`, role);
        if(!role2) return message.channel.send("Enter a role name! Letters are case sensitive.");
      
        if(member.roles.has(role2.id)) return message.channel.send("They don't have this role!");
        await(member.addRole(role2.id));
      
        
        message.channel.send(`${role} was given to user.`);
    }
        module.exports.help = {
    name: "addrole"
}