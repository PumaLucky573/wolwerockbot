const Discord = require('discord.js');
const botSettings = require("./botsettings.json");
const prefix = botSettings.prefix;
const Bot = new Discord.Client();

Bot.login(process.env.BOT_TOKEN);

//Listener Event: Bot Gestartet
Bot.on('ready', () => {
    console.log('Bot Gestartet...') //Konsolen Meldung Bot Gestartet...

    //Status Online [Online,idle,invisible, & dnd]
    //Bot.user.setStatus('Online')

    //Spiel & Stream
    Bot.user.setGame('Kekse klauen')

});

//Listener Event: User Joining The Discord Server.
Bot.on('guildMemberAdd', member => {
    
    console.log('User ' + member.user.username + ' has joined the server!') //Send a message to the console that someone joined the discord server.

    //Now lets add role when they join. First, we need to get the role we want.
    var role = member.guild.roles.find('name', 'Raccrew'); // This looks for the role in the server(guild), it searches by name, meaning you can change 'user' to the role you want!
    
    //Secondly, we will add the role
    member.addRole(role)

});

Bot.on("message", function(message) {
    if (message.author.equals(Bot.user)) return;
    
    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
case "switch": 
const member = message.author;
message.member.sendMessage("Du möchtest online auf der Switch mit Sirion spielen? Dann füge sie deiner Freundesliste hinzu! :eyes: SW-1625-5239-9402");
message.delete();
break;
    }
});
