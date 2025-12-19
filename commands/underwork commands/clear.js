module.exports = {
    name : "clear",

    run : async(client, message, args) => {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("You do not have permission!")
        if(!args[0]) return message.reply ("Please specify the number of messages to be deleted!")
        if(isNan(args[0])) return message.reply ("Please enter a valid number!")
        if(parseInt(args[0]) > 99) return message.reply ("Maximum messages that can be deleted is 99!")

        await message.channel.bulkDelete(parseInt(args[0]) + 1)
        message.channel.send(`Deleted ${args[0]} messages!`).then(m => m.delete({timeout : 5000}))
    }
}