module.exports = {
    jobsRolesManagement: function(message, bot) {
      
      //Gestion métier bûcheron
        if (message.content.includes('!bucheron')) {
          let bucheron = message.guild.roles.find("name", "Bûcheron");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier paysan
        if (message.content.includes('!paysan')) {
          let bucheron = message.guild.roles.find("name", "Paysan");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier alchimiste
        if (message.content.includes('!alchismite')) {
          let bucheron = message.guild.roles.find("name", "Alchimiste");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier pêcheur
        if (message.content.includes('!pecheur')) {
          let bucheron = message.guild.roles.find("name", "Pêcheur");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier chasseur
        if (message.content.includes('!chasseur')) {
          let bucheron = message.guild.roles.find("name", "Chasseur");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier tailleur
        if (message.content.includes('!tailleur')) {
          let bucheron = message.guild.roles.find("name", "Tailleur");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier bijoutier
        if (message.content.includes('!bijoutier')) {
          let bucheron = message.guild.roles.find("name", "Bijoutier");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier cordonnier
        if (message.content.includes('!cordonnier')) {
          let bucheron = message.guild.roles.find("name", "Cordonnier");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier mineur
        if (message.content.includes('!mineur')) {
          let bucheron = message.guild.roles.find("name", "Mineur");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier boulanger
        if (message.content.includes('!boulanger')) {
          let bucheron = message.guild.roles.find("name", "Boulanger");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier sculpteur arcs
        if (message.content.includes('!sculpteur arc')) {
          let bucheron = message.guild.roles.find("name", "Sculpteur d'Arcs");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier sculpteur baguettes
        if (message.content.includes('!sculpteur baguette')) {
          let bucheron = message.guild.roles.find("name", "Sculpteur de Baguettes");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier sculpteur batons
        if (message.content.includes('!sculpteur baton')) {
          let bucheron = message.guild.roles.find("name", "Sculpteur de Bâtons");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier forgeur epees
        if (message.content.includes('!forgeur epees')) {
          let bucheron = message.guild.roles.find("name", "Forgeur d'Épées");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier forgeur boucliers
        if (message.content.includes('!forgeur bouclier')) {
          let bucheron = message.guild.roles.find("name", "Forgeur de Boucliers");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier forgeur dague
        if (message.content.includes('!forgeur dague')) {
          let bucheron = message.guild.roles.find("name", "Forgeur de Dagues");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier forgeur pelle
        if (message.content.includes('!forgeur pelle')) {
          let bucheron = message.guild.roles.find("name", "Forgeur de Pelles");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
      //Gestion métier forgeur hache
        if (message.content.includes('!forgeur hache')) {
          let bucheron = message.guild.roles.find("name", "Forgeur de Haches");
          if (message.member.roles.has(bucheron.id))
          {
              message.member.removeRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 15158332,
                                    fields: [{
                                        name: "Métier oublié",
                                        value: "<@!" + message.member.id + "> a oublié le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          else
          {
             message.member.addRole(bucheron).catch(console.error);
              message.channel.send({embed: {
                                    color: 3066993,
                                    fields: [{
                                        name: "Métier appris !",
                                        value: "<@!" + message.member.id + "> a appris le métier <@&" + bucheron.id + "> !"
                                      }
                                    ]
                                  }
                                });
          }
          message.delete()
        }
    }
};