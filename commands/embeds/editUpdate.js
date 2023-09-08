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
         option.setName('message')
            .setDescription("The messageId of the update")
            .setRequired(true))
      .addStringOption(option =>
         option.setName('contents')
            .setDescription("The contents of the update"))
      .addAttachmentOption(option =>
         option.setName('image')
            .setDescription("The image of the update")),
   async execute(interaction) {
      var contents = interaction.options?.getString('contents');
      if (contents != null) contents = contents.replaceAll("\\n", "\n");
      const messageId = interaction.options.getString('message');
      const image = interaction.options?.getAttachment('image');
      var embed = new EmbedBuilder()

      try {
         const message = await interaction.channel.messages.fetch(messageId);
         const embedImage = await message.embeds[0]?.image.url;
         const embedContent = await message.embeds[0]?.description;
         if (image == null && contents != null) {
            embed = new EmbedBuilder()
               .setDescription(contents)
               .setImage(embedImage)
               .setColor(`#2b2d31`);
         } else if (image != null && contents == null) {
            embed = new EmbedBuilder()
               .setDescription(embedContent)
               .setImage(image.url)
               .setColor(`#2b2d31`);
         } else {
            embed = new EmbedBuilder()
               .setDescription(contents)
               .setImage(image.url)
               .setColor(`#2b2d31`);
         }
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