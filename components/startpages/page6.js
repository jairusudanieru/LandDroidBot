const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: "page6",
  },
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1112753344667205642/boostingperks.png")
      .setColor(`#2a2c31`);
    const embed2 = new EmbedBuilder()
      .setDescription("<:emoji_dot:1044083172784218132>**Discord Server Boost** \nBoosting our Discord server not only comes with exclusive perks but also helps our community grow and become even better. By boosting, you'll enjoy special benefits while actively contributing to the overall enhancement of our server. Together, we can create an extraordinary experience for all our members. \n\n<:emoji_dot:1044083172784218132>**Server Boosting Perks** \n⇀ Server booster role given to you by Discord \n⇀ Boost icon in the side of your Display Name \n⇀ Custom server role (name must be appropriate) \n⇀ Shorter cooldown for Land Droid's commands/buttons with cooldown")
      .setColor(`#2a2c31`);

    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId("page5")
        .setLabel("Previous Page")
        .setEmoji("<:emoji_previous:1005026535394250782>")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("page7")
        .setLabel("Next Page")
        .setEmoji("<:emoji_next:1005026537789202452>")
        .setStyle(ButtonStyle.Secondary)
    );

    await interaction.update({
      content: "",
      embeds: [embed, embed2],
      components: [row],
      ephemeral: true,
    });
  },
};
