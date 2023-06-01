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
        const ping = `${client.ws.ping}ms`;
        const botAvatar = client.user.displayAvatarURL();
        const embed = new EmbedBuilder()
            .setAuthor({ name: `${client.user.tag}`, iconURL: `${botAvatar}` })
            .setDescription(`<:emoji_dot:1044083172784218132>**Websocket heartbeat:** ${ping}`)
            .setColor(`#2a2c31`);

        try {
            await interaction.reply({
                embeds: [embed]
            });
        } catch (error) {
            await interaction.reply({
                content: "Sorry, something went wrong. Please report this to the administrator.",
                ephemeral: true,
            });
        }
    },
};
