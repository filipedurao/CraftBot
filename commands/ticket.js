const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    
    const embed = new Discord.MessageEmbed()
    .setDescription("**:envelope:  Suporte via Ticket** \n \n **Reaja o emoji que corresponde com seu interesse.** \n \n > <:Q_:810290725795004436> │ Duvidas \n > <:Report:810290460279046195> │ Denuncias\n > <:AHHHH:810291427690151986> │ Reporta um bug\n> <:YT:810290646291447828> │ Solicitação de tag YouTuber")
    //.setImage("https://i.imgur.com/fU9dfrx.png")
    
    message.channel.send(embed).then(msg => {
        msg.react(":Q_:810290725795004436")
        msg.react(":Report:810290460279046195")
        msg.react(":AHHHH:810291427690151986")
        msg.react(":YT:810290646291447828")
    })
}