const {
    EmbedBuilder,
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Get the Bot's Ping")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands),
    async execute(interaction, client) {
        const ping = `${client.ws.ping}ms`
        const embed = new EmbedBuilder()
            .setAuthor({
                name: `${client.user.tag}`,
                iconURL: `${client.user.displayAvatarURL()}`,
            })
            .setDescription(`<:emoji_dot:1044083172784218132>**Websocket heartbeat:** ${ping}`)
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
