const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`**${message.guild.name}**`, "https://cdn.discordapp.com/attachments/561872470508830730/562010252871204894/waschbar2.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/561872470508830730/562010252871204894/waschbar2.png")
    .addField(`**Server Name:**`, `${message.guild.name}`, true)
    .addField(`**Server Besitzer:**`, `${message.guild.owner}`, true)
    .addField(`**Benutzer:**`, `${message.guild.memberCount}`, true)
    .addField(`**Rollen:**`, `${message.guild.roles.size}`, true)
    .addField(`**Website:**`, `Momentan nicht verfügbar`, true)
    .addField(`**Erstellt am:**`, message.guild.createdAt)
    .addField(`**You joined at:**`, message.member.joinedAt)
    .addField(`**Discord:** `, `[Raccrew](https://discord.gg/aRE4Jae) |` + ` [Racoon Aiming](https://discord.gg/f7CT8yy) |` + ` [Tonis Labor](https://discord.gg/9Ym8zdr)`, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
    .setTimestamp()
    .setColor(0x002AFF);
  message.delete();
  message.channel.send(embed);
}

module.exports.help = {
  name: 'serverinfo',
  aliases: []
};