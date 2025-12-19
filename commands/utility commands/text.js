const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'text',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

     run: async(client, message, args) => {
        if(!message.member.permissions.has("MANAGE_CHANNELS") && !message.author.id === "730396358002868234")
        return message.reply("You do not have permission!");
    
        const channelNameQuery = args.join(" ");
        if(!channelNameQuery)
        return message.reply("Please specify a channel name!");
    
        message.guild.channels.create(channelNameQuery).then((ch) => {
        message.channel.send(`Click on ${ch} to access the created channel!`)
        .then(ch => {
            const embed = new MessageEmbed()
            .setTitle("Created")
            .setDescription("The channel has been succesfully created. \n Thank you for choosing Pixely. Peace!")
            .setColor("#00ff00")
            .setFooter(`${message.author.tag}`)
            .setThumbnail("https://cdn.discordapp.com/avatars/877225822912659558/6e66106807613fb47ba8ceca2b53e84e.png?size=240")
            message.author.send({ embeds: [embed] });
        })
        });
    }
    }