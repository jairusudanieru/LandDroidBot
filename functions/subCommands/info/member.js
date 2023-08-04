const { EmbedBuilder } = require("discord.js");

module.exports = {
   name: "member",
   description: "info command member subcommand",
   async execute(interaction, user) {
      const member = interaction.guild.members.cache.get(user.id);
      const joinedDate = `<t:${Math.floor(member.joinedTimestamp / 1000)}:D>`;
      const creationDate = `<t:${Math.floor(user.createdTimestamp / 1000)}:D>`;
      const embed = new EmbedBuilder()
         .setDescription(`<:emoji_dot:1044083172784218132>**Username:** ${user.tag} \n<:emoji_dot:1044083172784218132>**Nickname:** ${member.displayName} \n<:emoji_dot:1044083172784218132>**User ID:** ${user.id} \n<:emoji_dot:1044083172784218132>**Joined at:** ${joinedDate} \n<:emoji_dot:1044083172784218132>**Created at:** ${creationDate}`)
         .setThumbnail(`${member.displayAvatarURL({ dynamic: true })}`)
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
   }
}