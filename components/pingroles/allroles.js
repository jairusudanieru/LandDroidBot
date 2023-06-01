const { PermissionFlagsBits } = require("discord.js");
const {
    newsPingRoleId,
    contentPingRoleId,
} = require("../../jsonFiles/config.json");

module.exports = {
    data: {
        name: "allroles",
    },
    async execute(interaction, client) {
        const newsRole = interaction.guild.roles.cache.get(newsPingRoleId);
        const contentRole = interaction.guild.roles.cache.get(contentPingRoleId);
        const haveNewsRole = interaction.member.roles.cache.has(newsPingRoleId);
        const haveContentRole = interaction.member.roles.cache.has(contentPingRoleId);
        const botMember = interaction.guild.members.cache.get(client.user.id);
        const hasRolePerm = botMember.permissions.has(PermissionFlagsBits.ManageRoles);
        const hasRoleEditPerm = botMember.roles.highest.comparePositionTo(newsRole) > 0 && botMember.roles.highest.comparePositionTo(contentRole) > 0;

        if (!hasRolePerm || !hasRoleEditPerm) {
            await interaction.reply({
                content: "Sorry, I don't have permission to give you this role!",
                ephemeral: true
            });
            return;
        }

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
