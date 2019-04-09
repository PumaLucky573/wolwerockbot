const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let sayRole1 = message.guild.roles.find("name", "Admin")
    let sayRole2 = message.guild.roles.find("name", "Entwickler")
  
    if(message.member.roles.has(sayRole1.id)) {
      message.channel.send(args.join(' '))
      message.delete();   
  } else {
  if(message.member.roles.has(sayRole2.id)) {
      message.channel.send(args.join(' '))
      message.delete();   
  } else {
      message.reply("Du hast nicht die nötigen Permissions")
         }
    }
}

module.exports.help = {
    name: 'say',
    aliases: []
};