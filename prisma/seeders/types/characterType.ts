

export type character = {
  data: {
    // Character Information
    characterName: string;
    race: string;
    profession: string;
    level: number;
    experience: number;
    equipment: string;
    magic: string;
    settings: string;

    // Attributes
    realmpower: number;
    powerpoints: number;
    basehp: number;
    totalhp: number;
    actualhp: number;
    attributes: string;
    temporaryAbbr: string;
    potentialAbbr: string;
    developmentAbbr: string;
    baseAbbr: string;
    raceAbbr: string;
    totalAbbr: string;
    constitution: number;
    agility: number;
    selfdiscipline: number;
    memory: number;
    reasoning: number;
    strength: number;
    quickness: number;
    presence: number;
    empathy: number;
    intuition: number;

    // Defenses
    defenses: string;
    armorAt: string;
    defensivebonusDb: string;
    withshield: string;
    movementpenalty: string;
    helmet: string;
    armgreaves: string;
    leggreaves: string;
    distancepenalty: string;
    wounds: string;

    // Languages
    languages: string;
    spoken: string;
    writen: string;

    // Miscellaneous
    miscellaneous: string;
    hitdice: string;
    developmentpoints: number;
    primaryskills: string;
    attributemodAbbr: string;
    cost: number;
    professionAbbr: string;
    nbranks: number;
    attributeAbbr: string;
    miscellaneousAbbr: string;
    itemAbbr: string;
    secondaryskills: string;
    weaponskills: string;
    ob: number;
    db: number;
    resistances: string;
    notes: string;

    // Possessions
    weight: number;
    possessions: string;
    mithril: number;
    gold: number;
    silver: number;
    bronze: number;
    copper: number;
    iron: number;

    // Spells
    spelllists: string;
    realm: string;
    listtype: string;
    levelmax: number;
    learnchances: number;
    bookandpage: string;
    spellname: string;
    spellclass: string;
    spellduration: string;
    spellrange: string;
    description: string;
    relations: string;

    // Checks
    constitutioncheck: number;
    agilitycheck: number;
    selfdisciplinecheck: number;
    memorycheck: number;
    reasoningcheck: number;
    strengthcheck: number;
    quicknesscheck: number;
    presencecheck: number;
    empathycheck: number;
    intuitioncheck: number;
    resistancecheck: number;
    ennemydb: number;
    result: string;

    // Calculations
    devAbbr: string;
    loadcapacity: number;
    weighttotal: number;
    sheetColors: string;
    totalhpcalcmode: string;
    legacycalc: string;
    nocalc: string;
    hpcalcdescription: string;
    professionbonusmode: string;
    legacyprofbonus: string;
    flatprofbonus: string;
    profbonusmodedescription: string;
    bmr: number;
    walk: number;
    fastwalk: number;
    run: number;
    sprint: number;
    accsprint: number;
    dash: number;
    skilldevmode: string;
    legacyskilldev: string;
    flatskilldev: string;
    skilldevmodedescription: string;
    secundarydevelopmentpoints: number;
    secondaryskilldevmode: string;
    bonus10: number;
    bonus20: number;
    bonus25: number;
    bonus30: number;
    bonus40: number;
    bonus50: number;
    secondaryskilldevmodedescription: string;

    // Appearance
    backgroundColor: string;
    default: string;
    white: string;
    lilac: string;
    grayscale: string;
    book: string;
    seasonSummer: string;
    seasonFall: string;
    seasonWinter: string;
    seasonSpring: string;
    backgroundcolordesc: string;
    createdBy: 'defaultUser'; // replace with actual value
    updatedBy: 'defaultUser'; // replace with actual value
  };
  skipDuplicates: boolean | undefined;
};
