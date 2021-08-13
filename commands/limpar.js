const Discord = require("discord.js");

exports.run = async (client, message, args) => {
try{
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000}));;
      if(!args[0]) return  message.channel.send("<a:errado:687759347027017744> Erro no comando!\n<@"+ message.author +">, Digite o numero de linhas que deseja deletar.\n `Use: /limpar <linhas>`").then(msg => msg.delete({ timeout: 5000}));
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`<a:seta:687759348125925392> ${args[0]} mensagens foram excluidas pelo STAFF ${message.member}`).then(msg => msg.delete({ timeout: 5000}));;
  
  });
} catch (err) {
  message.channel.send("<a:errado:687759347027017744> Erro no comando!\n<@"+ message.author +">, não posso deletar mensagens com mais de 14 dias. Experimente duplicar o canal e deletar esse.").then(msg => msg.delete({ timeout: 5000}));;
}

}
