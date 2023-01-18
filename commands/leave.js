module.exports ={
    name: 'leave',
    cooldown: 5,
    aliases: [],
    permissions: [],
    description: 'command',
    async execute(message, args, cmd, client, Discord){
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You need to be in a **Voice Channel* to execute this command!');
        await voiceChannel.leave();
        await message.channel.send('Leaving...')
        await message.channel.send('Bye!')

    }
}