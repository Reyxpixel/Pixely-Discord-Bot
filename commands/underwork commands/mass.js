const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'mass',
    category : 'info',
    description : 'Dm',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setDescription(`WebSocket ping is ${client.ws.ping}MS\nMessage edit ping is ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
            .setColor("22feff")
            await message.channel.send({embeds: [embed]});
            msg.delete()

    }
}