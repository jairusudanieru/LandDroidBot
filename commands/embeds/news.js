const {
   EmbedBuilder,
   PermissionFlagsBits,
   SlashCommandBuilder,
} = require("discord.js");

module.exports = {
   data: new SlashCommandBuilder()
      .setName("news")
      .setDescription("The News Embed")
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
      .setDMPermission(false)
      .addStringOption(option =>
         option.setName('title')
            .setDescription("The Title of the news")
            .setRequired(true))
      .addStringOption(option =>
         option.setName('description')
            .setDescription("The contents of the news")
            .setRequired(true))
      .addAttachmentOption(option =>
         option.setName('image')
            .setDescription("The image of the news")
            .setRequired(true)),
   async execute(interaction) {
      const title = interaction.options.getString('title');
      var description = interaction.options.getString('description');
      description = description.replaceAll("\\n", "\n");
      const image = interaction.options.getAttachment('image');
      const embed = new EmbedBuilder()
         .setDescription(`<:emoji_dot:1044083172784218132>**${title}** \n${description}`)
         .setImage(image.url)
         .setColor(`#2b2d31`);

      try {
         await interaction.channel.send({
            content: `<@&1112768906684268744>`,
            embeds: [embed]
         });
         await interaction.deferReply();
         await interaction.deleteReply();
      } catch (error) {
         await interaction.reply({
            content: "Sorry, something went wrong. Please report this to the administrator.",
            ephemeral: true,
         });
      }
   }
}