const { PermissionFlagsBits, SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("botinfo")
        .setDescription("Get information about me")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands)
        .setDMPermission(false),
    async execute(interaction, client) {
        const member = interaction.guild.members.cache.get(client.user.id);
        const joinedDate = `<t:${Math.floor(member.joinedTimestamp / 1000)}:D>`
        const creationDate = `<t:${Math.floor(client.user.createdTimestamp / 1000)}:D>`
        const memberAvatar = `${member.displayAvatarURL({ dynamic: true })}`
        const embed = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Bot Name:** ${member.displayName} \n<:emoji_dot:1044083172784218132>**Bot Ping:** ${client.ws.ping}ms \n<:emoji_dot:1044083172784218132>**Language:** JavaScript \n<:emoji_dot:1044083172784218132>**Joined at:** ${joinedDate} \n<:emoji_dot:1044083172784218132>**Created at:** ${creationDate} \n<:emoji_dot:1044083172784218132>**Source Code:** [GitHub](https://github.com/jairusudanieru/LandDroidBot)`)
            .setThumbnail(memberAvatar)
            .setColor(`#2a2c31`);

        try {
            await interaction.reply({
                embeds: [embed],
            });
        } catch (error) {
            await interaction.reply({
                content: "Something went wrong! Please report this to Developers.",
                ephemeral: true,
            });
        }
    },
};
