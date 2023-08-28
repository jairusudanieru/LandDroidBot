const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
} = require("discord.js");
const { updatesRoleId } = require("../../jsonFiles/pandesal.json");

module.exports = {
    data: {
        name: "assign",
    },
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1144985865161023589/updatesping.png`)
            .setColor(`#2b2d31`);
        const embed2 = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Updates Ping Role** \nIf you want to be notified whenever there are updates to the server, please click the button to be given the <@&${updatesRoleId}> Role. Just press the button again if you want to remove the role.`)
            .setColor(`#2b2d31`);
        const row = new ActionRowBuilder().setComponents(
            new ButtonBuilder()
                .setCustomId("updatesrole")
                .setLabel("Updates Ping")
                .setEmoji("<:emoji_analytics:1043140083462717490>")
                .setStyle(ButtonStyle.Secondary)
        );

        await interaction.reply({
            embeds: [embed, embed2],
            components: [row],
            ephemeral: true
        });
    },
};
