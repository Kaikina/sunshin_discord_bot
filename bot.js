const Discord = require('discord.js')
const bot = new Discord.Client();
const rp = require('request-promise');
const cheerio = require('cheerio');
const jrm = require('./jobs')
const human = require('./human')
const http = require('http');
const express = require('express');
const app = express();

var compliment = 0


//Empêcher le bot de s'endormir
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 100000);

//Scrapper page des commits de l'emu
const options = {
    uri: 'https://gitlab.com/Unteraqwx/Sunshine/commits/master',
    transform: function(body) {
        return cheerio.load(body);
    }
};

//Connexion
bot.login(process.env.SECRET)

//Log de lancement
bot.on('ready', function() {
    console.log("Je suis connecté !")
    //Afficher le "jeu" du bot
    bot.user.setPresence({ status: 'online', game: { name: 'Dofus' } });
})

//Réactions aux nouveaux membres
bot.on("guildMemberAdd", (member) => {
 bot.channels.get("391661345000652802").send({embed: {
                                                      color: 3066993,
                                                      fields: [{
                                                          name: "Nouvel Aventurier !",
                                                          value: "Bienvenue <@!" + member.id + "> sur le Discord officiel Sunshine ! \:sparkles:"
                                                        }
                                                      ]
                                                    }
                                                  });
});

//Réaction aux changements de photos de profil
        bot.on('userUpdate', function(oldUser, newUser) {
            var ats = new Date().getTime()
            var lmts = ats - 300000
            if (bot.user.lastMessage) //Si on a déjà écrit un message, on regarde depuis quand, pour éviter le flood
              lmts = bot.user.lastMessage.createdTimestamp
            if (ats - lmts >= 300000)
            {
              if (oldUser.displayAvatarURL != newUser.displayAvatarURL)
              {
                console.log(oldUser.username + " triggered a avatarUpdate event. Replied with : Sympa ta nouvelle photo de profil <@!" + newUser.id + "> !")
                bot.channels.get("391661345000652802").send({embed : {
                                                color: 7419530,
                                                description : "Sympa ta nouvelle photo de profil <@!" + newUser.id + "> !"
                }})
                compliment = 1
              }
            }
        });

//Réactions aux membres partis
bot.on("guildMemberRemove", (member) => {
 bot.channels.get("general").send({embed: {
                                            color: 15158332,
                                            fields: [{
                                                name: "Aventurier parti :(",
                                                value: "Bonne chance dans ton aventure <@!" + member.id + "> ! \:wave:"
                                              }
                                            ]
                                          }
                                        });
});

