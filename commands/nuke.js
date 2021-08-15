const Discord = require('discord.js')

module.exports = {
    name: 'nuke',
    cooldown: 10,
    aliases: [],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: 'Nuke',
    async execute(message,args, cmd, client, Discord){
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send('missing permissions')
        }

        message.channel.clone().then(msg => msg.send('NukedByPL                                                                                   https://tenor.com/view/mindblown-nuts-explosion-gif-12581466'))
        message.channel.delete()
        
    },
};
