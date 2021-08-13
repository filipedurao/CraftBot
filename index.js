require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});
const config = require('./config.json')
client.commands = new Discord.Collection();
let connection;

client.on('ready', async message => {

  console.log('Estou online');
  client.user.setStatus('dnd')
  setInterval(() => {
      
  const tabela = [
    { name: 'Developer by: ! Sandwich#0354', type: 0 },
    { name: `Estou em ${client.guilds.cache.size} servidores com ${client.users.cache.size} Membros`, type: 2 },
    { name: 'Versão: 2.0.0', type: 3 },
    //{ name: 'ADQUIRA JÁ', type: 0},
    { name: 'use /ajuda', type: 0},
  ];
    const altstatus = tabela[Math.floor(Math.random() * tabela.length)]
    client.user.setActivity(altstatus)
  }, 1000 * 7) //7 segundos
})


  client.on("message", async message => {
      if (message.author.bot) return;
  if (message.channel.type == "dm") return;
    module.exports.num = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
    }

  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.log(err)
  }

});

client.on('guildCreate', async (guild) => {
try{
  await connection.query(
    `INSERT IGNORE INTO guilds VALUES('${guild.id}', '${guild.ownerID}', '${guild.name}')`
  );
  await connection.query(
    `INSERT IGNORE INTO guildconfig (guildID) VALUES ('${guild.id}')`
  );
} catch (err) {
  console.log("Erro ao adicionar um novo servidor: " + err)
}
});

// ESSE SISTEMA FOI ALTERADO --------------------------------------------------------------

client.on('message', async message => {
    if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  try{
  connection.query( `SELECT * FROM guildconfig WHERE guildId = '${message.guild.id}'`
  ).then( result => {
  if(message.channel.type === 'dm' || message.author.bot) return;
  if (result[0][0].antiinvite !== '1') {  
    //Ação de quando esta desativado o anti-invite
  } else if(result[0][0].antiinvite === '1' && result[0][0].bypassantiinvite !== `${message.channel.id}`){
    //Ação de quando esta ativo o anti-invite
  if(!message.member.hasPermission('ADMINISTRATOR')){ //só vai bloquear o invite caso quem o enviou não tenha permissão de admin
    if(message.content.includes('discord.gg/' || 'discordapp.com/invite/')){ //reconhece se há um invite na mensagem

        message.delete() //deleta a msg com invite
        var antiinvite = new Discord.MessageEmbed()
    .setTitle("Achamos um intruso, pelo sistema de anti-invite!")
    .setDescription(`${message.author} \n Você foi barrado pelo sistema anti-invite!\n Se vir você tentando enviar um convite será banido do Discord!`)
    .setThumbnail("https://media.giphy.com/media/l2Je5IMLrZSbFD63S/giphy.gif")
    .setImage("https://gifimage.net/wp-content/uploads/2017/10/discord-ban-gif-4.gif")
    return message.channel.send(antiinvite)
    }
  } 
} else if (result[0][0].antiinvite === '1' && result[0][0].bypassantiinvite === `${message.channel.id}`){
  //Ação de quando o invite foi enviado no canal de bypass
}
})
  } catch (err){
      console.log(err)
  }
})

// ESSE SISTEMA FOI ALTERADO --------------------------------------------------------------

client.on('message', (message) => {
    if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  try{
  connection.query( `SELECT sugestao FROM guildconfig WHERE guildId = '${message.guild.id}'`
  ).then( result => {
  if (message.author.bot) return
  if (message.channel.id != result[0][0].sugestao) return;
  if (!message.content.includes('/sugerir')) {
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setTitle("Eita, calma lá!.")
    .setDescription("**Esse canal nao foi feito para bate papo!**\nDigite: ```/sugerir``` para realizar uma sugestão")
    .setColor("#964b00") 
    return message.channel.send(embed).then(msg => msg.delete({ timeout: 5000}));   
};
  })
} catch (err) {
}
});

client.on('guildMemberAdd', async (member) => {

  const bemvindo = new Discord.MessageEmbed()
  .setTitle("Bem vindo " + member.user.username)
  .setDescription("> Olá, <@" + member.user + ">\n> Seja Bem-vindo ao " + member.guild.name + " :tada:\n > Não esqueça de ler as regras do servidor para eviar punições \n > Qual duvida nao tenha medo de chamar um Staff \n > **No momento temos:** " + member.guild.memberCount + " membros no servidor.") 
  .setThumbnail(member.user.avatarURL())
  .setColor("#00ff00")
  .setFooter("Atenciosamente " + member.guild.name , client.user.avatarURL)
 connection.query( `SELECT bemvindo, grupobemvindo FROM guildconfig WHERE guildId = '${member.guild.id}'`
 ).then( result => {
   try{
    client.guilds.cache.get(member.guild.id).channels.cache.get(result[0][0].bemvindo).send(bemvindo)
    member.roles.add(result[0][0].grupobemvindo).catch(err => (console.log(member.guild.name + " não foi possivel setar cargo bem vindo nessa guilda")))
  } catch(err){
    console.log(member.guild.name + "Erro: " + err)
  }
  })
});

client.on('guildMemberRemove', async (member) => {
  
  const saida = new Discord.MessageEmbed()
  .setTitle("**Até mais! <:saiu:687759348088176691>**")
  .setDescription("> Até mais " + member.user.tag + "\n \n > No momento temos: **" + member.guild.memberCount + " membros no servidor**") 
  .setColor("#ff0000")
  .setThumbnail(member.user.avatarURL())
  .setFooter("Atenciosamente " + member.guild.name , client.user.avatarURL)
 connection.query( `SELECT saida FROM guildconfig WHERE guildId = '${member.guild.id}'`
 ).then( result => {
  try{
    client.guilds.cache.get(member.guild.id).channels.cache.get(result[0][0].saida).send(saida)}catch (err){
  console.log("Erro na saida de membro")
}
  })


});

client.on('messageReactionAdd', async (reaction, user, member, message) => {
  if(user.partial) await user.fetch();
  if(reaction.partial) await reaction.fetch();
  if(reaction.message.partial) await reaction.message.fetch();

  if(user.bot) return;
  connection.query( `SELECT * FROM guildconfig WHERE guildId = '${reaction.message.guild.id}'`
  ).then( result => {
  let ticketid = result[0][0].idmensagemticket
  
  if(!ticketid) return;    
  if(reaction.message.id == ticketid && reaction.emoji.name == '👨‍🏭') {
      reaction.users.remove(user);
      reaction.message.guild.channels.create(`suporte・${user.username}`, {
          type: 'text',
          permissionOverwrites: [
                {
                    allow: 'VIEW_CHANNEL',
                    id: user.id
                },
                {
                    deny: 'VIEW_CHANNEL',
                    id: reaction.message.guild.id
                },
                {
                    allow: 'VIEW_CHANNEL',
                    id: result[0][0].grupoticket//Colocar Cargo certo aqui
                }
            ],
          
          parent: result[0][0].idcategoriaticket,
      }).then(async channel => {
          channel.send(`<@${user.id}> <@&${result[0][0].grupoticket}>`, new Discord.MessageEmbed().setDescription(`Seja bem-vindo(a) ao ticket, ${user}. \nAqui você pode pedir ajuda do nosso suportes! <@&${result[0][0].grupoticket}>`).setColor("00ff00"))
      }).catch(err => console.log(reaction.message.guild.name + " Erro ticket: " + err))
  } 
})
});

// TERMINOU COMANDO NOVOS

(async () => {

  connection = await require('./Data/db')
  client.login(process.env.BOT_TOKEN);
})();