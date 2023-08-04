const {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder,
	PermissionFlagsBits,
	SlashCommandBuilder,
} = require("discord.js");
const { ownerId } = require("../../jsonFiles/config.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("information")
		.setDescription("The Information Embed")
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.setDMPermission(false),
	async execute(interaction) {
		const creationDate = `<t:${Math.floor(interaction.guild.createdTimestamp / 1000)}:D>`
		const embed = new EmbedBuilder()
			.setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1112753350971232296/information.png`)
			.setColor(`#2b2d31`);
		const embed2 = new EmbedBuilder()
			.setDescription(`<:emoji_dot:1044083172784218132>**Welcome to the Community!** \nHey there! We're thrilled to have you join our awesome community. Please take a moment to read through the rules by clicking the "Server Rules" button, and feel free to introduce yourself in the text channels. Don't hesitate to reach out to the moderators if you have any questions. Enjoy your stay! \n\n<:emoji_dot:1044083172784218132>**Community Information** \n<:reply_continue_1:1005018627797434449> Managed by: <@${ownerId}> \n<:reply_continue_3:1005018623716372520> Creation Date: ${creationDate}`)
			.setColor(`#2b2d31`);
		const row = new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setCustomId("rules")
				.setLabel("Server Rules")
				.setEmoji("<:emoji_rules:1005004300763811862>")
				.setStyle(ButtonStyle.Secondary),
			new ButtonBuilder()
				.setCustomId("start")
				.setLabel("Community Guide")
				.setEmoji("<:emoji_backpack:1005010361570820096>")
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
