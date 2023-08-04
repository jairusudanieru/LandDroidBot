const { EmbedBuilder } = require("discord.js");

module.exports = {
   name: "bot",
   description: "info command bot subcommand",
   async execute(interaction) {
      const guild = interaction.guild;
      const guildIcon = guild.iconURL({ dynamic: true });
      const releasedDate = `<t:${Math.floor(guild.createdTimestamp / 1000)}:D>`
      const embed = new EmbedBuilder()
         .setDescription(`<:emoji_dot:1044083172784218132>**Server Name:** ${guild.name} \n<:emoji_dot:1044083172784218132>**Total Members:** ${guild.memberCount} Members \n<:emoji_dot:1044083172784218132>**Nitro Boosts:** ${guild.premiumSubscriptionCount} Boosts \n<:emoji_dot:1044083172784218132>**Server Level:** Level ${guild.premiumTier} \n<:emoji_dot:1044083172784218132>**Date Released:** ${releasedDate}`)
         .setThumbnail(guildIcon)
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
   },
}