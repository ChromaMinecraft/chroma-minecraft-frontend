import { FaDiscord, FaPlay, FaPoll, FaAward, FaDonate } from "react-icons/fa";
import { LIST_URL } from './links';

export const icons = [
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
    text: "Reward",
    id: "vote-reward",
    url: "#",
    target: "_self",
    key: "link-introduction-vote-reward",
    content: <FaAward />,
    events: {},
  },
];
