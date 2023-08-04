const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: "page3",
  },
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1112753352309231750/rolesinfo.png")
      .setColor(`#2b2d31`);
    const embed2 = new EmbedBuilder()
      .setDescription("<@&925997885957500928> \nThese incredible individuals play a vital role in taking our community to new heights and making it even more enjoyable for everyone. Server Boosters are those generous souls who use Discord Nitro to boost our server. Their support allows us to unlock fantastic perks and features, creating a more vibrant and engaging space for all members. \n\n<@&923042163808407622> \nThey are the members who play on the Minecraft Server called PandesalSMP. They have access to PandesalSMP Channels and the Minecraft Server. This role can only be obtained by filling out the Minecraft form.")
      .setColor(`#2b2d31`);

    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId("page2")
        .setLabel("Previous Page")
        .setEmoji("<:emoji_previous:1005026535394250782>")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("page4")
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
