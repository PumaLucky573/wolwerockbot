const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.member.send("Du möchtest online auf der Switch mit Sirion spielen? Dann füge sie deiner Freundesliste hinzu! :eyes: SW-1625-5239-9402");
    message.delete();
}

module.exports.help = {
    name: 'switch',
    aliases: []
};