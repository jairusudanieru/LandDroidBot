const { PermissionFlagsBits } = require("discord.js");
const { updatesRoleId, smpRoleId } = require("../../jsonFiles/pandesal.json");

module.exports = {
    data: {
        name: "updatesrole",
    },
    async execute(interaction, client) {
        const updatesrole = interaction.guild.roles.cache.get(updatesRoleId);
        const haveUpdatesRole = interaction.member.roles.cache.has(updatesRoleId);
        const haveSMPRole = interaction.member.roles.cache.has(smpRoleId);
        const botMember = interaction.guild.members.cache.get(client.user.id);
        const hasRolePerm = botMember.permissions.has(PermissionFlagsBits.ManageRoles);
        const hasRoleEditPerm = botMember.roles.highest.comparePositionTo(updatesrole) > 0;

        if (!hasRolePerm || !hasRoleEditPerm) {
            return interaction.reply({
                content: "Sorry, I don't have permission to give you this role!",
                ephemeral: true
            });
        }

        if (!haveSMPRole) {
            return interaction.reply({
                content: `You need to have the <@&${smpRoleId}>`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        }

        try {
            if (!haveUpdatesRole) {
                await interaction.member.roles.add(updatesRoleId);
                await interaction.reply({
                    content: `Gave you the <@&${updatesRoleId}> role!`,
                    ephemeral: true,
                    allowedMentions: { parse: [] }
                });
            } else {
                await interaction.member.roles.remove(updatesRoleId);
                await interaction.reply({
                    content: `Removed the <@&${updatesRoleId}> role from you!`,
                    ephemeral: true,
                    allowedMentions: { parse: [] }
                });
            }
        } catch (error) {
            await interaction.channel.send({
                content: "Sorry, something went wrong. Please report this to the administrator.",
                ephemeral: true,
            });
        }
    },
};
