const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && queue.playing) {
        queue.playing = false;
        queue.connection.dispatcher.pause();
        message.delete();
        return message.channel.send(`🎵 Musik wurde pausiert.`).then(msg => msg.delete(5000));
    }
    message.delete();
    return [message.delete(), utils.timed_msg('⚠ Momentan wird keine Musik abgespielt.', 5000)];
    
};

module.exports.help = {
    name: 'pause',
    aliases: []
};