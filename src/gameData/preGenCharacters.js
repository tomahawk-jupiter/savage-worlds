const driver = {
  characterInfo: {
    name: "Driver",
    profession: "Driver",
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
      agility: 8,
      smarts: 6,
      strength: 6,
      spirit: 6,
      vigor: 6,
    },
    availablePoints: 0,
    saved: true,
  },
  skillState: {
    skills: {
      driving: { name: "Driving", attribute: "Agility", score: 8 },
      fighting: { name: "Fighting", attribute: "Agility", score: 4 },
      notice: { name: "Notice", attribute: "Smarts", score: 6 },
      shooting: { name: "Shooting", attribute: "Agility", score: 6 },
    },
    availablePoints: 7,
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
    array: [
      {
        edge: "Ace",
        requirements: "N, A d8",
        description:
          "+2 to Boating, Driving, Piloting; may make soak rolls for vehicle at -2",
      },
      {
        edge: "Quick*",
        requirements: "N",
        description: "Discard draw of 5 or less for new card",
      },
    ],
    available: 0,
  },
  hindrances: {
    array: [],
    available: 3,
  },
  condition: {
    incapacitated: false,
    wounds: "0",
    fatigue: "0",
  },
  notes: [],
};

const fighter = {
  characterInfo: {
    name: "Fighter/fencer",
    profession: "Fighter/fencer",
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
      agility: 8,
      smarts: 6,
      strength: 6,
      spirit: 6,
      vigor: 6,
    },
    availablePoints: 0,
    saved: true,
  },
  skillState: {
    skills: {
      fighting: { name: "Fighting", attribute: "Agility", score: 12 },
      notice: { name: "Notice", attribute: "Smarts", score: 6 },
      stealth: { name: "Stealth", attribute: "Agility", score: 6 },
      taunt: { name: "Taunt", attribute: "Smarts", score: 8 },
    },
    availablePoints: 0,
    saved: true,
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
      item: "Dagger",
      range: "melee",
      damage: "Str+d4",
      weight: 1,
      price: 25,
      twoHanded: false,
      equipped: true,
    },
    {
      item: "Sword",
      range: "melee",
      damage: "Str+6",
      weight: 3,
      price: 200,
      notes: "parry +1",
      twoHanded: false,
      equipped: true,
    },
  ],
  equipment: [],
  edges: {
    array: [
      {
        edge: "Florentine",
        requirements: "N, A d8, Fighting d8",
        description:
          "+1 vs. foes with single weapon and no shield; ignore 1 point of gang up bonus",
      },
      {
        edge: "Two-Fisted",
        requirements: "N, A d8",
        description:
          "May attack with a weapon in each hand without multi-action penalty.",
      },
    ],
    available: 0,
  },
  hindrances: {
    array: [],
    available: 3,
  },
  condition: {
    incapacitated: false,
    wounds: "0",
    fatigue: "0",
  },
  notes: [],
};

const investigator = {
  characterInfo: {
    name: "Investigator",
    profession: "Investigator",
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
      agility: 6,
      smarts: 8,
      strength: 6,
      spirit: 6,
      vigor: 6,
    },
    availablePoints: 0,
    saved: true,
  },
  skillState: {
    skills: {
      fighting: { name: "Fighting", attribute: "Agility", score: 6 },
      investigation: { name: "Investigation", attribute: "Smarts", score: 8 },
      notice: { name: "Notice", attribute: "Smarts", score: 8 },
      persuasion: { name: "Persuasion", attribute: "Spirit", score: 6 },
      shooting: { name: "Shooting", attribute: "Agility", score: 6 },
      streetwise: { name: "Streetwise", attribute: "Smarts", score: 8 },
    },
    availablePoints: 0,
    saved: true,
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
      item: "Revolver",
      range: "12/24/48",
      damage: "2d6+1",
      rof: 1,
      shots: 6,
      weight: 4,
      price: 200,
      ap: 1,
      notes: "none",
      twoHanded: false,
      equipped: true,
    },
  ],
  equipment: [],
  edges: {
    array: [
      {
        edge: "Connections",
        requirements: "N",
        description: "Call upon powerful friends",
      },
      {
        edge: "Investigator",
        requirements: "N, Sm d8, Inv. d8, Streetwise d8",
        description: "+2 Investigation and Streetwise",
      },
    ],
    available: 0,
  },
  hindrances: {
    array: [],
    available: 3,
  },
  condition: {
    incapacitated: false,
    wounds: "0",
    fatigue: "0",
  },
  notes: [],
};

const preGenCharacters = [driver, fighter, investigator];

export default preGenCharacters;
