const { ChannelType } = require('discord.js');
const { modRoleId } = require('../../jsonFiles/guild.json');

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.author.bot || message.channel.type == ChannelType.DM) return;
        if (message.content.includes(`<@${client.user.id}>`)) {
            message.reply('You can use `/` to see the commands.');
        } else if (message.mentions.roles.has(modRoleId)) {
            message.reply('If you need help from the moderators, please create a ticket in the <#1006063058885550200> channel.')
        }
    }
}
