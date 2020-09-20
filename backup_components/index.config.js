import { FaDiscord, FaPlay, FaPoll, FaAward } from "react-icons/fa";
import * as copy from "copy-to-clipboard";

export const icons = [
  {
    text: "Discord",
    id: "discord",
    url: "http://discord.chroma-gaming.xyz",
    target: "_blank",
    key: "link-introduction-discord",
    content: <FaDiscord />,
    events: {
      onClick: (e, url) => {}
    }
  },
  {
    text: "Play",
    id: "play",
    url: "mc.chroma-gaming.xyz",
    target: "_self",
    key: "link-introduction-play",
    content: <FaPlay />,
    events: {
      onClick: (e, url) => {
        e.preventDefault();
        const isCopied = copy(url);
        if (isCopied) alert("Link telah berhasil dicopy");
      }
    }
  },
  {
    text: "Vote",
    id: "vote",
    url: "https://minecraft-mp.com/server/268676/vote/",
    target: "_blank",
    key: "link-introduction-vote",
    content: <FaPoll />,
    events: {
      onClick: (e, url) => {}
    }
  },
  {
    text: "Vote Reward",
    id: "vote-reward",
    url: "#",
    target: "_self",
    key: "link-introduction-vote-reward",
    content: <FaAward />,
    events: {
      onClick: (e, url) => {}
    }
  }
];

export const contents = {
  title: "Chroma Minecraft",
  subTitle: [
    "Server minecraft survival yang mendukung berbagai platform (Java / Bedrock / Pocket Edition).",
    "Temukan keseruan sensasi berpetualang di dunia minecraft yang penuh dengan misteri, harta karun, village, dan lainnya."
  ]
};

const reward = [
  "Diamond x1",
  "Random Item",
  "Emerald x3",
  "Random Enchanted Book x1",
  "Diamond x3",
  "Random Item",
  "Diamond x5"
];

let rewardDay = [];
let day = 1;
for (let i = 0; i < 32; i++) {
  if (day > 7) {
    day = 1;
  }
  rewardDay.push({ jumlahVote: i + 1, reward: reward[day - 1] });
  day++;
}

export const tableRow = rewardDay;
