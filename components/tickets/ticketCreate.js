const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChannelType,
    EmbedBuilder,
    PermissionFlagsBits,
} = require("discord.js");
const { supportCategory } = require("../../jsonFiles/guild.json");
const { modRoleId } = require("../../jsonFiles/guild.json");

module.exports = {
    data: {
        name: "ticketcreate",
    },
    async execute(interaction) {
        const usermember = await interaction.guild.members.fetch(interaction.user.id);
        const embed = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Ticket Created!** \nThank you for creating a ticket! We've received your request, and our friendly support team is now working on it. Rest assured, we're investigating your issue carefully. While we do that, you can add more details or context to your ticket channel to help us assist you better.`)
            .setColor("#b9babf")
        const row = new ActionRowBuilder().setComponents(
            new ButtonBuilder()
                .setCustomId("ticketclose")
                .setLabel("Close Ticket")
                .setEmoji("<:emoji_logout:1011132089774657587>")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("ticketconfirm")
                .setLabel("Delete Ticket")
                .setEmoji("<:emoji_trash:1010906896762408970>")
                .setStyle(ButtonStyle.Secondary)
        );

        try {
            const channel = await interaction.guild.channels.create({
                name: `ticket-${usermember.displayName}`,
                type: ChannelType.GuildText,
                parent: supportCategory,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [PermissionFlagsBits.ViewChannel],
                    },
                    {
                        id: modRoleId,
                        allow: [
                            PermissionFlagsBits.ViewChannel,
                            PermissionFlagsBits.SendMessages,
                            PermissionFlagsBits.EmbedLinks,
                            PermissionFlagsBits.AttachFiles,
                            PermissionFlagsBits.AddReactions,
                            PermissionFlagsBits.UseExternalEmojis,
                            PermissionFlagsBits.ReadMessageHistory,
                            PermissionFlagsBits.UseApplicationCommands,
                        ],
                    },
                    {
                        id: interaction.user.id,
                        allow: [
                            PermissionFlagsBits.ViewChannel,
                            PermissionFlagsBits.SendMessages,
                            PermissionFlagsBits.EmbedLinks,
                            PermissionFlagsBits.AttachFiles,
                            PermissionFlagsBits.AddReactions,
                            PermissionFlagsBits.UseExternalEmojis,
                            PermissionFlagsBits.ReadMessageHistory,
                            PermissionFlagsBits.UseApplicationCommands,
                        ],
                    },
                ],
            });
            await interaction.reply({
                content: `Ticket Created! ${channel}`,
                ephemeral: true,
            });
            await channel.send({
                content: `<@${interaction.user.id}>`,
                embeds: [embed],
                components: [row],
            });
        } catch (error) {
            await interaction.reply({
                content: "Sorry, something went wrong. Please report this to the administrator.",
                ephemeral: true,
            });
        }
    },
};
