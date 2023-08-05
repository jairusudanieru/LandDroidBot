const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
  EmbedBuilder,
} = require("discord.js");
const { applicationChannel } = require("../../jsonFiles/pandesal.json");

module.exports = {
  data: {
    name: `pandesalform`,
  },
  async execute(interaction, client) {
    const member = await interaction.guild.members.fetch(interaction.user.id);
    const channel = await client.channels.cache.get(interaction.channel.id);
    const formChannel = await client.channels.cache.get(applicationChannel);
    const answer1 = interaction.fields.getTextInputValue("1");
    const answer2 = interaction.fields.getTextInputValue("2");
    const answer3 = interaction.fields.getTextInputValue("3");
    const answer4 = interaction.fields.getTextInputValue("4");
    const answer5 = interaction.fields.getTextInputValue("5");

    const embed = new EmbedBuilder()
      .setDescription(`<:emoji_dot:1044083172784218132>**Minecraft Application Form** \nForm submitted by <@${interaction.user.id}> \n\n<:emoji_dot:1044083172784218132>**Main Information** \nMinecraft Username: "${answer1}" \nMinecraft Edtion: "${answer3}" \nPremium or Cracked: "${answer4}" \nApplicant Current Age: "${answer2}" \n\n<:emoji_dot:1044083172784218132>**Why Should You Accept Me** \n"${answer5}"`)
      .setThumbnail(client.user.avatarURL())
      .setFooter({ text: `${interaction.user.id}` })
      .setTimestamp()
      .setColor("#2f3136");
    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId("whitelistadd")
        .setLabel("Add to Whitelist")
        .setEmoji("<:emoji_circleplus:1012348409769902080>")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("whitelistdeny")
        .setLabel("Reject Application")
        .setEmoji("<:emoji_circlecross:1067128052615753748>")
        .setStyle(ButtonStyle.Secondary)
    );

    try {
      const thread = await channel.threads.create({
        name: `form-${(member.displayName).toLowerCase()}`,
        type: ChannelType.PrivateThread,
        autoArchiveDuration: 60,
        reason: 'Discussion',
      });

      const embed2 = new EmbedBuilder()
        .setAuthor({ name: interaction.user.id, iconURL: interaction.user.avatarURL() })
        .setDescription(`<:emoji_dot:1044083172784218132>**Minecraft Application Form** \nForm submitted by <@${interaction.user.id}> \n\n<:emoji_dot:1044083172784218132>**Main Information** \nMinecraft Username: "${answer1}" \nMinecraft Edtion: "${answer3}" \nPremium or Cracked: "${answer4}" \nApplicant Current Age: "${answer2}" \n\n<:emoji_dot:1044083172784218132>**Why Should You Accept Me** \n"${answer5}"`)
        .setThumbnail(client.user.avatarURL())
        .setFooter({ text: thread.id })
        .setTimestamp()
        .setColor("#2f3136");

      await interaction.reply({
        content: `Application Form has been submitted! <#${thread.id}>`,
        ephemeral: true,
      });
      await formChannel.send({
        embeds: [embed2],
        components: [row]
      })
      await thread.members.add(interaction.user.id);
      await thread.send({
        embeds: [embed],
      });
    } catch (error) {
      await console.log(error)
      await interaction.reply({
        content: "Sorry, something went wrong. Please report this to the administrator.",
        ephemeral: true,
      });
    }
  },
};
