module.exports = {
    name: "ban",
    run : async(client, message, args ) => {
        if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("I do not have permission to ban members!");
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send("Please mention a valid member to ban!");
        if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You do not have permission to ban members!");
        try {
            await Member.ban({ reason : args.slice(1).join(" ")})
            message.channel.send(`${Member.user.username} has been banned`);
        } catch {
            message.channel.send({ content: "I am not able to ban this person as they are higher than me!"})
        }
    }
}