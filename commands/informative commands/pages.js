const { Client, Message, MessageEmbed } = require('discord.js')
const { pagination } = require('reconlx')

module.exports = {
    name : 'pages',
    category : 'info',
    description : 'underwork help command',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        const embed1 = new MessageEmbed().setTitle('one'); 
        const embed2 = new MessageEmbed().setTitle('two'); 
        const embed3 = new MessageEmbed().setTitle('three'); 
        const embed4 = new MessageEmbed().setTitle('four'); 
        const embed5 = new MessageEmbed().setTitle('five'); 

        const embeds = [embed1, embed2, embed3, embed4, embed5]

        pagination({
            embeds: embeds,
            channel: message.channel,
            author: message.author,
            time: 120000,
        })
    }
}