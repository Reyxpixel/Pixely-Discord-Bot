module.exports = {
    name: "kick",
    run : async(client, message, args ) => {
        if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.channel.send("I do not have permission to kick members!");
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send("Please mention a valid member to kick!");
        if(!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You do not have permission to kick members!");
        try {
            await Member.kick({ reason : args.slice(1).join(" ")})
            message.channel.send(`${Member.user.username} has been kicked`);
        } catch {
            message.channel.send({ content: "I am not able to kick this person as they are higher than me!"})
        }
    }
}