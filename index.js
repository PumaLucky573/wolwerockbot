//--------------------------------------------------------------------------------------
//PAKETE AUFRUFEN.
//const botconfig = require("./botconfig.json");
const discord         = require('discord.js');
const ytdl            = require('ytdl-core');
const YouTube         = require('simple-youtube-api');
const ready           = require('./handlers/ready');
const message         = require('./handlers/message');
const config          = require('./settiings/config.json');
let {YouTubeAPIKey}   = (process.env.YOUTUBE_API_KEY);//require('./settiings/credentials.json');
const utils           = require('./global/utils');
const bot             = new discord.Client();

require('./global/functions')(bot, utils, ytdl, config);

bot.commands  = new discord.Collection();
bot.aliases   = new discord.Collection();
bot.youtube   = new YouTube(YouTubeAPIKey); // YouTube Client
bot.queue     = new Map() // Music Queue
bot.votes     = new Map(); // Vote Skip
ready.ready(bot);
message.message(bot, utils, config, discord);

//--------------------------------------------------------------------------------------
//NEUE BENUTZER BEKOMMEN EINE ROLLE.
bot.on('guildMemberAdd', member => {
    
  console.log('User ' + member.user.username + 'has joined the server!') //SEND A MESSAGE TO THE CONSOLE THAT SOMEONE JOINED THE DISCORD SERVER.

  //NOW LETS ADD ROLE WHEN THEY JOIN. FIRST, WE NEED TO GET THE ROLE WE WANT.
  var role = member.guild.roles.find('name', 'Raccrew'); //THIS LOOKS FOR THE ROLE IN THE SERVER(GUILD), IT SEARCHES BY NAME, MEANING YOU CAN CHANGE 'USER' TO THE ROLE YOU WANT!
  
  //SECONDLY, WE WILL ADD THE ROLE
  member.addRole(role)

});

//--------------------------------------------------------------------------------------
bot.login(process.env.BOT_TOKEN);

//--------------------------------------------------------------------------------------

//LOGIN / TOKEN.

//--------------------------------------------------------------------------------------