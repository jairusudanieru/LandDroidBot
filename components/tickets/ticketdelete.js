const { EmbedBuilder } = require("discord.js");
const { deletedTicketChannel } = require('../../jsonFiles/guild.json');
const { modRoleId } = require("../../jsonFiles/guild.json");

module.exports = {
    data: {
        name: "ticketdelete",
    },
    async execute(interaction, client) {
        const channel = client.channels.cache.get(deletedTicketChannel);
        const haveModRole = interaction.member.roles.cache.has(modRoleId);
        const embed = new EmbedBuilder()
            .setDescription(`<@${interaction.user.id}> deleted the \`#${interaction.channel.name}\` channel.`)
            .setColor("#b9babf");

        if (!haveModRole) {
            await interaction.reply({
                content: "Sorry, only moderators can delete tickets!",
                ephemeral: true
            });
            return;
        }

        try {
            await interaction.reply({
                content: `Deleting Ticket in a few seconds.`,
                ephemeral: true,
            });
            await channel.send({
                embeds: [embed],
            });
            await interaction.channel.delete();
        } catch (error) {
            await interaction.reply({
                content: "Sorry, something went wrong. Please report this to the administrator.",
                ephemeral: true,
            });
        }
    },
};
