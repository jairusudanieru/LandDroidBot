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
                await infoFunction.execute(interaction);
                break;
            case 'ping':
                await pingFunction.execute(interaction);
                break;
            default:
                break;
        }
    },
};
