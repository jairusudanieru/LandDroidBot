const { newsPingRoleId } = require("../../jsonFiles/config.json");

module.exports = {
    data: {
        name: "newsrole",
    },
    async execute(interaction) {
        const haveNewsRole = interaction.member.roles.cache.has(newsPingRoleId);

        if (!haveNewsRole) {
            await interaction.member.roles.add(newsPingRoleId);
            await interaction.reply({
                content: `Gave you the <@&${newsPingRoleId}> role!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        } else {
            await interaction.member.roles.remove(newsPingRoleId);
            await interaction.reply({
                content: `Removed the <@&${newsPingRoleId}> role from you!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        }
    },
};
