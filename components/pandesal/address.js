const { EmbedBuilder } = require("discord.js");

module.exports = {
    data: {
        name: "address",
    },
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1112753352971915384/serveraddress.png`)
            .setColor(`#2b2d31`);
        const embed2 = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Minecraft Java Edition** \n<:reply_continue_1:1005018627797434449> Server Address: pandesalsmp.mcph.co \n<:reply_continue_3:1005018623716372520> Custom Address: play.pandesalsmp.cloud \n\n<:emoji_dot:1044083172784218132>**Minecraft Bedrock & PE** \n<:reply_continue_1:1005018627797434449> Server Address: play.pandesalsmp.cloud \n<:reply_continue_3:1005018623716372520> Server Port: 23504 \n\n<:emoji_dot:1044083172784218132>**Minecraft Server Hosting** \nIf you want to order a Minecraft Server in McProHosting, you can use the link https://mcprohosting.com/order?aff=497 and use the code THUGDOG for a 25% discount!`)
            .setColor(`#2b2d31`);

        await interaction.reply({
            embeds: [embed, embed2],
            ephemeral: true,
        });
    },
};
