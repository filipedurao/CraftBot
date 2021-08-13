const Discord = require('discord.js')

exports.run = async  (client, message, args) => {
          if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**')
    message.delete()
    if (!args.join(" ")) return message.reply("Digite algo para eu falar!").then(msg => msg.delete({ timeout: 5000}));;
    let say = args.join(' ');

            let embed = new Discord.MessageEmbed()
    
                .setColor("RANDOM") 
                .addField("Enquete enviada por:", `${message.author} / ${message.author.tag}`)
                .addField(`Enquete:`, "```"+ say + "```")
                .setFooter( `ID do Membro: ${message.author.id}`)
                .setThumbnail(`${message.guild.iconURL()}`)
                .setTimestamp(new Date())
                .setColor("#000000")
                
                message.channel.send(embed).then(async em => {
                    await em.react('687759345168941093');
                    await em.react('687759347027017744');
            })
        }