const {
   EmbedBuilder,
   PermissionFlagsBits,
   SlashCommandBuilder,
} = require("discord.js");
const { updatesRoleId } = require("../../jsonFiles/pandesal.json");

module.exports = {
   data: new SlashCommandBuilder()
      .setName("updates")
      .setDescription("The Updates Embed")
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
      .setDMPermission(false)
      .addStringOption(option =>
         option.setName('contents')
            .setDescription("The contents of the update")
            .setRequired(true))
      .addStringOption(option =>
         option.setName('thread')
            .setDescription("The title of the thread")
            .setRequired(true))
      .addAttachmentOption(option =>
         option.setName('image')
            .setDescription("The image of the update")
            .setRequired(true)),
   async execute(interaction) {
      const title = interaction.options.getString('thread');
      var contents = interaction.options.getString('contents');
      contents = contents.replaceAll("\\n", "\n");
      const image = interaction.options.getAttachment('image');
      const embed = new EmbedBuilder()
         .setDescription(contents)
         .setImage(image.url)
         .setColor(`#2b2d31`);

      try {
         const message = await interaction.channel.send({
            content: `<@&${updatesRoleId}>`,
            embeds: [embed]
         });
         await message.startThread({
            name: title,
            autoArchiveDuration: 60,
            reason: 'New Update!',
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