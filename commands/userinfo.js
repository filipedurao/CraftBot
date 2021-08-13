const Discord = require('discord.js');
const moment = require("moment");

exports.run = async  (client, message, args) => {
   
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const embed = new Discord.MessageEmbed()

        .setTitle(member.nickname || member.user.username)
        .addField("Tag do discord",`<@${member.user.id}>`, true)
        .addField('Se juntou em: ',`${moment(member.joinedAt).locale('pt-br').format("`llll`")}`, true)
        .addField("Criado em: ",`${moment(message.author.createdAt).locale('pt-br').format("`llll`")}`, true)
        .addField(`Cargos [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true)
        .setColor("#964b00") 
        .setFooter(`ID: ${message.author.id}`)
        .setThumbnail(member.user.displayAvatarURL() || "https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif")
        .setTimestamp()
        message.channel.send({embed});
}