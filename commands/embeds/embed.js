const {
   PermissionFlagsBits,
   SlashCommandBuilder,
} = require("discord.js");
const boosting = require("../../functions/embeds/discord/boosting.js");
const information = require("../../functions/embeds/discord/information.js");
const roles = require("../../functions/embeds/discord/roles.js");
const rules = require("../../functions/embeds/discord/rules.js");
const support = require("../../functions/embeds/discord/support.js");

module.exports = {
   data: new SlashCommandBuilder()
      .setName("embed")
      .setDescription("The embeds of this bot")
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
      .addStringOption(option =>
         option.setName('embed')
            .setDescription('The embed you want to send')
            .setRequired(true)
            .addChoices(
               { name: 'boosting', value: 'boosting' },
               { name: 'information', value: 'information' },
               { name: 'roles', value: 'roles' },
               { name: 'rules', value: 'rules' },
               { name: 'support', value: 'support' },
            ))
      .setDMPermission(false),
   async execute(interaction) {
      const embed = interaction.options.getString('embed');
      switch (embed) {
         case 'boosting':
            await boosting.execute(interaction);
            break;
         case 'information':
            await information.execute(interaction);
            break;
         case 'roles':
            await roles.execute(interaction);
            break;
         case 'rules':
            await rules.execute(interaction);
            break;
         case 'support':
            await support.execute(interaction);
            break;
      }
   }
}