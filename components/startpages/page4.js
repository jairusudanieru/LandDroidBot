const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: "page4",
  },
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1144985702526894181/creatorsrole.png")
      .setColor(`#2b2d31`);
    const embed2 = new EmbedBuilder()
      .setDescription("<:emoji_dot:1044083172784218132>**Content Creators Role** \n<@&972432001179222036> actively make new contents for their followers. They are Youtubers, Facebook Streamers, Twitch Streamers, and so on. This role can only be obtained if you meet the requirements for Content Creators. \n\n<:emoji_dot:1044083172784218132>**How to get the Content Creator Role?** \nYou must be actively streaming, uploading videos or posting on your page or channel. Share the link of your page or channel in the <#923129486596272140> channel if possible.")
      .setColor(`#2b2d31`);

    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId("page3")
        .setLabel("Previous Page")
        .setEmoji("<:emoji_previous:1005026535394250782>")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("page5")
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
