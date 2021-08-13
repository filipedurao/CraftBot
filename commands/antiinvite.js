const Discord = require('discord.js')

exports.run = async (client, message, args, guild) => {
        connection = await require('../Data/db')
        if (!(message.member.hasPermission('ADMINISTRATOR'))) {
            return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000}));;
          };

          if (!args[0]) {
            message.channel.send("Diferente.")
          }

          let canal = message.mentions.channels.first()

          /*if (args[0] === 'info'){
            await connection.query(
                `SELECT * FROM guildconfig WHERE guildId = '${message.guild.id}'`
                ).then( result => { 
                    if (result[0][0].antiinvite == '1') {
                        const embed = new Discord.MessageEmbed()
                    .setTitle("Sistema anti-invite")
                    .setDescription(`**Status do anti-invite foi alterado com sucesso!  s<a:verify:687759351330766901> \n \n  O status foi alterado: **\n Ativado`)
                    message.channel.send(embed)
                    }else {
                        const embed = new Discord.MessageEmbed()
                    .setTitle("Sistema anti-invite")
                    .setDescription(`**Status do anti-invite foi alterado com sucesso! s <a:verify:687759351330766901> \n \n  O status foi alterado: **\nDesativado`)
                    message.channel.send(embed)
                    }
                 })
          }*/
           if(args[0] === 'off'){

                await connection.query(
                    `UPDATE guildconfig SET antiinvite = '0' WHERE guildId = '${message.guild.id}'`
                    )
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Sistema anti-invite")
                    .setDescription(`**Status do anti-invite foi alterado com sucesso! <a:verify:687759351330766901> \n \n  O status foi alterado: **\nDesativado`)
                    message.channel.send(embed)
        } else if(args[0] === 'on'){

            await connection.query(
                `UPDATE guildconfig SET antiinvite = '1' WHERE guildId = '${message.guild.id}'`
                )
                const embed = new Discord.MessageEmbed()
                    .setTitle("Sistema anti-invite")
                    .setDescription(`**Status do anti-invite foi alterado com sucesso! <a:verify:687759351330766901> \n \n  O status foi alterado: **\nAtivado`)
                    message.channel.send(embed)
    } else if (args[0] === 'divulgacao' || args[0] ===  'divulgação') {
      await connection.query(
        `UPDATE guildconfig SET bypassantiinvite = '${canal.id}' WHERE guildId = '${message.guild.id}'`
        )
        const embed = new Discord.MessageEmbed()
        .setTitle("Sistema anti-invite")
        .setDescription(`**Canal de divulgação foi alterado com sucesso! <a:verify:687759351330766901> \n \n  O canal foi para: **\n${canal}`)
        message.channel.send(embed)

    }
    

      }