const { EmbedBuilder, PermissionFlagsBits, SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("memberinfo")
		.setDescription("Get the info of the selected user.")
		.setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands)
		.setDMPermission(false)
		.addUserOption((option) => option.setName("user").setDescription("The user's info to show").setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser("user");
		const member = interaction.guild.members.cache.get(user.id);
		const joinedDate = `<t:${Math.floor(member.joinedTimestamp / 1000)}:D>`;
		const creationDate = `<t:${Math.floor(user.createdTimestamp / 1000)}:D>`;
		const embed = new EmbedBuilder()
			.setDescription(`<:emoji_dot:1044083172784218132>**Username:** ${user.tag} \n<:emoji_dot:1044083172784218132>**Nickname:** ${member.displayName} \n<:emoji_dot:1044083172784218132>**User ID:** ${user.id} \n<:emoji_dot:1044083172784218132>**Joined at:** ${joinedDate} \n<:emoji_dot:1044083172784218132>**Created at:** ${creationDate}`)
			.setThumbnail(`${member.displayAvatarURL({ dynamic: true })}`)
			.setColor(`#2a2c31`);

		try {
			await interaction.reply({
				embeds: [embed],
			});
		} catch (error) {
			await interaction.reply({
				content: "Sorry, something went wrong. Please report this to the administrator.",
				ephemeral: true,
			});
		}
	},
};
