const Discord = require('discord.js');

exports.run = async (client, message, args, guild) => {
        connection = await require('../Data/db')
        await connection.query(
            `SELECT ban2 FROM guildconfig WHERE guildId = '${message.guild.id}'`
            ).then( result => {
              if(result[0][0].ban2){
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Eu não tenho as permissões certas.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Especifique um usuário');

        if(!member) return message.channel.send('Não consigo encontrar este usuário. Desculpa aí :/');
        if(!member.bannable) return message.channel.send('Este usuário não pode ser banido. É porque eles são mod/admin ou sua função mais importante é superior à minha');

        if(member.id === message.author.id) return message.channel.send('Bruh, você não pode se banir!');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Não especificado';

        member.ban({reason: `Banido por ${message.author}, motivo ${reason}` })

        const banembed = new Discord.MessageEmbed()
        .setTitle('NOVO MEMBRO BANIDO')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Membro banido:', member)
        .addField('Banido por:', message.author)
        .addField('Motivo:', reason)
        .setFooter('Banimento', client.user.displayAvatarURL())
        .setTimestamp()

            client.channels.cache.get(result[0][0].ban2).send(banembed)
      } else {
        message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum canal de banimentos foi armazenado para este servidor!\n Use: /setarcanalbanimentos #canal_aqui").then(msg => msg.delete({ timeout: 10000})).catch(err => {})
      }
    })
    
  }