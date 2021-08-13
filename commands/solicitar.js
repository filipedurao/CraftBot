const Discord = require('discord.js')

exports.run = async (client, message, args, time) => {
    const semargs = new Discord.MessageEmbed()
    .setDescription("**Use /solicitar yt**\n Solicite Tag Youtuber\n\n **Use /solicitar cash**\n Solicite Cash")
    .setThumbnail(client.user.avatarURL())
    .setFooter("Sistema exclusivo CraftBot")
    message.delete()
if(!args[0]) return message.channel.send(semargs).then(msg => msg.delete({ timeout: 10000}));
//if(!args[0] !== 'cash' || !args[0] !== 'cash' ) return message.channel.send(semargs)

connection = await require('../Data/db')
    await connection.query(
        `SELECT * FROM guildconfig WHERE guildId = '${message.guild.id}'`
        ).then( result => {
            if (result[0][0].ytreceber) {
                if(result[0][0].cashreceber) {
                    if(result[0][0].yt) {
                        if(result[0][0].cash) {


    if(args[0] === 'cash'){
        if(message.member.roles.cache.has(result[0][0].yt1 || result[0][0].yt2 || result[0][0].yt3)) {
            //Função YT+
            const su = args.slice(1).join(" ")
    
    
    
            if(!su){
                message.channel.send("<a:errado:687759347027017744> Erro no comando !\n<@"+ message.author +">, Coloque um video para a nossa staff verificar!\n Use `/solicitar cash <link do video>`").then(msg => msg.delete({ timeout: 5000}));
                return
            }
        
            const sugestao = new Discord.MessageEmbed()
            .setTitle(`Solicitação Cash`)
            .setDescription(`**__Solicitação enviada por:__** ${message.author}\n\n **Video:**\n ${su}`)
            client.channels.cache.get(result[0][0].cashreceber).send(sugestao).then(async em => {
                await em.react('687759345168941093');
                await em.react('687759347027017744');
            });
            
    
            }else if(message.member.roles.cache.has(result[0][0].yt2)){
                //Função YT
                const su = args.slice(1).join(" ")
    
        
        
                if(!su){
                    message.channel.send("<a:errado:687759347027017744> Erro no comando !\n<@"+ message.author +">, Coloque um video para a nossa staff verificar!\n Use `/solicitar cash <link do video>`").then(msg => msg.delete({ timeout: 5000}));
                    return
                }
            
                const sugestao = new Discord.MessageEmbed()
                .setTitle(`Solicitação Cash`)
                .setDescription(`**__Solicitação enviada por:__** ${message.author}\n\n **Video:**\n ${su}`)
                client.channels.cache.get(result[0][0].cashreceber).send(sugestao).then(async em => {
                    await em.react('687759345168941093');
            await em.react('687759347027017744');
                });
                
            
                } else if(message.member.roles.cache.has(result[0][0].yt3)){
                    //Função MiniYT
                    const su = args.slice(1).join(" ")
    
            
            
                    if(!su){
                        message.channel.send("<a:errado:687759347027017744> Erro no comando!\n<@"+ message.author +">, Coloque um video para a nossa staff verificar!\n Use `/solicitar cash <link do video>`").then(msg => msg.delete({ timeout: 5000}));
                        return
                    }
                
                    const sugestao = new Discord.MessageEmbed()
                    .setTitle(`Solicitação Cash`)
                    .setDescription(`**__Solicitação enviada por:__** ${message.author}\n\n **Video:**\n ${su}`)
                    client.channels.cache.get(result[0][0].cashreceber).send(sugestao).then(async em => {
                        await em.react('687759345168941093');
                        await em.react('687759347027017744');
                    });
                    
    
                }else {
                    message.channel.send("<a:errado:687759347027017744> Erro no comando!\n<@"+ message.author +">, Você não é Youtuber.").then(msg => msg.delete({ timeout: 5000}));
                }
    }

    if(args[0] === 'yt'){


        const sayMessage = args.slice(1).join(" ").split(" ");
                let su2 = sayMessage[0]
                let su3 = sayMessage[1]

        if(!su2){
            message.channel.send("<a:errado:687759347027017744> Erro no comando!\n<@"+ message.author +">, Digite alguma coisa para sugerir!\n Use `/solicitar yt <nick> <link do canal>`").then(msg => msg.delete({ timeout: 5000}));
            return
        }
        if(!su3){
            message.channel.send("<a:errado:687759347027017744> Erro no comando!\n<@"+ message.author +">, Digite alguma coisa para sugerir!\n Use `/solicitar yt <nick> <link do canal>`").then(msg => msg.delete({ timeout: 5000}));
            return
        }
    
        const sugestao = new Discord.MessageEmbed()
        .setTitle("Solicitar Youtuber")
        .setDescription(`**__Solicitação enviada por:__** ${message.author}\n\n **Nick:** ${su2}\n**Link do canal:**\n ${su3}`)
        client.channels.cache.get(result[0][0].ytreceber).send(sugestao).then(async em => {
            await em.react('687759345168941093');
            await em.react('687759347027017744');
        });

     }
    } else {
        //Aqui vai quando nao seta o canal de solicitação de cash
        message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum canal de solicitação de cash foi armazenado para este servidor!\n Use: /setarcanalsolicitarcash #canal").then(msg => msg.delete({ timeout: 5000}));;
        /*const naosetou = new Discord.MessageEmbed()
        .setDescription("<:errado:739528758456877146> Nenhum canal de receber solicitação YT ou Cash foram encontradas nas configurações. \n \n Para setar canal de solicitação de Youtuber use: `/setarcanalsolicitaryt` \n Para setar canal de solicitação de cash use: `/setarcanalsolicitarcash` \n Para setar canal receber solicitção yt use: `/setarcanalreceberyt` \nPara setar canal receber solicitção cash use: `/setarcanalrecebercash`")
      message.channel.send(naosetou)*/

    } 
} else {
    //Aqui vai quando nao seta o canal de solicatação de tag youtuber
    message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum canal de solicitação Tag Youtuber foi armazenado para este servidor!\n Use: /setarcanalsolicitaryt #canal").then(msg => msg.delete({ timeout: 5000}));;
}
} else {
    //Aqui vai quando nao seta o canal de receber solicatação de cash
    message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum canal de receber solicitação de cash foi armazenado para este servidor!\n Use: /setarcanalrecebercash #canal").then(msg => msg.delete({ timeout: 5000}));;
}
} else {
    //Aqui vai quando nao seta o canal de receber solicatação de tag youtuber
    message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum canal de receber solicitação Tag Youtuber foi armazenado para este servidor!\n Use: /setarcanalreceberyt #canal").then(msg => msg.delete({ timeout: 5000}));;
}
    })
    }