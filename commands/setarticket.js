const Discord = require('discord.js');

exports.run = async (client, message, args, guild) => {
  connection = await require('../Data/db')
    message.delete();


    let canal = message.mentions.channels.first()
    if(!canal) return message.reply("<a:errado:687759347027017744> Erro no Comando!\n Nenhum canal foi mencionado!\n Use: /setarticket #canal <mensagem editavel>").then(msg => msg.delete({ timeout: 10000}));;

    if (!(message.member.hasPermission('ADMINISTRATOR'))) {
        return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000}));;
      };
// COMANDO ---------------------
        const mensagem = args.slice(1).join(" ");
        if (canal) {
          try{
            let embed = new Discord.MessageEmbed()

            .setColor("#964b00") 
            .setTitle("Ticket")
            .setDescription(`${mensagem}` || "Para criar um ticket, reaja com 👨‍🏭")
                .setFooter("Atenciosamente " + message.guild.name , client.user.avatarURL)
                .setTimestamp();
                message.guild.channels.cache.get(canal.id).send(embed).then(async em => {
                    await em.react('👨‍🏭');
                })
            
                message.channel.send("Sistema de ticket criado!")
          } catch (err) {
            console.log(err)
          }
    } 
}