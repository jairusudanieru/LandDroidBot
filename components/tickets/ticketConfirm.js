const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { modRoleId } = require('../../jsonFiles/config.json');

module.exports = {
   data: {
      name: "ticketconfirm",
   },
   async execute(interaction) {
      const haveModRole = interaction.member.roles.cache.has(modRoleId);
      const row = new ActionRowBuilder().setComponents(
         new ButtonBuilder()
            .setCustomId("ticketdelete")
            .setLabel("Delete Ticket")
            .setEmoji("<:emoji_trash:1010906896762408970>")
            .setStyle(ButtonStyle.Secondary)
      );

      if (!haveModRole) {
         await interaction.reply({
            content: "Sorry, only moderators can delete tickets!",
            ephemeral: true
         });
         return;
      }

      try {
         await interaction.reply({
            content: "Are you sure you want to delete this ticket?",
            components: [row],
            ephemeral: true
         });
      } catch (error) {
         await interaction.reply({
            content: "Something went wrong! Please report this to Developers.",
            ephemeral: true
         });
      }

   }
}