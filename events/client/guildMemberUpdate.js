
module.exports = {
    name: "guildMemberUpdate",
    async execute(oldMember, newMember) {
        const user = newMember.guild.members.cache.get(newMember.user.id);

        if (oldMember.displayName != "Jairusu" && newMember.displayName == "Jairusu") {
            await user.setNickname("Moderated Name");
        } else if (oldMember.user.username != "Jairusu" && newMember.user.username == "Jairusu") {
            await user.setNickname("Moderated Name");
        } else if (oldMember.displayName == "Moderated Name" && newMember.user.username != "Jairusu") {
            await user.setNickname(newMember.user.username);
        }
    },
};
