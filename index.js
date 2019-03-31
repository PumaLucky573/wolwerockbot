const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const bot     = new Discord.Client({disableEveryone: true});

bot.login(process.env.BOT_TOKEN);
//Bot.login("");




//--------------------------------------------------------------------------------------
bot.on('guildMemberAdd', member => {
    
  console.log('User ' + member.user.username + 'has joined the server!') //SEND A MESSAGE TO THE CONSOLE THAT SOMEONE JOINED THE DISCORD SERVER.

  //NOW LETS ADD ROLE WHEN THEY JOIN. FIRST, WE NEED TO GET THE ROLE WE WANT.
  var role = member.guild.roles.find('name', 'Raccrew'); //THIS LOOKS FOR THE ROLE IN THE SERVER(GUILD), IT SEARCHES BY NAME, MEANING YOU CAN CHANGE 'USER' TO THE ROLE YOU WANT!
  
  //SECONDLY, WE WILL ADD THE ROLE
  member.addRole(role)

});
//--------------------------------------------------------------------------------------
//BOT GESTARTET.
bot.on('ready', () => {
    console.log(`${bot.user.username} is online`);

    bot.user.setStatus("online");
    bot.user.setActivity("Kekse klauen.", {type: "PLAYING"} );
});

//--------------------------------------------------------------------------------------

