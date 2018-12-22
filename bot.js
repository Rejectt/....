const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"
client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});


client.on('ready',async () => {
  client.channels.find(ch => ch.id === "525030612143177729" && ch.type === 'voice').join();
});


client.login(process.env.BOT_TOKEN);
