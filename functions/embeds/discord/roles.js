const { EmbedBuilder } = require("discord.js");

module.exports = {
   name: "roles",
   description: "The Roles Embed",
   async execute(interaction) {
      const embed = new EmbedBuilder()
         .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1112753352309231750/rolesinfo.png")
         .setColor(`#2b2d31`);
      const embed2 = new EmbedBuilder()
         .setDescription("<:emoji_dot:1044083172784218132>**Server Roles Information** \nWhat are the roles on the server, what do they do and how do you get them? \n\n<@&937810197123072060> \nThese bots are specifically designed to bring fun, efficiency, and added functionality to our community. From organizing events, managing roles, to providing useful information, our custom bots have got you covered. \n\n<@&923040228657209364> \nOur dedicated team of Discord Moderators, committed to maintaining a safe and enjoyable environment for everyone in our community. Our moderators play a crucial role in upholding the server's rules, fostering positive interactions, and ensuring that discussions remain respectful and inclusive.")
         .setColor(`#2b2d31`);
      const embed3 = new EmbedBuilder()
         .setDescription("<@&987331184415629402> \nIn addition to our custom bots, we have a collection of other helpful Discord bots that enrich your experience within our community. These bots are carefully selected to provide a wide range of functionalities, from music and entertainment to utility and moderation. \n\n<@&972887345697284227> \nThey are the supporters of Jairusu's Facebook page. You can obtain this role by becoming a Facebook supporter. If Jairusu's YouTube Channel offers a membership, you can also obtain the role there by becoming a member.")
         .setColor(`#2b2d31`);
      const embed4 = new EmbedBuilder()
         .setDescription("<@&925997885957500928> \nThese incredible individuals play a vital role in taking our community to new heights and making it even more enjoyable for everyone. Server Boosters are those generous souls who use Discord Nitro to boost our server. Their support allows us to unlock fantastic perks and features, creating a more vibrant and engaging space for all members. \n\n<@&923042163808407622> \nThey are the members who play on the Minecraft Server called PandesalSMP. They have access to PandesalSMP Channels and the Minecraft Server. This role can only be obtained by filling out the Minecraft form.")
         .setColor(`#2b2d31`);
      const embed5 = new EmbedBuilder()
         .setDescription("<:emoji_dot:1044083172784218132>**Content Creators Role** \n<@&972432001179222036> actively make new contents for their followers. They are Youtubers, Facebook Streamers, Twitch Streamers, and so on. This role can only be obtained if you meet the requirements for Content Creators. \n\n<:emoji_dot:1044083172784218132>**How to get the Content Creator Role?** \nYou must be actively streaming, uploading videos or posting on your page or channel. Share the link of your page or channel in the <#923129486596272140> channel if possible.")
         .setColor(`#2b2d31`);

      try {
         await interaction.channel.send({
            embeds: [embed, embed2, embed3, embed4, embed5]
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