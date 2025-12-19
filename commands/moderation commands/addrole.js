const { Message } = require('discord.js')

module.exports = {
    name : 'addrole',
    run : async(client, message, args) => {
        //lets use parameters (optional)
        /**
         * @param {Message} message
         */
        if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply('You do not have permission.')
        const member = message.mentions.members.first()
        if(!member) return message.reply('No member specified')
        const role = message.mentions.roles.first()
        if(!role) return message.reply('No role specified')
        try {
            await member.roles.add(role.id);
            message.channel.send(`${member.user.username} has obtained a role`);
        } catch {
            message.channel.send({ content: "I am not able to give this role as it is higher than me"});
        }
    }
}