/******************************************************************************/
// AUTHOR      : Vinayak Desai
// FILENAME    : mcd.js
// DESCRIPTION : main file of Mr. ChickenDinner discord bot
/******************************************************************************/
//requires
const Discord = require("discord.js");
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () =>{
  console.log('I am ready!');
});

client.on('message', message => {
  //exit if no prefix or bot message
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  //cut prefix from message and split arguments into array by spaces
  const args = message.content.slice(prefix.length).split(/ +/);
  //remove first arg
  const command = args.shift().toLowerCase();

  if(!args.length){
    return message.channel.send(`No Arguments, ${message.author}?`)
  }
});

client.login(token);
/******************************************************************************/
