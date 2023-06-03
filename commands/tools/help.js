const {
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");
const infoFunction = require("../../functions/subCommands/help/info.js");
const pingFunction = require("../../functions/subCommands/help/ping.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Get help about my commands")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands)
        .addSubcommand(subcommand =>
            subcommand
                .setName('info')
                .setDescription('Help about /info'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('ping')
                .setDescription('Help about /ping')),
    async execute(interaction) {
        const help = interaction.options.getSubcommand()
        try {
            switch (help) {
                case 'info':
                    await infoFunction.execute(interaction);
                    break;
                case 'ping':
                    await pingFunction.execute(interaction);
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
