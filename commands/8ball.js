const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!args[2]) return message.reply("Bitte stelle eine ganze Frage!");
    let replies = ["Ja.", "Nein.", "Das weiß ich nicht.", "Frag mich später nochmal.", "Vielleicht.", "Ja.", "Nein.", "Das weiß ich nicht.", "Frag mich später nochmal.", "Vielleicht.", "Wenn du diese Antwort bekommen hast darfst du dich glücklich schätzen es passiert nicht so oft ^^"];
  
    let result = Math.floor((Math.random()  * replies.length));
    let question = args.slice().join(" ");
  
   let ballembed = new discord.RichEmbed()
    .setAuthor(`Tonis Magische Miesmuschel`, bot.user.avatarURL)
    .setThumbnail("https://lh3.googleusercontent.com/ZJ40v2DOxvQLXVts-Z1BqABhao_ozBF2gSzXl91mmFCAW5iJyT_a8aV6cpoi9so2oA=s180")
    .addField("**Benutzer:**", `${message.author.username}`, true)
    .addField("**Frage:**", question)
    .addField("**Antwort:**", replies[result])
    .addField(`**Discord:** `, `[Raccrew](https://discord.gg/aRE4Jae) |` + ` [Racoon Aiming](https://discord.gg/f7CT8yy)`, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
    .setTimestamp()
    .setColor("#FF9900");
  message.delete();
  message.channel.send(ballembed);
}

module.exports.help = {
  name: '8ball',
  aliases: ['ball']
};