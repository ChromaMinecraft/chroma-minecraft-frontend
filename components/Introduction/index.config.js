import { FaDiscord, FaPlay, FaPoll, FaAward, FaDonate } from "react-icons/fa";

export const URL_SERVER = 'https://api.mcsrvstat.us/2/mc.chroma-gaming.xyz';

export const icons = [
  {
    text: "Discord",
    id: "discord",
    url: "http://discord.chroma-gaming.xyz",
    target: "_blank",
    key: "link-introduction-discord",
    content: <FaDiscord />,
    events: {},
  },
  {
    text: "Donate",
    id: "donate",
    url: "#",
    target: "_blank",
    key: "link-introduction-donate",
    content: <FaDonate />,
    events: {},
  },
  {
    text: "Play",
    id: "play",
    url: "mc.chroma-gaming.xyz",
    target: "_self",
    key: "link-introduction-play",
    content: <FaPlay />,
    events: {},
  },
  {
    text: "Vote",
    id: "vote",
    url: "https://minecraft-mp.com/server/268676/vote/",
    target: "_blank",
    key: "link-introduction-vote",
    content: <FaPoll />,
    events: {},
  },
  {
    text: "Reward",
    id: "vote-reward",
    url: "#",
    target: "_self",
    key: "link-introduction-vote-reward",
    content: <FaAward />,
    events: {},
  },
];

export const contents = {
  title: "Chroma Minecraft",
  subTitle: [
    "Server minecraft survival yang mendukung berbagai platform (Java / Bedrock / Pocket Edition).",
    "Temukan keseruan sensasi berpetualang di dunia minecraft yang penuh dengan misteri, harta karun, village, dan lainnya."
  ],
  count: {
    player: "Pemain ",
    title: "sedang bermain.",
    subInfo: "(Arahkan mouse ke jumlah pemain untuk melihat daftar pemain)",
  },
};
