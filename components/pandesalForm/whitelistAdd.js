const {
   ActionRowBuilder,
   ButtonBuilder,
   ButtonStyle,
} = require("discord.js");
const {
   smpRoleId,
   minecraftChannel,
} = require("../../jsonFiles/pandesal.json");

module.exports = {
   data: {
      name: "whitelistadd",
   },
   async execute(interaction, client) {
      const userId = await interaction.message.embeds[0].author.name;
      const channel = await client.channels.cache.get(minecraftChannel);
      const threadId = await interaction.message.embeds[0].footer.text;
      const thread = await client.channels.cache.get(threadId);
      const player = await interaction.guild.members.fetch(userId);

      const row = new ActionRowBuilder().setComponents(
         new ButtonBuilder()
            .setCustomId("whitelistadd")
            .setLabel("Added to Whitelist")
            .setEmoji("<:emoji_circleplus:1012348409769902080>")
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(true)
      );

      try {
         await player.roles.add(smpRoleId);
         await channel.send({
            content: `Welcome to PandesalSMP, <@${userId}>!`
         });
         await interaction.update({
            components: [row]
         });
         await thread.delete();
      } catch (error) {
         await console.log(error)
         await interaction.reply({
            content: "Sorry, something went wrong. Please report this to the administrator.",
            ephemeral: true,
         });
      }
   },
};