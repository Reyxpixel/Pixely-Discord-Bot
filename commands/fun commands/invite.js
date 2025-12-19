const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'invite',
    category : 'info',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
            const embed = new MessageEmbed()
            .setTitle('Here is the invite link!')
            .setDescription(`Invite Pixely: https://bit.ly/39wwNXG`)
            .setColor("22feff")
            await message.channel.send({embeds: [embed]});
    }
}