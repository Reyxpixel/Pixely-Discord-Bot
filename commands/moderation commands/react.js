const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'react',
    category : 'info',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        message.react('👍').then(() => message.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions({ filter, max: 1, time: 20000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
			message.reply('You reacted with a thumbs up.');
		}
        else if (reaction.emoji.name === '👎') {
			message.reply('You reacted with a thumbs down.');
		}
	})
	.catch(collected => {
		message.reply('You reacted with neither a thumbs up, nor a thumbs down.');
	});    
}
}