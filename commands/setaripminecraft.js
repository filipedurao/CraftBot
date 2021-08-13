const Discord = require('discord.js');

exports.run = async (client, message, args, guild) => {
  connection = await require('../Data/db')
    message.delete();
    

    if (!(message.member.hasPermission('ADMINISTRATOR'))) {
        return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000}));;
      };
// COMANDO ---------------------

        const novoIP = args.slice(0).join(" ");
        if(!novoIP) return message.reply("<a:errado:687759347027017744> Erro no Comando!\n Nenhum ip foi encontrada.!\n Use: /setaripminecraft <ip>");
        if (novoIP) {
          try{
            await connection.query(
            `UPDATE guildconfig SET ipmc = '${novoIP}' WHERE guildId = '${message.guild.id}'`
            )
            let embed = new Discord.MessageEmbed()

            .setColor("#964b00") 
            .setTitle(`${message.author.username}`) 
            .setDescription(`**IP do servidor setado com sucesso! <a:verify:687759351330766901> \n \n  O ip setado como: **\n${novoIP}`)
                .setFooter("Atenciosamente " + message.guild.name , client.user.avatarURL)
                .setTimestamp();
                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000}));;
          } catch (err) {
            console.log(err)
          }
      }
    }