exports.run = async (client, message, args)  => {
      if(!message.channel.permissionsFor(message.member.id).has('MANAGE_CHANNELS')) return message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**') 
      if(!message.channel.permissionsFor(client.user.id).has('MANAGE_CHANNELS')) return message.reply('eu não tenho permissão para apagar mensagens neste canal!') 
        message.channel.delete()
    }
  