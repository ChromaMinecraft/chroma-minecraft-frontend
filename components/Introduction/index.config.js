import * as copy from "copy-to-clipboard";

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
  "Enchanted Book x1",
  "Diamond x3",
  "Random Item",
  "Diamond x5"
];

let rewardDay = [];
let day = 1;
for (let i = 0; i < 31; i++) {
  if (day > 7) {
    day = 1;
  }
  rewardDay.push({ jumlahVote: i + 1, reward: reward[day - 1] });
  day++;
}

export const tableRow = rewardDay;
