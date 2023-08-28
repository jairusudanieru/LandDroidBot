const {
   ActionRowBuilder,
   ButtonBuilder,
   ButtonStyle,
   EmbedBuilder,
} = require("discord.js");

module.exports = {
   name: "form",
   description: "The Form Embed",
   async execute(interaction) {
      const embed = new EmbedBuilder()
         .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1144985753869373551/minecraftform.png")
         .setColor("#2b2d31");
      const embed2 = new EmbedBuilder()
         .setDescription("**<:emoji_dot:1044083172784218132>Looking for Players** \nWe're looking for awesome players just like you! Join our server and get ready for some amazing adventures. Whether you love building cool stuff, figuring out tricky redstone contraptions, or going on exciting adventures, our server is a great place for you. We have a friendly community where you can show off your creativity and make new friends. So, come join us and let's have a blast exploring and building awesome things together. \n\n**<:emoji_dot:1044083172784218132>Application Form** \nTo join our Minecraft server, please read the Server Rules and complete the application form. We'll review your application within a few days and let you know if you're accepted.")
         .setColor("#2b2d31");
      const row = new ActionRowBuilder().addComponents(
         new ButtonBuilder()
            .setLabel("Server Rules")
            .setCustomId("pandesalrules")
            .setEmoji("<:emoji_rules:1005004300763811862>")
            .setStyle(ButtonStyle.Secondary),
         new ButtonBuilder()
            .setLabel("Short Tutorial")
            .setCustomId("tutorial")
            .setEmoji("<:emoji_info:1145659441774067742>")
            .setStyle(ButtonStyle.Secondary),
         new ButtonBuilder()
            .setLabel("Application Form")
            .setCustomId("forms")
            .setEmoji("<:emoji_forms:1006209265008123914>")
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(true)
      );

      try {
         await interaction.channel.send({
            embeds: [embed, embed2],
            components: [row],
         });
         await interaction.deferReply();
         await interaction.deleteReply();
      } catch (error) {
         await interaction.reply({
            content: "Sorry, something went wrong. Please report this to the administrator.",
            ephemeral: true,
         });
      }
   },
}