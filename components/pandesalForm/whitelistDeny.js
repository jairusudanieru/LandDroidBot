const {
   ActionRowBuilder,
   ButtonBuilder,
   ButtonStyle,
   EmbedBuilder,
} = require("discord.js");

module.exports = {
   data: {
      name: "whitelistdeny",
   },
   async execute(interaction, client) {
      const userId = await interaction.message.embeds[0].author.name;
      const member = await interaction.guild.members.fetch(userId);
      const threadId = await interaction.message.embeds[0].footer.text;
      const channel = await client.channels.cache.get(threadId);

      const embed = new EmbedBuilder()
         .setDescription(`Dear ${member}, \n\nThank you for expressing your interest in our Minecraft Server. Regrettably, after careful consideration of your application, we are unable to grant you access to our server at this time. However, we encourage you to reapply in the future. \n\nBest regards, \nAdmin Team of PandesalSMP`)
         .setColor(`#2a2c31`);

      const row = new ActionRowBuilder().setComponents(
         new ButtonBuilder()
            .setCustomId("whitelistdeny")
            .setLabel("Application Rejected")
            .setEmoji("<:emoji_circlecross:1067128052615753748>")
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(true)
      );

      try {
         await channel.send({
            embeds: [embed],
         });
         await interaction.update({
            components: [row]
         });
         await interaction.followUp({
            content: `Rejection Form Sent!`,
            ephemeral: true
         });
      } catch (error) {
         await console.log(error)
         await interaction.reply({
            content: "Sorry, something went wrong. Please report this to the administrator.",
            ephemeral: true,
         });
      }
   },
};
