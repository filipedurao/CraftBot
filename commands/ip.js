const Discord = require('discord.js');
var request = require('request');

exports.run = async (client, message, args)  => {
        connection = await require('../Data/db')
        await connection.query(
            `SELECT ipmc FROM guildconfig WHERE guildId = '${message.guild.id}'`
            ).then( result => {
        
                if (result[0][0].ipmc) {
                    let url = `http://mcapi.us/server/status?ip=${result[0][0].ipmc}`;
            request(url, function (err, response, body) {
                body = JSON.parse(body);
if (body.status !== 'error') {
    let embed = new Discord.MessageEmbed()
            .setTitle("IP do servidor! <a:verify:687759351330766901>")
            .setThumbnail(`https://cdn.pixabay.com/photo/2016/11/11/14/49/minecraft-1816996_960_720.png`)
            .setDescription("> IP do servidor atual:\n "+ "```" + result[0][0].ipmc + "``` \n Para ver os status do servidor use: `/status`\n Para o link da loja do servidor use: `/loja`")
            .setFooter("Atenciosamente " + message.guild.name)
            message.channel.send(embed)
}else if (body.status = 'error') {
            let embed = new Discord.MessageEmbed()
            .setTitle("IP do servidor! <a:verify:687759351330766901>")
            .setThumbnail(`https://cdn.pixabay.com/photo/2016/11/11/14/49/minecraft-1816996_960_720.png`)
            .setDescription("> IP do servidor atual:\n "+ "```" + result[0][0].ipmc + "``` \n Para ver os status do servidor use: `/status`\n Para o link da loja do servidor use: `/loja`")
            .setFooter("Atenciosamente " + message.guild.name)
            message.channel.send(embed)
}
})
        } else {
            message.channel.send("<a:errado:687759347027017744> Erro no Comando!\n Nenhum IP foi setado para este servidor!\n Use: /setaripminecraft ip_aqui")
        }
    })
}