-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "characterName" VARCHAR(255) NOT NULL,
    "race" VARCHAR(255) NOT NULL,
    "profession" VARCHAR(255) NOT NULL,
    "level" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL,
    "character" VARCHAR(255) NOT NULL,
    "equipment" VARCHAR(255) NOT NULL,
    "magic" VARCHAR(255) NOT NULL,
    "settings" VARCHAR(255) NOT NULL,
    "realmpower" INTEGER NOT NULL,
    "powerpoints" INTEGER NOT NULL,
    "basehp" INTEGER NOT NULL,
    "totalhp" INTEGER NOT NULL,
    "actualhp" INTEGER NOT NULL,
    "attributes" VARCHAR(255) NOT NULL,
    "temporaryAbbr" VARCHAR(255) NOT NULL,
    "potentialAbbr" VARCHAR(255) NOT NULL,
    "developmentAbbr" VARCHAR(255) NOT NULL,
    "baseAbbr" VARCHAR(255) NOT NULL,
    "raceAbbr" VARCHAR(255) NOT NULL,
    "totalAbbr" VARCHAR(255) NOT NULL,
    "constitution" INTEGER NOT NULL,
    "agility" INTEGER NOT NULL,
    "selfdiscipline" INTEGER NOT NULL,
    "memory" INTEGER NOT NULL,
    "reasoning" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL,
    "quickness" INTEGER NOT NULL,
    "presence" INTEGER NOT NULL,
    "empathy" INTEGER NOT NULL,
    "intuition" INTEGER NOT NULL,
    "defenses" VARCHAR(255) NOT NULL,
    "armorAt" VARCHAR(255) NOT NULL,
    "defensivebonusDb" VARCHAR(255) NOT NULL,
    "withshield" VARCHAR(255) NOT NULL,
    "movementpenalty" VARCHAR(255) NOT NULL,
    "helmet" VARCHAR(255) NOT NULL,
    "armgreaves" VARCHAR(255) NOT NULL,
    "leggreaves" VARCHAR(255) NOT NULL,
    "distancepenalty" VARCHAR(255) NOT NULL,
    "wounds" VARCHAR(255) NOT NULL,
    "languages" VARCHAR(255) NOT NULL,
    "spoken" VARCHAR(255) NOT NULL,
    "writen" VARCHAR(255) NOT NULL,
    "miscellaneous" VARCHAR(255) NOT NULL,
    "hitdice" VARCHAR(255) NOT NULL,
    "developmentpoints" INTEGER NOT NULL,
    "primaryskills" VARCHAR(255) NOT NULL,
    "attributemodAbbr" VARCHAR(255) NOT NULL,
    "cost" INTEGER NOT NULL,
    "professionAbbr" VARCHAR(255) NOT NULL,
    "nbranks" INTEGER NOT NULL,
    "attributeAbbr" VARCHAR(255) NOT NULL,
    "miscellaneousAbbr" VARCHAR(255) NOT NULL,
    "itemAbbr" VARCHAR(255) NOT NULL,
    "secondaryskills" VARCHAR(255) NOT NULL,
    "weaponskills" VARCHAR(255) NOT NULL,
    "ob" INTEGER NOT NULL,
    "db" INTEGER NOT NULL,
    "resistances" VARCHAR(255) NOT NULL,
    "notes" VARCHAR(255) NOT NULL,
    "weight" INTEGER NOT NULL,
    "possessions" VARCHAR(255) NOT NULL,
    "mithril" INTEGER NOT NULL,
    "gold" INTEGER NOT NULL,
    "silver" INTEGER NOT NULL,
    "bronze" INTEGER NOT NULL,
    "copper" INTEGER NOT NULL,
    "iron" INTEGER NOT NULL,
    "spelllists" VARCHAR(255) NOT NULL,
    "realm" VARCHAR(255) NOT NULL,
    "listtype" VARCHAR(255) NOT NULL,
    "levelmax" INTEGER NOT NULL,
    "learnchances" INTEGER NOT NULL,
    "bookandpage" VARCHAR(255) NOT NULL,
    "spellname" VARCHAR(255) NOT NULL,
    "spellclass" VARCHAR(255) NOT NULL,
    "spellduration" VARCHAR(255) NOT NULL,
    "spellrange" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "relations" VARCHAR(255) NOT NULL,
    "constitutioncheck" INTEGER NOT NULL,
    "agilitycheck" INTEGER NOT NULL,
    "selfdisciplinecheck" INTEGER NOT NULL,
    "memorycheck" INTEGER NOT NULL,
    "reasoningcheck" INTEGER NOT NULL,
    "strengthcheck" INTEGER NOT NULL,
    "quicknesscheck" INTEGER NOT NULL,
    "presencecheck" INTEGER NOT NULL,
    "empathycheck" INTEGER NOT NULL,
    "intuitioncheck" INTEGER NOT NULL,
    "resistancecheck" INTEGER NOT NULL,
    "ennemydb" INTEGER NOT NULL,
    "result" VARCHAR(255) NOT NULL,
    "devAbbr" VARCHAR(255) NOT NULL,
    "loadcapacity" INTEGER NOT NULL,
    "weighttotal" INTEGER NOT NULL,
    "sheetColors" VARCHAR(255) NOT NULL,
    "totalhpcalcmode" VARCHAR(255) NOT NULL,
    "legacycalc" VARCHAR(255) NOT NULL,
    "nocalc" VARCHAR(255) NOT NULL,
    "hpcalcdescription" VARCHAR(255) NOT NULL,
    "professionbonusmode" VARCHAR(255) NOT NULL,
    "legacyprofbonus" VARCHAR(255) NOT NULL,
    "flatprofbonus" VARCHAR(255) NOT NULL,
    "profbonusmodedescription" VARCHAR(255) NOT NULL,
    "bmr" INTEGER NOT NULL,
    "walk" INTEGER NOT NULL,
    "fastwalk" INTEGER NOT NULL,
    "run" INTEGER NOT NULL,
    "sprint" INTEGER NOT NULL,
    "accsprint" INTEGER NOT NULL,
    "dash" INTEGER NOT NULL,
    "skilldevmode" VARCHAR(255) NOT NULL,
    "legacyskilldev" VARCHAR(255) NOT NULL,
    "flatskilldev" VARCHAR(255) NOT NULL,
    "skilldevmodedescription" VARCHAR(255) NOT NULL,
    "secundarydevelopmentpoints" INTEGER NOT NULL,
    "secondaryskilldevmode" VARCHAR(255) NOT NULL,
    "bonus10" INTEGER NOT NULL,
    "bonus20" INTEGER NOT NULL,
    "bonus25" INTEGER NOT NULL,
    "bonus30" INTEGER NOT NULL,
    "bonus40" INTEGER NOT NULL,
    "bonus50" INTEGER NOT NULL,
    "secondaryskilldevmodedescription" VARCHAR(255) NOT NULL,
    "backgroundColor" VARCHAR(255) NOT NULL,
    "default" VARCHAR(255) NOT NULL,
    "white" VARCHAR(255) NOT NULL,
    "lilac" VARCHAR(255) NOT NULL,
    "grayscale" VARCHAR(255) NOT NULL,
    "book" VARCHAR(255) NOT NULL,
    "seasonSummer" VARCHAR(255) NOT NULL,
    "seasonFall" VARCHAR(255) NOT NULL,
    "seasonWinter" VARCHAR(255) NOT NULL,
    "seasonSpring" VARCHAR(255) NOT NULL,
    "backgroundcolordesc" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" VARCHAR(255) NOT NULL,
    "updatedBy" VARCHAR(255) NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);
