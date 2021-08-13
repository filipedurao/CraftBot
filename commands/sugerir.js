const Discord = require('discord.js')

exports.run = async  (client, message, args) => {
    message.delete()
    if (!args.join(" ")) return message.reply("<a:errado:687759347027017744> Erro no Comando!\n Nenhuma mensagem de sugestão foi inserida.!\n Use: /sugerir <mensagem>").then(msg => msg.delete({ timeout: 5000}));;
    let say = args.join(' ');
    connection = await require('../Data/db')
    connection.query( `SELECT sugestao FROM guildconfig WHERE guildId = '${message.guild.id}'`
    ).then( result => {



        if(result[0][0].sugestao) {
            let embed = new Discord.MessageEmbed()
    
                .setColor("#964b00") 
                .setTitle("Área de sugestões.")
                .setDescription("Sugestão enviada por **<@" + message.author + ">**")
                .addField(`Sugestão:`, "```"+ say + "```")
                .setFooter( `ID do Membro: ${message.author.id}`)
                .setThumbnail(`${message.author.displayAvatarURL()}`)
                .setImage('https://i.imgur.com/Ow2BVnD.png')
                .setTimestamp(new Date())
                
                client.channels.cache.get(result[0][0].sugestao).send(embed).then(async em => {
                    await em.react('811165690319863839');
                    await em.react('811165690308198430');
                })
        }else {
            message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum canal de sugestão foi armazenado para este servidor!\n Use: /setarcanalsugestao #canal_aqui").then(msg => msg.delete({ timeout: 5000}));;
            }    
            })
        }