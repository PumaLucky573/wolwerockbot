const Discord = require('discord.js');
const Bot = new Discord.Client();

Bot.login(procces.env.BOT_TOKEN);

//Listener Event: Bot Gestartet
Bot.on('ready', () => {
    console.log('Bot Gestartet...') //Konsolen Meldung Bot Gestartet...

    //Status Online [Online,idle,invisible, & dnd]
    //Bot.user.setStatus('Online')

    //Spiel & Stream
    //Bot.user.setGame('Hallo')

});

//Listener Event: User Joining The Discord Server.
Bot.on('guildMemberAdd', member => {
    
    console.log('User ' + member.user.username + 'has joined the server!') //Send a message to the console that someone joined the discord server.

    //Now lets add role when they join. First, we need to get the role we want.
    var role = member.guild.roles.find('name', 'Team Sirion'); // This looks for the role in the server(guild), it searches by name, meaning you can change 'user' to the role you want!
    
    //Secondly, we will add the role
    member.addRole(role)

});
