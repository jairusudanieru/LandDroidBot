const {
   EmbedBuilder,
   PermissionFlagsBits,
   SlashCommandBuilder,
} = require("discord.js");

module.exports = {
   data: new SlashCommandBuilder()
      .setName("editupdate")
      .setDescription("The Updates Embed")
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
      .setDMPermission(false)
      .addStringOption(option =>
         option.setName('contents')
            .setDescription("The contents of the update")
            .setRequired(true))
      .addAttachmentOption(option =>
         option.setName('image')
            .setDescription("The image of the update")
            .setRequired(true)),
   async execute(interaction) {
      var contents = interaction.options.getString('contents');
      contents = contents.replaceAll("\\n", "\n");
      const image = interaction.options.getAttachment('image');
      const embed = new EmbedBuilder()
         .setDescription(contents)
         .setImage(image.url)
         .setColor(`#2b2d31`);

      try {
         const message = await interaction.channel.messages.fetch("1116047030129790987")
         await message.edit({
            embeds: [embed]
         })
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