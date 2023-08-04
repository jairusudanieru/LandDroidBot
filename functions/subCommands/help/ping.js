const { EmbedBuilder } = require("discord.js");

module.exports = {
   name: "ping",
   description: "help commands ping subcommand",
   async execute(interaction) {
      const embed = new EmbedBuilder()
         .setDescription(`<:emoji_dot:1044083172784218132>**Ping Command**\nThis command displays Land Droid's Current Ping.`)
         .setColor(`#2b2d31`);

      try {
         await interaction.reply({
            embeds: [embed]
         });
      } catch (error) {
         await interaction.reply({
            content: "Sorry, something went wrong. Please report this to the administrator.",
            ephemeral: true,
         });
      }
   }
}