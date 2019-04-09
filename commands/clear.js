const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Du hast nicht die benötigten Berechtigungen!")
    if(!args[0]) return message.channel.send("Definiere eine Nummer!");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`${args[0]} Nachrichten wurden gelöscht!`).then(msg => msg.delete(5000));
    });
  
};

module.exports.help = {
  name: 'clear',
  aliases: []
};