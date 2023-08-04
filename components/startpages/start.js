const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
} = require("discord.js");

module.exports = {
    data: {
        name: "start",
    },
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1112753352309231750/rolesinfo.png`)
            .setColor(`#2b2d31`);
        const embed2 = new EmbedBuilder()
            .setDescription("<:emoji_dot:1044083172784218132>**Server Roles Information** \nWhat are the roles on the server, what do they do and how do you get them? \n\n<@&937810197123072060> \nThese bots are specifically designed to bring fun, efficiency, and added functionality to our community. From organizing events, managing roles, to providing useful information, our custom bots have got you covered. \n\n<@&923040228657209364> \nOur dedicated team of Discord Moderators, committed to maintaining a safe and enjoyable environment for everyone in our community. Our moderators play a crucial role in upholding the server's rules, fostering positive interactions, and ensuring that discussions remain respectful and inclusive.")
            .setColor(`#2b2d31`);

        const row = new ActionRowBuilder().setComponents(
            new ButtonBuilder()
                .setCustomId("disabled")
                .setLabel("Previous Page")
                .setEmoji("<:emoji_previous:1005026535394250782>")
                .setDisabled(true)
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("page2")
                .setLabel("Next Page")
                .setEmoji("<:emoji_next:1005026537789202452>")
                .setStyle(ButtonStyle.Secondary)
        );

        await interaction.reply({
            embeds: [embed, embed2],
            components: [row],
            ephemeral: true,
            fetchReply: true,
        });
    },
};
