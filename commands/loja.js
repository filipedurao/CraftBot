const Discord = require('discord.js');
var request = require('request');

exports.run = async (client, message, args) => {
    connection = await require('../Data/db')
    await connection.query(
        `SELECT loja FROM guildconfig WHERE guildId = '${message.guild.id}'`
        ).then( result => {
    
            if (result[0][0].loja) {
                let url = `http://mcapi.us/server/status?ip=${result[0][0].loja}`;
        request(url, function (err, response, body) {
            body = JSON.parse(body);
if (body.status !== 'error') {
    let embed = new Discord.MessageEmbed()
            .setTitle("Link da loja do servidor! <a:verify:687759351330766901>")
            .setThumbnail(`https://cdn.pixabay.com/photo/2016/11/11/14/49/minecraft-1816996_960_720.png`)
            .setDescription("> Link da loja:\n " + result[0][0].loja + "\n Para ver os status do servidor use: `/status`\n Para ver somente o ip do servidor use: `/ip`")
            .setFooter("Atenciosamente " + message.guild.name)
            message.channel.send(embed)
}else if (body.status = 'error') {
            let embed = new Discord.MessageEmbed()
            .setTitle("Link da loja do servidor! <a:verify:687759351330766901>")
            .setThumbnail(`https://cdn.pixabay.com/photo/2016/11/11/14/49/minecraft-1816996_960_720.png`)
            .setDescription("> Link da loja:\n\n  " + result[0][0].loja + "\n \n Para ver os status do servidor use: `/status`\n Para ver somente o ip do servidor use: `/ip`")
            .setFooter("Atenciosamente " + message.guild.name)
            message.channel.send(embed)
}
})
        } else {
            message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum link foi setado para este servidor!\n Use: /setarloja link_aqui")
        }
    })
}
    