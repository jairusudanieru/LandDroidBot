const { PermissionFlagsBits } = require("discord.js");
const { newsPingRoleId } = require("../../jsonFiles/config.json");

module.exports = {
    data: {
        name: "newsrole",
    },
    async execute(interaction, client) {
        const newsRole = interaction.guild.roles.cache.get(newsPingRoleId);
        const haveNewsRole = interaction.member.roles.cache.has(newsPingRoleId);
        const botMember = interaction.guild.members.cache.get(client.user.id);
        const hasRolePerm = botMember.permissions.has(PermissionFlagsBits.ManageRoles);
        const hasRoleEditPerm = botMember.roles.highest.comparePositionTo(newsRole) > 0;

        if (!hasRolePerm || !hasRoleEditPerm) {
            await interaction.reply({
                content: "Sorry, I don't have permission to give you this role!",
                ephemeral: true
            });
            return;
        }

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
