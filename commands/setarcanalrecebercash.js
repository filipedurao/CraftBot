const Discord = require('discord.js');

exports.run = async (client, message, args, guild) => {
  connection = await require('../Data/db')
    message.delete();


    let canal = message.mentions.channels.first()
    if(!canal) return message.reply("<a:errado:687759347027017744> Erro no Comando!\n Nenhum canal foi encontrada.!\n Use: /setarcanalrecebercash #canal_aqui");

    if (!(message.member.hasPermission('ADMINISTRATOR'))) {
        return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000}));;
      };
// COMANDO ---------------------

        if (canal) {
          try{
            await connection.query(
            `UPDATE guildconfig SET cashreceber = '${canal.id}' WHERE guildId = '${message.guild.id}'`
            )
            let embed = new Discord.MessageEmbed()

            .setColor("#964b00") 
            .setTitle(`${message.author.username}`)
            .setDescription(`**Canal de receber solititação de cash setada com sucesso! <a:verify:687759351330766901> \n \n  O canal setada como: **\n${canal}`)
                .setFooter("Atenciosamente " + message.guild.name , client.user.avatarURL)
                .setTimestamp();
                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000}));;
          } catch (err) {
            console.log(err)
          }
      }
    } 