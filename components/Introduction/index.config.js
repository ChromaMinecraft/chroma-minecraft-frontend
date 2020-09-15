import { FaDiscord, FaPlay, FaPoll } from 'react-icons/fa';
import * as copy from 'copy-to-clipboard';

export const icons = [
  {
    text: 'Discord',
    id: 'discord',
    url: 'http://discord.chroma-gaming.xyz',
    target: '_blank',
    key: 'link-introduction-discord',
    content: <FaDiscord />,
    events: {
      onClick: (e, url) => { }
    },
  },
  {
    text: 'Play',
    id: 'play',
    url: 'mc.chroma-gaming.xyz',
    target: '_self',
    key: 'link-introduction-play',
    content: <FaPlay />,
    events: {
      onClick: (e, url) => {
        e.preventDefault();
        const isCopied = copy(url);
        if (isCopied) alert('Link copied to clipboard');
      }
    },
  },
  {
    text: 'Vote',
    id: 'vote',
    url: 'https://minecraft-mp.com/server/268502/vote/',
    target: '_blank',
    key: 'link-introduction-vote',
    content: <FaPoll />,
    events: {
      onClick: (e, url) => { }
    },
  },
];

export const contents = {
  title: 'Chroma Minecraft',
  subTitle: [
    'Server minecraft survival yang mendukung berbagai platform (Java / Bedrock / Pocket Edition).',
    'Temukan keseruan sensasi berpetualang di dunia minecraft yang penuh dengan misteri, harta karun, village, dan lainnya.'
  ],
};