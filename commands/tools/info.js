const {
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");
const botFunction = require("../../commandsFunctions/info/bot.js");
const memberFunction = require("../../commandsFunctions/info/member.js");
const serverFunction = require("../../commandsFunctions/info/server.js");

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
        try {
            switch (info) {
                case 'bot':
                    await botFunction.execute(interaction, client);
                    break;
                case 'member':
                    await memberFunction.execute(interaction, user);
                    break;
                case 'server':
                    await serverFunction.execute(interaction);
                    break;
                default:
                    break;
            }
        } catch (error) {
            await console.error(error);
            await interaction.reply({
                content: "Sorry, something went wrong. Please report this to the administrator.",
                ephemeral: true,
            });
        }
    },
};
