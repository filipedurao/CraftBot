const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    const nick = args.slice(0).join(" ")
    
    const msg = new Discord.MessageEmbed()
    .setAuthor(nick, 'https://mc-heads.net/avatar/'+ nick)
    .setImage(`https://mc-heads.net/body/${nick}`)
    message.channel.send(msg)
}