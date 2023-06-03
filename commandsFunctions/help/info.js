const { EmbedBuilder } = require("discord.js");

module.exports = {
   name: "info",
   description: "help commands info subcommand",
   async execute(interaction) {
      const embed = new EmbedBuilder()
         .setDescription(`<:emoji_dot:1044083172784218132>**Info Command**\nThis command displays the information about the given subject.`)
         .setColor(`#2a2c31`);

      await interaction.reply({
         embeds: [embed]
      });
   }
}