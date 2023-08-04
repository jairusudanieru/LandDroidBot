const { EmbedBuilder } = require("discord.js");

module.exports = {
   name: "boosting",
   description: "The Boosting Embed",
   async execute(interaction) {
      const embed = new EmbedBuilder()
         .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1112753344667205642/boostingperks.png")
         .setColor(`#2b2d31`);
      const embed2 = new EmbedBuilder()
         .setDescription("<:emoji_dot:1044083172784218132>**Discord Server Boost** \nBoosting our Discord server not only comes with exclusive perks but also helps our community grow and become even better. By boosting, you'll enjoy special benefits while actively contributing to the overall enhancement of our server. Together, we can create an extraordinary experience for all our members. \n\n<:emoji_dot:1044083172784218132>**Server Boosting Perks** \n⇀ Server booster role given to you by Discord \n⇀ Boost icon in the side of your Display Name \n⇀ Custom server role (name must be appropriate) \n⇀ Shorter cooldown for Land Droid's commands/buttons with cooldown")
         .setColor(`#2b2d31`);

      try {
         await interaction.channel.send({
            embeds: [embed, embed2]
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