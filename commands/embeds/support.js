const {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder,
	PermissionFlagsBits,
	SlashCommandBuilder,
} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("support")
		.setDescription("The Support Embed")
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.setDMPermission(false),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1112753349578735736/createtickets.png")
			.setColor(`#2b2d31`);
		const embed2 = new EmbedBuilder()
			.setDescription(`**<:emoji_dot:1044083172784218132>Create Support Ticket** \nIf you need help, have a problem you want to solve, or just want to talk to our friendly support team, you've come to the right spot! We have a simple and effective ticket system in place to ensure that your questions and concerns get the attention they deserve.`)
			.setColor(`#2b2d31`);
		const row = new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setLabel("Create a Support Ticket")
				.setCustomId("ticketcreate")
				.setEmoji("<:emoji_personheadphones:1012423827499778209>")
				.setStyle(ButtonStyle.Secondary)
		);

		try {
			await interaction.channel.send({
				embeds: [embed, embed2],
				components: [row],
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
};
