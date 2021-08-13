const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.delete();

            let embed = new Discord.MessageEmbed()
    
                .setColor("RANDOM") 
                .setTitle("Me convide para seu servidor!")
                .setDescription("Para me convidar para o seu servidor entre no meu discord: \n \n https://discord.gg/NX8W776DWn")
                .setFooter(`Atenciosamente ${message.guild.name}`)
                .setThumbnail(`${client.user.avatarURL()}`)
                .setTimestamp(new Date())
                .setColor("#000000")
                
                message.channel.send(embed)
        }
    