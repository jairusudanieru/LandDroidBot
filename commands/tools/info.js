const {
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");
const path = require('path');
const functionLoader = require('../../loaders/functionLoader');
const functionsFolder = path.join(__dirname, '..', '..', 'functions/subCommands/info');
const functions = functionLoader(functionsFolder);

module.exports = {
    data: new SlashCommandBuilder()
        .setName("info")
        .setDescription("Get info about the given subject.")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands)
        .addSubcommand(subcommand =>
            subcommand
                .setName('bot')
                .setDescription('Information about this bot'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('member')
                .setDescription('Information about the member')
                .addUserOption((option) => option.setName("user").setDescription("The user's info to show").setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Information about the server')),
    async execute(interaction, client) {
        const info = interaction.options.getSubcommand();
        const user = interaction.options.getUser("user");
        switch (info) {
            case 'bot':
                await functions.bot.execute(interaction, client);
                break;
            case 'member':
                await functions.member.execute(interaction, user);
                break;
            case 'server':
                await functions.server.execute(interaction);
                break;
            default:
                break;
        }
    },
};
