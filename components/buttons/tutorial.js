const { EmbedBuilder } = require("discord.js");

module.exports = {
    data: {
        name: "tutorial",
    },
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1145664679935492166/tutorial.gif")
            .setColor("#2b2d31");

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    },
};
