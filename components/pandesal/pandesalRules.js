const { EmbedBuilder } = require("discord.js");

module.exports = {
    data: {
        name: "pandesalrules",
    },
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1144985830016950403/serverrules.png`)
            .setColor(`#2b2d31`);
        const embed2 = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Rule #1 - No griefing and Stealing** \nRespect other players' builds and creations. Don't intentionally destroy or damage them. Honor the personal belongings of fellow players. Taking items without permission is not allowed. \n\n<:emoji_dot:1044083172784218132>**Rule #2 - Be Kind and Respectful** \nTreat others with kindness and respect. No bullying, harassment, or offensive language. Obtain consent from other players before engaging in player-versus-player combat. Respect their decision. \n\n<:emoji_dot:1044083172784218132>**Rule #3 - No Cheating or Hacking** \nPlay fair and square. The use of mods, cheats, or hacks that give unfair advantages is strictly prohibited. \n\n<:emoji_dot:1044083172784218132>**Rule #4 - No Excessive Redstone Lags** \nAvoid creating redstone contraptions that cause significant server lag, as it can disrupt gameplay for others. \n\n<:emoji_dot:1044083172784218132>**Rule #5 - Have Fun!** \nAbove all, enjoy yourself and make the most of your time on the server. Embrace the spirit of cooperation and creativity in the Minecraft SMP community.`)
            .setColor(`#2b2d31`);

        await interaction.reply({
            embeds: [embed, embed2],
            ephemeral: true,
        });
    },
};
