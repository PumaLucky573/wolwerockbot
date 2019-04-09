const discord = require('discord.js');
const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!queue) return [message.delete(), utils.timed_msg('⚠ Momentan wird keine Musik abgespielt.', 5000)];

    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`**-=- Warteschlange -=-**\n${queue.musics.map(music => 
            `**-** ${music.title}`).join('\n')}\n\n🎵 **Nun spielt der Titel:** ${queue.musics[0].title}`);
message.delete();
    message.channel.send(embed).then(msg => msg.delete(5000));

};

module.exports.help = {
    name: 'queue',
    aliases: ['list', 'musiclist', 'songlist']
}