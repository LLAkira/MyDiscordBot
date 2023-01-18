const Discord = require("discord.js");

module.exports = {
  name: "lock",
  cooldown: 5,
  aliases: [],
  permissions: ["MANAGE_MESSAGES"],
  description: "lock the chat",
  async execute(message, args, cmd, client, Discord) {
 
  let motivo = args.slice(" ").join(" ")
  if(!motivo) motivo = "err"
      let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, U don't have permission to use this command.`)
        return message.channel.send(embed);
      }
    message.delete();
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: true
    })
    const embed = new Discord.MessageEmbed()
    .setTitle(':no_entry_sign: Locked Chat')
    .setDescription(`This chat is locked`)
    .addField('Unlock: ', '<unlock', true)
    .addField('Locked by:', `${message.author}`, true)
    .setTimestamp()
    .setThumbnail(avatar)
    .setColor('#07001C')
    message.channel.send(embed);
          
  }
} 