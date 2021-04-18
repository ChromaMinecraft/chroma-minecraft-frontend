import { FaDiscord, FaPlay, FaPoll, FaAward, FaDonate } from "react-icons/fa";

export const LIST_URL = {
  DONATE: "https://discord.gg/hDrwCsfWqq",
  STATUS: "https://api.mcsrvstat.us/2/mc.chroma-gaming.xyz",
  SERVER: "http://discord.chroma-gaming.xyz",
  VOTE: "https://minecraft-mp.com/server/268676/vote/",
  LEADERBOARD:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWSqDNAbqLY2t3pVX-nFeA3604PtzZMvelCeRdZqx4cVnVNQlXaFL66yJ3ajld4oTAd6CUHX_UKqGh/pubchart?oid=25596175&amp;format=interactive",
};

export const ICONS = [
  {
    text: "Discord",
    id: "discord",
    url: LIST_URL.SERVER,
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
    url: "#",
    target: "_self",
    key: "link-introduction-play",
    content: <FaPlay />,
    events: {},
  },
  {
    text: "Vote",
    id: "vote",
    url: LIST_URL.VOTE,
    target: "_blank",
    key: "link-introduction-vote",
    content: <FaPoll />,
    events: {},
  },
  {
    text: "Wiki",
    id: "vote-reward",
    url: "#",
    target: "_self",
    key: "link-introduction-vote-reward",
    content: <FaAward />,
    events: {},
  },
];
