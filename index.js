const express = require('express');
const app = express();
app.get('/', (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(
    `ProjectLoton 100%.`
  );
  response.sendStatus(200);
});
 app.listen(process.env.PORT);


const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '<';

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})


client.login('Token Bot');
