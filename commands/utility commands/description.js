const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'description',
    aliases : ['e'],
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
    return message.reply("Please specify a description!");

    message.channel.setTopic(channelNameQuery).then((ch) => {
    message.channel.send("Description has been successfully edited!")
    .then(ch => {
        const embed = new MessageEmbed()
        .setTitle("Edited")
        .setDescription("The channel has been succesfully edited. \n Thank you for choosing Pixely. Peace!")
        .setColor("#00aeff")
        .setFooter(`${message.author.tag}`)
        .setThumbnail("https://cdn.discordapp.com/avatars/877225822912659558/6e66106807613fb47ba8ceca2b53e84e.png?size=240")
        message.author.send({ embeds: [embed] });
    })
    });
}
}