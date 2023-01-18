module.exports = {
    name: 'clear',
    cooldown: 15,
    aliases: ["cl"],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: 'kick',
    async execute(message,args, cmd, client, Discord){
        if(!args[0]) return message.reply("Enter the **amount of messages** that u want to clear!");
        if(isNaN(args[0])) return message.reply("Enter a **real** number!");
        
        if(args[0] > 100) return message.reply("sorry guy :D");
        if(args[0] < 1) return message.reply("U must delete at least one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
        message.channel.send('So clean :D');
        message.channel.send('https://tenor.com/view/magical-broom-stick-gif-10120259');
    }
}