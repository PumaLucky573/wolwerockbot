const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`${message.author.username}`, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .addField(`**Benutzername:** `, `${message.author.username}`, true)
    .addField(`**Hashtag:** `, `${message.author.discriminator}`, true)
    .addField(`**Benutzer-ID:** `, `${message.author.id}`, true)
    .addField(`**Status:** `, `${message.author.presence.status}`, true)
    .addField(`**Spiel:** `, `${message.author.presence.game}`, true)
    .addField(`**Rolle:**`, `${message.member.highestRole}`, true)
    .addField(`**Erstellt am:** `, `${message.author.createdAt}`, true)
    .addField(`**Discord:** `, `[Raccrew](https://discord.gg/aRE4Jae) |` + ` [Racoon Aiming](https://discord.gg/f7CT8yy) |` + ` [Tonis Labor](https://discord.gg/9Ym8zdr)`, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
    .setTimestamp()
    .setColor(0x00FF00);
  message.delete();
  message.channel.send(embed);
}

module.exports.help = {
  name: 'userinfo',
  aliases: []
};