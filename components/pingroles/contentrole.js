const { PermissionFlagsBits } = require("discord.js");
const { contentPingRoleId } = require("../../jsonFiles/config.json");

module.exports = {
    data: {
        name: "contentrole",
    },
    async execute(interaction, client) {
        const contentRole = interaction.guild.roles.cache.get(contentPingRoleId);
        const haveContentRole = interaction.member.roles.cache.has(contentPingRoleId);
        const botMember = interaction.guild.members.cache.get(client.user.id);
        const hasRolePerm = botMember.permissions.has(PermissionFlagsBits.ManageRoles);
        const hasRoleEditPerm = botMember.roles.highest.comparePositionTo(contentRole) > 0;

        if (!hasRolePerm || !hasRoleEditPerm) {
            await interaction.reply({
                content: "Sorry, I don't have permission to give you this role!",
                ephemeral: true
            });
            return;
        }

        try {
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
        } catch (error) {
            await interaction.reply({
                content: "Sorry, something went wrong. Please report this to the administrator.",
                ephemeral: true,
            });
        }
    },
};
