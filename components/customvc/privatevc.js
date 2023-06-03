const { PermissionFlagsBits } = require("discord.js");
const { boosterRoleId } = require("../../jsonFiles/config.json");
const buttonCooldown = new Set();

module.exports = {
    data: {
        name: "privatevc",
    },
    async execute(interaction) {
        var cooldown = 60000;
        const hasBoosterRole = interaction.member.roles.cache.has(boosterRoleId);
        if (hasBoosterRole) cooldown = 10000;
        const seconds = cooldown / 1000;
        const voiceChannel = interaction.member.voice.channel;
        if (interaction.channel != voiceChannel) {
            await interaction.reply({
                content: "Sorry, you can only do this to your own channel!",
                ephemeral: true
            });
            return;
        }

        try {
            if (buttonCooldown.has(interaction.user.id)) {
                await interaction.reply({
                    content: `Please wait ${seconds} seconds before using this button again.`,
                    ephemeral: true,
                });
            } else {
                if (interaction.channel.permissionsFor(interaction.guild.id).has(PermissionFlagsBits.ViewChannel)) {
                    await interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
                        ViewChannel: false,
                        SendMessages: true,
                        EmbedLinks: true,
                        AttachFiles: true,
                        AddReactions: true,
                        UseExternalEmojis: true,
                        ReadMessageHistory: true,
                        Connect: true,
                        Speak: true,
                        Stream: true,
                        UseVAD: true,
                    })
                    await interaction.reply({
                        content: `<@${interaction.user.id}> sets the Channel Visibility to: Private`,
                        allowedMentions: {
                            parse: [],
                        },
                    })
                } else {
                    await interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
                        ViewChannel: true,
                    })
                    await interaction.reply({
                        content: `<@${interaction.user.id}> sets the Channel Visibility to: Visible`,
                        allowedMentions: {
                            parse: [],
                        },
                    })
                }
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