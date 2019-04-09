

module.exports = {

    ready: (bot) => {
        bot.on('ready', () => {
            bot.user.setActivity('!help für die Befehlsliste.', {type: 'PLAYING'});
            bot.user.setStatus('online');
            console.log('Initialisiert.');
        })
    }
    
};