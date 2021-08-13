const Discord = require('discord.js')

exports.run = async (client, message, args) => {
          if (!args[0]) {
            const mensagem =  new Discord.MessageEmbed()
            .setTitle("Lista de comandos")
            .setDescription("Lista de comandos por categoria:\n \n > /ajuda administracao \n Exibe uma lista de comando para administração\n \n > /ajuda configuracao \n Exibe uma lista de comando para configurar\n \n> /ajuda uteis\n Exibe uma lista de todos os comandos que estão liberados para os usuarios.")
            message.channel.send(mensagem)
          }

          if(args[0] === 'administracao'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Lista de Sistemas**__ <a:verify:687759351330766901>")
            .setDescription("Lista de comandos administracção!\n \n > /ban @user <motivo>\n Irá dar ban no usuario mencionado com o motivo.\n Exemplo: `/ban @Batata Hackiou o servidor`\n\n > /anunciar \n Irá coletar as informações e anunciar no canal desejado com sua mensagem.\n \n > /dc\n Irá deletar o canal onde o comando é executado!\n \n > /limpar <linhas>\n Irá limpar todas as mensagem desejadas do canal\n Exemplo: `/limpar 10`\n \n > /say <mensagem> \n Irá forçar o bot a escrever uma mensagem. \n \n > /serverinfo \n Irá mostrar todas as informações do grupo\n \n > /userinfo \n Irá mostrar todas as informações do usuario")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           } 
           if(args[0] === 'configuracao'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Lista de Sistemas**__ <a:verify:687759351330766901>")
            .setDescription("Lista de comandos para configurar!\n \n > Sistema de banimentos \n Use: `/ajuda ban`\n \n > Sistema de Ip \n Use: `/ajuda ip`\n \n > Sistema de Loja \n Use: `/ajuda loja`\n \n > Sistema de solicitar  \n Use: `/ajuda solicitar`\n \n > Sistema de Sugestão \n Use: `/ajuda sugestao`\n \n > Sistema de Anti-Invite\n Use: `/ajuda antiinvite`\n \n > Sistema de Ticket por reação \n Use: `/ajuda ticket` \n \n > Sistema de Temp mute \n Use: `/ajuda tempmute` \n \n > Sistema de bem vindo\n Use: `/ajuda bemvindo`\n \n > Sistema de saida\n Use: `/ajuda saida`\n \n > Sistema de Promoção/Demotado\n Use: `/ajuda changelog`")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           } 
           if(args[0] === 'uteis'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Lista de Sistemas**__ <a:verify:687759351330766901>")
            .setDescription("Lista de comandos para membros!\n \n > /ip \n Irá mostrar o ip do servidor atual \n Exemplo: `/ip`\n\n > /status \n Irá mostrar os status do servidor atual\n \n > /loja \n Irá mostrar o link da loja do servidor atual\n Exemplo: `/loja`\n \n > /serverinfo \n Irá mostrar as informações do servidor\n \n > /solicitar  \n Irá solicitar cash ou tag youtuber \n Exemplo: `/solicitar cash` ou `/solicitar yt` \n \n > /sugerir \n Irá enviar uma sugestão para o canal setado adicionando 2 reações para os membros reagirem.\n Exemplo: `/sugerir Adicionar diamante na loja`\n \n > /userinfo\n Irá mostrar todas as informações do usuario. \n Exemplo: `/userinfo`\n \n > /skin\n Irá mostrar a skin do player. \n Exemplo: `/skin Gallagher`")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           } 

           
           if(args[0] === 'ban'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Sistema de Banimento**__ <a:verify:687759351330766901>")
            .setDescription("**Descrição:** \nEste sistema envia para o canal setado as informações do membro banido.\n \n **Comandos do Sistema:**\n > Comandos para configurar: \n **/setarcanalpunicoes #canal**\n __Seta o canal que será avisado com uma embed o membro que foi banido.__\n \n > Comandos para usar: \n **/ban @user <motivo>**")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           } else if (args[0] === 'ip'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Sistema de IP**__ <a:verify:687759351330766901>")
            .setDescription("**Descrição:** \nEste sistema avisa o ip atual setado.\n \n **Comandos do Sistema:**\n > Comandos para configurar: \n **/setaripminecraft ip_aqui**\n __Seta o ip do servidor atual.__\n \n > Comandos para usar: \n **/ip**")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           }else if (args[0] === 'changelog'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Sistema de Promoção/Demotado**__ <a:verify:687759351330766901>")
            .setDescription("**Descrição:** \nEste sistema ira enviar uma mensagem para um canal setado, e setando o devido cargo setado. (Tudo automatico)\n \n **Comandos do Sistema:**\n > Comandos para configurar: \n **/setarcanalchangelog #canal**\n __Seta o que será enviado a mensagem da promoção.__\n \n **/setargrupostaff1 @cargo**\n __Irá setar o menor cargo de staff (Exemplo Ajudante).__\n \n **/setargrupostaff2 @grupo**\n __Irá setar o 2º menor cargo de staff (Exemplo Moderador).__\n \n **/setargrupostaff3 @grupo**\n __Irá setar o 3º menor cargo de staff (Exemplo Administrador).__\n \n **/setargrupostaff4 @grupo**\n __Irá setar o 2º Maior cargo de staff (Exemplo Gerente).__\n \n **/setargrupostaff5 @grupo**\n __Irá setar o 1º maior cargo de staff (Exemplo Master).__\n \n > Comandos para usar: \n **/promover @user** \n Promove a pessoa mencionada. \n \n **/despromover @user** \n Despromove a pessoa mencionada. \n \n **/promover @user @cargo** \n Caso alguem entre e nao passe por ajudante, so setar por aqui que será setado o cargo mencionado e envia a mensagem de promoção")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           } else if (args[0] === 'loja'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Sistema de loja**__ <a:verify:687759351330766901>")
            .setDescription("**Descrição:** \nEste sistema avisa o link da loja atual setado.\n \n **Comandos do Sistema:**\n > Comandos para configurar: \n **/setarloja link_aqui**\n __Seta o link da loja do servidor atual.__\n \n > Comandos para usar: \n **/loja**")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           }  else if (args[0] === 'solicitar'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Sistema solicitar**__ <a:verify:687759351330766901>")
            .setDescription("**Descrição:** \nEsse sistema tem 2 funcionalidade, pedir TAG Youtuber e solicitar cash.\n \n **Comandos do Sistema:**\n > Comandos para configurar: \n **/setarcanalsolicitaryt #canal**\n Para setar o canal de Solicitar YT\n \n **/setarcanalreceberyt #canal** \n Setar o canal para receber solicitações de tag yt\n \n **/setarcanalsolicitarcash #canal**\n Para youtubers solicitarem cash\n \n **/setarcanalrecebercash #canal**\n Setar o canal para receber solicitações de cash\n \n **/setargrupoyt1 @cargo** \n Para setar o primeiro grupo de youtuber (Exemplo: MiniYt)\n \n **/setargrupoyt2 @cargo** \n Para setar o segundo grupo de youtuber (Exemplo: Youtuber) \n \n **/setargrupoyt3 @cargo** \n Para setar o terceiro grupo de youtuber (Exemplo: Youtuber+) \n \n > Comandos para usar: \n **/solicitar cash**\n Para solicitarem cash \n \n **/solicitar yt**\n Para solicitarem tag YT \n \n > OBS: \n Você pode setar somente 1 cargo de youtuber. \n\n Para solicitar cash o membro tem de estar setado de um dos cargos Youtuber que você setou!.")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           } else if (args[0] === 'sugestao'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Sistema de sugerir**__ <a:verify:687759351330766901>")
            .setDescription("**Descrição:** \nEste sistema coleta a sugestão do membro do discord e envia no canal adicionando 2 reações para todos do servidor opinarem sobre a sugestão.\n \n **Comandos do Sistema:**\n > Comandos para configurar: \n **/setarcanalsugestao #canal** \n Setar o canal de sugestão\n \n > Comandos para usar: \n **/sugerir**")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           } else if (args[0] === 'antiinvite'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Sistema de Anti-invite**__ <a:verify:687759351330766901>")
            .setDescription("**Descrição:** \nEste sistema irá bloqueador/permitir divulgação de outros discords.\n \n **Comandos do Sistema:**\n > Comandos para configurar: \n **/antiinvite on**\n Ira ativar a proteção anti-invite\n\n **/antiinvite off**\n Ira desativar a proteção anti-invite\n \n **/antiinvite divulgacao #canal**\n Ira liberar para somente esse canal puder divulgar links de discord com a proteção ativa. \n \n > Comandos para usar: \n **Nenhum**\n \n > OBS \n Por default ele vem com o sistema ativo.")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           } else if (args[0] === 'ticket'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Sistema de ticket**__ <a:verify:687759351330766901>")
            .setDescription("**Descrição:** \nEste sistema irá abrir um ticket caso a pessoa reaja a mensagem.\n \n **Comandos do Sistema:**\n > Comandos para configurar: \n **/setarticket #canal <Mensagem Editavel>**\n Irá enviar uma mensagem embed para o canal mencionado com a mensagem que você colocou e será reagido automaticamente. (Obrigatorio)\n\n **/setaridmensagemticket <id da mensagem>**\n Irá setar o ID da mensagem do ticket. (Obrigatorio)\n \n **/setaridcategoriaticket <id da categoria>**\n Ira setar a categoria. Quando for criado um ticket, o canal será enviado para essa categoria.(Opcional) \n \n **/setargrupoticket @cargo**\n Quando um ticket for criado esse canal será adicionado no bypass para ver o ticket, por exemplo um cargo de suporte. (Opcional) \n \n **/fecharticket** \n Irá fechar o ticket em 10 segundos.\n \n > Comandos para usar: \n **Nenhum**\n \n > OBS \n Para funcionar terá de usar /setarticket, depois /setaridmensagemticket, os restantes comandos são opcionais.\n \n \n **Qualquer duvida entre em nosso discord:** https://discord.gg/NX8W776DWn")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           } else if (args[0] === 'tempmute'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Sistema de temp mute**__ <a:verify:687759351330766901>")
            .setDescription("**Descrição:** \nEste sistema irá silenciar o membro mencionado.\n \n **Comandos do Sistema:**\n > Comandos para configurar: \n **/setarcanalpunicoes #canal**\n Irá setar o canal de punições \n \n > Comandos para usar: \n **/tempmute**")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           } else if (args[0] === 'bemvindo'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Sistema de bem vindo**__ <a:verify:687759351330766901>")
            .setDescription("**Descrição:** \nEste sistema irá anunciar e setar o membro recem chegado no discord.\n \n **Comandos do Sistema:**\n > Comandos para configurar: \n **/setarcanalbemvindo #canal**\n Irá setar o canal de boas vindas \n\n **/setargrupobemvindo @cargo** \n Para setar o auto role. \n \n > Comandos para usar: \n **Nenhum**")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           } else if (args[0] === 'saida'){
            const mensagem = new Discord.MessageEmbed()
            .setColor("#964b00")
            .setTitle("__**Sistema de saida**__ <a:verify:687759351330766901>")
            .setDescription("**Descrição:** \nEste sistema irá anunciar a saida de um membro no discord.\n \n **Comandos do Sistema:**\n > Comandos para configurar: \n **/setarcanalsaida #canal**\n Irá setar o canal de saida \n \n > Comandos para usar: \n **Nenhum**")
            .setFooter("Atenciosamente CraftBot")
            .setThumbnail(client.user.avatarURL())
            message.channel.send(mensagem)
           }
      }