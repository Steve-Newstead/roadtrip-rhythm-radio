
export interface FestivalArtist {
  name: string;
  spotify_id: string | null;
}

export interface FestivalData {
  festival_name: string;
  start_date: string;
  end_date: string;
  main_stages: string[];
  stages: {
    [stageName: string]: FestivalArtist[];
  };
}

export const festivals: FestivalData[] = [
  {
    "festival_name": "Parklife Festival",
    "start_date": "2025-06-14",
    "end_date": "2025-06-15",
    "main_stages": [
      "The Valley"
    ],
    "stages": {
      "The Valley": [
        {
          "name": "Charli XCX",
          "spotify_id": "25uiPmTg16RbhZWAqwLBy5"
        },
        {
          "name": "Peggy Gou",
          "spotify_id": "2mLA48B366zkELXYx7hcDN"
        },
        {
          "name": "Confidence Man",
          "spotify_id": "0RwXnFrEoI8tltFvYpJgP6"
        },
        {
          "name": "Lola Young",
          "spotify_id": "67FB4n52MgexGQIG8s0yUH"
        },
        {
          "name": "Marc Rebillet",
          "spotify_id": "72udTJKu1pGovvS9aCYGMI"
        },
        {
          "name": "Jodie Harsh",
          "spotify_id": "0470FSE19wkoZe4R06GW9i"
        },
        {
          "name": "Gina Breeze",
          "spotify_id": "4Mlde6hHYl7p4MTu2nj8yv"
        }
      ],
      "Hangar": [
        {
          "name": "Bicep",
          "spotify_id": "73A3bLnfnz5BoQjb4gNCga"
        },
        {
          "name": "Overmono",
          "spotify_id": "01PnN11ovfen6xUOHfNpn3"
        },
        {
          "name": "Ewan McVicar",
          "spotify_id": "4d2NUjh9ZrzG1ZZdhpSDKH"
        },
        {
          "name": "DJ Heartstring",
          "spotify_id": "5tcwaJBUyEdxQxvieuQxU7"
        },
        {
          "name": "Effy",
          "spotify_id": "19SX00qkAvpVQroAka9GI0"
        }
      ],
      "Big Top": [
        {
          "name": "Armand Van Helden",
          "spotify_id": "3cQA9WH8liZfeja1DxcDYE"
        },
        {
          "name": "D.O.D",
          "spotify_id": "0Cs47vvRsPgEfliBU9KDiB"
        },
        {
          "name": "Mau P",
          "spotify_id": "0w1sbtZVQoK6GzV4A4OkCv"
        },
        {
          "name": "Paul Woolford",
          "spotify_id": "4CA8PTrbq1l5IgyvBA2JSV"
        },
        {
          "name": "Sam Divine",
          "spotify_id": "029RjYsk0DU8LKC92sUyXZ"
        }
      ]
    }
  },
  {
    "festival_name": "Download Festival",
    "start_date": "2025-06-13",
    "end_date": "2025-06-15",
    "main_stages": [
      "Apex Stage"
    ],
    "stages": {
      "Apex Stage": [
        {
          "name": "Green Day",
          "spotify_id": "7oPftvlwr6VrsViSDV7fJY"
        },
        {
          "name": "Weezer",
          "spotify_id": "3jOstUTkEu2JkjvRdBA5Gu"
        },
        {
          "name": "Jimmy Eat World",
          "spotify_id": "3Ayl7mCk0nScecqOzvNp6s"
        },
        {
          "name": "Rise Against",
          "spotify_id": "6Wr3hh341P84m3EI8qdn9O"
        },
        {
          "name": "Sleep Token",
          "spotify_id": "2n2RSaZqBuUUukhbLlpnE6"
        },
        {
          "name": "Don Broco",
          "spotify_id": "1aOt6LvXOV6I8dv1A5Diia"
        },
        {
          "name": "Bring Me The Horizon",
          "spotify_id": "1Ffb6ejR6Fe5IamqA5oRUF"
        }
      ],
      "Opus Stage": [
        {
          "name": "Within Temptation",
          "spotify_id": "3hE8S8ohRErocpkY7uJW4a"
        },
        {
          "name": "Opeth",
          "spotify_id": "0ybFZ2Ab08V8hueghSXm6E"
        },
        {
          "name": "Lorna Shore",
          "spotify_id": "6vXYoy8ouRVib302zxaxFF"
        },
        {
          "name": "Steel Panther",
          "spotify_id": "3l02WF362j1oHOurzuseBv"
        },
        {
          "name": "Airbourne",
          "spotify_id": "6urzdpGY5yUimWZsgJUoTb"
        }
      ],
      "Avalanche Stage": [
        {
          "name": "McFly",
          "spotify_id": "47izDDvtOxxz3FzHYuUptd"
        },
        {
          "name": "Twin Atlantic",
          "spotify_id": "4A9xtvezlouTD7H0kyUje9"
        },
        {
          "name": "Dayseeker",
          "spotify_id": "5FjQVp1Lb0kltmwIuu5kfj"
        },
        {
          "name": "Kids In Glass Houses",
          "spotify_id": "0d630stEgFcD3GTKZPZFzY"
        }
      ],
      "Dogtooth Stage": [
        {
          "name": "Apocalyptica",
          "spotify_id": "4Lm0pUvmisUHMdoky5ch2I"
        },
        {
          "name": "Alcest",
          "spotify_id": "0d5ZwMtCer8dQdOPAgWhe7"
        },
        {
          "name": "Cradle Of Filth",
          "spotify_id": "0NTSMFFapnyZfvmCwzcYPd"
        },
        {
          "name": "Sylosis",
          "spotify_id": "2RiGIRDi4GoJpDbjDnPVJl"
        },
        {
          "name": "Whitechapel",
          "spotify_id": "5274obTQJjzjyycRyJlfml"
        }
      ]
    }
  },
  {
    "festival_name": "Isle of Wight Festival",
    "start_date": "2025-06-19",
    "end_date": "2025-06-22",
    "main_stages": [
      "Main Stage"
    ],
    "stages": {
      "Main Stage": [
        {
          "name": "Sting",
          "spotify_id": "0Ty63ceoRnnJKVEYP0VQpk"
        },
        {
          "name": "Stereophonics",
          "spotify_id": "21UJ7PRWb3Etgsu99f8yo8"
        },
        {
          "name": "Justin Timberlake",
          "spotify_id": "31TPClRtHm23RisEBtV3X7"
        },
        {
          "name": "Faithless",
          "spotify_id": "5T4UKHhr4HGIC0VzdZQtAE"
        },
        {
          "name": "The Script",
          "spotify_id": "3AQRLZ9PuTAozP28Skbq8V"
        },
        {
          "name": "Jess Glynne",
          "spotify_id": "4ScCswdRlyA23odg9thgIO"
        },
        {
          "name": "Supergrass",
          "spotify_id": "0sHeX8oQ6o7xic3wMf4NBU"
        },
        {
          "name": "Busted",
          "spotify_id": "3Z6IRCo7umuk8K2XQy0ZDj"
        }
      ],
      "Big Top": [
        {
          "name": "Example",
          "spotify_id": "6Vh6UDWfu9PUSXSzAaB3CW"
        },
        {
          "name": "Clean Bandit",
          "spotify_id": "6MDME20pz9RveH9rEXvrOM"
        },
        {
          "name": "James",
          "spotify_id": "0qLNsNKm8bQcMoRFkR8Hmh"
        },
        {
          "name": "Lightning Seeds",
          "spotify_id": "757qdRKAuwXwaK3fGAE6rA"
        }
      ]
    }
  },
  {
    "festival_name": "Glastonbury Festival",
    "start_date": "2025-06-25",
    "end_date": "2025-06-29",
    "main_stages": [
      "Pyramid Stage",
      "Other Stage"
    ],
    "stages": {
      "Pyramid Stage": [
        {
          "name": "The 1975",
          "spotify_id": "3mIj9lX2MWuHmhNCA7LSCW"
        },
        {
          "name": "Neil Young & The Chrome Hearts",
          "spotify_id": "36E7oYfz3LLRto6l2WmDcD"
        },
        {
          "name": "Olivia Rodrigo",
          "spotify_id": "1McMsnEElThX1knmY4oliG"
        },
        {
          "name": "RAYE",
          "spotify_id": "5KKpBU5eC2tJDzf0wmlRp2"
        },
        {
          "name": "Rod Stewart",
          "spotify_id": "2y8Jo9CKhJvtfeKOsYzRdT"
        }
      ],
      "Other Stage": [
        {
          "name": "Charli XCX",
          "spotify_id": "25uiPmTg16RbhZWAqwLBy5"
        },
        {
          "name": "Loyle Carner",
          "spotify_id": "4oDjh8wNW5vDHyFRrDYC4k"
        },
        {
          "name": "The Prodigy",
          "spotify_id": "4k1ELeJKT1ISyDv8JivPpB"
        },
        {
          "name": "Wolf Alice",
          "spotify_id": "3btzEQD6sugImIHPMRgkwV"
        }
      ],
      "West Holts": [
        {
          "name": "Maribou State",
          "spotify_id": "7zrkALJ9ayRjzysp4QYoEg"
        },
        {
          "name": "Doechii",
          "spotify_id": "4E2rKHVDssGJm2SCDOMMJB"
        },
        {
          "name": "Overmono",
          "spotify_id": "01PnN11ovfen6xUOHfNpn3"
        },
        {
          "name": "Cymande",
          "spotify_id": "4hfcSstwnyuBoek1dQwLkG"
        }
      ]
    }
  },
  {
    "festival_name": "Wireless Festival",
    "start_date": "2025-07-11",
    "end_date": "2025-07-13",
    "main_stages": [
      "Main Stage"
    ],
    "stages": {
      "Main Stage": [
        {
          "name": "Drake",
          "spotify_id": "3TVXtAsR1Inumwj472S9r4"
        },
        {
          "name": "PARTYNEXTDOOR",
          "spotify_id": "2HPaUgqeutzr3jx5a9WyDV"
        },
        {
          "name": "Summer Walker",
          "spotify_id": "57LYzLEk2LcFghVwuWbcuS"
        },
        {
          "name": "Burna Boy",
          "spotify_id": "3wcj11K77LjEY1PkEazffa"
        },
        {
          "name": "Vybz Kartel",
          "spotify_id": "2NUz5P42WqkxilbI8ocN76"
        },
        {
          "name": "Boy Better Know",
          "spotify_id": "180XcSBai6RDpuElMcKk2v"
        }
      ]
    }
  },
  {
    "festival_name": "TRNSMT Festival",
    "start_date": "2025-07-11",
    "end_date": "2025-07-13",
    "main_stages": [
      "Main Stage"
    ],
    "stages": {
      "Main Stage": [
        {
          "name": "50 Cent",
          "spotify_id": "3q7HBObVc0L8jNeTe5Gofh"
        },
        {
          "name": "Biffy Clyro",
          "spotify_id": "1km0R7wy712AzLkA1WjKET"
        },
        {
          "name": "Snow Patrol",
          "spotify_id": "3rIZMv9rysU7JkLzEaC5Jp"
        },
        {
          "name": "The Script",
          "spotify_id": "3AQRLZ9PuTAozP28Skbq8V"
        },
        {
          "name": "Wet Leg",
          "spotify_id": "2TwOrUcYnAlIiKmVQkkoSZ"
        },
        {
          "name": "Fontaines D.C.",
          "spotify_id": "3SXwqSqAoBz9WCI9PDQzY6"
        }
      ],
      "King Tut's Stage": [
        {
          "name": "Twin Atlantic",
          "spotify_id": "4A9xtvezlouTD7H0kyUje9"
        },
        {
          "name": "Jake Bugg",
          "spotify_id": "4hf3caW9H8uFwwbv5pFjcg"
        },
        {
          "name": "Nina Nesbitt",
          "spotify_id": "7AzjETXRUKNRSJHMW9GIqd"
        },
        {
          "name": "The Lathums",
          "spotify_id": "6PXYvMeTixxDzYAYugMlbg"
        },
        {
          "name": "Kneecap",
          "spotify_id": "1ZVACPeq7ccGCoUXwtafUU"
        }
      ]
    }
  },
  {
    "festival_name": "Love Supreme Festival",
    "start_date": "2025-07-04",
    "end_date": "2025-07-06",
    "main_stages": [
      "Main Stage"
    ],
    "stages": {
      "Main Stage": [
        {
          "name": "Maxwell",
          "spotify_id": "2AOt5htsbtyaHd5Eq3kl3j"
        },
        {
          "name": "Jacob Collier",
          "spotify_id": "0QWrMNukfcVOmgEU0FEDyD"
        },
        {
          "name": "Nile Rodgers & Chic",
          "spotify_id": "3GMoVpWJy4smKuxFuFTwXC"
        },
        {
          "name": "Smokey Robinson",
          "spotify_id": "0h9smro0z3HqUbD94jotU8"
        },
        {
          "name": "En Vogue",
          "spotify_id": "5fikk4h5qbEebqK2Fc6e48"
        }
      ],
      "Big Top": [
        {
          "name": "The Roots",
          "spotify_id": "78xUyw6FkVZrRAtziFdtdu"
        },
        {
          "name": "Durand Jones & The Indications",
          "spotify_id": "6TVVIyd0fsRDGg6WzHKyTP"
        },
        {
          "name": "Stanley Clarke",
          "spotify_id": "1lGt9WgdYGpMnmwGkcCm05"
        },
        {
          "name": "Jamila Woods",
          "spotify_id": "4UodukR17NIQfNu5uaqm9B"
        },
        {
          "name": "Ravyn Lenae",
          "spotify_id": "5RTLRtXjbXI2lSXc6jxlAz"
        }
      ]
    }
  },
  {
    "festival_name": "Latitude Festival",
    "start_date": "2025-07-24",
    "end_date": "2025-07-27",
    "main_stages": [
      "Obelisk Arena"
    ],
    "stages": {
      "Obelisk Arena": [
        {
          "name": "Basement Jaxx",
          "spotify_id": "4YrKBkKSVeqDamzBPWVnSJ"
        },
        {
          "name": "Sting",
          "spotify_id": "0Ty63ceoRnnJKVEYP0VQpk"
        },
        {
          "name": "Fatboy Slim",
          "spotify_id": "4Y7tXHSEejGu1vQ9bwDdXW"
        },
        {
          "name": "Snow Patrol",
          "spotify_id": "3rIZMv9rysU7JkLzEaC5Jp"
        },
        {
          "name": "Hozier",
          "spotify_id": "2FXC3k01G6Gw61bmprjgqS"
        },
        {
          "name": "Elbow",
          "spotify_id": "0TJB3EE2efClsYIDQ8V2Jk"
        }
      ],
      "BBC Sounds Stage": [
        {
          "name": "Kaiser Chiefs",
          "spotify_id": "0LbLWjaweRbO4FDKYlbfNt"
        },
        {
          "name": "Leon Bridges",
          "spotify_id": "3qnGvpP8Yth1AqSBMqON5x"
        },
        {
          "name": "Maribou State",
          "spotify_id": "7zrkALJ9ayRjzysp4QYoEg"
        },
        {
          "name": "Clean Bandit",
          "spotify_id": "6MDME20pz9RveH9rEXvrOM"
        },
        {
          "name": "Sigrid",
          "spotify_id": "4TrraAsitQKl821DQY42cZ"
        }
      ]
    }
  },
  {
    "festival_name": "Kendal Calling",
    "start_date": "2025-07-31",
    "end_date": "2025-08-03",
    "main_stages": [
      "Main Stage"
    ],
    "stages": {
      "Main Stage": [
        {
          "name": "Courteeners",
          "spotify_id": "1NfJU4hy56Z4UM4iyIa1B2"
        },
        {
          "name": "Fatboy Slim",
          "spotify_id": "4Y7tXHSEejGu1vQ9bwDdXW"
        },
        {
          "name": "The Prodigy",
          "spotify_id": "4k1ELeJKT1ISyDv8JivPpB"
        },
        {
          "name": "Kaiser Chiefs",
          "spotify_id": "0LbLWjaweRbO4FDKYlbfNt"
        },
        {
          "name": "The Wombats",
          "spotify_id": "0Ya43ZKWHTKkAbkoJJkwIB"
        },
        {
          "name": "Travis",
          "spotify_id": "3bUwxJgNakzYKkqAVgZLlh"
        }
      ],
      "Calling Out Stage": [
        {
          "name": "Sophie Ellis-Bextor",
          "spotify_id": "2cBh5lVMg222FFuRU7EfDE"
        },
        {
          "name": "Skindred",
          "spotify_id": "3jTlKw98Ql1jGRPYqhqHap"
        },
        {
          "name": "Frank Turner & The Sleeping Souls",
          "spotify_id": "1mZu3rO7qSD09GdDpePHhY"
        },
        {
          "name": "Maxïmo Park",
          "spotify_id": "048FBwXjFYBWxSggPDipic"
        },
        {
          "name": "Scouting for Girls",
          "spotify_id": "2wpJOPmf1TIOzrB9mzHifd"
        }
      ]
    }
  },
  {
    "festival_name": "Camp Bestival (Dorset)",
    "start_date": "2025-07-25",
    "end_date": "2025-07-27",
    "main_stages": [
      "Castle Stage"
    ],
    "stages": {
      "Castle Stage": [
        {
          "name": "Sugababes",
          "spotify_id": "7rZNSLWMjTbwdLNskFbzFf"
        },
        {
          "name": "Tom Jones",
          "spotify_id": "1T0wRBO0CK0vK8ouUMqEl5"
        },
        {
          "name": "Lightning Seeds",
          "spotify_id": "757qdRKAuwXwaK3fGAE6rA"
        },
        {
          "name": "The Zutons",
          "spotify_id": "2qV7axHq9Jk7QqFcB3f05A"
        },
        {
          "name": "Andy and The Odd Socks",
          "spotify_id": "7FaeyOiIacUzZR8I3b7uGh"
        }
      ],
      "Big Top": [
        {
          "name": "Basement Jaxx (DJ Set)",
          "spotify_id": "4YrKBkKSVeqDamzBPWVnSJ"
        },
        {
          "name": "Annie Mac",
          "spotify_id": "41DZ1or3s4tphMQnLC5RNk"
        },
        {
          "name": "Goldie",
          "spotify_id": "2SYqJ3uDLLXZNyZdLKBy4M"
        },
        {
          "name": "Dub Pistols",
          "spotify_id": "4LYX3rRdXV2l99wR5YPFoK"
        },
        {
          "name": "Dreadzone",
          "spotify_id": "2hrrhKOVsxoCIZb9H4ZBCZ"
        }
      ]
    }
  },
  {
    "festival_name": "Wilderness Festival",
    "start_date": "2025-07-31",
    "end_date": "2025-08-03",
    "main_stages": [
      "Main Stage"
    ],
    "stages": {
      "Main Stage": [
        {
          "name": "Basement Jaxx",
          "spotify_id": "4YrKBkKSVeqDamzBPWVnSJ"
        },
        {
          "name": "Supergrass",
          "spotify_id": "0sHeX8oQ6o7xic3wMf4NBU"
        },
        {
          "name": "Wet Leg",
          "spotify_id": "2TwOrUcYnAlIiKmVQkkoSZ"
        },
        {
          "name": "Orbital",
          "spotify_id": "3csPCeXsj2wezyvkRFzvmV"
        },
        {
          "name": "Air",
          "spotify_id": "1P6U1dCeHxPui5pIrGmndZ"
        },
        {
          "name": "AURORA",
          "spotify_id": "1WgXqy2Dd70QQOU7Ay074N"
        }
      ],
      "The Valley": [
        {
          "name": "Annie Mac",
          "spotify_id": "41DZ1or3s4tphMQnLC5RNk"
        },
        {
          "name": "Gok Wan (DJ)",
          "spotify_id": "1kfqHPfj8yygKGMD3NrDE5"
        },
        {
          "name": "Gentleman's Dub Club",
          "spotify_id": "6AGZSUNP6AVZ2BTxUsbJsr"
        },
        {
          "name": "Jalen Ngonda",
          "spotify_id": "2kEDso93O2hDgCbnuiSkkZ"
        },
        {
          "name": "Women In Jazz Takeover",
          "spotify_id": "7qShKycqNUP0GLEiTENDVZ"
        }
      ]
    }
  },
  {
    "festival_name": "Boomtown Fair: Chapter Four",
    "start_date": "2025-08-06",
    "end_date": "2025-08-10",
    "main_stages": [
      "Town Centre"
    ],
    "stages": {
      "Town Centre": [
        {
          "name": "Sean Paul",
          "spotify_id": "3Isy6kedDrgPYoTS1dazA9"
        },
        {
          "name": "Maribou State",
          "spotify_id": "7zrkALJ9ayRjzysp4QYoEg"
        },
        {
          "name": "Sex Pistols feat. Frank Carter",
          "spotify_id": "1u7kkVrr14iBvrpYnZILJR"
        },
        {
          "name": "Pa Salieu",
          "spotify_id": "290nCNEce1y6rfoJiO2rK7"
        }
      ],
      "Origin (The Lion's Gate)": [
        {
          "name": "Overmono",
          "spotify_id": "01PnN11ovfen6xUOHfNpn3"
        },
        {
          "name": "Nia Archives",
          "spotify_id": "7BMR0fwtEvzGtK4rNGdoiQ"
        },
        {
          "name": "Joy Orbison",
          "spotify_id": "0aIpJqqTLf683ojWREc5lg"
        },
        {
          "name": "I Hate Models",
          "spotify_id": "0KqSULB80ft2H3aFg6kJmN"
        },
        {
          "name": "Anfisa Letyago",
          "spotify_id": "7icoOm5fKKPo49jVxoj1Cq"
        }
      ]
    }
  },
  {
    "festival_name": "Boardmasters",
    "start_date": "2025-08-06",
    "end_date": "2025-08-10",
    "main_stages": [
      "Main Stage"
    ],
    "stages": {
      "Main Stage": [
        {
          "name": "RAYE",
          "spotify_id": "5KKpBU5eC2tJDzf0wmlRp2"
        },
        {
          "name": "The Prodigy",
          "spotify_id": "4k1ELeJKT1ISyDv8JivPpB"
        },
        {
          "name": "Nelly Furtado",
          "spotify_id": "2jw70GZXlAI8QzWeY2bgRc"
        },
        {
          "name": "London Grammar",
          "spotify_id": "3Bd1cgCjtCI32PYvDC3ynO"
        },
        {
          "name": "Wet Leg",
          "spotify_id": "2TwOrUcYnAlIiKmVQkkoSZ"
        },
        {
          "name": "Maribou State",
          "spotify_id": "7zrkALJ9ayRjzysp4QYoEg"
        }
      ],
      "Unleashed Stage": [
        {
          "name": "Kaiser Chiefs",
          "spotify_id": "0LbLWjaweRbO4FDKYlbfNt"
        },
        {
          "name": "Natasha Bedingfield",
          "spotify_id": "7o95ZoZt5ZYn31e9z1Hc0a"
        },
        {
          "name": "Bru-C",
          "spotify_id": "7GDrXlpRrdG29o4n0pNR5D"
        },
        {
          "name": "Franz Ferdinand",
          "spotify_id": "0XNa1vTidXlvJ2gHSsRi4A"
        },
        {
          "name": "Interplanetary Criminal",
          "spotify_id": "6uJ51uV5rYzu1MJkC4CceI"
        }
      ]
    }
  },
  {
    "festival_name": "Green Man Festival",
    "start_date": "2025-08-14",
    "end_date": "2025-08-17",
    "main_stages": [
      "Mountain Stage"
    ],
    "stages": {
      "Mountain Stage": [
        {
          "name": "Underworld",
          "spotify_id": "1PXHzxRDiLnjqNrRn2Xbsa"
        },
        {
          "name": "Wet Leg",
          "spotify_id": "2TwOrUcYnAlIiKmVQkkoSZ"
        },
        {
          "name": "TV On The Radio",
          "spotify_id": "3HJIB8sYPyxrFGuwvKXSLR"
        },
        {
          "name": "Kneecap",
          "spotify_id": "1ZVACPeq7ccGCoUXwtafUU"
        },
        {
          "name": "Beth Gibbons",
          "spotify_id": "6Lt6KFXX3P0v6vfrynQAMo"
        }
      ],
      "Far Out Stage": [
        {
          "name": "Black Country, New Road",
          "spotify_id": "3PP6ghmOlDl2jaKaH0avUN"
        },
        {
          "name": "Viagra Boys",
          "spotify_id": "2nAKP6etu8wXNnezKXgqgg"
        },
        {
          "name": "Perfume Genius",
          "spotify_id": "2ueoLVCXQ948OfhVvAy3Nn"
        },
        {
          "name": "John Grant",
          "spotify_id": "3TScZ6zJkavDy0tqoGqiCf"
        },
        {
          "name": "Los Campesinos!",
          "spotify_id": "6FlOCziOXI157pvUREAh3E"
        }
      ]
    }
  },
  {
    "festival_name": "Creamfields",
    "start_date": "2025-08-21",
    "end_date": "2025-08-24",
    "main_stages": [
      "Arc Stage"
    ],
    "stages": {
      "Arc Stage": [
        {
          "name": "Swedish House Mafia",
          "spotify_id": "1h6Cn3P4NGzXbaXidqURXs"
        },
        {
          "name": "David Guetta",
          "spotify_id": "1Cs0zKBU1kc0i8ypK3B9ai"
        },
        {
          "name": "Martin Garrix",
          "spotify_id": "60d24wfXkVzDSfLS6hyCjZ"
        },
        {
          "name": "Chase & Status",
          "spotify_id": "3jNkaOXasoc7RsxdchvEVq"
        },
        {
          "name": "Hardwell",
          "spotify_id": "6BrvowZBreEkXzJQMpL174"
        },
        {
          "name": "Dimitri Vegas & Like Mike",
          "spotify_id": "73jBynjsVtofjRpdpRAJGk"
        }
      ],
      "Steel Yard": [
        {
          "name": "Andy C",
          "spotify_id": "75HK7rgkmDMTnWwwmcN53N"
        },
        {
          "name": "Sub Focus",
          "spotify_id": "0QaSiI5TLA4N7mcsdxShDO"
        },
        {
          "name": "Hybrid Minds",
          "spotify_id": "05lF0DUkLJqiW5o70SScyR"
        },
        {
          "name": "Four Tet",
          "spotify_id": "7Eu1txygG6nJttLHbZdQOh"
        },
        {
          "name": "Eric Prydz",
          "spotify_id": "5sm0jQ1mq0dusiLtDJ2b4R"
        },
        {
          "name": "Fatboy Slim",
          "spotify_id": "4Y7tXHSEejGu1vQ9bwDdXW"
        }
      ]
    }
  },
  {
    "festival_name": "Reading Festival",
    "start_date": "2025-08-22",
    "end_date": "2025-08-24",
    "main_stages": [
      "Main Stage East",
      "Main Stage West"
    ],
    "stages": {
      "Main Stage East": [
        {
          "name": "Bring Me The Horizon",
          "spotify_id": "1Ffb6ejR6Fe5IamqA5oRUF"
        },
        {
          "name": "Travis Scott",
          "spotify_id": "0Y5tJX1MQlPlqiwlOH1tJY"
        },
        {
          "name": "Limp Bizkit",
          "spotify_id": "165ZgPlLkK7bf5bDoFc6Sb"
        },
        {
          "name": "Becky Hill",
          "spotify_id": "4EPJlUEBy49EX1wuFOvtjK"
        }
      ],
      "Main Stage West": [
        {
          "name": "Hozier",
          "spotify_id": "2FXC3k01G6Gw61bmprjgqS"
        },
        {
          "name": "Chappell Roan",
          "spotify_id": "7GlBOeep6PqTfFi59PTUUN"
        },
        {
          "name": "D-Block Europe",
          "spotify_id": "5VadK1havLhK1OpKYsXv9y"
        },
        {
          "name": "AJ Tracey",
          "spotify_id": "4Xi6LSfFqv26XgP9NKN26U"
        }
      ],
      "Festival Republic Stage": [
        {
          "name": "Enter Shikari",
          "spotify_id": "31jvzuB4ikftPQZJwrYfCF"
        },
        {
          "name": "Conan Gray",
          "spotify_id": "4Uc8Dsxct0oMqx0P6i60ea"
        },
        {
          "name": "Amyl and The Sniffers",
          "spotify_id": "3NqV2DJoAWsjl787bWaHW7"
        },
        {
          "name": "Wallows",
          "spotify_id": "0NIPkIjTV8mB795yEIiPYL"
        }
      ]
    }
  },
  {
    "festival_name": "Leeds Festival",
    "start_date": "2025-08-22",
    "end_date": "2025-08-24",
    "main_stages": [
      "Main Stage East",
      "Main Stage West"
    ],
    "stages": {
      "Main Stage East": [
        {
          "name": "Bring Me The Horizon",
          "spotify_id": "1Ffb6ejR6Fe5IamqA5oRUF"
        },
        {
          "name": "Travis Scott",
          "spotify_id": "0Y5tJX1MQlPlqiwlOH1tJY"
        },
        {
          "name": "Limp Bizkit",
          "spotify_id": "165ZgPlLkK7bf5bDoFc6Sb"
        },
        {
          "name": "Becky Hill",
          "spotify_id": "4EPJlUEBy49EX1wuFOvtjK"
        }
      ],
      "Main Stage West": [
        {
          "name": "Hozier",
          "spotify_id": "2FXC3k01G6Gw61bmprjgqS"
        },
        {
          "name": "Chappell Roan",
          "spotify_id": "7GlBOeep6PqTfFi59PTUUN"
        },
        {
          "name": "D-Block Europe",
          "spotify_id": "5VadK1havLhK1OpKYsXv9y"
        },
        {
          "name": "AJ Tracey",
          "spotify_id": "4Xi6LSfFqv26XgP9NKN26U"
        }
      ],
      "Festival Republic Stage": [
        {
          "name": "Enter Shikari",
          "spotify_id": "31jvzuB4ikftPQZJwrYfCF"
        },
        {
          "name": "Conan Gray",
          "spotify_id": "4Uc8Dsxct0oMqx0P6i60ea"
        },
        {
          "name": "Amyl and The Sniffers",
          "spotify_id": "3NqV2DJoAWsjl787bWaHW7"
        },
        {
          "name": "Wallows",
          "spotify_id": "0NIPkIjTV8mB795yEIiPYL"
        }
      ]
    }
  },
  {
    "festival_name": "Victorious Festival",
    "start_date": "2025-08-22",
    "end_date": "2025-08-24",
    "main_stages": [
      "Common Stage"
    ],
    "stages": {
      "Common Stage": [
        {
          "name": "Kings of Leon",
          "spotify_id": "2qk9voo8llSGYcZ6xrBzKx"
        },
        {
          "name": "Queens of the Stone Age",
          "spotify_id": "4pejUc4iciQfgdX6OKulQn"
        },
        {
          "name": "Vampire Weekend",
          "spotify_id": "5BvJzeQpmsdsFp4HGUYUEx"
        },
        {
          "name": "Nelly Furtado",
          "spotify_id": "2jw70GZXlAI8QzWeY2bgRc"
        }
      ],
      "Castle Stage": [
        {
          "name": "Bloc Party",
          "spotify_id": "3MM8mtgFzaEJsqbjZBSsHJ"
        },
        {
          "name": "Michael Kiwanuka",
          "spotify_id": "0bzfPKdbXL5ezYW2z3UGQj"
        },
        {
          "name": "Madness",
          "spotify_id": "4AYkFtEBnNnGuoo8HaHErd"
        },
        {
          "name": "Travis",
          "spotify_id": "3bUwxJgNakzYKkqAVgZLlh"
        }
      ]
    }
  },
  {
    "festival_name": "End of the Road Festival",
    "start_date": "2025-08-28",
    "end_date": "2025-08-31",
    "main_stages": [
      "Woods Stage"
    ],
    "stages": {
      "Woods Stage": [
        {
          "name": "Caribou",
          "spotify_id": "4aEnNH9PuU1HF3TsZTru54"
        },
        {
          "name": "Father John Misty",
          "spotify_id": "2kGBy2WHvF0VdZyqiVCkDT"
        },
        {
          "name": "Self Esteem",
          "spotify_id": "3K9muOlJVKLgH4SIwwZiDe"
        },
        {
          "name": "Sharon Van Etten & the Attachment Theory",
          "spotify_id": "2wJ4vsxWd7df7dRU4KcoDe"
        },
        {
          "name": "Viagra Boys",
          "spotify_id": "2nAKP6etu8wXNnezKXgqgg"
        }
      ],
      "Garden Stage": [
        {
          "name": "Black Country, New Road",
          "spotify_id": "3PP6ghmOlDl2jaKaH0avUN"
        },
        {
          "name": "Matt Berninger",
          "spotify_id": "27jRNjIvlUcGN7FBRDnqhp"
        },
        {
          "name": "Katy J Pearson",
          "spotify_id": "6xBsaFua2lgAUlNv8Yh0nQ"
        },
        {
          "name": "Viagra Boys",
          "spotify_id": "2nAKP6etu8wXNnezKXgqgg"
        },
        {
          "name": "DIIV",
          "spotify_id": "4OrizGCKhOrW6iDDJHN9xd"
        }
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
export const getOrganizedArtistsByFestival = (festivalId: string): { stageName: string; artists: FestivalArtist[]; isMainStage: boolean }[] => {
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
    const artists = festival.stages[stageName].sort((a, b) => a.name.localeCompare(b.name));
    return {
      stageName,
      artists,
      isMainStage: festival.main_stages.includes(stageName)
    };
  });
};
