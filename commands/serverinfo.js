const Discord = require('discord.js');

module.exports = { 
    name: 'serverinfo',
    cooldown: 5,
    aliases: ['serverinformation', 'srvfn'],
    permissions: [],
    description: "serverinformation",
    async execute(message,args, cmd, client, Discord) {

      let serverembed = new Discord.MessageEmbed() 
    .setColor("#07001C")
    .setTitle(message.guild.name + ` Server Stats`)
    .addField("Name", message.guild.name, )
    .addField("ID", message.guild.id, )
    .addField(`Server Owner`, `<@${message.guild.ownerID}>`, true)
    .addField(`Server Owner ID`, message.guild.ownerID, true)
    .addField('Created:', message.guild.createdAt, true)
    .addField(`Server Verification Level`, message.guild.verificationLevel, true)
    .addField('MemberCount', `${message.guild.members.cache.filter(member => member.user.bot).size} Bots | ${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)} Humans | ${message.guild.memberCount} Members | ${Math.round((message.guild.members.cache.filter(member => member.user.bot).size / message.guild.memberCount) * 100)}% Bots | ${Math.round((((message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)) / message.guild.memberCount) * 100)}% Humans`, true)
    .addField('Channels', `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} Voice Channels | ${message.guild.channels.cache.filter(chan => chan.type === 'text').size} Text Channels | ${message.guild.channels.cache.filter(chan => chan.type === 'category').size} Categories | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'voice').size / message.guild.channels.cache.size) * 100)}% Voice Channels | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'text').size / message.guild.channels.cache.size) * 100)}% Text Channels | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'category').size / message.guild.channels.cache.size) * 100)}% Categories`, true)
    .addField("You joined:", message.member.joinedAt)
    .setFooter(` • Author ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
 
    message.channel.send(serverembed);
 
   message.delete();
 }
}

