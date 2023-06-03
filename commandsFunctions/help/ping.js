const { EmbedBuilder } = require("discord.js");

module.exports = {
   name: "ping",
   description: "help commands ping subcommand",
   async execute(interaction) {
      const embed = new EmbedBuilder()
         .setDescription(`<:emoji_dot:1044083172784218132>**Ping Command**\nThis command displays Land Droid's Current Ping.`)
         .setColor(`#2a2c31`);

      await interaction.reply({
         embeds: [embed]
      });
   }
}