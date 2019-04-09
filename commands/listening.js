const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let botRole1 = message.guild.roles.find("name", "Admin")
    let botRole2 = message.guild.roles.find("name", "Entwickler")
    let botRole3 = message.guild.roles.find("name", "Moderator")
  
  if(message.member.roles.has(botRole1.id)) {
    bot.user.setStatus("dnd");
    bot.user.setActivity("Spotify Musik.", {type: "LISTENING"} );
    message.delete();
  } else {
    if(message.member.roles.has(botRole2.id)) {
      bot.user.setStatus("dnd");
      bot.user.setActivity("Spotify Musik.", {type: "LISTENING"} );
      message.delete();
    } else {
      if(message.member.roles.has(botRole3.id)) {
        bot.user.setStatus("dnd");
        bot.user.setActivity("Spotify Musik.", {type: "LISTENING"} );
        message.delete();
      } else {
        message.author.send("Du hast nicht die benötigten Berechtigungen. |" + " Erlaubte Rollen: Admin, Entwickler, Moderator.");
      }
    }
  }
}

module.exports.help = {
  name: 'listening',
  aliases: []
};