//BOT MESSAGE EVENT.
bot.on("message", async message => {
    if(message.author.bot) return;

//DEFINE SOME THINGS.
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

//BEGIN OF COMMANDS.

//BOT-INFORMATIONEN.
if(cmd === `${prefix}botinfo`){
  const embed = new Discord.RichEmbed()
  .setAuthor(`Toni Racoon`, bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .addField(`Version`, `3.2.0`, true)
  .addField(`Node JS`, `v10.5.0`, true)
  .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
  .addField(`Server`, `${bot.guilds.size}`, true)
  .addField(`Benutzer`, `${bot.users.size}`, true)
  .addField(`Website`, `Momentan nicht verfügbar.`, true)
  .addField(`Discord`, `[Raccrew](https://discord.gg/aRE4Jae) |` + ` [Racoon Aiming](https://discord.gg/f7CT8yy)`, true)
  .addField(`Invite`, `Momentan nicht verfügbar.`, true)
  .addField(`Developer`, `Leon|ShrederPlays#2076`, true)
  .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung.", bot.user.avatarURL)
  .setTimestamp()
  .setColor(0xFF0092);
message.delete();
message.channel.send(embed);
};
//SERVER-INFORMATIONEN.
if(cmd === `${prefix}serverinfo`){
  const embed = new Discord.RichEmbed()
  .setAuthor(`${message.guild.name}`, message.guild.iconURL)
  .setThumbnail(message.guild.iconURL)
  .addField(`**Server Name:** `, `${message.guild.name}`, true)
  .addField(`**Server Besitzer:** `, `${message.guild.owner}`, true)
  .addField(`**Benutzer:** `, `${message.guild.memberCount}`, true)
  .addField(`**Rollen:** `, `${message.guild.roles.size}`, true)
  .addField(`**Website:** `, `Momentan nicht verfügbar.`, true)
  .addField(`**Discord:** `, `[Raccrew](https://discord.gg/aRE4Jae) |` + ` [Racoon Aiming](https://discord.gg/f7CT8yy)`, true)
  .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
  .setTimestamp()
  .setColor(0x002AFF);
message.delete();
message.channel.send(embed);
};
//BENUTZER-INFORMATIONEN.
if(cmd === `${prefix}userinfo`){
  const embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}`, message.author.avatarURL)
  .setThumbnail(message.guild.iconURL)
  .addField(`**Benutzername:** `, `${message.author.username}`, true)
  .addField(`**Hashtag:** `, `${message.author.discriminator}`, true)
  .addField(`**Benutzer-ID:** `, `${message.author.id}`, true)
  .addField(`**Status:** `, `${message.author.presence.status}`, true)
  .addField(`**Spiel:** `, `${message.author.presence.game}`, true)
  .addField(`**Rolle:**`, `${message.member.highestRole}`, true)
  .addField(`**Erstellt am:** `, `${message.author.createdAt}`, true)
  .addField(`**Discord:** `, `[Raccrew](https://discord.gg/aRE4Jae) |` + ` [Racoon Aiming](https://discord.gg/f7CT8yy)`, true)
  .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
  .setTimestamp()
  .setColor(0x00FF00);
message.delete();
message.channel.send(embed);

};
//SWITCH-FREUNDESCODE.
if(cmd === `${prefix}switch`) {
  message.member.send("Du möchtest online auf der Switch mit Sirion spielen? Dann füge sie deiner Freundesliste hinzu! :eyes: SW-1625-5239-9402");
  message.delete();
};
//SAY-COMMAND.
if(cmd === `${prefix}say`) {
/* message.delete();
  message.channel.send(args.join(' ')) */

  let sayRole1 = message.guild.roles.find("name", "Admin")
  let sayRole2 = message.guild.roles.find("name", "Entwickler")

  if(message.member.roles.has(sayRole1.id)) {
    message.channel.send(args.join(' '))
    message.delete();   
} else {
if(message.member.roles.has(sayRole2.id)) {
    message.channel.send(args.join(' '))
    message.delete();   
} else {
    message.reply("Du hast nicht die nötigen Permissions")
       }
  }                   
}
//LISTENING-COMMAND.
if(cmd === `${prefix}listening`) {
  let botRole1 = message.guild.roles.find("name", "Admin")
  let botRole2 = message.guild.roles.find("name", "Entwickler")
  let botRole3 = message.guild.roles.find("name", "Moderator")

if(message.member.roles.has(botRole1.id)) {
  bot.user.setStatus("dnd");
  bot.user.setActivity("Spotify Musik.", {type: "LISTENING"} );
  message.delete();
} else {
  if(message.member.roles.has(botRole2.id)) {
    bot.user.setStatus("dnd");
    bot.user.setActivity("Spotify Musik.", {type: "LISTENING"} );
    message.delete();
  } else {
    if(message.member.roles.has(botRole3.id)) {
      bot.user.setStatus("dnd");
      bot.user.setActivity("Spotify Musik.", {type: "LISTENING"} );
      message.delete();
    } else {
      message.author.send("Du hast nicht die benötigten Berechtigungen. |" + " Erlaubte Rollen: Admin, Entwickler, Moderator.");
    }
  }
}
/*  bot.user.setStatus("dnd")
  bot.user.setActivity("Hört momentan Music.", {type: "LISTENING"} );
  message.delete(); */
}
//PLAYING-COMMAND.
if(cmd === `${prefix}playing`) {
  let botRole1 = message.guild.roles.find("name", "Admin")
  let botRole2 = message.guild.roles.find("name", "Entwickler")
  let botRole3 = message.guild.roles.find("name", "Moderator")

if(message.member.roles.has(botRole1.id)) {
  bot.user.setStatus("online");
  bot.user.setActivity("Kekse klauen.", {type: "PLAYING"} );
  message.delete();
} else {
  if(message.member.roles.has(botRole2.id)) {
    bot.user.setStatus("online");
    bot.user.setActivity("Kekse klauen.", {type: "PLAYING"} );
    message.delete();
  } else {
    if(message.member.roles.has(botRole3.id)) {
      bot.user.setStatus("online");
      bot.user.setActivity("Kekse klauen.", {type: "PLAYING"} );
      message.delete();
    } else {
      message.author.send("Du hast nicht die benötigten Berechtigungen. |" + " Erlaubte Rollen: Admin, Entwickler, Moderator.");
      }
    }
  }
};
//STREAMING-COMMAND.
if(cmd === `${prefix}streaming`) {
  let botRole1 = message.guild.roles.find("name", "Admin")
  let botRole2 = message.guild.roles.find("name", "Entwickler")
  let botRole3 = message.guild.roles.find("name", "Moderator")

if(message.member.roles.has(botRole1.id)) {
  bot.user.setStatus("dnd");
  bot.user.setActivity("Auf einem Keks Raubzug unterwegs sein.", {type: "STREAMING"} );
  message.delete();
} else {
  if(message.member.roles.has(botRole2.id)) {
    bot.user.setStatus("dnd");
    bot.user.setActivity("Auf einem Keks Raubzug unterwegs sein.", {type: "STREAMING"} );
    message.delete();
  } else {
    if(message.member.roles.has(botRole3.id)) {
      bot.user.setStatus("dnd");
      bot.user.setActivity("Auf einem Keks Raubzug unterwegs sein.", {type: "STREAMING"} );
      message.delete();
    } else {
      message.author.send("Du hast nicht die benötigten Berechtigungen. |" + " Erlaubte Rollen: Admin, Entwickler, Moderator.");
      }
    }
  }
};
//WATCHING-COMMAND.
if(cmd === `${prefix}watching`) {
  let botRole1 = message.guild.roles.find("name", "Admin")
  let botRole2 = message.guild.roles.find("name", "Entwickler")
  let botRole3 = message.guild.roles.find("name", "Moderator")

if(message.member.roles.has(botRole1.id)) {
  bot.user.setStatus("dnd");
  bot.user.setActivity("Pr0cy0Z beim Streamen zu.", {type: "WATCHING"} );
  message.delete();
} else {
  if(message.member.roles.has(botRole2.id)) {
    bot.user.setStatus("dnd");
    bot.user.setActivity("Pr0cy0Z beim Streamen zu.", {type: "WATCHING"} );
    message.delete();
  } else {
    if(message.member.roles.has(botRole3.id)) {
      bot.user.setStatus("dnd");
      bot.user.setActivity("Pr0cy0Z beim Streamen zu.", {type: "WATCHING"} );
      message.delete();
    } else {
      message.author.send("Du hast nicht die benötigten Berechtigungen. |" + " Erlaubte Rollen: Admin, Entwickler, Moderator.");
      }
    }
  }
};

}); //END OF COMMANDS.

//--------------------------------------------------------------------------------------
