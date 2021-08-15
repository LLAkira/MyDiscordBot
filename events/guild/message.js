require('dotenv').config();
const ms = require('ms');
const quick = require('quick.db');
//create cooldowns map
const cooldowns = new Map();
module.exports = async (Discord, client, message) => {
    const prefix = '<';

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    if(!command) return;


  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ]









    //If cooldowns map doesn't have a command.name key then create one.
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    //If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

      if(current_time < expiration_time){
        const time_left = (expiration_time - current_time) / 1000;

        return message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name}`);
      }
    }

    //If the author's id is not in time_stamps then add them with the current time.
    time_stamps.set(message.author.id, current_time);
    //Delete the user's id once the cooldown is over.
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);












if (message.author.bot) return;

// see if the user of this message is afk and has set there status as afk in the messaged server
const status = quick.get(`${message.author.id}_${message.guild.id}_afk`);
// if the statue is afk then take them out of the afk status
if (status && status.active && message.guild.me.hasPermission('MANAGE_NICKNAMES' || 'ADMINISTRATOR')) {
  // restart the data if this users afk status without removing them form the database
  quick.set(`${message.author.id}_${message.guild.id}_afk`, {
    username: message.author.username,
    active: false,
    date: null,
  });
  // try changing the members nickname
  await message.member
    .setNickname(status.username)
    // Once the members nickname has been changed back then send a message with the time they were afk
    .then(() => {
      message.reply(`You were afk for ${ms(Date.now() - (status.date || 0))}`);
    })
    // catch an error and then remove the member form the database and send a message
    .catch(_e => {
      quick.delete(`${message.author.id}_${message.guild.id}_afk`);
      message.reply(`You were afk for ${ms(Date.now() - (status.date || 0))}`);
    });
}

if (!message.content.startsWith(prefix)) return;



















    try{
        command.execute(message,args, cmd, client, Discord);
    } catch (err){
        message.reply("There was an error trying to execute this command!");
        console.log(err);
    }

}
