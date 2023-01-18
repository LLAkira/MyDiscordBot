module.exports = {
    name: 'help',
    cooldown: 5,
    aliases: [],
    permissions: [],
    description: 'help for commands',
    async execute(message,args, cmd, client, Discord){

    const Pagination = require('discord-paginationembed')
    const FieldsEmbed = new Pagination.FieldsEmbed()
    
  .setArray([
  {word: `**Nuke:** Nuke the text-chat`}, 
  {word: `**Clear/cl:** Clear messages from the text-chat`}, 
  {word: `**Ban:** Ban a member`}, 
  {word: `**Kick:**: Kick a member`}, 
  {word: `**Play/p:** Play a music/video in VC`}, 
  {word: `**Leave:** leave the VC`}, 
  {word: `**skip:** skip the music in VC`}, 
  {word: `**afkset/afk:** afk`}, 
  {word: `**discord/dc:** ProjectLoton Discord`}, 
  {word: `**mute:** Mute a Member`}, 
  {word: `**unmute:** Unmute a member`}, 
  {word: `**slowmode:** slowmode the text-chat`}, 
  {word: `**suggestions:** send suggestions to improve the server :D`}, 
  {word: `**ticket:** open the ticket if you have any questions`}, 
  {word: `**AddDiscord/AddDc:** Add to your discord server!`}, 
  {word: `**ping:** show your ping`},
  {word: `**avatar:** show your avatar profile`},
  {word: `**embedbuild/embd:** make embed to u`},
  {word: `**weather:** show the weather of your city to u`},
  {word: `**Userinfo:** User informations`},
  {word: `**ServerInfo:** Server Informations`},
  {word: `**Lock:** Lock the chat`},
  {word: `**Unlock:** Unlock the Chat`},
  {word: `**remind:** remind to u something`}])

  .setAuthorizedUsers([message.author.id])
  .setChannel(message.channel)
  .setElementsPerPage(6)
  .setPageIndicator(true)
  .formatField('Commands', el => el.word)

  FieldsEmbed.embed

  .setColor('#07001C')
  .setTitle('-ZzZ____ZzZ-#0001')
  .setTimestamp()

  FieldsEmbed.build()

  message.delete();

    }
}