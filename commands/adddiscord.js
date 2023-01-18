module.exports = {
    name: 'AddDiscord',
    cooldown: 15,
    aliases: ["adddc"],
    permissions: [],
    description: 'discord official',
    async execute(message,args, cmd, client, Discord){
        message.channel.send('https://discord.com/oauth2/authorize?client_id=873183691566882846&scope=bot&permissions=8589934591');
    }
}
