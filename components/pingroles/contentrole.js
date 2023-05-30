const { contentPingRoleId } = require("../../jsonFiles/config.json");

module.exports = {
    data: {
        name: "contentrole",
    },
    async execute(interaction) {
        const haveContentRole = interaction.member.roles.cache.has(contentPingRoleId);

        if (!haveContentRole) {
            await interaction.member.roles.add(contentPingRoleId);
            await interaction.reply({
                content: `Gave you the <@&${contentPingRoleId}> role!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        } else {
            await interaction.member.roles.remove(contentPingRoleId);
            await interaction.reply({
                content: `Removed the <@&${contentPingRoleId}> role from you!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        }
    },
};
