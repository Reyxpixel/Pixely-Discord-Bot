const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'credits',
    category : 'info',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
            const embed = new MessageEmbed()
            .setTitle('Thanks to all these wonderful people!')
            .setDescription(`\`nхιм\`\n \`sludge\`\n \`jnsp\`\n \`Bullet_Tide\``)
            .setColor("22feff")
            .setFooter("PixelBlox will remember you!")
            await message.channel.send({embeds: [embed]});

    }
}