var lmts = 0
//Réactions aux messages (commandes)
bot.on('message', message => {
    if(message.author.bot) return; //Ne pas réagiir à ses propres messages
  
    if (compliment && !(message.content.includes('merc')))
           compliment = 0
    
    //Gestion du comportement humain du bot
    human.humanBehavior(message, bot, compliment);
  
    //Faire la bienvenue à Unter après une absence d'1 semaine
    if (message.author.id == "204207949311246337") // Si l'auteur du message est Unter (204207949311246337)
    {
        let unter = bot.users.get("204207949311246337") //On récupère le profil d'Unter
        if (lmts == 0 && unter.lastMessage) //Si on a pas de log enregistré et q'Unter vient d'envoyer un message, on save le timestamp
          lmts = unter.lastMessage.createdTimestamp
        let ts = message.createdTimestamp // Récupérer le timestamp du nouveau message
        if (ts - lmts >= 604800) //Si la différence entre le log et le nouveau message est d'une semaine ou + (604800), on lui souhaite un bon retour et on reset le log
        {
          message.channel.send({embed: {
                                        color: 7419530,
                                        description: "@everyone, <@!204207949311246337> est vivant !!"
          }})
          lmts = 0
        }
    }
  
    if (message.channel.name == "bot-commands")
    {
      //commande PING
      if (message.content.includes('!ping')) {
          message.delete()
          message.channel.send('`' + bot.ping.toString() + ' ms`');
      }
      //commande help
      if (message.content.includes('!help')) {
          message.delete()
          message.channel.send({embed: {
                                        color: 7419530,
                                        fields: [{
                                            name: "Bienvenue !",
                                            value: "Bienvenu parmi nous Aventurier !\nJe suis Sun ! Moi et l'équipe du Staff Discord sommes là pour t'aider.\n\nNotre mission ici est d'échanger et de communiquer entre les membres dans un esprit d'entraide et de partage.\n\nJe vais être directe.\nT'es-tu renseigné avant de rejoindre ce serveur Discord ? **Car ceci n'est pas un exercice.**\nTu as sûrement besoin de l'aide d'autres membres.\n\nSi tu acceptes ta mission, voici certaines informations dont tu pourrais avoir besoin :"
                                          },
                                          {
                                            name: "Voici les commandes que tu peux exécuter :",
                                            value: "- **!help** : Réaffiche ces informations\n- **!ping** : Affiche la latence entre toi et moi-même.\n- **!lc** : Affiche le dernier commit effectué sur l'émulateur.\n- **!bdd** - Te permet de télécharger la base de données à jour de l'émulateur.\n- **!links** : Te permet d'obtenir tous les liens utiles en rapport avec Sunshine.\n- **!{job}** : {job} est le nom du métier. Effectuer une première fois cette commande t'ajoute le métier à ton profil Discord. La refaire, le supprime.\n- **!jobslist** : te permet de consulter la liste des métiers disponibles pour la commande *!{job}*"
                                          },
                                          {
                                            name: "Informations",
                                            value: "Ces commandes ne peuvent être exécutées uniquement dans #bot-commands."
                                          },
                                          {
                                            name: "...",
                                            value: "Bon allez, GO GO GO ! Faisons cette révolution du serveur privé 2.X !"
                                          }
                                        ]
                                      }
                                    });
      }
      //commande Last Commit
      if (message.content.includes('!lc')) {
        message.delete()
          rp(options)
              .then(($) => {
                  message.channel.send({embed: {
                                                color: 3447003,
                                                title: $('a.commit-row-message.item-title').first().text(),
                                                url: 'https://gitlab.com' + $('a.commit-row-message.item-title').first().attr('href'),
                                                description: $('span.day').first().text(),
                                              }
                                            });
              })
              .catch((err) => {
                  console.log(err);
              });
      }
      //commande BDD
      if (message.content.includes('!bdd')) {
          message.delete()
          message.channel.send({
              files: [
                  "https://gitlab.com/Unteraqwx/Sunshine/blob/master/sunshine.sql"
              ]
          });
      }
      //commande links 
      if (message.content.includes('!links')) {
          message.delete()
          message.channel.send({embed: {
                                        color: 3447003,
                                        fields: [{
                                          name: "Liste des liens utiles : ",
                                          value: "- Trello : https://trello.com/b/j0VZZGJi/sunshine\n- GitLab : https://gitlab.com/Unteraqwx/Sunshine",
                                        }]
                                       }
                               });
      }
      //commande jobslist 
      if (message.content.includes('!jobslist')) {
          message.delete()
          message.channel.send({embed: {
                                        color: 3447003,
                                        fields: [{
                                          name: "Voici la liste des noms de métiers disponibles pour la commande **!{job}** :",
                                          value: "- bucheron\n- alchimiste\n- paysan\n- pecheur\n- chasseur\n- tailleur\n- bijoutier\n- cordonnier\n- mineur\n- boulanger\n- sculpteur arc\n- sculpteur baton\n- sculpteur baguette\n- forgeur epee\n- forgeur bouclier\n- forgeur dague\n- forgeur pelle\n- forgeur hache\n\n**Example :** *!forgeur dague*",
                                        }]
                                       }
                               });
      }
      //Gestion des rôles de métiers
      jrm.jobsRolesManagement(message, bot);
      //commande purge
      if (message.content.includes('!clear')) {
         message.channel.fetchMessages({limit: 100}) // This grabs the last number(args) of messages in the channel.
            .then(fetched => {
                               console.log(fetched.size + ' messages found, deleting...') 
                                message.channel.bulkDelete(fetched)
             })
            .catch(console.error);
      }
    }
})

