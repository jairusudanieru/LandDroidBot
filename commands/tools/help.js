const {
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");
const path = require('path');
const functionLoader = require('../../loaders/functionLoader');
const functionsFolder = path.join(__dirname, '..', '..', 'functions/subCommands/help');
const functions = functionLoader(functionsFolder);

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Get help about my commands")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands)
        .addStringOption(option =>
            option.setName('command')
                .setDescription('The command you want')
                .setRequired(true)
                .addChoices(
                    { name: 'info', value: 'info' },
                    { name: 'ping', value: 'ping' },
                )),
    async execute(interaction) {
        const help = interaction.options.getString('command');
        switch (help) {
            case 'info':
                await functions.info.execute(interaction);
                break;
            case 'ping':
                await functions.ping.execute(interaction);
                break;
            default:
                break;
        }
    },
};
