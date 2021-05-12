import { FaDiscord, FaPlay, FaPoll, FaAward, FaDonate } from 'react-icons/fa';

export const LIST_URL = {
  STATUS: 'https://api.mcsrvstat.us/2/mc.chroma-gaming.xyz',
  DISCORD: 'https://discord.chroma-gaming.xyz',
  VOTE: 'https://minecraft-mp.com/server/268676/vote/',
  WIKI: '/wiki',
};

export const ICONS = [
  {
    text: 'Discord',
    id: 'discord',
    url: LIST_URL.DISCORD,
    target: '_blank',
    key: 'link-introduction-discord',
    content: <FaDiscord />,
    events: {},
  },
  {
    text: 'Donasi',
    id: 'donate',
    url: '#',
    target: '_blank',
    key: 'link-introduction-donate',
    content: <FaDonate />,
    events: {},
  },
  {
    text: 'Play',
    id: 'play',
    url: '#',
    target: '_self',
    key: 'link-introduction-play',
    content: <FaPlay />,
    events: {},
  },
  {
    text: 'Vote',
    id: 'vote',
    url: LIST_URL.VOTE,
    target: '_blank',
    key: 'link-introduction-vote',
    content: <FaPoll />,
    events: {},
  },
  {
    text: 'Wiki',
    id: 'wiki',
    url: LIST_URL.WIKI,
    target: '_blank',
    key: 'link-introduction-vote-reward',
    content: <FaAward />,
    events: {},
  },
];
