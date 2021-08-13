const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    message.delete()
    
      connection = await require('../Data/db')
      await connection.query(
          `SELECT * FROM guildconfig WHERE guildId = '${message.guild.id}'`
          ).then( result => {   
              if(result[0][0].changelog) {
              if(result[0][0].staff1) {
              if(result[0][0].staff2) {
              if(result[0][0].staff3) {
              if(result[0][0].staff4) {
              if(result[0][0].staff5) {

            if (!message.member.roles.cache.has(result[0][0].staff5)) {
                return message.channel.send(`<:errado:739528758456877146> Comando restrito para os **<@&${result[0][0].staff5}>**`)
              };
              if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('Eu não tenho as permissões certas.')
    let vitima = message.mentions.members.first();
    if(!vitima) return message.channel.send("Erro nao mencionou ninguem")  
    let cargo = message.mentions.roles.first()
    if(cargo) {
        
        var mensagem1 = new Discord.MessageEmbed()
    .setTitle("Change-log")
    .addField(`**Despromovido:** `, `${vitima}`,true)
    .addField("**Despromovido por:** ", `${message.author}`,true)
    .addField("Cargo Atual: ", `${cargo}`)
    .setThumbnail(message.guild.iconURL())
    .setFooter("Atenciosamente " + message.guild.name)
    .setColor("#008000")
    
        vitima.roles.add(cargo).catch(error =>
    message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Não posso setar esse cargo, esse cargo é maior que o meu")
  )
        return client.channels.cache.get(result[0][0].changelog).send(mensagem1)
        
    } else 
    if(vitima.roles.cache.has(result[0][0].staff4)) {

        var mensagem2 = new Discord.MessageEmbed()
        .setTitle("Change-log")
        .addField(`**Despromovido:** `, `${vitima}`,true)
        .addField("**Despromovido por:** ", `${message.author}`,true)
        .addField("Cargo Atual: ", `<@&${result[0][0].staff3}>`)
        .setThumbnail(message.guild.iconURL())
        .setFooter("Atenciosamente " + message.guild.name)
        .setColor("#008000")

        vitima.roles.remove(result[0][0].staff4)
        vitima.roles.add(result[0][0].staff3).catch(error =>
            message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Não posso setar esse cargo, esse cargo é maior que o meu")
          )
        return client.channels.cache.get(result[0][0].changelog).send(mensagem2);
        
    }else if(vitima.roles.cache.has(result[0][0].staff3)) {

        var mensagem3 = new Discord.MessageEmbed()
        .setTitle("Change-log")
        .addField(`**Despromovido:** `, `${vitima}`,true)
        .addField("**Despromovido por:** ", `${message.author}`,true)
        .addField("Cargo Atual: ", `<@&${result[0][0].staff2}>`)
        .setThumbnail(message.guild.iconURL())
        .setFooter("Atenciosamente " + message.guild.name)
        .setColor("#008000")
        
        vitima.roles.remove(result[0][0].staff3)
        vitima.roles.add(result[0][0].staff2).catch(error =>
            message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Não posso setar esse cargo, esse cargo é maior que o meu")
          )
        return client.channels.cache.get(result[0][0].changelog).send(mensagem3);
    
    }else if(vitima.roles.cache.has(result[0][0].staff2)) {

        var mensagem4 = new Discord.MessageEmbed()
        .setTitle("Change-log")
        .addField(`**Despromovido:** `, `${vitima}`,true)
        .addField("**Despromovido por:** ", `${message.author}`,true)
        .addField("Cargo Atual: ", `<@&${result[0][0].staff1}>`)
        .setThumbnail(message.guild.iconURL())
        .setFooter("Atenciosamente " + message.guild.name)
        .setColor("#008000")
        
        vitima.roles.remove(result[0][0].staff2)
        vitima.roles.add(result[0][0].staff1).catch(error =>
            message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Não posso setar esse cargo, esse cargo é maior que o meu")
          )
        return client.channels.cache.get(result[0][0].changelog).send(mensagem4);
    }else if(vitima.roles.cache.has(result[0][0].staff1)) {

        var mensagem4 = new Discord.MessageEmbed()
        .setTitle("Change-log")
        .addField(`**Despromovido:** `, `${vitima}`,true)
        .addField("**Despromovido por:** ", `${message.author}`,true)
        .addField("Cargo Atual: ", `Nenhum`)
        .setThumbnail(message.guild.iconURL())
        .setFooter("Atenciosamente " + message.guild.name)
        .setColor("#008000")
        
        vitima.roles.remove(result[0][0].staff1)
        return client.channels.cache.get(result[0][0].changelog).send(mensagem4);
    }else {

        var mensagem1 = new Discord.MessageEmbed()
        .setTitle("Change-log")
        .addField(`**Despromovido:** `, `${vitima}`,true)
        .addField("**Despromovido por:** ", `${message.author}`,true)
        .addField("Cargo Atual: ", `<@&${result[0][0].staff4}>`)
        .setThumbnail(message.guild.iconURL())
        .setFooter("Atenciosamente " + message.guild.name)
        .setColor("#008000")
            vitima.roles.remove(result[0][0].staff5)
        vitima.roles.add(result[0][0].staff4).catch(error =>
            message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Não posso setar esse cargo, esse cargo é maior que o meu")
          )
        return client.channels.cache.get(result[0][0].changelog).send(mensagem1)


            }
        } else {
            message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum grupo de staff foi armazenado para este servidor!\n Use: /setargrupostaff5 @cargo").then(msg => msg.delete({ timeout: 10000}));;
        } 
    } else {
        message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum grupo de staff foi armazenado para este servidor!\n Use: /setargrupostaff4 @cargo").then(msg => msg.delete({ timeout: 10000}));;
    }
    } else {
        message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum grupo de staff foi armazenado para este servidor!\n Use: /setargrupostaff3 @cargo").then(msg => msg.delete({ timeout: 10000}));;
    }
} else {
    message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum grupo de staff foi armazenado para este servidor!\n Use: /setargrupostaff2 @cargo").then(msg => msg.delete({ timeout: 10000}));;
}
} else {
    message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum grupo de staff foi armazenado para este servidor!\n Use: /setargrupostaff1 @cargo").then(msg => msg.delete({ timeout: 10000}));;
}
} else {
    message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum canal de change-log foi armazenado para este servidor!\n Use: /setarcanalchangelog #canal_aqui").then(msg => msg.delete({ timeout: 10000}));;
}
        })
    }