module.exports = {
  data: {
    name: "ticketclose",
  },
  async execute(interaction) {
    const channel = interaction.channel;
    try {
      if (channel.topic == `${interaction.user.id}`) {
        await interaction.reply({
          content: `Closing Ticket in a few seconds...`,
          ephemeral: true,
        });
        await channel.permissionOverwrites.delete(interaction.user.id);
        await channel.send({
          content: `This ticket was closed by <@${interaction.user.id}>`,
        });
      } else if (channel.name != `${interaction.user.id}`) {
        await interaction.reply({
          content: `Only the Ticket Owner can close this ticket!`,
          ephemeral: true,
        });
      }
    } catch (error) {
      await interaction.reply({
        content: "Sorry, something went wrong. Please report this to the administrator.",
        ephemeral: true,
      });
    }
  },
};
