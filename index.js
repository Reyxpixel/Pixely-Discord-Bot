const {Collection, Client, Discord, MessageEmbed, Intents} = require('discord.js')
const fs = require('fs')
const client = new Client({
    partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
    intents: 32767
})
const config = require('./config.json')
const prefix = config.prefix
const token = process.env.DISCORD_TOKEN || config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    
    const arrayOfStatus = [
        `Over ${client.guilds.cache.size} servers!`,
        `${prefix}help`,
        `youtube.com/pixelblox`,
        `@everyone`
    ];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        client.user.setActivity(status, {type : "WATCHING"})
        index++;
    }, 10000)
    
    console.log(`${client.user.username} ✅`)
})
client.on('messageCreate', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
}
)
client.on('messageCreate', message => {
    if(message.mentions.has(client.user) && !message.mentions.everyone === true){
             const embeded = new MessageEmbed()
            .setTitle("Hey, you mentioned me!")
            .setDescription(`My prefix in this server is \`pix\``)
            .setColor("22feff")
            message.channel.send({embeds: [embeded]});
    }
});

client.on('messageCreate', message => {
    if(message.channel.type == 'DM' && !message.author.bot) {
        const embed = new MessageEmbed()
        .setTitle("Hello, I'm here to help you!")
        .setDescription("I am pixely an all purpose bot made by PixelBlox, you don't need to pay anyone in any way to support our development. You can just subscribe to PixelBlox and add me to as many servers as you can so I can get verified. Here are all of my links- \n \n Invite Pixely: https://bit.ly/39wwNXG \n Youtube: https://www.youtube.com/PixelBlox")
        .setColor("22feff")
        .setFooter(`${message.author.tag}`)
        .setThumbnail("https://cdn.discordapp.com/avatars/877225822912659558/6e66106807613fb47ba8ceca2b53e84e.png?size=240")
        message.author.send({embeds: [embed]})
    }
});

client.on('messageCreate', message => {
    if (message.guild && message.content.startsWith('pix 12345678900987')) {
      let text = message.content.slice('pix 12345678900987'.length); // cuts off the /private part
      message.guild.members.cache.forEach(member => {
        if (member.id != client.user.id && !member.user.bot) member.send(text).catch(console.error)
      });
    }
  });

client.login(token)
