  function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

module.exports = {
    humanBehavior: function(message, bot, compliment) {
      var ats = new Date().getTime()
      var lmts = ats - 300000
      if (bot.user.lastMessage) //Si on a déjà écrit un message, on regarde depuis quand, pour éviter le flood
        lmts = bot.user.lastMessage.createdTimestamp
      if (ats - lmts >= 300000) //Si on a parlé il y a + de 5 min, alors on peut répondre
      {
        //greetings
        if (message.content.toLowerCase().includes('salut') || message.content.toLowerCase().includes('hey') || message.content.toLowerCase().includes('yo') && message.content.charAt(0) == 'y' || message.content.toLowerCase().includes('lu') && message.content.charAt(0) == 'l')
        {
            let greetings = ['Salut \:smiley:', 'Hey \:smiley:', 'Yo \:smiley:', 'Lu \:smiley:']
            let n = Math.floor(Math.random() * greetings.length)
            message.channel.send({embed: {
                                        color: 7419530,
                                        description: greetings[n],
            }})
            console.log(message.author.username + " triggered a greeting event. Replied with : " + greetings[n])
        }
        //orage
        if ( (message.content.toLowerCase().includes('il y a') || message.content.toLowerCase().includes('y a')) && message.content.toLowerCase().includes('orage'))
        {
            message.channel.send({embed: {
                                        color: 7419530,
                                        description: "Orage \:cloud_lightning: et foudre \:zap: attention au matériel électronique !\nUn impact de foudre peut « nettoyer » tout ce qu’il y a autour d’un rayon de 200 m de son point de chute, ce qui n’est pas étonnant vu les 100 millions de volts (100 00 0000 V, 100 E6 V) que peut atteindre un éclair.",
            }})
            console.log(message.author.username + " triggered a thunder event.")
        }
        //goodbye
        if (message.content.toLowerCase().includes('bonne nuit') || message.content.toLowerCase().includes('a+') || message.content.toLowerCase().includes('++') || message.content.toLowerCase().includes('j\'y vais') || 
            message.content.toLowerCase().includes('à demain') || message.content.toLowerCase().includes('good night'))
        {
            let sayings = ['Bonne nuit, à demain \:smiley:', 'a+ \:smiley:', '++ \:smiley:', 'À demain, bonne nuit \:smiley:', 'Bonne nuit \:smiley:', 'À demain \:smiley:']
            let n = Math.floor(Math.random() * sayings.length)
            message.channel.send({embed: {
                                        color: 7419530,
                                        description: sayings[n],
            }})
            console.log(message.author.username + " triggered a goodbye event. Replied with : " + sayings[n])
        }
        //ANTI MAJ
        if (message.cleanContent.toUpperCase() == message.cleanContent && message.cleanContent.charAt(0) != ':' && message.cleanContent.charAt(0) != '\\' && isLetter(message.cleanContent.charAt(0))) //Si la conversion en full MAJ, est identique au message d'origine, alors c'est du full MAJ
        {
          message.channel.send({embed: {
                                        color: 7419530,
                                        description: "ON N'EST PAS SOURDS !"
            }})
          console.log(message.cleanContent + " triggered a Uppercase event.")
        }
        //Réaction aux contributions
        if (message.attachments.first() && message.attachments.first().filename.includes(".txt"))
          message.channel.send({embed: {
                                        color: 7419530,
                                        description: "<@!" + message.author.id + "> merci pour ta contribution !"
            }})
      }
      
      //Réaction aux remerciements
      if (message.isMentioned(bot.user) && message.content.toLowerCase().includes('merc'))
        message.react("❤")
      if (compliment)
      {
        message.channel.send({embed: {
                                        color: 7419530,
                                        description: "\:wink:"
        }})
        compliment = 0
        console.log(message.author.username + " triggered a thanks back event. Replied with ;)")
      }
    }
};