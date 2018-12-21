client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`star Bot- Script By : medo `);
        console.log(`----------------`);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("Online")
 
});


client.login(process.env.BOT_TOKEN);
