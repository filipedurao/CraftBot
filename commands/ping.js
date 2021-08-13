const Discord = require('discord.js')
exports.run = async (client, message, args) => { 

const embed = new Discord.MessageEmbed()
      .setAuthor(`Ping : **${client.ws.ping}ms** !`)
      .setColor(message.member ? message.member.displayColor : global.CLIENT_DEFAULT_COLOR)

    message.channel.send(embed)
      }
    