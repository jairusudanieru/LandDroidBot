const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChannelType,
    PermissionFlagsBits,
} = require("discord.js");
const { guildId } = require("../../jsonFiles/config.json");
const {
    voiceCategory,
    createVoiceChannel,
} = require("../../jsonFiles/voice.json")
const fs = require("fs");

module.exports = {
    name: "voiceStateUpdate",
    async execute(oldState, newState) {
        if (newState.guild.id != guildId) return;
        const oldChannel = oldState.channel;
        const newChannel = newState.channel;
        const row = new ActionRowBuilder().setComponents(
            new ButtonBuilder()
                .setCustomId("userlimit")
                .setLabel("User Limit")
                .setEmoji("<:emoji_person:1005010359024877598>")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("privatevc")
                .setLabel("Private VC")
                .setEmoji("<:emoji_lock:1081997893189238864>")
                .setStyle(ButtonStyle.Secondary)
        );

        if (newState.channelId == createVoiceChannel) {
            const vcChannel = await newState.guild.channels.create({
                name: `${newState.member.displayName}'s VC`,
                type: ChannelType.GuildVoice,
                parent: `${voiceCategory}`,
                permissionOverwrites: [
                    {
                        id: newState.guild.id,
                        allow: [
                            PermissionFlagsBits.ViewChannel,
                            PermissionFlagsBits.SendMessages,
                            PermissionFlagsBits.EmbedLinks,
                            PermissionFlagsBits.AttachFiles,
                            PermissionFlagsBits.AddReactions,
                            PermissionFlagsBits.UseExternalEmojis,
                            PermissionFlagsBits.ReadMessageHistory,
                            PermissionFlagsBits.Connect,
                            PermissionFlagsBits.Speak,
                            PermissionFlagsBits.Stream,
                            PermissionFlagsBits.UseVAD,
                        ],
                    },
                ],
            });
            await newState.setChannel(vcChannel);
            await vcChannel.send({
                content: "Manage your Voice Channel here",
                components: [row]
            });
        }

        const path = require("path");
        const values = fs.readFileSync(path.resolve(__dirname, "../../jsonFiles/voice.json"));
        const list = JSON.parse(values);
        const voiceChannels = list.mainVoiceChannels;

        if (oldState.channel?.type == ChannelType.GuildStageVoice) return;

        if (!voiceChannels.includes(newState.channelId) && !oldChannel) {
            await newState.channel.permissionOverwrites.create(newState.member.id, {
                ViewChannel: true,
                SendMessages: true,
                EmbedLinks: true,
                AttachFiles: true,
                AddReactions: true,
                UseExternalEmojis: true,
                ReadMessageHistory: true,
                Connect: true,
                Speak: true,
                Stream: true,
                UseVAD: true,
            })
        }

        if (!voiceChannels.includes(oldState.channelId)) {
            if (oldChannel != null && oldChannel.members.size < 1) {
                if (!newChannel || oldChannel.id != newChannel.id) {
                    await oldState.channel.delete();
                }
            } else if (oldChannel != null && oldChannel.members.size >= 1) {
                await oldState.channel.permissionOverwrites.delete(oldState.member.id);
            }
        }
    },
};