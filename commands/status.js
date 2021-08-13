const Discord = require('discord.js');
var request = require('request');

exports.run = async (client, message, args) => {
    
    connection = await require('../Data/db')
    await connection.query(
        `SELECT * FROM guildconfig WHERE guildId = '${message.guild.id}'`
        ).then(async result => {

    const embed2 = new Discord.MessageEmbed()
    .setDescription("Carregando informações do servidor: <a:carregando:687759344766681137>\n \n**" + result[0][0].ipmc + "**\n\n Para ver somente o ip do servidor use: " + "`/ip` \n Para o link da loja do servidor use: `/loja`")
    .setColor("#964b00")
    const msg = await message.channel.send(embed2);
            
            if (result[0][0].ipmc) {
                let url = `http://mcapi.us/server/status?ip=${result[0][0].ipmc}`;
        request(url, function (err, response, body) {
            body = JSON.parse(body);
if (body.status !== 'error') {
            setTimeout(() => {

                let embed = new Discord.MessageEmbed()
            .setTitle("Dados do servidor <a:verify:687759351330766901> ")
            .setThumbnail(`https://cdn.pixabay.com/photo/2016/11/11/14/49/minecraft-1816996_960_720.png` || body.favicon())
            .setDescription(`> **IP do servidor:** ` + "\n ```" + `${result[0][0].ipmc}` + "```"+ `\n > **Jogadores online:**\n ${body.players.now}/${body.players.max}\n\n Para ver somente o ip do servidor use: ` + "`/ip` \n Para o link da loja do servidor use: `/loja`")
            .setFooter("Atenciosamente " + message.guild.name)
            .setColor("#964b00") 
                msg.edit(embed)
            }, 3000)
            
}else if (body.status = 'error') {
    setTimeout(() => {
            let embed = new Discord.MessageEmbed()
            .setDescription("Falha ao coletar os dados do Servidor!\n Segundos os dados via __Satélite da Nasa:__ \n \n O servidor não foi encontrado ou está Offline!\n Verifique os dados informados: \n ```css\n" + result[0][0].ipmc + "``` ")
            .setThumbnail("https://i.imgur.com/gz5nJfa.gif")
            .setImage("https://media0.giphy.com/media/3oEjI0UdFkyLtpFJN6/giphy.gif")
            .setColor("#964b00")
            msg.edit(embed)
            }, 3000)
}
})
        } else {
            msg.delete()
            message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum IP foi setado para este servidor!\n Use: /setaripminecraft ip_aqui")
        }
    })
}
