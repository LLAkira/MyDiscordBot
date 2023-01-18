module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic'],
    cooldown: 5,
    permissions: [],
    description: "open a ticket!",
      async execute(message, args, cmd, client, Discord) {
        const user = message.mentions.users.first() || message.member.user

        const avatar_list = new Discord.MessageEmbed()
          .setColor('#07001C')
          .setTitle(`**${user.username}** Avatar:`)
          .setImage(`${message.author.displayAvatarURL({ dynamic: true })}`)

          message.channel.send(avatar_list);
    }
}