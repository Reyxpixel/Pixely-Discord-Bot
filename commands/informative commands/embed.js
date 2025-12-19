const { MessageEmbed } = require("discord.js")

module.exports = {
    name : "embed",
    run : async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle("Title")
        .setDescription("Description")
        .setColor("22feff")
        .setThumbnail("https://yt3.ggpht.com/k841U7Z9IVs9vacEkvfXz77DRt5VW6yiADGpexTtsE9ryRoOOFJ87juljb9aX7VhbZaVWC7PpHs=s88-c-k-c0x00ffffff-no-rj-mo")
        .setFooter("Testing")
        message.channel.send({embeds: [embed]});
    }
}