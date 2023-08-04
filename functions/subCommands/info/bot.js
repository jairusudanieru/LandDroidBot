const { EmbedBuilder } = require("discord.js");

module.exports = {
   name: "bot",
   description: "info command bot subcommand",
   async execute(interaction, client) {
      const botMember = interaction.guild.members.cache.get(client.user.id);
      const joinedDate = `<t:${Math.floor(botMember.joinedTimestamp / 1000)}:D>`
      const creationDate = `<t:${Math.floor(client.user.createdTimestamp / 1000)}:D>`
      const memberAvatar = `${botMember.displayAvatarURL({ dynamic: true })}`
      const embed = new EmbedBuilder()
         .setDescription(`<:emoji_dot:1044083172784218132>**Bot Name:** ${botMember.displayName} \n<:emoji_dot:1044083172784218132>**Bot Ping:** ${client.ws.ping}ms \n<:emoji_dot:1044083172784218132>**Language:** JavaScript \n<:emoji_dot:1044083172784218132>**Joined at:** ${joinedDate} \n<:emoji_dot:1044083172784218132>**Created at:** ${creationDate} \n<:emoji_dot:1044083172784218132>**Source Code:** [GitHub Repository](https://github.com/jairusudanieru/LandDroidBot)`)
         .setThumbnail(memberAvatar)
         .setColor(`#2b2d31`);

      try {
         await interaction.reply({
            embeds: [embed],
         });
      } catch (error) {
         await interaction.reply({
            content: "Sorry, something went wrong. Please report this to the administrator.",
            ephemeral: true,
         });
      }
   },
}