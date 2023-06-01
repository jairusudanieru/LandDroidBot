const {
    EmbedBuilder,
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Get help about my commands")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands)
        .addSubcommand(subcommand =>
            subcommand
                .setName('memberinfo')
                .setDescription('Help about /memberinfo'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('ping')
                .setDescription('Help about /ping'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('serverinfo')
                .setDescription('Help about /serverinfo'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('sourcecode')
                .setDescription('Help about /sourcecode')),
    async execute(interaction) {
        const help = interaction.options.getSubcommand()
        const memberinfo = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Member Info Command**\nThis command displays the Information for the selected member. This information includes the member's Username, ID, Creation Date, and Join Date.`)
            .setColor(`#2a2c31`);
        const ping = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Ping Command**\nThis command displays Land Droid's Current Ping.`)
            .setColor(`#2a2c31`);
        const serverinfo = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Server Info Command**\nThis command displays the Information about the server. This information includes the server's Name, Total Members, Nitro Boosts, Server Level, and Release Date.`)
            .setColor(`#2a2c31`);
        const sourcecode = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Source Code Command**\nThis command displays the Github Repository Link for Land Droid's Source Code.`)
            .setColor(`#2a2c31`);

        try {
            switch (help) {
                case 'memberinfo':
                    await interaction.reply({
                        embeds: [memberinfo]
                    })
                    break;
                case 'ping':
                    await interaction.reply({
                        embeds: [ping]
                    })
                    break;
                case 'serverinfo':
                    await interaction.reply({
                        embeds: [serverinfo]
                    })
                    break;
                case 'sourcecode':
                    await interaction.reply({
                        embeds: [sourcecode]
                    })
                    break;
                default:
                    break;
            }
        } catch (error) {
            await interaction.reply({
                content: "Sorry, something went wrong. Please report this to the administrator.",
                ephemeral: true,
            });
        }
    },
};
