const Discord = require('discord.js');

exports.run = async (client, message, args, guild)  => {

if(!message.channel.name.includes(`suporte・`)) return message.channel.send("Você não pode usar isso aqui!")
message.channel.send("Ticket se fechando em 10 segundos!")
setTimeout(() => {
    message.channel.delete();
    }, 10000)

  }