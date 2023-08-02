const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: "page7",
  },
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1112753367295467570/hooray.png")
      .setColor(`#2a2c31`);
    const embed2 = new EmbedBuilder()
      .setDescription("<:emoji_dot:1044083172784218132>**Hooray... you made it!** \nAgain, welcome to the server! Check <id:customize> to customize your channels and roles, and how about sending a message in the text channels and introduce yourself?")
      .setColor(`#2a2c31`);

    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId("page6")
        .setLabel("Previous Page")
        .setEmoji("<:emoji_previous:1005026535394250782>")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("disabled")
        .setLabel("Previous Page")
        .setEmoji("<:emoji_next:1005026537789202452>")
        .setDisabled(true)
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
