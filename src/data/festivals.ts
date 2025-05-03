export interface FestivalData {
  festival_name: string;
  start_date: string;
  end_date: string;
  main_stages: string[];
  stages: {
    [stageName: string]: string[];
  };
}

export const festivals: FestivalData[] = [
  {
    "festival_name": "All Points East 2025",
    "start_date": "2025-08-16",
    "end_date": "2025-08-24",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        "Chase and Status",
        "Overmono",
        "Sammy Virji",
        "Nia Archives",
        "Dimension",
        "Jyoty",
        "Joy Orbison",
        "Shy FX",
        "Barry Can't Swim",
        "Confidence Man",
        "Shygirl",
        "Marlon Hoffstadt",
        "RAYE",
        "Tyla",
        "Doechii",
        "JADE",
        "The Maccabees",
        "Bombay Bicycle Club",
        "Dry Cleaning",
        "The Cribs",
        "Nilüfer Yanya"
      ]
    }
  },
  {
    "festival_name": "Boardmasters Festival 2025",
    "start_date": "2025-08-06",
    "end_date": "2025-08-10",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        "The Prodigy",
        "London Grammar",
        "Nelly Furtado",
        "RAYE",
        "Kaiser Chiefs",
        "Rizzle Kicks",
        "Natasha Bedingfield",
        "Myles Smith"
      ],
      "Land Of Saints Stage": [
        "Wet Leg",
        "Franz Ferdinand",
        "Ocean Alley",
        "Bob Vylan",
        "Orla Gartland",
        "Newton Faulkner"
      ],
      "Unleashed Stage": [
        "Maribou State",
        "Bru-C",
        "Bou",
        "Hard Life",
        "Interplanetary Criminal",
        "Ahadadream",
        "Arielle Free",
        "Sally C",
        "Dan Shake",
        "Deadletter",
        "Emily Makis",
        "Gardna",
        "Lu.Re",
        "Luvcat",
        "Paige Tomlinson",
        "Sim0ne",
        "Storm Mollison",
        "Waze"
      ]
    }
  },
  {
    "festival_name": "Boomtown Fair 2025",
    "start_date": "2025-08-06",
    "end_date": "2025-08-10",
    "main_stages": ["Grand Central", "The Lion's Gate"],
    "stages": {
      "Grand Central": [
        "Sex Pistols ft Frank Carter",
        "Sean Paul",
        "CASISDEAD",
        "Pa Salieu",
        "Overmono",
        "Nia Archives",
        "Joy Orbison",
        "Jyoty"
      ],
      "The Lion's Gate": [
        "Maribou State",
        "The Wailers",
        "BONEY M. feat. Maizie Williams",
        "I Hate Models",
        "Girls Don't Sync",
        "Jayda G",
        "Dub FX",
        "Alien Ant Farm"
      ]
    }
  },
  {
    "festival_name": "BST Hyde Park 2025",
    "start_date": "2025-06-28",
    "end_date": "2025-07-13",
    "main_stages": ["Great Oak Stage"],
    "stages": {
      "Great Oak Stage": [
        "Sabrina Carpenter",
        "Olivia Rodrigo",
        "Zach Bryan",
        "Noel Gallagher",
        "Hugh Jackman",
        "Jeff Lynne's ELO"
      ]
    }
  },
  {
    "festival_name": "Creamfields 2025",
    "start_date": "2025-08-21",
    "end_date": "2025-08-24",
    "main_stages": ["ARC Stage"],
    "stages": {
      "ARC Stage": [
        "Swedish House Mafia",
        "David Guetta",
        "Martin Garrix",
        "Chase & Status",
        "Anyma",
        "Amelie Lens",
        "Adam Beyer",
        "Boris Brejcha",
        "Andy C",
        "Oliver Heldens",
        "Jodie Harsh",
        "Hannah Laing",
        "Max Dean"
      ]
    }
  },
  {
    "festival_name": "Download Festival 2025",
    "start_date": "2025-06-13",
    "end_date": "2025-06-15",
    "main_stages": ["Apex Stage"],
    "stages": {
      "Apex Stage": [
        "Green Day",
        "Weezer",
        "Jimmy Eat World",
        "Rise Against",
        "Boston Manor",
        "CKY",
        "SiM",
        "Sleep Token",
        "Shinedown",
        "Don Broco",
        "Palaye Royale",
        "Poppy",
        "Hatebreed",
        "Loathe",
        "Static Dress",
        "Korn",
        "Bullet For My Valentine",
        "Spiritbox",
        "Meshuggah",
        "Jinjer",
        "Power Trip",
        "Bleed From Within",
        "Orbit Culture"
      ],
      "Opus Stage": [
        "Within Temptation",
        "Opeth",
        "Myles Kennedy",
        "Starset",
        "Northlane",
        "Dirty Honey",
        "The Scratch",
        "Sex Pistols ft Frank Carter",
        "The Darkness",
        "Eagles Of Death Metal",
        "Polaris",
        "Awolnation",
        "Currents",
        "Kim Dracula",
        "Sophie Lloyd",
        "Steel Panther",
        "Lorna Shore",
        "Airbourne",
        "Jerry Cantrell",
        "Alien Ant Farm",
        "Municipal Waste",
        "The Ghost Inside",
        "Nothing More",
        "Seven Hours",
        "After Violet",
        "The Southern River Band"
      ],
      "Avalanche Stage": [
        "McFly",
        "Elliot Minor",
        "Crossfaith",
        "Trophy Eyes",
        "Bad Nerves",
        "The Meffs",
        "Unpeople",
        "Dead Pony",
        "Karen Dió",
        "Dayseeker",
        "Mallory Knox",
        "Twin Atlantic",
        "Smash Into Pieces",
        "Mothica",
        "Lølø",
        "Split Chain",
        "Venus Grrrls",
        "Bex",
        "Kids In Glass Houses",
        "Me First and the Gimme Gimmes",
        "Turbonegro",
        "Dead Poet Society",
        "House Of Protection",
        "Spiritual Cramp",
        "Amira Elfeky",
        "Arrows In Action",
        "Harpy"
      ],
      "Dogtooth Stage": [
        "Apocalyptica",
        "Eivør",
        "Alcest",
        "Vola",
        "Svalbard",
        "Windhand",
        "Graphic Nature",
        "Riding The Low",
        "Gore.",
        "Battlesnake",
        "The Haunt",
        "Cradle Of Filth",
        "Sylosis",
        "Kittie",
        "Anaal Nathrakh",
        "The Funeral Portrait",
        "Teen Mortgage",
        "Holy Wars",
        "Underside",
        "Zetra",
        "Bastardane",
        "Lastelle",
        "Artio",
        "SikTh",
        "Whitechapel",
        "Fit For An Autopsy",
        "Cattle Decapitation",
        "Novelists",
        "Unprocessed",
        "President",
        "VOWWS",
        "Survive Said The Prophet",
        "VOWER",
        "Faetooth",
        "Archers",
        "Neckbreakker"
      ]
    }
  },
  {
    "festival_name": "Field Day 2025",
    "start_date": "2025-05-24",
    "end_date": "2025-05-25",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        "Peggy Gou"
      ]
    }
  },
  {
    "festival_name": "Glastonbury Festival 2025",
    "start_date": "2025-06-25",
    "end_date": "2025-06-29",
    "main_stages": ["Pyramid Stage", "Other Stage"],
    "stages": {
      "Pyramid Stage": [
        "The 1975",
        "Neil Young and the Chrome Hearts",
        "Olivia Rodrigo",
        "Rod Stewart",
        "RAYE",
        "Biffy Clyro",
        "Alanis Morissette",
        "Busta Rhymes",
        "Wet Leg",
        "Franz Ferdinand",
        "Supergrass"
      ],
      "Other Stage": [
        "Loyle Carner",
        "Charli XCX",
        "The Prodigy",
        "The Libertines",
        "Kaiser Chiefs",
        "Kneecap",
        "Wolf Alice",
        "Doechii"
      ],
      "West Holts": [
        "Maribou State",
        "Doechii",
        "Overmono"
      ],
      "Woodsies": [
        "Four Tet",
        "Scissor Sisters",
        "Jorja Smith",
        "St. Vincent",
        "Blossoms",
        "TV On The Radio"
      ],
      "Acoustic Stage": [
        "Ani DiFranco",
        "Nick Lowe",
        "Roy Harper",
        "Gabrielle Aplin",
        "The Bootleg Beatles"
      ],
      "Field Of Avalon": [
        "Ash",
        "Hard-Fi",
        "The Fratellis",
        "Sam Ryder",
        "Bear's Den"
      ],
      "Left Field": [
        "Lambrini Girls",
        "Kate Nash",
        "Reverend And The Makers",
        "Grandson"
      ],
      "The Glade Stage": [
        "Leftfield",
        "Carl Cox & Eric Powell's Mobile Disco",
        "Skepta B2B Mochakk B2B Carlita",
        "Richie Hawtin",
        "Amelie Lens",
        "Goldie (Live)",
        "Joy Orbison",
        "Seth Troxler",
        "Annie Mac",
        "Third World",
        "Max Cooper",
        "Interplanetary Criminal B2B Kettama",
        "Sherelle",
        "Eliza Rose",
        "Ross From Friends",
        "Daniel Avery B2B Imogen",
        "MJ Cole",
        "Sally C",
        "Fish 56 Octagon",
        "Deep Dish",
        "A Guy Called Gerald + The Jungle Drummer",
        "Nabihah Iqbal",
        "Crazy P",
        "The Orb",
        "Marshall Jefferson",
        "Lauren Lo Sung",
        "Tunng",
        "K.Klass",
        "K.O.G",
        "Dele Sosimi Afrobeat Experience",
        "Bel Cobain",
        "Don Letts (DJ)",
        "Channel One Sound System",
        "Omega Nebula",
        "Electric Jalaba"
      ],
      "Glade Dome": [
        "Daphni",
        "DJ Boring B2B DJ Seinfeld",
        "Jamz Supernova B2B Shy One",
        "Leon Vynehall",
        "Fabio & Grooverider",
        "Calibre",
        "DJ Tennis & Ashee pres. Tenashee (Live)",
        "Eli Brown",
        "A Little Sound",
        "Dyed Soundorom",
        "Mathew Jonson (Live)",
        "Margaret Dygas",
        "Bradley Zero",
        "Ion Ludwig (Live)",
        "Tommy Holohan",
        "Saoirse",
        "Charlie Tee",
        "Gray"
      ]
    }
  },
  {
    "festival_name": "Green Man 2025",
    "start_date": "2025-08-14",
    "end_date": "2025-08-17",
    "main_stages": ["Mountain Stage"],
    "stages": {
      "Mountain Stage": [
        "Underworld",
        "Wet Leg",
        "TV On The Radio",
        "Kneecap",
        "Beth Gibbons"
      ],
      "Far Out Stage": [
        "Wunderhorse",
        "CMAT"
      ]
    }
  },
  {
    "festival_name": "Isle of Wight Festival 2025",
    "start_date": "2025-06-19",
    "end_date": "2025-06-22",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        "Sting",
        "Faithless",
        "The Corrs",
        "Amy MacDonald",
        "Lottery Winners",
        "Stereophonics",
        "The Script",
        "Paul Heaton ft. Rianne Downey",
        "Busted",
        "Razorlight",
        "The Saw Doctors",
        "Mae Muller",
        "Emmanuel Kelly",
        "5 Degrees North",
        "Justin Timberlake",
        "Jess Glynne",
        "Texas",
        "Olly Murs",
        "Alison Moyet",
        "Ella Eyre",
        "Björn Again"
      ],
      "Big Top": [
        "Example",
        "The Pigeon Detectives",
        "Rhythm of the 90s",
        "The Smyths",
        "Clean Bandit",
        "Dean Lewis",
        "The Lathums",
        "Amble",
        "Twin Atlantic",
        "Crystal Tides",
        "Supergrass",
        "Yard Act",
        "English Teacher",
        "Pale Waves",
        "Arthur Hill",
        "Matilda Mann",
        "The Clause",
        "James",
        "Lightning Seeds",
        "Alessi Rose",
        "Nieve Ella",
        "Midge Ure",
        "Remember Monday"
      ]
    }
  },
  {
    "festival_name": "Kendal Calling 2025",
    "start_date": "2025-07-31",
    "end_date": "2025-08-03",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        "Courteeners",
        "Fatboy Slim",
        "The Prodigy"
      ]
    }
  },
  {
    "festival_name": "Latitude Festival 2025",
    "start_date": "2025-07-24",
    "end_date": "2025-07-27",
    "main_stages": ["Obelisk Arena"],
    "stages": {
      "Obelisk Arena": [
        "Sting",
        "Snow Patrol",
        "Elbow"
      ],
      "BBC Sounds Stage": [
        "Fatboy Slim",
        "Basement Jaxx",
        "Maribou State"
      ]
    }
  },
  {
    "festival_name": "Leeds Festival 2025",
    "start_date": "2025-08-22",
    "end_date": "2025-08-24",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        "Travis Scott",
        "Bring Me The Horizon",
        "Hozier",
        "Chappell Roan",
        "Limp Bizkit",
        "D-Block Europe",
        "AJ Tracey",
        "Becky Hill",
        "Enter Shikari",
        "The Kooks",
        "Bloc Party",
        "Trippie Redd",
        "Conan Gray",
        "Amyl and The Sniffers",
        "Wunderhorse",
        "Royel Otis",
        "Del Water Gap",
        "Balming Tiger",
        "Alessi Rose",
        "DJ EZ",
        "Rudimental",
        "High Vis",
        "Bilmuri",
        "Blanco",
        "Issey Cross",
        "Antony Szmierek",
        "Mannequin Pussy",
        "Girls Don’t Sync",
        "Good Kid",
        "Nieve Ella",
        "Lancey Foux",
        "The Dare",
        "Suki Waterhouse",
        "Sofia Isella",
        "Lambrini Girls",
        "Snow Strippers",
        "Soft Play",
        "Luvcat",
        "Sea Girls",
        "Pale Waves",
        "Songer",
        "The Chats",
        "Wallows",
        "Lola Young",
        "The Linda Lindas",
        "South Arcade",
        "Bakar",
        "Good Neighbours",
        "Matilda Mann",
        "Nemzzz",
        "Badger",
        "Example",
        "The Royston Club",
        "Jazzy",
        "Nell Mescal",
        "Heartworms",
        "Pozer",
        "VLURE",
        "Been Stellar",
        "Balu Brigada",
        "Jasmine.4.t",
        "SNAYX",
        "AViVa",
        "Ecca Vandal",
        "Glixen",
        "Good Health Good Wealth",
        "House of Protection",
        "Mouth Culture",
        "Origami Angel",
        "Red Rum Club",
        "Rifle",
        "VOILÀ"
      ]
    }
  },
  {
    "festival_name": "Noisily Festival 2025",
    "start_date": "2025-07-11",
    "end_date": "2025-07-13",
    "main_stages": ["Noisily Stage"],
    "stages": {
      "Noisily Stage": [
        "Britta Arnold",
        "Goldie (with MC Medic)",
        "Victor Ruiz b2b Alex Stein"
      ]
    }
  },
  {
    "festival_name": "Parklife 2025",
    "start_date": "2025-06-13",
    "end_date": "2025-06-14",
    "main_stages": ["The Valley"],
    "stages": {
      "The Valley": [
        "50 Cent",
        "Charli XCX",
        "Jorja Smith",
        "Lola Young",
        "Rudimental",
        "Confidence Man",
        "FLO"
      ],
      "The Hangar": [
        "Peggy Gou",
        "PAWSA",
        "Bicep (DJ Set)",
        "Overmono",
        "Chris Stussy",
        "Skream & Benga",
        "Interplanetary Criminal",
        "Ewan McVicar",
        "Mochakk",
        "Partiboi69",
        "Prospa"
      ],
      "Magic Sky": [
        "Hybrid Minds",
        "Andy C",
        "Hedex",
        "Bou",
        "Girls Don’t Sync",
        "DJ Heartstring",
        "salute"
      ]
    }
  },
  {
    "festival_name": "Reading Festival 2025",
    "start_date": "2025-08-22",
    "end_date": "2025-08-24",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        "Travis Scott",
        "Bring Me The Horizon",
        "Hozier",
        "Chappell Roan",
        "Limp Bizkit",
        "D-Block Europe",
        "AJ Tracey",
        "Becky Hill",
        "Enter Shikari",
        "The Kooks",
        "Bloc Party",
        "Trippie Redd",
        "Conan Gray",
        "Amyl and The Sniffers",
        "Wunderhorse",
        "Royel Otis",
        "Del Water Gap",
        "Balming Tiger",
        "Alessi Rose",
        "DJ EZ",
        "Rudimental",
        "High Vis",
        "Bilmuri",
        "Blanco",
        "Issey Cross",
        "Antony Szmierek",
        "Mannequin Pussy",
        "Girls Don’t Sync",
        "Good Kid",
        "Nieve Ella",
        "Lancey Foux",
        "The Dare",
        "Suki Waterhouse",
        "Sofia Isella",
        "Lambrini Girls",
        "Snow Strippers",
        "Soft Play",
        "Luvcat",
        "Sea Girls",
        "Pale Waves",
        "Songer",
        "The Chats",
        "Wallows",
        "Lola Young",
        "The Linda Lindas",
        "South Arcade",
        "Bakar",
        "Good Neighbours",
        "Matilda Mann",
        "Nemzzz",
        "Badger",
        "Example",
        "The Royston Club",
        "Jazzy",
        "Nell Mescal",
        "Heartworms",
        "Pozer",
        "VLURE",
        "Been Stellar",
        "Balu Brigada",
        "Jasmine.4.t",
        "SNAYX",
        "AViVa",
        "Ecca Vandal",
        "Glixen",
        "Good Health Good Wealth",
        "House of Protection",
        "Mouth Culture",
        "Origami Angel",
        "Red Rum Club",
        "Rifle",
        "VOILÀ"
      ]
    }
  },
  {
    "festival_name": "TRNSMT Festival 2025",
    "start_date": "2025-07-11",
    "end_date": "2025-07-13",
    "main_stages": ["Main Stage", "King Tut's Stage"],
    "stages": {
      "Main Stage": [
        "50 Cent",
        "The Script",
        "Wet Leg",
        "Jamie Webster",
        "Twin Atlantic",
        "Biffy Clyro",
        "Fontaines D.C.",
        "The Kooks",
        "Inhaler",
        "Sigrid",
        "Snow Patrol",
        "Gracie Abrams",
        "Shed Seven",
        "The Lathums",
        "Nina Nesbitt"
      ],
      "King Tut's Stage": [
        "Kneecap",
        "Confidence Man",
        "The Royston Club",
        "Calum Bowie",
        "Tanner Adell",
        "Good Neighbours",
        "Arthur Hill",
        "NOFUN!",
        "Underworld",
        "Jake Bugg",
        "Alessi Rose",
        "James Marriott",
        "Biig Piig",
        "Amble",
        "Lucia & The Best Boys",
        "Brògeal",
        "Tom Walker",
        "Brooke Combe",
        "Kyle Falconer"
      ],
      "BBC Radio 1 Dance Stage": [
        "Jaguar",
        "La La",
        "Connor Coates",
        "Big Miz",
        "Marianne",
        "Frankie Elysie",
        "Nimino",
        "Hayley",
        "Zalassi",
        "Arielle Free",
        "Hannah Opgaard",
        "Dominique",
        "Eva",
        "JAZZY",
        "BETH",
        "Sarah Story",
        "Charlie Hedges",
        "Kane Kirkpatrick",
        "Beaux"
      ]
    }
  },
  {
    "festival_name": "Victorious Festival 2025",
    "start_date": "2025-08-22",
    "end_date": "2025-08-24",
    "main_stages": ["Common Stage", "Castle Stage"],
    "stages": {
      "Common Stage": [
        "Queens of the Stone Age",
        "Vampire Weekend",
        "Kings of Leon",
        "Michael Kiwanuka",
        "Bloc Party",
        "The Charlatans",
        "The Last Dinner Party"
      ],
      "Castle Stage": [
        "Madness",
        "Nelly Furtado",
        "Travis",
        "Rizzle Kicks"
      ]
    }
  },
  {
    "festival_name": "Wilderness Festival 2025",
    "start_date": "2025-07-31",
    "end_date": "2025-08-03",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        "Basement Jaxx"
      ]
    }
  },
  {
    "festival_name": "Wireless Festival 2025",
    "start_date": "2025-07-11",
    "end_date": "2025-07-13",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        "Drake",
        "Burna Boy",
        "Vybz Kartel",
        "PARTYNEXTDOOR",
        "Summer Walker",
        "Boy Better Know"
      ]
    }
  }
];

// Helper function to get festival by id
export const getFestivalById = (id: string): FestivalData | undefined => {
  return festivals.find(festival => 
    festival.festival_name.toLowerCase().replace(/\s+/g, '') === id.toLowerCase()
  );
};

// This function will organize artists by stage, putting main stages first
export const getOrganizedArtistsByFestival = (festivalId: string): { stageName: string; artists: string[]; isMainStage: boolean }[] => {
  const festival = getFestivalById(festivalId);
  if (!festival) return [];
  
  const stages = Object.keys(festival.stages);
  return stages.sort((a, b) => {
    // Sort logic: main stages first, then alphabetically
    const aIsMain = festival.main_stages.includes(a);
    const bIsMain = festival.main_stages.includes(b);
    
    if (aIsMain && !bIsMain) return -1;
    if (!aIsMain && bIsMain) return 1;
    return a.localeCompare(b);
  }).map(stageName => {
    const artists = festival.stages[stageName].sort((a, b) => a.localeCompare(b));
    return {
      stageName,
      artists,
      isMainStage: festival.main_stages.includes(stageName)
    };
  });
};
