module.exports = {
    data: {
        name: "assign",
    },
    async execute(interaction) {
        await interaction.reply({
            content: "The assignment of roles has now been moved to <id:customize>",
            ephemeral: true
        });
    },
};
