const initialState = {
  characterInfo: {
    name: "Add name",
    profession: "Add profession",
    xp: 0,
    rank: "Novice",
  },
  derivedStatsBoost: {
    charisma: 0,
    pace: 6,
    parry: 0,
    toughness: 0,
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
    skills: {},
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

export default initialState;
