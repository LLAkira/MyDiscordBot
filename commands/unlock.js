const Discord = require("discord.js");
 
module.exports = {
  name: "unlock",
  cooldown: 5,
  aliases: [],
  permissions: ["MANAGE_MESSAGES"],
  description: "unlock the chat",
  async execute(message, args, cmd, client, Discord) {
 
  let motivo = args.slice(" ").join(" ")
  if(!motivo) motivo = "err"
      let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, U dont have permission to use this command.`)
        return message.channel.send(embed);
      }
    message.delete();
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
    })
    const embed = new Discord.MessageEmbed()
    .setTitle('Unlocked')
    .setDescription(`This chat was unlocked`)
    .addField('Lock:', '<lock', true)
    .addField('Unlocked by:', `${message.author}`, true)
    .setTimestamp()
    .setThumbnail(avatar)
    .setColor('BLUE')
    message.channel.send(embed);
  }
}