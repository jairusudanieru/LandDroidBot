const {
   PermissionFlagsBits,
   SlashCommandBuilder,
} = require("discord.js");
const path = require('path');
const functionLoader = require('../../loaders/functionLoader');
const functionsFolder = path.join(__dirname, '..', '..', 'functions/embeds/discord');
const functions = functionLoader(functionsFolder);

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
      try {
         switch (embed) {
            case 'boosting':
               await functions.boosting.execute(interaction);
               break;
            case 'information':
               await functions.information.execute(interaction);
               break;
            case 'roles':
               await functions.roles.execute(interaction);
               break;
            case 'rules':
               await functions.rules.execute(interaction);
               break;
            case 'support':
               await functions.support.execute(interaction);
               break;
         }
      } catch (error) {
         console.log(error);
      }
   }
}