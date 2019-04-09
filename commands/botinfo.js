const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`Toni Racoon`, bot.user.avatarURL)
    .setThumbnail(bot.user.avatarURL)
    .addField(`Version:`, `3.2.4`, true)
    .addField(`Node JS:`, `v10.5.0`, true)
    .addField(`Library:`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Server:`, `${bot.guilds.size}`, true)
    .addField(`Benutzer:`, `${bot.users.size}`, true)
    .addField(`Website:`, `In Entwicklung... 0% Abgeschlossen.`, true)
    .addField(`Erstellt am:`, bot.user.createdAt)
    .addField(`Developer:`, `@Leon|ShrederPlays#2076`, true)
    .addField(`Discord:`, `[Raccrew](https://discord.gg/aRE4Jae) |` + ` [Racoon Aiming](https://discord.gg/f7CT8yy) |` + ` [Tonis Labor](https://discord.gg/9Ym8zdr)`, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
    .setTimestamp()
    .setColor(0xFF0092);
  message.delete();
  message.channel.send(embed);
}

module.exports.help = {
  name: 'botinfo',
  aliases: ['binfo']
};