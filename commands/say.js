const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    if (!args.join(" ")) return message.reply("Digite algo para eu falar!");
    let say = args.join(' ');
message.delete()
if(message.content.includes('discord.gg/' || 'discordapp.com/invite/')) return;
if (!message.member.hasPermission("MENTION_EVERYONE") && message.content.includes('@everyone')) { 
message.channel.send("<a:errado:687759347027017744> Erro no comando!\n<@"+ message.author +">, Você nao tem permissão para marcar everyone!")
        } else if (!message.member.hasPermission("MENTION_EVERYONE") && message.content.includes('@here')) { 
          message.channel.send("<a:errado:687759347027017744> Erro no comando!\n<@"+ message.author +">, Você nao tem permissão para marcar here!")
              } else if(message.member.hasPermission("BAN_MEMBERS")) {

                message.channel.send(`${say}`)/*.then(msg => {
                    msg.react("811165690319863839")
                    msg.react("811165690308198430")
                })`*/
              } else {
                message.channel.send(`${say} \n \n Enviado por ${message.member}`)

              }

      }
        