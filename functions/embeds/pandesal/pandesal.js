const {
   ActionRowBuilder,
   ButtonBuilder,
   ButtonStyle,
   EmbedBuilder,
} = require("discord.js");

module.exports = {
   name: "pandesal",
   description: "The Pandesal Embed",
   async execute(interaction) {
      const embed = new EmbedBuilder()
         .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1144985770864681031/pandesalinfo.png")
         .setColor("#2b2d31");
      const embed2 = new EmbedBuilder()
         .setDescription("<:emoji_dot:1044083172784218132>**Welcome to Pandesal SMP** \nThis Category is for PandesalSMP members only, where you can communicate even without playing Minecraft. This is also for updates, news and announcements related to the Minecraft SMP. \n\n<:emoji_dot:1044083172784218132>**Minecraft Server Details** \n<:reply_continue_1:1005018627797434449> Cross-platform (Geyser Plugin) \n<:reply_continue_2:1005018625725452299> Whitelisted semi-vanilla server \n<:reply_continue_3:1005018623716372520> Minecraft Java Version (1.19+)")
         .setColor("#2b2d31");
      const row = new ActionRowBuilder().addComponents(
         new ButtonBuilder()
            .setCustomId("pandesalrules")
            .setLabel("Server Rules")
            .setEmoji("<:emoji_rules:1005004300763811862>")
            .setStyle(ButtonStyle.Secondary),
         new ButtonBuilder()
            .setCustomId("address")
            .setLabel("Server Address")
            .setEmoji("<:emoji_server:1043138698881019995>")
            .setStyle(ButtonStyle.Secondary),
         new ButtonBuilder()
            .setCustomId("assign")
            .setLabel("Updates Ping")
            .setEmoji("<:emoji_analytics:1043140083462717490>")
            .setStyle(ButtonStyle.Secondary)
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