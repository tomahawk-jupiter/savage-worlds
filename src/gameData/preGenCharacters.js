const hudson = {
  characterInfo: {
    name: "William Hudson",
    profession: "Colonial Marine",
    xp: 20,
    rank: "Seasoned",
  },
  background: {
    appearance: {
      age: "none",
      height: "none",
      weight: "none",
      build: "none",
      skin: "none",
      notes: "none",
    },
    personality: "none",
    backstory: "none",
  },
  attrState: {
    attributes: {
      agility: 4,
      smarts: 4,
      strength: 4,
      spirit: 4,
      vigor: 4,
    },
    availablePoints: 5,
    saved: false,
  },
  skillState: {
    skills: {
      shooting: { name: "Shooting", attribute: "Agility", score: 4 },
      fighting: { name: "Fighting", attribute: "Agility", score: 4 },
    },
    availablePoints: 15,
    saved: false,
  },
  equippedArmour: {
    head: { score: 0, type: "" },
    torso: { score: 0, type: "" },
    arms: { score: 0, type: "" },
    legs: { score: 0, type: "" },
  },
  ownedArmour: [],
  carriedWeapons: [
    {
      item: "Unarmed",
      range: "melee",
      damage: "Str",
      equipped: true,
    },
    {
      item: "Shotgun (pump)",
      range: "12/24/48",
      damage: "1-3d6",
      ap: 0,
      rof: 1,
      shots: 6,
      price: 150,
      weight: 8,
      notes: "2 hands",
      twoHanded: true,
      equipped: true,
    },
  ],
  equipment: [],
  edges: {
    array: [],
    available: 1,
  },
  hindrances: [],
  condition: {
    incapacitated: false,
    wounds: "0",
    fatigue: "0",
  },
  notes: [],
};

const preGenCharacters = [hudson];

export default preGenCharacters;
