const Discord = require("discord.js");
const { WebhookClient } = require("discord.js");

module.exports = {
  name: "bug",
  description: "Make a bug report",
  usage: "report-bug <bug>",
  cooldown: 0,
  run: async (client, message, args) => {
    const suggestchannel = client.channels.cache.find(
      (channel) => channel.id === "902744320937984060"
    );
    if (!args[0])
      return message.channel.send("Error! Please do: `pix bug <the bug>` ");

    const guild = message.guild;
    const wc = new WebhookClient({ url: process.env.DISCORD_BUG_WEBHOOK_URL || 'my key was here!' });

       const suggestembed = new Discord.MessageEmbed()
      .setColor("22feff")
      .setTitle("Bug Report!")
      .setDescription(`**Bug:** ${args.slice(0).join(" ")}\n\n`)
      .addField("Guild Info", `${message.guild.name} • \`${message.guild.id}\``)
      .addField(
        "Owner Info",
        `${message.author.tag} • \`${message.author.id}\``
      )
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .setTimestamp();

    wc.send({
      username: message.author.tag,
      avatarURL: message.author.displayAvatarURL({ dynamic: true }),
      embeds: [suggestembed],
    });

    const suggestionadded = new Discord.MessageEmbed()
      .setColor("22feff")
      .setTitle("Reported!")
      .setDescription("Thanks for your valuable time!\n Your bug report got added.");
    message.channel.send({embeds: [suggestionadded]});
  },
};