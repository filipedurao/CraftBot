const Discord = require('discord.js');

exports.run = async (client, message, args, guild) => {
  connection = await require('../Data/db')
    message.delete();


    let canal = message.mentions.channels.first()
    if(!canal) return message.reply("<a:errado:687759347027017744> Erro no Comando!\n Nenhum canal foi encontrada.!\n Use: /setarcanalsolicitaryt #canal_aqui");

    if (!(message.member.hasPermission('ADMINISTRATOR'))) {
        return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000}));;
      };
// COMANDO ---------------------

        if (canal) {
          try{
            await connection.query(
            `UPDATE guildconfig SET yt = '${canal.id}' WHERE guildId = '${message.guild.id}'`
            )
            let embed = new Discord.MessageEmbed()

            .setColor("#964b00") 
            .setTitle("Sistema de solicitar tag Youtuber")
            .setDescription("\n > Para solicitar tag Youtuber digite aqui neste canal: \n ```/solicitar yt```\n Digite sua sugestão após o comando **/solicitar yt**\n Ex: `/solicitar yt Gallagher youtube.com`") 
            .setThumbnail(message.guild.iconURL())
            .setFooter("Atenciosamente " + message.guild.name , client.user.avatarURL)
            .setTimestamp();
                message.guild.channels.cache.get(canal.id).send(embed)
          } catch (err) {
            console.log(err)
          }
      }
    } 
