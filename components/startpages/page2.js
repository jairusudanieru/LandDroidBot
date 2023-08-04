const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: "page2",
  },
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1112753352309231750/rolesinfo.png")
      .setColor(`#2b2d31`);
    const embed2 = new EmbedBuilder()
      .setDescription("<@&987331184415629402> \nIn addition to our custom bots, we have a collection of other helpful Discord bots that enrich your experience within our community. These bots are carefully selected to provide a wide range of functionalities, from music and entertainment to utility and moderation. \n\n<@&972887345697284227> \nThey are the supporters of Jairusu's Facebook page. You can obtain this role by becoming a Facebook supporter. If Jairusu's YouTube Channel offers a membership, you can also obtain the role there by becoming a member.")
      .setColor(`#2b2d31`);

    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId("page1")
        .setLabel("Previous Page")
        .setEmoji("<:emoji_previous:1005026535394250782>")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("page3")
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
