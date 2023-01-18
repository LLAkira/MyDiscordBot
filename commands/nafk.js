module.exports = {
  name: 'notafk',
  cooldown: 5,
  aliases: ['nafk', 'noafk'],
  permissions: [],
  description: 'Set Afk',
  async execute(message,args, cmd, client, Discord){
    await message.member
    .setNickname()
  }
}