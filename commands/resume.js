const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && !queue.playing) {
        queue.playing = true;
        queue.connection.dispatcher.resume();
        return message.channel.send(`🎵 Musik spielt weiter.`).then(msg => msg.delete(5000));
    }
message.delete();
    return [message.delete(), utils.timed_msg('⚠ Momentan wird keine Musik abgespielt.', 5000)];
    
};

module.exports.help = {
    name: 'resume',
    aliases: []
};