/******************************************************************************/
// AUTHOR      : Vinayak Desai
// FILENAME    : mcd.js
// DESCRIPTION : main file of Mr. ChickenDinner discord bot
/******************************************************************************/
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
​
const client = new Discord.Client();
const config = require("./config.json");
//make file configs accessible everywhere
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
​
client.commands = new Enmap();
​
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});
​
client.login(config.token);
/******************************************************************************/
