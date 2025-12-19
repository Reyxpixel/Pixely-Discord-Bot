const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'hack',
    category : 'info',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
const hacking = await message.channel.send("\`initializing sequence\`");
hacking.edit("\`preparing database\`");
hacking.edit("\`launching networks\`");
hacking.edit("\`process: 20%\`");
hacking.edit("\`process: 40%\`");
hacking.edit("\`process: 60%\`");
hacking.edit("\`process: 80%\`");
hacking.edit("\`command succesfull!\`").then(hacking => hacking.delete())
}
}