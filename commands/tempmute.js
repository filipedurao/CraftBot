const Discord = require("discord.js");
const ms = require("ms");

exports.run = async  (client, message, args) => {
        connection = await require('../Data/db')
        try{
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!tomute) return message.reply("<a:errado:687759347027017744> Erro no Comando!\n Nenhum usuario foi indicado!\n Use:  /tempmute @user <1/s/d> <motivo>");
        if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Não posso mutar ele!");
        let muterole = message.guild.roles.cache.find(role => role.name === "Silenciado");
        //start of create role
        if(!muterole){
            try{
              muterole = await message.guild.roles.create({
                data: {
                name: "Silenciado",
                color: "#000000",
                permissions:[]
                }
              })
                message.guild.channels.cache.forEach(async (channel)=>{
                     await channel.overwritePermissions([
                      {
                         id: muterole,
                         deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
                      },
                    ]);
              })
              
            }catch(e){
              console.log(e);
            }
          }
          
        //end of create role

        await connection.query(
          `SELECT * FROM guildconfig WHERE guildId = '${message.guild.id}'`
          ).then( result => {
            if(result[0][0].ban2) {
        let mutetime = args[1];
        if(!mutetime) return message.reply("<a:errado:687759347027017744> Erro no Comando!\n Nenhum tempo foi indicado!\n Use: /tempmute @user <1/s/d> <motivo>");
        const razao = args[2]
        if(!razao) return message.reply("<a:errado:687759347027017744> Erro no Comando!\n Nenhum motivo foi indicado!\n Use: /tempmute @user <1/s/d> <motivo>");
      
        tomute.roles.add(muterole.id);
        if(message.attachments.first()) {
        const mensagem = new Discord.MessageEmbed()
          .setTitle("NOVO MEMBRO MUTADO")
          .setDescription(`**Membro mutado:**\n ${tomute}\n \n**Mutado por:**\n ${message.author}\n\n **Motivo:**\n ${razao}`)
          .setImage(message.attachments.first().attachment)
          
        client.channels.cache.get(result[0][0].ban2).send(mensagem).then(
          message.guild.channels.cache.forEach(async (channel)=>{
          await channel.overwritePermissions([
           {
              id: muterole,
              deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
           },
         ]);
   }))
  } else  {
    const mensagem = new Discord.MessageEmbed()
    .setTitle("NOVO MEMBRO MUTADO")
    .setDescription(`**Membro mutado:**\n ${tomute}\n \n**Mutado por:**\n ${message.author}\n\n **Motivo:**\n ${razao}`)
    
  client.channels.cache.get(result[0][0].ban2).send(mensagem).then(
    message.guild.channels.cache.forEach(async (channel)=>{
    await channel.overwritePermissions([
     {
        id: muterole,
        deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
     },
   ]);
}))
  }
  
        setTimeout(function(){
          tomute.roles.remove(muterole.id);
          const mensagem = new Discord.MessageEmbed()
          .setTitle("NOVO MEMBRO DESMUTADO")
          .setDescription(`**Membro desmutado:**\n ${tomute}\n \n Finalmente voltou a falar, vê se não faz besteira denovo e é mutado!`)
          //.setThumbnail()

        client.channels.cache.get(result[0][0].ban2).send(mensagem)
        }, ms(mutetime));
      
      } else {
        message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum canal de punições foi armazenado para este servidor!\n Use: /setarcanalpunicoes #canal_aqui").then(msg => msg.delete({ timeout: 10000})).catch(err => {})
          
      }
      //end of module
})
        } catch {

        }
      }