const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {
message.delete();
    let queue = bot.queue.get(message.guild.id);
    if (!queue) return [message.delete(), utils.timed_msg('⚠ Momentan wird keine Musik abgespielt.', 5000)];
    
    if (!args[0]) return [message.delete(), message.channel.send(`🎵 Momentane Lautstärke: **${queue.volume}/100**`)].then(msg => msg.delete(5000));
    if (isNaN(args[0])) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Bitte gebe eine Lautstärke von 0 - 100 an!`, `${config.prefix}volume <volume>`), 5000)];
    if (args[0] < 0 || args[0] > 100) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Bitte gebe eine Lautstärke zwischen 0 und 100 an!`, `${config.prefix}volume <volume>`), 5000)];

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return message.channel.send(`🎵 Die Lautstärke wurde auf: **${queue.volume}/100** gesetzt.`).then(msg => msg.delete(5000));
};

module.exports.help = {
    name: 'volume',
    aliases: ['vol']
};