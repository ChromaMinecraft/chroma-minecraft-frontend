export const reward = [
  "Diamond x1",
  "Random Item",
  "Emerald x3",
  "Enchanted Book x1",
  "Diamond x3",
  "Random Item",
  "Diamond x5"
];

export const rewardByRarity = {
  A: {
    type: 'Common',
    rate: '34.667%',
    list: [
      { name: 'Cobblestone', amount: 50 },
      { name: 'Coal', amount: 20 },
      { name: 'Wheat', amount: 20 },
      { name: 'Clay', amount: 20 },
      { name: 'Spruce Log', amount: 20 },
      { name: 'Jungle Log', amount: 20 },
      { name: 'Cooked Salmon', amount: 10 },
      { name: 'Steak', amount: 10 },
    ]
  },
  B: {
    type: 'Uncommon',
    rate: '28,667%',
    list: [
      { name: 'Pufferfish', amount: 5 },
      { name: 'TNT', amount: 5 },
      { name: 'Iron Ingot', amount: 5 },
      { name: 'Iron Ingot', amount: 10 },
      { name: 'Gold Ingot', amount: 10 },
      { name: 'Iron Horse Armour', amount: 1 },
      { name: 'Book', amount: 10 },
      { name: 'Bee Nest', amount: 1 },
      { name: 'Melon Seeds', amount: 5 },
      { name: 'Fermented Spider Eye', amount: 1 },
    ]
  },
  C: {
    type: 'Rare',
    rate: '21,333%',
    list: [
      { name: 'Obsidian', amount: 5 },
      { name: 'Honey Block', amount: 1 },
      { name: 'Diamond', amount: 3 },
      { name: 'Emerald', amount: 5 },
      { name: 'Golden Horse Armoud', amount: 1 },
      { name: 'Bottle o\' Enchanting', amount: 3 },
      { name: 'Splash Potion of Weakness', amount: 1 },
    ]
  },
  D: {
    type: 'Epic',
    rate: '10%',
    list: [
      { name: 'Mycelium', amount: 5 },
      { name: 'Diamond', amount: 5 },
      { name: 'Diamond', amount: 10 },
      { name: 'Emerald', amount: 10 },
      { name: 'Golden Apple', amount: 1 },
      { name: 'Crying Obsidian', amount: 2 },
      { name: 'Bucket of Tropical Fish', amount: 1 },
      { name: 'Diamond Horse Armour', amount: 1 },
      { name: 'Ender Eye', amount: 3 },
      { name: 'Saddle', amount: 1 },
      { name: 'Flower Banner Pattern', amount: 1 },
      { name: 'Creeper Banner Pattern', amount: 1 },
      { name: 'Piglin Banner Pattern', amount: 1 },
    ]
  },
  E: {
    type: 'Legendary',
    rate: '5.333%',
    list: [
      { name: 'Enchanted Golden Apple', amount: 1 },
      { name: 'Heart of the Sea', amount: 1 },
      { name: 'Ancient Debris', amount: 1 },
      { name: 'Shulker Shell', amount: 2 },
      { name: 'Totem of Undying', amount: 1 },
      { name: 'Elytra', amount: 1 },
      { name: 'Music Disc No 11', amount: 1 },
      { name: 'Name Tag', amount: 1 },
      { name: 'Sea Lantern', amount: 2 },
      { name: 'Ghast Tear', amount: 1 },
    ]
  }
};