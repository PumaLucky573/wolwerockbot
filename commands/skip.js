const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {
message.delete();
    let queue = bot.queue.get(message.guild.id);
    let votes = bot.votes.get(message.guild.id);
    if (!message.member.voiceChannel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Bitte betrete einen Voice-Channel um abzustimmen!`, `${config.prefix}skip`), 5000)];
    if (!queue) return [message.delete(), utils.timed_msg('⚠ Momentan wird keine Musik abgespielt.', 5000)];

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        if (votes.voters.includes(message.author.id)) return [message.delete(), utils.timed_msg(utils.cmd_fail(`⚠ ${message.author}, du hast bereits abgestimmt! **${votes.votes}/3** stimmen.`, `${config.prefix}skip`), 5000)];

        votes.votes++
        votes.voters.push(message.author.id);
        message.channel.send(`🎵 ${message.author}, du hast gevotet diesen Titel zu skippen! **${votes.votes}/3** votes`).then(msg => msg.delete(5000));

        if (votes.votes > 3) return queue.connection.dispatcher.end();
    } else return queue.connection.dispatcher.end();
    
};

module.exports.help = {
    name: 'skip',
    aliases: []
};