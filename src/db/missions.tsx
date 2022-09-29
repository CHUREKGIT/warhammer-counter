const missions = {
        main: {
            purgeTheEnemy: ["Assasination", "Bring it Down"],
            noMercy: ["Grind Them Down", "No Prosioners"],
            warpcraft: ["Abhor The Witch", "Warp Ritual", "Psychic Integrogation"],
            battlefield: ["Behind enemy Lines", "Engage On All Fronts"],
            shadowOperation: ["Raise the Banners high", "Retreive Nephilm Data"]
        },
        sororitas: {
            purgeTheEnemy: "AS: SLAY THE HERETIC",
            noMercy: "AS: A LEAP OF FAITH",
            battlefield: "AS: DEFEND THE SHRINE",
            shadowOperation: "AS: SHADOW OPERATIONS"
        },
        custodes: {
            purgeTheEnemy: "AC: AURIC MORTALIS",
            noMercy: "AC: MIGHT OF TERRA",
            battlefield: "AC: STAND VIGIL"
        },
        mechanicus: {
            purgeTheEnemy: "AMechanicus: ACCRETION OF KNOWLEDGE",
            noMercy: "AMechanicus: ERADICATION OF FLESH",
            battlefield: ["AMechanicus: UNCHARTED SEQUENCING", "AMechanicus: HIDDEN ARCHEOVAULT"]
        },
        militarum: {
            purgeTheEnemy: "AM: BY LASGUN AND BAYONET",
            noMercy: "AM: INFLEXIBLE COMMAND",
            battlefield:"AM: BOOTS ON THE GROUND",
            shadowOperation:"AM: SPECIAL ORDERS"
        },
        angles: {
            purgeTheEnemy : "BA: BLADE OF SANGUINIUS",
            noMercy: ["BA: FURY OF THE LOST", "BA: DEATH FROM ABOVE"],
            battlefield: "BA: RELENTLESS ASSAULT"
        },
        ik: {
            purgeTheEnemy: "IK: DUEL OF HONOUR",
            noMercy: "IK: HONOUR OF THE HOUSE",
            battlefield: "IK: YIELD NO GROUND",
            shadowOperation: "IK: RENEW THE OATHS"
        },
        sm: {
            purgeTheEnemy: "SM: CODEX WARFARE",
            noMercy: "SM: OATHS OF MOMENT",
            battlefield: "SM: SHOCK TACTICS"
        },
        deamons: {
            noMercy: "DEAMONS: NOURISHED BY TERROR",
            battlefield: "DEAMONS: REALITY REBELS",
            shadowOperation: "DEAMONS: DESPOILERS OF REALITY"
        },
        ck: {
            purgeTheEnemy: "CK: A FITTING CHALLENGE",
            noMercy: "CK: PATH OF DESTRUCTION",
            battlefield: "CK: RUTHLESS TYRANNY",
            shadowOperation:"CK: STORM OF DARKNESS"
        },
        csm: {
            purgeTheEnemy: "CSM: RISE TO GLORY",
            noMercy: "THE LONG WAR",
            shadowOperation: "FOR THE DARK GODS"
        },
        dg: {
            noMercy: "DG: FLEEING VECTORS",
            battlefield:"DG: DESPOILED GROUND",
            shadowOperation: "DG: SPREAD THE SICKNESS"
        },
        ts: {
            purgeTheEnemy: "TS: SORCEROUS PROWESS",
            noMercy: "TS: WRATH OF MAGNUS",
            warpcraft: "TS: MUTATE LANDSCAPE",
            shadowOperation: "TS: BURN EMPIRES"
        },
        elf: {
            noMercy: "AE: WRATH OF KHAINE",
            warpcraft: "AE: SCRY FUTURES",
            battlefield: "AE: THE HIDDEN PATH",
            shadowOperation: "AE: SCOUT THE ENEMY",
        },
        de: {
            purgeTheEnemy: ["DE: TAKE THEM ALIVE!", "DE: BEASTS FOR THE ARENAS"],
            noMercy: "DE: FEAR AND TERROR", 
            battlefield: "DE: HERD THE PREY"
        },
        necron: {
            purgeTheEnemy: "NC: CODE OF COMBAT",
            noMercy: "NC: THE TREASURES OF AEONS",
            battlefield: "NC: PURGE THE VERMIN",
            shadowOperation: "NC: ANCIENT MACHINERIES"
        },
        ork: {
            purgeTheEnemy: "O: DA BIGGEST AND DA BEST",
            noMercy: "O: STOMP'EM GOOD",
            battlefield: "O: GREEN TIDE",
            shadowOperation:"O: GET DA GOOD BITZ"
        },
        tau: {
            noMercy: "TAU: A CLEAN VICTORY",
            battlefield: "TAU: DECISIVE ACTION",
            shadowOperation: "TAU: AEROSPACE TARGETING RELAYS"
        },
        harlequins: {
            noMercy: "HQL: A DEADLY PERFORMANCE",
            warpcraft: "HQL: WEAVE VEIL",
            battlefield: "HQL: TAKE YOUR PLACES",
        },
        tyranids: {
            purgeTheEnemy: "TYR: CRANIAL FEASTING",
            noMercy: "TYR: SYNAPTIC INSIGHT",
            shadowOperation: "TYR: SPORE NODES"
        }
};

export default missions
