const {
    newsPingRoleId,
    contentPingRoleId,
} = require("../../jsonFiles/config.json");

module.exports = {
    data: {
        name: "allroles",
    },
    async execute(interaction) {
        const haveNewsRole = interaction.member.roles.cache.has(newsPingRoleId);
        const haveContentRole = interaction.member.roles.cache.has(contentPingRoleId);

        if (!haveNewsRole && !haveContentRole) {
            await interaction.member.roles.add(newsPingRoleId);
            await interaction.member.roles.add(contentPingRoleId);
            await interaction.reply({
                content: `Gave you the <@&${newsPingRoleId}> and <@&${contentPingRoleId}> roles!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        } else if (haveNewsRole && haveContentRole) {
            await interaction.member.roles.remove(newsPingRoleId);
            await interaction.member.roles.remove(contentPingRoleId);
            await interaction.reply({
                content: `Removed the <@&${newsPingRoleId}> and <@&${contentPingRoleId}> roles from you!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        } else if (!haveNewsRole && haveContentRole) {
            await interaction.member.roles.add(newsPingRoleId);
            await interaction.reply({
                content: `Gave you the <@&${newsPingRoleId}> role!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        } else {
            await interaction.member.roles.add(contentPingRoleId);
            await interaction.reply({
                content: `Gave you the <@&${contentPingRoleId}> role!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        }
    },
};
