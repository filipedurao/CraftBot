const Discord = require(`discord.js`);
exports.run = async (client, message) => {
        if (!(message.member.hasPermission('ADMINISTRATOR'))) {
            return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000}));;
          };

        let embed2 = new Discord.MessageEmbed()
        .setDescription(`:gear: ${message.guild.name} › Anunciar \n \n Em qual canal você deseja anunciar?`)
        .setColor([153, 0, 204])
        message.channel.send(`${message.author}`)
        message.channel.send(embed2).then(msg1 => {
            let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
            .on('collect', c => {
                canal = c.mentions.channels.first()
                if(!canal) {
                    message.channel.send(`:gear: ${message.guild.name} › Anunciar \n \n O canal que você mencionou é inválido!`)
                } else {
                    message.channel.send(new Discord.MessageEmbed()
                    .setDescription(`:gear: ${message.guild.name} › Anunciar \n \n Qual será o título do anúncio?`)
                    .setColor([153, 0, 204])).then(msg2 => {
                        let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                        .on('collect', c => {
                            título = c.content
                            message.channel.send(new Discord.MessageEmbed()
                            .setDescription(`:gear: ${message.guild.name} › Anunciar \n \n Diga-me qual mensagem deseja anunciar`)
                            .setColor([153, 0, 204])).then(msg3 => {
                                let c3 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})    
                                .on('collect', c => {
                                    anuncio = c.content
    
                                    message.channel.send(new Discord.MessageEmbed()
                                    .setDescription(`:gear: ${message.guild.name} › Anunciar \n \n Mensagem enviada com sucesso!`)
                                    .setColor([153, 0, 204]))
                                    let embed = new Discord.MessageEmbed()
                                    .setTimestamp()
                                    .setColor([153, 0, 204])
                                    .setThumbnail(message.author.avatarURL)
                                    .setDescription(`${título}` + `\n \n` + `${anuncio}`)
                                    .setFooter(`Anunciado por: ${message.author.username}`, message.author.avatarURL)
                                    canal.send(embed)
                                    canal.send(`Teste`).then(mensagem => {
                                       mensagem.delete()
                                   })
                                })
                            }) 
                        })
                    })
                }
            })
        })
    }
