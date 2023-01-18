module.exports = {
    name: 'discord',
    cooldown: 15,
    aliases: ["dc"],
    permissions: [],
    description: 'discord official',
    async execute(message,args, cmd, client, Discord){
        message.channel.send('https://discord.gg/YAzh6fd7Kc');
    }
}