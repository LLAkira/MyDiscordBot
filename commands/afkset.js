const quick = require('quick.db');

module.exports = {
  name: 'afkset',
  cooldown: 15,
  aliases: ['afk'],
  permissions: [],
  description: 'Set Afk',
  async execute(message,args, cmd, client, Discord){

    
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('status change failed');
   
    quick.set(`${message.author.id}_${message.guild.id}_afk`, {
      username: message.member.displayName.replace('[AFK]', ''), 
      active: true, 
      date: Date.now(), 
    });

    message.member
      .setNickname(`[AFK] ${message.member.displayName.replace('[AFK]', '')}`) 
      
      .then(() => {
        return message.reply(`status has been set to afk. (Use <nafk to exit afk mode)`);
      })
      
      .catch(_e => {
        quick.delete(`${message.author.id}_${message.guild.id}_afk`);
        return message.channel.send('Failed to set your status.');
      });
  },
};
