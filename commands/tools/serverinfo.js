const {
    EmbedBuilder,
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("serverinfo")
        .setDescription("Get the info of Jairusu's Land")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands)
        .setDMPermission(false),
    async execute(interaction) {
        const guild = interaction.guild;
        const guildIcon = `${guild.iconURL({ dynamic: true })}`
        const releasedDate = `<t:${Math.floor(guild.createdTimestamp / 1000)}:D>`
        const embed = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Server Name:** ${guild.name} \n<:emoji_dot:1044083172784218132>**Total Members:** ${guild.memberCount} Members \n<:emoji_dot:1044083172784218132>**Nitro Boosts:** ${guild.premiumSubscriptionCount} Boosts \n<:emoji_dot:1044083172784218132>**Server Level:** Level ${guild.premiumTier} \n<:emoji_dot:1044083172784218132>**Date Released:** ${releasedDate}`)
            .setThumbnail(guildIcon)
            .setColor(`#2a2c31`);

        try {
            await interaction.reply({
                embeds: [embed]
            });
        } catch (error) {
            await interaction.reply({
                content: "Something went wrong! Please report this to Developers.",
                ephemeral: true
            });
        }
    },
};
