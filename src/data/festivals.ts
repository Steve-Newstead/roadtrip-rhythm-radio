
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
    "main_stages": ["The Valley"],
    "stages": {
      "The Valley": [
        { "name": "Charli XCX", "spotify_id": "25uiPmTg16RbhZWAqwLBy5" },
        { "name": "Peggy Gou", "spotify_id": "2mLA48B366zkELXYx7hcDN" },
        { "name": "Confidence Man", "spotify_id": "0RwXnFrEoI8tltFvYpJgP6" },
        { "name": "Lola Young", "spotify_id": "67FB4n52MgexGQIG8s0yUH" },
        { "name": "Marc Rebillet", "spotify_id": "72udTJKu1pGovvS9aCYGMI" },
        { "name": "Jodie Harsh", "spotify_id": "0470FSE19wkoZe4R06GW9i" },
        { "name": "Gina Breeze", "spotify_id": "4Mlde6hHYl7p4MTu2nj8yv" }
      ],
      "Hangar": [
        { "name": "Bicep", "spotify_id": "73A3bLnfnz5BoQjb4gNCga" },
        { "name": "Overmono", "spotify_id": "01PnN11ovfen6xUOHfNpn3" },
        { "name": "Ewan McVicar", "spotify_id": "4PNqWiZ5tXuRBWZTKOvRfB" },
        { "name": "DJ Heartstring", "spotify_id": "7ARWtrNBKJO8VUd058uQGF" },
        { "name": "Effy", "spotify_id": "2JadQfndYraDsnDW5jYyxW" }
      ],
      "Big Top": [
        { "name": "Armand Van Helden", "spotify_id": "3hv9jJF3adDNsBSIQDqcjp" },
        { "name": "D.O.D", "spotify_id": "5RyFg3B2n7P7nHHcTFdG0L" },
        { "name": "Mau P", "spotify_id": "6HBocnlzUQtB8dN7CLDVwu" },
        { "name": "Paul Woolford", "spotify_id": "1qHCqW26HNNu6LlFQ6xz8W" },
        { "name": "Sam Divine", "spotify_id": "5pCV0vZNQLyVjpaOkQmhZT" }
      ]
    }
  },
  {
    "festival_name": "Download Festival",
    "start_date": "2025-06-13",
    "end_date": "2025-06-15",
    "main_stages": ["Apex Stage"],
    "stages": {
      "Apex Stage": [
        { "name": "Green Day", "spotify_id": "5EBcv52DLOZ6Jf3dW9ZE4Z" },
        { "name": "Weezer", "spotify_id": "3jOstUTkEu2JkjvRdBA5Gu" },
        { "name": "Jimmy Eat World", "spotify_id": "1u7kkVrr14iBvrpYnZILZR" },
        { "name": "Rise Against", "spotify_id": "6Wr3hh341P84m3EI8qdn9O" },
        { "name": "Sleep Token", "spotify_id": "5WDW17pThSrVy9loR4Dw3K" },
        { "name": "Don Broco", "spotify_id": "2RM4jf1Xa9zPgMGRDiht8O" },
        { "name": "Bring Me The Horizon", "spotify_id": "1Ffb6ejR6Fe5IamqA5oRUF" }
      ],
      "Opus Stage": [
        { "name": "Within Temptation", "spotify_id": "3jTLp361kS8YV0i1bQrv6I" },
        { "name": "Opeth", "spotify_id": "0ybFZ2Ab08V8hueghSXm6E" },
        { "name": "Lorna Shore", "spotify_id": "4GZ0jFNVK9J36bS4TG6Ulk" },
        { "name": "Steel Panther", "spotify_id": "13vbWYHIhHhD7oYc8yugOX" },
        { "name": "Airbourne", "spotify_id": "28KyXl6kZ0ZzQ3DqJFMpIu" }
      ],
      "Avalanche Stage": [
        { "name": "McFly", "spotify_id": "0oOet2f43PA68X5RxKobEy" },
        { "name": "Twin Atlantic", "spotify_id": "3Ngh2zDBRPEriyxQDAMKd1" },
        { "name": "Dayseeker", "spotify_id": "6sHCvZe1PHrOAuYlwTLNH4" },
        { "name": "Kids In Glass Houses", "spotify_id": "7sDXC8m14MtEjqyNeXvt2f" }
      ],
      "Dogtooth Stage": [
        { "name": "Apocalyptica", "spotify_id": "6k7nuZ3T2CeExLiUIR69fT" },
        { "name": "Alcest", "spotify_id": "0D06v8MWi4Q4kQg4pc5BLB" },
        { "name": "Cradle Of Filth", "spotify_id": "6sKC8JEuuWWpCd8QJ9Dx8y" },
        { "name": "Sylosis", "spotify_id": "4Ae15JAFv6LZ65BTx9n8vA" },
        { "name": "Whitechapel", "spotify_id": "3ZztVuWxHzNpl0THurTFCv" }
      ]
    }
  },
  {
    "festival_name": "Isle of Wight Festival",
    "start_date": "2025-06-19",
    "end_date": "2025-06-22",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        { "name": "Sting", "spotify_id": "0Ty63ceoRnnJKVEYP0VQpk" },
        { "name": "Stereophonics", "spotify_id": "3DV04kU0R9fYxtbQH51OPl" },
        { "name": "Justin Timberlake", "spotify_id": "31TPClRtHm23RisEBtV3X7" },
        { "name": "Faithless", "spotify_id": "5BvJzeQpmsdsFp4HGUYUEx" },
        { "name": "The Script", "spotify_id": "3AQRLZ9PuTAozP28Skbq8V" },
        { "name": "Jess Glynne", "spotify_id": "2wY79sveU1sp5g7SokKOiI" },
        { "name": "Supergrass", "spotify_id": "3A5tHz1SfngyOZM2gItYKu" },
        { "name": "Busted", "spotify_id": "7vN9hcNIc1lFdS3ZRZdUZf" }
      ],
      "Big Top": [
        { "name": "Example", "spotify_id": "72sG4anvkQSkbMO6R2R7NG" },
        { "name": "Clean Bandit", "spotify_id": "6MDME20pz9RveH9rEXvrOM" },
        { "name": "James", "spotify_id": "0uq5PttqEjj3IH1bzwcrXF" },
        { "name": "Lightning Seeds", "spotify_id": "58JhxvUT5hhBSCthjHoxnN" }
      ]
    }
  },
  {
    "festival_name": "Glastonbury Festival",
    "start_date": "2025-06-25",
    "end_date": "2025-06-29",
    "main_stages": ["Pyramid Stage", "Other Stage"],
    "stages": {
      "Pyramid Stage": [
        { "name": "The 1975", "spotify_id": "3mIj9lX2MWuHmhNCA7LSCW" },
        { "name": "Neil Young & The Chrome Hearts", "spotify_id": "1bWDZKa5OeMzata7HS0vaZ" },
        { "name": "Olivia Rodrigo", "spotify_id": "1McMsnEElThX1knmY4oliG" },
        { "name": "RAYE", "spotify_id": "4oLeXFyACqeem2VImYeBFe" },
        { "name": "Rod Stewart", "spotify_id": "0k17h0D3J5VfsdmQ1iZtE9" }
      ],
      "Other Stage": [
        { "name": "Charli XCX", "spotify_id": "25uiPmTg16RbhZWAqwLBy5" },
        { "name": "Loyle Carner", "spotify_id": "20cg4WUzHThz3iOnd8OzZT" },
        { "name": "The Prodigy", "spotify_id": "2y8Jo9CKhJvtfeKOsYzRdT" },
        { "name": "Wolf Alice", "spotify_id": "5LMPYALTpBmlP4t72aqb5W" }
      ],
      "West Holts": [
        { "name": "Maribou State", "spotify_id": "1vSN1fsvrzpbttOYGsliDr" },
        { "name": "Doechii", "spotify_id": "5nki7yRhxgM509M5ADlN1p" },
        { "name": "Overmono", "spotify_id": "01PnN11ovfen6xUOHfNpn3" },
        { "name": "Cymande", "spotify_id": "4fGfjrOAOOD2FX7O0URkPf" }
      ]
    }
  },
  {
    "festival_name": "Wireless Festival",
    "start_date": "2025-07-11",
    "end_date": "2025-07-13",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        { "name": "Drake", "spotify_id": "3TVXtAsR1Inumwj472S9r4" },
        { "name": "PARTYNEXTDOOR", "spotify_id": "2HPaUgqeutzr3jx5a9WyDV" },
        { "name": "Summer Walker", "spotify_id": "57LYzLEk2LcFghVwuWbcuS" },
        { "name": "Burna Boy", "spotify_id": "3wcj11K77LjEY1PkEazffa" },
        { "name": "Vybz Kartel", "spotify_id": "1Z9C1zWXAHxcYQZYG8c6Tl" },
        { "name": "Boy Better Know", "spotify_id": "2PrXVvXTGydnNLJHY2dwR3" }
      ]
    }
  },
  {
    "festival_name": "TRNSMT Festival",
    "start_date": "2025-07-11",
    "end_date": "2025-07-13",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        { "name": "50 Cent", "spotify_id": "3q7HBObVc0L8jNeTe5Gofh" },
        { "name": "Biffy Clyro", "spotify_id": "50JJSqHUf2RQ9xsHs0KMHg" },
        { "name": "Snow Patrol", "spotify_id": "3KUoVbfcCsT7V8e9SS9bGq" },
        { "name": "The Script", "spotify_id": "3AQRLZ9PuTAozP28Skbq8V" },
        { "name": "Wet Leg", "spotify_id": "757aE44tKEUQEqRuT6GnEB" },
        { "name": "Fontaines D.C.", "spotify_id": "2FYDC3s2Z5Z1BGKXfCUdUk" }
      ],
      "King Tut's Stage": [
        { "name": "Twin Atlantic", "spotify_id": "3Ngh2zDBRPEriyxQDAMKd1" },
        { "name": "Jake Bugg", "spotify_id": "7ErX5Oj4QewTN2sKylagFZ" },
        { "name": "Nina Nesbitt", "spotify_id": "2YLf5VfGTb4PFTEX3apnQO" },
        { "name": "The Lathums", "spotify_id": "2t0FImEN4O9wGoLqFV2jvq" },
        { "name": "Kneecap", "spotify_id": "4pL2zH5A82PrFlujzT3sMh" }
      ]
    }
  },
  {
    "festival_name": "Love Supreme Festival",
    "start_date": "2025-07-04",
    "end_date": "2025-07-06",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        { "name": "Maxwell", "spotify_id": "5KNNVgR6LBIABRIomyCwKJ" },
        { "name": "Jacob Collier", "spotify_id": "0QWrMNukfcVOmgEU0FEDyD" },
        { "name": "Nile Rodgers & Chic", "spotify_id": "4o8yFFhmKZzRN5HtLJHPxK" },
        { "name": "Smokey Robinson", "spotify_id": "0h9smro0z3HqUbD94jotU8" },
        { "name": "En Vogue", "spotify_id": "3We0C8Rq6ZUSmm6BxlD36z" }
      ],
      "Big Top": [
        { "name": "The Roots", "spotify_id": "78xUyw6FkVZrRAtziFdtdu" },
        { "name": "Durand Jones & The Indications", "spotify_id": "4gu4ImW2CUu9ofTQukopxc" },
        { "name": "Stanley Clarke", "spotify_id": "0yfFJ2WcWnRzhGpcm0kDjE" },
        { "name": "Jamila Woods", "spotify_id": "0lbnCjfY4L1CCsT4IYpC9B" },
        { "name": "Ravyn Lenae", "spotify_id": "1VJFWsShZBgUKJkK2C3s2I" }
      ]
    }
  },
  {
    "festival_name": "Latitude Festival",
    "start_date": "2025-07-24",
    "end_date": "2025-07-27",
    "main_stages": ["Obelisk Arena"],
    "stages": {
      "Obelisk Arena": [
        { "name": "Basement Jaxx", "spotify_id": "4LLpKhyESsyAXpc4laK94U" },
        { "name": "Sting", "spotify_id": "0Ty63ceoRnnJKVEYP0VQpk" },
        { "name": "Fatboy Slim", "spotify_id": "4YXycRbyyAE0wozTk7QMEY" },
        { "name": "Snow Patrol", "spotify_id": "3KUoVbfcCsT7V8e9SS9bGq" },
        { "name": "Hozier", "spotify_id": "2Fxmhks0bxGSBdJ92vM42m" },
        { "name": "Elbow", "spotify_id": "3bz5qp2Fl7l8RdlPhc6aOV" }
      ],
      "BBC Sounds Stage": [
        { "name": "Kaiser Chiefs", "spotify_id": "70BYFdaZbEKbeauJ670ysI" },
        { "name": "Leon Bridges", "spotify_id": "5ihY290YPGc3aY2xTyx7Gy" },
        { "name": "Maribou State", "spotify_id": "1vSN1fsvrzpbttOYGsliDr" },
        { "name": "Clean Bandit", "spotify_id": "6MDME20pz9RveH9rEXvrOM" },
        { "name": "Sigrid", "spotify_id": "4bZGW3H0hF6rycta1gYjMv" }
      ]
    }
  },
  {
    "festival_name": "Kendal Calling",
    "start_date": "2025-07-31",
    "end_date": "2025-08-03",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        { "name": "Courteeners", "spotify_id": "6FBDaR13swtiWwGhX1WQsP" },
        { "name": "Fatboy Slim", "spotify_id": "4YXycRbyyAE0wozTk7QMEY" },
        { "name": "The Prodigy", "spotify_id": "2y8Jo9CKhJvtfeKOsYzRdT" },
        { "name": "Kaiser Chiefs", "spotify_id": "70BYFdaZbEKbeauJ670ysI" },
        { "name": "The Wombats", "spotify_id": "0eHg4U1v6r20uZTb7U6sZh" },
        { "name": "Travis", "spotify_id": "5M52tdBnJaKSvOpJGz8mfZ" }
      ],
      "Calling Out Stage": [
        { "name": "Sophie Ellis-Bextor", "spotify_id": "5aMBY3SimNzTnvpDP4sikZ" },
        { "name": "Skindred", "spotify_id": "4DwruRncWttfvXmITKHkOK" },
        { "name": "Frank Turner & The Sleeping Souls", "spotify_id": "7oZNLr0bU0if2wYhUS1e6H" },
        { "name": "Maxïmo Park", "spotify_id": "7J4zSoJIz3KRBhdnrh0Iow" },
        { "name": "Scouting for Girls", "spotify_id": "4AVFqumd2ogHFlRbKIjp1t" }
      ]
    }
  },
  {
    "festival_name": "Camp Bestival (Dorset)",
    "start_date": "2025-07-25",
    "end_date": "2025-07-27",
    "main_stages": ["Castle Stage"],
    "stages": {
      "Castle Stage": [
        { "name": "Sugababes", "spotify_id": "2hoL5PtV6YQTQQCuwUDnQ8" },
        { "name": "Tom Jones", "spotify_id": "4XquDVA8pkg5Lx91No1JxB" },
        { "name": "Lightning Seeds", "spotify_id": "58JhxvUT5hhBSCthjHoxnN" },
        { "name": "The Zutons", "spotify_id": "78sWHn9otW7VMVFFk4byQE" },
        { "name": "Andy and The Odd Socks", "spotify_id": "4lpZa6FohGMbYp0aUTLkbO" }
      ],
      "Big Top": [
        { "name": "Basement Jaxx (DJ Set)", "spotify_id": "4LLpKhyESsyAXpc4laK94U" },
        { "name": "Annie Mac", "spotify_id": "6sUwnNq9R5NaB7yVYvYhB4" },
        { "name": "Goldie", "spotify_id": "6mclQIrK9etIugC2Jhk1uo" },
        { "name": "Dub Pistols", "spotify_id": "0UAkBQ7KUxB9SxLaYw47Zz" },
        { "name": "Dreadzone", "spotify_id": "5BKcZrc4sSfjFS9sc2GhYA" }
      ]
    }
  },
  {
    "festival_name": "Wilderness Festival",
    "start_date": "2025-07-31",
    "end_date": "2025-08-03",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        { "name": "Basement Jaxx", "spotify_id": "4LLpKhyESsyAXpc4laK94U" },
        { "name": "Supergrass", "spotify_id": "3A5tHz1SfngyOZM2gItYKu" },
        { "name": "Wet Leg", "spotify_id": "757aE44tKEUQEqRuT6GnEB" },
        { "name": "Orbital", "spotify_id": "2aF8f8A8PzfyyZpJTzQw1I" },
        { "name": "Air", "spotify_id": "1moxjboGR7GNWYIMWsRjgG" },
        { "name": "AURORA", "spotify_id": "5Y0p0RSHk10OqU5X4qixOK" }
      ],
      "The Valley": [
        { "name": "Annie Mac", "spotify_id": "6sUwnNq9R5NaB7yVYvYhB4" },
        { "name": "Gok Wan (DJ)", "spotify_id": "3xD8aJ6Ui5EB6DKnbODpHO" },
        { "name": "Gentleman's Dub Club", "spotify_id": "3vuQGI52H4BGnhjDG53prC" },
        { "name": "Jalen Ngonda", "spotify_id": "2Klpbyuv6wtS8rQfjY8kgk" },
        { "name": "Women In Jazz Takeover", "spotify_id": null }
      ]
    }
  },
  {
    "festival_name": "Boomtown Fair: Chapter Four",
    "start_date": "2025-08-06",
    "end_date": "2025-08-10",
    "main_stages": ["Town Centre"],
    "stages": {
      "Town Centre": [
        { "name": "Sean Paul", "spotify_id": "3Isy6kedDrgPYoTS1dazA9" },
        { "name": "Maribou State", "spotify_id": "1vSN1fsvrzpbttOYGsliDr" },
        { "name": "Sex Pistols feat. Frank Carter", "spotify_id": null },
        { "name": "Pa Salieu", "spotify_id": "5tgYJ0ZgtLWiAflGBV8Jkr" }
      ],
      "Origin (The Lion's Gate)": [
        { "name": "Overmono", "spotify_id": "01PnN11ovfen6xUOHfNpn3" },
        { "name": "Nia Archives", "spotify_id": "2pX5wBJn0xQzUYOGJPaf4e" },
        { "name": "Joy Orbison", "spotify_id": "5nG7Idt8A7OYGPzauCClAI" },
        { "name": "I Hate Models", "spotify_id": "1WBys5iGkZ6Pt6ZmqiQXOB" },
        { "name": "Anfisa Letyago", "spotify_id": "7dVD50iFBa0H0AT4eG21pg" }
      ]
    }
  },
  {
    "festival_name": "Boardmasters",
    "start_date": "2025-08-06",
    "end_date": "2025-08-10",
    "main_stages": ["Main Stage"],
    "stages": {
      "Main Stage": [
        { "name": "RAYE", "spotify_id": "4oLeXFyACqeem2VImYeBFe" },
        { "name": "The Prodigy", "spotify_id": "2y8Jo9CKhJvtfeKOsYzRdT" },
        { "name": "Nelly Furtado", "spotify_id": "2jw70GZXlAI8QzWeY2bgRc" },
        { "name": "London Grammar", "spotify_id": "2P5sC9cVZDToPxyomzF1UH" },
        { "name": "Wet Leg", "spotify_id": "757aE44tKEUQEqRuT6GnEB" },
        { "name": "Maribou State", "spotify_id": "1vSN1fsvrzpbttOYGsliDr" }
      ],
      "Unleashed Stage": [
        { "name": "Kaiser Chiefs", "spotify_id": "70BYFdaZbEKbeauJ670ysI" },
        { "name": "Natasha Bedingfield", "spotify_id": "1DwjxHgOQeFY4xe5c2Z83B" },
        { "name": "Bru-C", "spotify_id": "60RP0Y4cdNlwAbFJSgURsg" },
        { "name": "Franz Ferdinand", "spotify_id": "0XNa1vTidXlvJ2gHSsRi4A" },
        { "name": "Interplanetary Criminal", "spotify_id": "64j4Etu0A9kkO6JTwjDJmk" }
      ]
    }
  },
  {
    "festival_name": "Green Man Festival",
    "start_date": "2025-08-14",
    "end_date": "2025-08-17",
    "main_stages": ["Mountain Stage"],
    "stages": {
      "Mountain Stage": [
        { "name": "Underworld", "spotify_id": "3QMjQg0J2pzlNgFHkUZPSp" },
        { "name": "Wet Leg", "spotify_id": "757aE44tKEUQEqRuT6GnEB" },
        { "name": "TV On The Radio", "spotify_id": "3WfJ1OtrWI7RViX9DMyEGy" },
        { "name": "Kneecap", "spotify_id": "4pL2zH5A82PrFlujzT3sMh" },
        { "name": "Beth Gibbons", "spotify_id": "4JD5H9vTpO1RSnAjnX6Lmh" }
      ],
      "Far Out Stage": [
        { "name": "Black Country, New Road", "spotify_id": "5SXEylV07TC57eanSxxg4R" },
        { "name": "Viagra Boys", "spotify_id": "1A0WviXgjGueMmbhSDoXQJ" },
        { "name": "Perfume Genius", "spotify_id": "4Ge8xMJNwt6EEXOzVXju9a" },
        { "name": "John Grant", "spotify_id": "3Iwwz1uqbkNaeNR7bZwrYi" },
        { "name": "Los Campesinos!", "spotify_id": "3W6zswp5THsSKYLICUbDTZ" }
      ]
    }
  },
  {
    "festival_name": "Creamfields",
    "start_date": "2025-08-21",
    "end_date": "2025-08-24",
    "main_stages": ["Arc Stage"],
    "stages": {
      "Arc Stage": [
        { "name": "Swedish House Mafia", "spotify_id": "1i8SpTcr7yvPOmcqrbnVXY" },
        { "name": "David Guetta", "spotify_id": "1Cs0zKBU1kc0i8ypK3B9ai" },
        { "name": "Martin Garrix", "spotify_id": "60d24wfXkVzDSfLS6hyCjZ" },
        { "name": "Chase & Status", "spotify_id": "50hA3zrh9K1lVo2re0jBJJ" },
        { "name": "Hardwell", "spotify_id": "6kBDZFXuLrZgHnvm5BGGx0" },
        { "name": "Dimitri Vegas & Like Mike", "spotify_id": "4D75GcNG95ebPtNvoNVXhz" }
      ],
      "Steel Yard": [
        { "name": "Andy C", "spotify_id": "7IAXZaLTb6nkJNdVaM8LLj" },
        { "name": "Sub Focus", "spotify_id": "4AVFqumd2ogHFlRbKIjp1t" },
        { "name": "Hybrid Minds", "spotify_id": "5Shw9POZWHT4e4KzIQmSsy" },
        { "name": "Four Tet", "spotify_id": "7Eu1txygG6nJttLHbZdQOh" },
        { "name": "Eric Prydz", "spotify_id": "4raJWEmMEvPMeg6lCxhC6z" },
        { "name": "Fatboy Slim", "spotify_id": "4YXycRbyyAE0wozTk7QMEY" }
      ]
    }
  },
  {
    "festival_name": "Reading Festival",
    "start_date": "2025-08-22",
    "end_date": "2025-08-24",
    "main_stages": ["Main Stage East", "Main Stage West"],
    "stages": {
      "Main Stage East": [
        { "name": "Bring Me The Horizon", "spotify_id": "1Ffb6ejR6Fe5IamqA5oRUF" },
        { "name": "Travis Scott", "spotify_id": "0Y5tJX1MQlPlqiwlOH1tJY" },
        { "name": "Limp Bizkit", "spotify_id": "165ZgPlLkK7bf5bDoFc6Sb" },
        { "name": "Becky Hill", "spotify_id": "4EPJlUEBy49EX1wuFOvtjK" }
      ],
      "Main Stage West": [
        { "name": "Hozier", "spotify_id": "2FXC3k01G6Gw61bmprjgqS" },
        { "name": "Chappell Roan", "spotify_id": "2PzU4IB8DT7evzMC3qFfXQ" },
        { "name": "D-Block Europe", "spotify_id": "4F8W4LZ9N4rb4bg2RFBC7Y" },
        { "name": "AJ Tracey", "spotify_id": "2rhFzFmezpnW82MNqEKVry" }
      ],
      "Festival Republic Stage": [
        { "name": "Enter Shikari", "spotify_id": "5ni2AqXjUkJg4qMHZW3nP4" },
        { "name": "Conan Gray", "spotify_id": "4Uc8Dsxct0oMqx0P6i60ea" },
        { "name": "Amyl and The Sniffers", "spotify_id": "6nB0iY1cjSY1KYhYyuIIKH" },
        { "name": "Wallows", "spotify_id": "3bJv9lONA5m5unLwN5gSWm" }
      ]
    }
  },
  {
    "festival_name": "Leeds Festival",
    "start_date": "2025-08-22",
    "end_date": "2025-08-24",
    "main_stages": ["Main Stage East", "Main Stage West"],
    "stages": {
      "Main Stage East": [
        { "name": "Bring Me The Horizon", "spotify_id": "1Ffb6ejR6Fe5IamqA5oRUF" },
        { "name": "Travis Scott", "spotify_id": "0Y5tJX1MQlPlqiwlOH1tJY" },
        { "name": "Limp Bizkit", "spotify_id": "165ZgPlLkK7bf5bDoFc6Sb" },
        { "name": "Becky Hill", "spotify_id": "4EPJlUEBy49EX1wuFOvtjK" }
      ],
      "Main Stage West": [
        { "name": "Hozier", "spotify_id": "2FXC3k01G6Gw61bmprjgqS" },
        { "name": "Chappell Roan", "spotify_id": "2PzU4IB8DT7evzMC3qFfXQ" },
        { "name": "D-Block Europe", "spotify_id": "4F8W4LZ9N4rb4bg2RFBC7Y" },
        { "name": "AJ Tracey", "spotify_id": "2rhFzFmezpnW82MNqEKVry" }
      ],
      "Festival Republic Stage": [
        { "name": "Enter Shikari", "spotify_id": "5ni2AqXjUkJg4qMHZW3nP4" },
        { "name": "Conan Gray", "spotify_id": "4Uc8Dsxct0oMqx0P6i60ea" },
        { "name": "Amyl and The Sniffers", "spotify_id": "6nB0iY1cjSY1KYhYyuIIKH" },
        { "name": "Wallows", "spotify_id": "3bJv9lONA5m5unLwN5gSWm" }
      ]
    }
  },
  {
    "festival_name": "Victorious Festival",
    "start_date": "2025-08-22",
    "end_date": "2025-08-24",
    "main_stages": ["Common Stage"],
    "stages": {
      "Common Stage": [
        { "name": "Kings of Leon", "spotify_id": "2qk9voo8llSGYcZ6xrBzKx" },
        { "name": "Queens of the Stone Age", "spotify_id": "4pejUc4iciQfgdX6OKulQn" },
        { "name": "Vampire Weekend", "spotify_id": "5BvJzeQpmsdsFp4HGUYUEx" },
        { "name": "Nelly Furtado", "spotify_id": "2jw70GZXlAI8QzWeY2bgRc" }
      ],
      "Castle Stage": [
        { "name": "Bloc Party", "spotify_id": "3Ni3XJGl4QoyFKZ4yQo3fK" },
        { "name": "Michael Kiwanuka", "spotify_id": "3Y10boYzeuFCJ4Qgp53w6o" },
        { "name": "Madness", "spotify_id": "1yAwtBaoHLEDWAnWR87hBT" },
        { "name": "Travis", "spotify_id": "5M52tdBnJaKSvOpJGz8mfZ" }
      ]
    }
  },
  {
    "festival_name": "End of the Road Festival",
    "start_date": "2025-08-28",
    "end_date": "2025-08-31",
    "main_stages": ["Woods Stage"],
    "stages": {
      "Woods Stage": [
        { "name": "Caribou", "spotify_id": "73A3bLnfnz5BoQjb4gNCga" },
        { "name": "Father John Misty", "spotify_id": "2kGBy2WHvF0VdZyqiVCkDT" },
        { "name": "Self Esteem", "spotify_id": "1clt1uWWu9SivObZ0IYbKb" },
        { "name": "Sharon Van Etten & the Attachment Theory", "spotify_id": "0JndQAEUXZm28CZT6GtKvu" },
        { "name": "Viagra Boys", "spotify_id": "1A0WviXgjGueMmbhSDoXQJ" }
      ],
      "Garden Stage": [
        { "name": "Black Country, New Road", "spotify_id": "5SXEylV07TC57eanSxxg4R" },
        { "name": "Matt Berninger", "spotify_id": "5C2nHeM5zmwg3coHPl6bTo" },
        { "name": "Katy J Pearson", "spotify_id": "5pJd9fbuxZTGM1b7ugPNQg" },
        { "name": "Viagra Boys", "spotify_id": "1A0WviXgjGueMmbhSDoXQJ" },
        { "name": "DIIV", "spotify_id": "4cOOjF6rjSATZX2g3ZUKBe" }
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
