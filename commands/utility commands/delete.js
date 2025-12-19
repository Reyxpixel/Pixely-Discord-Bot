const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'delete',
    aliases : ['d'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async(client, message, args) => {
    if(!message.member.permissions.has("MANAGE_CHANNELS") && !message.author.id === "730396358002868234")
    return message.reply("You do not have permission!");

    const channelTarget = message.mentions.channels.first() || message.channel;
    
    channelTarget.delete()
        .then(ch => {
            const embed = new MessageEmbed()
            .setTitle("Deleted")
            .setDescription("The channel has been succesfully deleted. \n Thank you for choosing Pixely. Peace!")
            .setColor("ff0000")
            .setFooter(`${message.author.tag}`)
            .setThumbnail("https://cdn.discordapp.com/avatars/877225822912659558/6e66106807613fb47ba8ceca2b53e84e.png?size=240")
            message.author.send({ embeds: [embed] });
        })

    },
};