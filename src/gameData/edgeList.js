const edgeList = [
  {
    edge: "Ace",
    requirements: "N, A d8",
    description:
      "+2 to Boating, Driving, Piloting; may make soak rolls for vehicle at -2",
  },
  {
    edge: "Acrobat",
    requirements: "N, A d8, St d6",
    description:
      "+2 to nimbleness-based Agility rolls; +1 Parry if unencumbered",
  },
  {
    edge: "Alertness*",
    requirements: "N",
    description: "+2 Notice",
  },
  {
    edge: "Ambidextrous*",
    requirements: "N, A d8",
    description: "Ignore -2 penalty for using off-hand",
  },
  {
    edge: "Arcane Background*",
    requirements: "N, Special",
    description: "Allows access to supernatural powers",
  },
  {
    edge: "Arcane Resistance*",
    requirements: "N, Sp d8",
    description: "Armor 2 vs. magic, +2 to resist powers",
  },
  {
    edge: "Imp. Arcane Res",
    requirements: "N, Arcane Res.",
    description: "Armor 4 vs. magic, +4 to resist magic effects",
  },
  {
    edge: "Attractive*",
    requirements: "N, V d6",
    description: "Charisma +2",
  },
  {
    edge: "Very Attractive*",
    requirements: "N, Attractive",
    description: "Charisma +4",
  },
  {
    edge: "Beast Bond",
    requirements: "N",
    description: "Character may spend bennies for his animals",
  },
  {
    edge: "Beast Master",
    requirements: "N, Sp d8",
    description: "You gain an animal companion",
  },
  {
    edge: "Berserk*",
    requirements: "N",
    description:
      "After suffering a wound, your hero must make a Smarts roll or go berserk",
  },
  {
    edge: "Block",
    requirements: "S, Fighting d8",
    description: "Parry +1",
  },
  {
    edge: "Improved Block",
    requirements: "V, Block",
    description: "Parry +2",
  },
  {
    edge: "Brawny*",
    requirements: "N, St d6, V d6",
    description: "Toughness +1; load limit is 8 x Str",
  },
  {
    edge: "Champion",
    requirements: "N, See text",
    description: "+2 damage / Toughness vs. supernatural evil",
  },
  {
    edge: "Charismatic",
    requirements: "N, Sp d8",
    description: "Charisma +2",
  },
  {
    edge: "Combat Reflexes",
    requirements: "S",
    description: "+2 to recover from being Shaken",
  },
  {
    edge: "Command",
    requirements: "N, Sm d6",
    description: "+1 to troops recovering from being Shaken",
  },
  {
    edge: "Common Bond+",
    requirements: "N, Sp d8",
    description: "May give bennies to companions",
  },
  {
    edge: "Connections",
    requirements: "N",
    description: "Call upon powerful friends",
  },
  {
    edge: "Danger Sense",
    requirements: "N",
    description: "Notice at -2 to detect surprise attacks/danger",
  },
  {
    edge: "Dead Shot+",
    requirements: "S, Shoot/Throw d10",
    description: "Double ranged damage when dealt Joker",
  },
  {
    edge: "Dodge",
    requirements: "S, A d8",
    description: "-1 to be hit with ranged attacks",
  },
  {
    edge: "Improved Dodge",
    requirements: "V, Dodge",
    description: "-2 to be hit with ranged attacks",
  },
  {
    edge: "Fast Healer*",
    requirements: "N, V d8",
    description: "+2 to natural healing rolls",
  },
  {
    edge: "Fervor",
    requirements: "V, Sp d8, Command",
    description: "+1 melee damage to troops in command",
  },
  {
    edge: "First Strike",
    requirements: "N, A d8",
    description: "May attack one foe who moves adjacent",
  },
  {
    edge: "Imp. First Strike",
    requirements: "H, First Strike",
    description: "May attack every foe who moves adjacent",
  },
  {
    edge: "Fleet-Footed",
    requirements: " N, A d6",
    description: "+2 Pace, d10 running die instead of d6",
  },
  {
    edge: "Florentine",
    requirements: "N, A d8, Fighting d8",
    description:
      "+1 vs. foes with single weapon and no shield; ignore 1 point of gang up bonus",
  },
  {
    edge: "Followers+",
    requirements: "L",
    description: "Attract 5 henchmen",
  },
  {
    edge: "Frenzy",
    requirements: "S, Fighting d10",
    description: "1 extra Fighting attack at -2",
  },
  {
    edge: "Imp. Frenzy",
    requirements: "V, Frenzy",
    description: "As above but no penalty",
  },
  {
    edge: "Gadgeteer",
    requirements: "N, See text",
    description: "May “jury-rig” a device once per game session",
  },
  {
    edge: "Giant Killer",
    requirements: "V",
    description: "+1d6 damage when attacking large creatures",
  },
  {
    edge: "Hard to Kill+",
    requirements: "N, Sp d8",
    description:
      "Ignore wound penalties for Vigor rolls made on the Knockout or Injury tables",
  },
  {
    edge: "Harder to Kill",
    requirements: "V, Hard to Kill",
    description: "50% chance of surviving “death”",
  },
  {
    edge: "Healer",
    requirements: "N, Sp d8",
    description: "+2 Healing",
  },
  {
    edge: "Hold the Line!",
    requirements: "S, Sm d8, Command",
    description: "Troops have +1 Toughness",
  },
  {
    edge: "Holy/Unholy Warrior",
    requirements: "N, See text",
    description: "Call upon your chosen deity to repulse evil creatures",
  },
  {
    edge: "Inspire",
    requirements: "S, Command",
    description: "+1 to Spirit rolls of all troops in command",
  },
  {
    edge: "Investigator",
    requirements: "N, Sm d8, Inv. d8, Streetwise d8",
    description: "+2 Investigation and Streetwise",
  },
  {
    edge: "Jack-of-all-Trades",
    requirements: "N, Sm d10",
    description: "No -2 for unskilled Smarts based attempts",
  },
  {
    edge: "Level Headed",
    requirements: "S, Sm d8",
    description: "Act on best of two cards in combat",
  },
  {
    edge: "Imp. Level Headed",
    requirements: "S, Level Headed",
    description: "Act on best of three cards in combat",
  },
  {
    edge: "Luck*",
    requirements: "N",
    description: "+1 benny per session",
  },
  {
    edge: "Great Luck*",
    requirements: "N, Luck",
    description: "+2 bennies per session",
  },
  {
    edge: "Marksman",
    requirements: "S",
    description: "Aim maneuver (+2 Shooting) if hero does not move",
  },
  {
    edge: "McGyver",
    requirements: "N, Sm d6, Repair d6, Notice d8",
    description: "May improvise temporary gadgets",
  },
  {
    edge: "Mentalist",
    requirements: "N, AB (Psionics), Sm d8, Psionics d6",
    description: "+2 to any opposed Psionics roll",
  },
  {
    edge: "Mighty Blow+",
    requirements: "S, Fighting d10",
    description: "Double melee damage when dealt Joker",
  },
  {
    edge: "Mr. Fix It",
    requirements: "N, See text",
    description: "+2 to Repair rolls, 1/2 Repair time with raise",
  },
  {
    edge: "Natural Leader",
    requirements: "N, Sp d8, Command",
    description: "Leader may give bennies to troops in command",
  },
  {
    edge: "Nerves of Steel+",
    requirements: "N, V d8",
    description: "Ignore 1 point of wound penalties",
  },
  {
    edge: "Imp. Nerves of Steel",
    requirements: "N, Nerves of Steel",
    description: "Ignore 2 points of wound penalties",
  },
  {
    edge: "New Power",
    requirements: "N, AB",
    description: "Character gains one new power",
  },
  {
    edge: "Noble*",
    requirements: "N",
    description: "Rich; +2 Charisma; Status and wealth",
  },
  {
    edge: "No Mercy",
    requirements: "S",
    description: "May spend bennies on damage rolls",
  },
  {
    edge: "Power Points",
    requirements: "N, AB",
    description: "+5 Power Points, once per rank only",
  },
  {
    edge: "Power Surge+",
    requirements: "S, arcane skill d10",
    description: "+2d6 Power Points when dealt a Joker",
  },
  {
    edge: "Professional",
    requirements: "L, d12 in Trait",
    description: "Trait becomes d12+1",
  },
  {
    edge: "Expert",
    requirements: "L, Professional",
    description: "Trait becomes d12+2",
  },
  {
    edge: "Master+",
    requirements: "L, WC, Expert",
    description: "Wild Die is d10 for one Trait",
  },
  {
    edge: "Quick*",
    requirements: "N",
    description: "Discard draw of 5 or less for new card",
  },
  {
    edge: "Quick Draw",
    requirements: "N, A d8",
    description: "May draw weapon as a free action",
  },
  {
    edge: "Rapid Recharge",
    requirements: "S, Sp d6, AB",
    description: "Regain 1 Power Point every 30 minutes",
  },
  {
    edge: "Imp. Rapid Recharge",
    requirements: "V, Rapid Recharge",
    description: "Regain 1 Power Point every 15 minutes",
  },
  {
    edge: "Rich",
    requirements: "N",
    description: "3x starting funds, $75K annual salary",
  },
  {
    edge: "Filthy Rich",
    requirements: "N, Noble Birth or Rich",
    description: "5x starting funds, $250K annual salary",
  },
  {
    edge: "Rock and Roll!",
    requirements: "S, Shooting d8",
    description: "Ignore full-auto penalty if shooter doesn’t move",
  },
  {
    edge: "Scholar",
    requirements: "N, d8 in affected skills",
    description: "+2 to two different Knowledge skills",
  },
  {
    edge: "Sidekick+",
    requirements: "L",
    description: "Character gains a Novice WC sidekick",
  },
  {
    edge: "Soul Drain",
    requirements: "S, See Text",
    description: "Drain energy from your own soul to get more power points",
  },
  {
    edge: "Steady Hands",
    requirements: "N, A d8",
    description: "Ignore unstable platform penalty",
  },
  {
    edge: "Sweep",
    requirements: "N, St d8, Fighting d8",
    description: "Attack all adjacent foes at -2",
  },
  {
    edge: "Imp. Sweep",
    requirements: "V, Sweep",
    description: "As above but with no penalty",
  },
  {
    edge: "Strong Willed",
    requirements: "N, Intimidation d6",
    description: "+2 Intimidation and Taunt, +2 to resist",
  },
  {
    edge: "Thief",
    requirements: "N, A d8, Climb d6, Lockpick d6, Stealth d8",
    description: "+2 Climb, Lockpick, Stealth, or to disarm traps",
  },
  {
    edge: "Tough as Nails",
    requirements: "L",
    description: "Toughness +1",
  },
  {
    edge: "Imp. Tough as Nails",
    requirements: "L, Tough as Nails",
    description: "Toughness +2",
  },
  {
    edge: "Trademark Weapon",
    requirements: "N, Fighting or Shooting d10",
    description: "+1 Fighting or Shooting with particular weapon",
  },
  {
    edge: "Imp. Tr. Weapon",
    requirements: "V, Trademark Weapon",
    description: "+2 Fighting or Shooting with particular weapon",
  },
  {
    edge: "Two-Fisted",
    requirements: "N, A d8",
    description:
      "May attack with a weapon in each hand without multi-action penalty.",
  },
  {
    edge: "Weapon Master",
    requirements: "L, Fighting d12",
    description: "Parry +1",
  },
  {
    edge: "Master of Arms",
    requirements: "L, Weapon Master",
    description: "Parry +2",
  },
  {
    edge: "Wizard",
    requirements: "N, See text",
    description: "Each raise reduces cost of spell by 1 point",
  },
  {
    edge: "Woodsman",
    requirements: "N, Sp d6, Survival d8, Tracking d8",
    description: "+2 Tracking Survival, and Stealth",
  },
];

export { edgeList };
