const {
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
} = require("discord.js");
const { boosterRoleId } = require("../../jsonFiles/guild.json");
const buttonCooldown = new Set();

module.exports = {
    data: {
        name: "userlimit",
    },
    async execute(interaction) {
        var cooldown = 30000;
        const hasBoosterRole = interaction.member.roles.cache.has(boosterRoleId);
        if (hasBoosterRole) cooldown = 10000;
        const seconds = cooldown / 1000;
        const modal = new ModalBuilder()
            .setCustomId(`userlimit`)
            .setTitle(`Set Voice Channel User Limit`);

        const a1 = new TextInputBuilder()
            .setCustomId("1")
            .setLabel("Enter a value 1 to 99")
            .setPlaceholder("Write Value here")
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const ar1 = new ActionRowBuilder().addComponents(a1);
        modal.addComponents(ar1);

        try {
            if (buttonCooldown.has(interaction.user.id)) {
                await interaction.reply({
                    content: `Please wait ${seconds} seconds before using this button again.`,
                    ephemeral: true,
                });
            } else {
                await interaction.showModal(modal);
                buttonCooldown.add(interaction.user.id);
                setTimeout(() => {
                    buttonCooldown.delete(interaction.user.id);
                }, cooldown);
            }
        } catch (error) {
            await interaction.reply({
                content: "Sorry, something went wrong. Please report this to the administrator.",
                ephemeral: true,
            });
        }
    },
};  