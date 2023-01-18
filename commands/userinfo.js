module.exports = { 
    name: 'userinfo',
    cooldown: 5,
    aliases: ['userinformation', 'usrfn'],
    permissions: [],
    description: "userinformation",
    async execute(message, args, cmd, client, Discord) {
      const { guild, channel } = message

      const user = message.mentions.users.first() || message.member.user
      const member = guild.members.cache.get(user.id)

      const newEmbed = new Discord.MessageEmbed()
      .setAuthor(`${user.username}`, user.displayAvatarURL())
      .setColor('#07001C')
      .addFields(
        {name: '**Username**', value: user.tag},
        {name: '**Nickname**', value: member.nickname || 'None'},
        {name: '**Role count**', value: member.roles.cache.size - 1},
        {name: '**Joined Server**', value: new Date(member.joinedTimestamp).toLocaleDateString()},
        {name: '**Joined Discord**', value: new Date(member.createdTimestamp).toLocaleDateString()}
      )

      message.channel.send(newEmbed);
  }
}