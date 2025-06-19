import type {VillaType} from "./VillaType.ts";

// @ts-ignore
export const villas:Array<VillaType> = [
  {
    "id": "villa-1",
    "title": "Info about villa no (1)",
    "capacity": {
      "daytime": { "count": 14 },
      "sleeper": { "count": 7 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "4x8m", "widthM": 4, "lengthM": 8 },
        "depth": { "description": "120 cm", "fixedCm": 120 }
      }
    ],
    "seatingAreas": [
      { "name": "Board", "capacity": 7 }
    ],
    "bedrooms": { "count": "3 + maid’s room" },
    "bathrooms": { "count": 5 },
    "kitchen": {
      "utensils": ["Refrigerator", "Oven", "Microwave", "Water Kettle", "Toaster", "Cookware"]
    },
    "otherFacilities": ["Grill corner", "Outdoor session"],
    "location": "Al-Ramas",
    "rates": {
      "weekend": { "amount": 2200, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 800, "currency": "AED", "notes": "Text Day" }
    },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm" },
      "halfDay": { "timeRange": "from 3 pm to 10 pm" }
    },
    "generalNotes": ["Summertime fun with Wizzo ☀️🏖🏡"]
  },
  {
    "id": "villa-10",
    "contactPhone": "0501595954",
    "capacity": {
      "daytime": { "count": 10 },
      "sleeper": { "count": 4 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "8 by 4 meters", "lengthM": 8, "widthM": 4 },
        "depth": { "description": "Gradual up to 180 cm", "maxCm": 180, "isGradual": true }
      }
    ],
    "seatingAreas": [
      { "name": "Board", "capacity": 10 }
    ],
    "bedrooms": { "count": 2 },
    "familyArrangement": "2",
    "bathrooms": { "count": 2 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware", "Microwave"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions", "Rooftop session"],
    "additionalServices": ["Film projector (Datashu) for a fee of 100 AED"],
    "location": "Suhehila, Ras Al-Khaimah",
    "rates": {
      "weekend": { "amount": 1300, "currency": "AED" },
      "weekdays": { "amount": 1000, "currency": "AED" },
      "halfDay": { "amount": 800, "currency": "AED", "notes": "Text day" }
    },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm to 11pm", "notes": "Text today" }
    }
  },
  {
    "id": "villa-11",
    "contactPhone": "0505609081",
    "title": "Info about villa number (11)",
    "capacity": {
      "daytime": { "count": 150, "description": "includes events and parties" },
      "sleeper": { "count": 16, "description": "possibly more if the tenant provides extra sleeping supplies" }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "12x6.6 m" },
        "depth": { "description": "70 cm to 170 cm", "minCm": 70, "maxCm": 170, "isGradual": true },
        "type": "adult pool + kiddie pool"
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 20 }
    ],
    "bedrooms": { "count": 4, "notes": "4 rooms" },
    "bathrooms": { "count": 7, "notes": "+ changing room + outdoor noise" },
    "kitchen": {
      "description": "Kitchen with all its equipment + prep kitchen + preparatory kitchen upstairs",
      "utensils": ["Refrigerator", "Stove", "Microwave", "Water Kettle", "Toaster", "Cookware"]
    },
    "otherFacilities": [
      "Grill corner",
      "Outdoor sessions",
      "Separate men’s board overlooking the pools",
      "Council for women inside the main break",
      "Out door games",
      "Multiple outdoor sessions",
      "Moroccan session, views of the basin and water fountains",
      "Rooftop seating overlooking the break, Ponds as well as mountains.",
      "Session between waterways",
      "A session overlooking the games department + recess",
      "Fountains in scattered places near the sessions"
    ],
    "location": "Emirates Street - behind Saqr Garden",
    "rates": {
      "weekend": { "amount": 3900, "currency": "AED" },
      "weekdays": { "amount": 3300, "currency": "AED" },
      "halfDay": { "amount": 2300, "currency": "AED", "notes": "Text Day" },
      "partyAndWedding": { "amount": 10000, "currency": "AED" }
    },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm" },
      "halfDay": { "timeRange": "from 3 pm to 12 am", "notes": "Entry hours for text" }
    }
  },
  {
    "id": "villa-13",
    "capacity": {
      "daytime": { "count": 14 },
      "sleeper": { "count": 6 }
    },
    "allowedVisitorTypes": ["Families", "Events", "Youths"],
    "pools": [
      {
        "size": { "description": "3.5x7 m", "widthM": 3.5, "lengthM": 7 },
        "depth": { "description": "90 cm to 160 cm", "minCm": 90, "maxCm": 160, "isGradual": true },
        "heaterAvailable": true,
        "coolerAvailable": true,
        "notes": ["Pool heater/cooler available"]
      }
    ],
    "wifi": { "available": true },
    "seatingAreas": [
      { "name": "Council", "capacity": 14 }
    ],
    "bedrooms": { "count": 2, "notes": "2 rooms" },
    "bathrooms": { "count": 2 },
    "kitchen": {
      "description": "Indoor kitchen + outdoor kitchen + coffee corner",
      "utensils": ["Refrigerator", "Oven", "Water Kettle", "Toaster", "Cookware", "Coffee machine", "Washing machine"]
    },
    "otherFacilities": ["Grill corner", "Outdoor session + Arabic session", "Outdoor games", "Sun chairs", "Coffee bar"],
    "location": "Bathana area - close to the main street",
    "insurance": {
      "required": true,
      "amount": 1000,
      "currency": "dirhams",
      "timing": "delivered upon entry and received upon exit"
    },
    "rates": {
      "weekend": { "amount": 1610, "currency": "AED" },
      "weekdays": { "amount": 1265, "currency": "AED" }
    },
    "checkInPolicy": {
      "fullDay": { "timeRange": "3 pm to 12 pm on second day" }
    }
  },
  {
    "id": "villa-14",
    "contactPhone": "0505609081",
    "title": "Information on farm number (14)",
    "capacity": {
      "daytime": { "count": 25 },
      "sleeper": { "count": 12 }
    },
    "allowedVisitorTypes": ["Families"],
    "pools": [
      {
        "size": { "description": "4.5x10 m", "widthM": 4.5, "lengthM": 10 },
        "depth": { "description": "70 cm to 140 cm", "minCm": 70, "maxCm": 140, "isGradual": true },
        "notes": ["With a special place for the kids"]
      }
    ],
    "wifi": { "available": true },
    "seatingAreas": [
      { "name": "Board / hall", "capacity": 8 }
    ],
    "bedrooms": { "count": 5, "notes": "5 rooms" },
    "bathrooms": { "count": 5, "notes": "+ sinks" },
    "otherFacilities": ["Grill corner", "4 Outdoor sessions", "Outdoor games"],
    "generalNotes": ["7 outdoor sessions"],
    "location": "On Al-Saadi Road - behind the airport",
    "rates": {
      "weekend": { "amount": 2000, "currency": "AED" },
      "weekdays": { "amount": 1650, "currency": "AED" },
      "halfDay": { "amount": 1100, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "3pm to 12pm" },
      "halfDay": { "timeRange": "from 3pm to 11pm", "notes": "Walk in hours for text today" }
    }
  },
  {
    "id": "villa-16",
    "capacity": {
      "daytime": { "count": 12 },
      "sleeper": { "count": 6 }
    },
    "allowedVisitorTypes": ["Families"],
    "pools": [
      {
        "size": { "description": "8x4 m", "widthM": 4, "lengthM": 8 },
        "depth": { "description": "70x160 meters / Children's section 70 cm", "minCm": 7000, "maxCm": 16000, "notes":"Depth seems to be in meters, mistyped? Assuming cm. Children's section 70cm implies main pool is deeper."},
        "heaterAvailable": true,
        "notes": ["Children's section 70 cm", "There's a heater"]
      }
    ],
    "wifi": { "available": true },
    "seatingAreas": [
      { "name": "Hall", "capacity": 12 }
    ],
    "bedrooms": { "count": "2 + maid’s room" },
    "bathrooms": { "count": 5, "notes": "+ sinks" },
    "kitchen": {
      "utensils": ["Two refrigerators", "Oven", "Toaster"]
    },
    "otherFacilities": ["Grill corner", "4 Outdoor session", "Outdoor games"],
    "location": "Al-Kharan - behind Al-Rawabi kindergarten",
    "rates": {
      "weekend": { "amount": 1900, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 1200, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams", "timing": "upon entry", "notes":"There is a deposit upon entry of: 1,000 dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "3pm to 12pm Second day" },
      "halfDay": { "timeRange": "3pm to 11pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-17",
    "contactPhone": "0505609081",
    "title": "Farm info: (17)",
    "capacity": {
      "daytime": { "count": 30 },
      "sleeper": { "count": 10, "description": "increaseable" }
    },
    "allowedVisitorTypes": ["Families"],
    "pools": [
      {
        "size": { "description": "4x8 meters", "widthM": 4, "lengthM": 8 },
        "depth": { "description": "1.20 to 1.70 meters", "minCm": 120, "maxCm": 170 },
        "heaterAvailable": false,
        "notes": ["Ain't no heater"]
      }
    ],
    "wifi": { "available": true },
    "seatingAreas": [
      { "name": "Hall", "capacity": 20, "count": 3, "notes": "There are 3 halls" }
    ],
    "bedrooms": { "count": "3 + maid’s room" },
    "bathrooms": { "count": 7, "notes": "+ sinks" },
    "kitchen": {
      "description": "Indoor kitchen + outdoor kitchen",
      "utensils": ["4 Refrigerators", "Oven", "Water Kettle"]
    },
    "otherFacilities": [
      "2 corners for a while",
      "8 outdoor sessions",
      "Hair tent / 16 persons",
      "Outdoor games",
      "Palm farm and a bunch of trees",
      "Walkways for those who care - with private chair",
      "Horse rental service available",
      "Lake with the suit boats",
      "There are a bunch of animals inside",
      "The farm include maha and birds",
      "And monkeys and other animals",
      "There is also a pool table and baby foot",
      "Custom umbrellas for cars"
    ],
    "licensing": "The farm is licensed by the tourism board",
    "location": "Shaggy - near Airport Street",
    "rates": {
      "weekend": { "amount": 2400, "currency": "AED" },
      "weekdays": { "amount": 1800, "currency": "AED" },
      "halfDay": { "amount": 1200, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "dirhams", "timing": "upon entry", "notes": "There is security upon entry, the amount of: 500 dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "2 pm to 12 pm on second day" },
      "halfDay": { "timeRange": "2pm to 12pm", "notes":"Text login hours today" }
    }
  },
  {
    "id": "villa-19",
    "contactPhone": "0505609081",
    "title": "Information about villa number (19)",
    "capacity": {
      "daytime": { "count": 5 },
      "sleeper": { "count": 5 }
    },
    "allowedVisitorTypes": ["Families"],
    "pools": [
      {
        "size": { "description": "4x6m", "widthM": 4, "lengthM": 6 },
        "depth": { "description": "60 cm to 150 cm", "minCm": 60, "maxCm": 150, "isGradual": true }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 5 }
    ],
    "bedrooms": { "count": 2 },
    "bathrooms": { "count": 3 },
    "kitchen": {
      "utensils": ["Refrigerator", "Oven", "Microwave", "Water Kettle", "Toaster", "Cookware"]
    },
    "otherFacilities": ["Grill corner", "Outdoor session"],
    "location": "Red Island",
    "rates": {},
    "checkInPolicy": {
      "fullDay": { "timeRange": "4 pm to 12 noon" }
    },
    "generalNotes": ["Summertime fun with Wizzo ☀️🏖🏡"]
  },
  {
    "id": "villa-2",
    "contactPhone": "0505609081",
    "title": "Info about villa number (2)",
    "capacity": {
      "daytime": { "count": 30 },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families", "Events", "Youths"],
    "pools": [
      {
        "size": { "description": "5x10 m", "widthM": 5, "lengthM": 10 },
        "depth": { "description": "70 cm to 160 cm", "minCm": 70, "maxCm": 160, "isGradual": true }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 16 }
    ],
    "bedrooms": { "count": "4 + maid's room" },
    "bathrooms": { "count": 6 },
    "kitchen": {
      "utensils": ["Refrigerator", "Oven", "Microwave", "Water Kettle", "Toaster", "Cookware"]
    },
    "otherFacilities": ["Grill corner", "Kids toys", "Outdoor session + elevated session", "Airport", "Green space"],
    "location": "Khat - Mountain View",
    "rates": {
      "weekend": { "amount": 2400, "currency": "AED" },
      "weekdays": { "amount": 1800, "currency": "AED" },
      "halfDay": { "amount": 1200, "currency": "AED", "notes": "Text Day, all rooms are closed" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 p.m. to the second day of 12 p.m." },
      "halfDay": { "timeRange": "from 3 pm to 10 pm" }
    }
  },
  {
    "id": "villa-21",
    "contactPhone": "0505609081",
    "title": "Info about Villa No. (21)",
    "capacity": {
      "daytime": { "count": 8 },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families"],
    "pools": [
      {
        "size": { "description": "4x3 m", "widthM": 4, "lengthM": 3 },
        "depth": { "description": "150 cm", "fixedCm": 150 }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 8 }
    ],
    "bedrooms": { "count": "3 + maid's room" },
    "bathrooms": { "count": 5 },
    "kitchen": {
      "utensils": ["Refrigerator", "Oven", "Microwave", "Water Kettle", "Toaster", "Cookware"]
    },
    "otherFacilities": ["Grill corner", "Outdoor session"],
    "location": "Red Island",
    "privacy": "Privacy rate is 70%",
    "rates": {},
    "checkInPolicy": {
      "fullDay": { "timeRange": "4 pm to 12 noon" }
    },
    "generalNotes": ["Summertime fun with Wizzo ☀️🏖🏡"]
  },
  {
    "id": "villa-22",
    "title": "Info on the break 22",
    "capacity": {
      "daytime": { "count": 10 },
      "sleeper": { "count": 5 }
    },
    "allowedVisitorTypes": ["Families", "Events", "Youths"],
    "pools": [
      {
        "size": { "description": "6x3 meters", "widthM": 3, "lengthM": 6 },
        "depth": { "description": "110 cm to 120 cm", "minCm": 110, "maxCm": 120 },
        "heaterAvailable": true
      }
    ],
    "wifi": { "available": true },
    "seatingAreas": [
      { "name": "Hall", "capacity": 5 }
    ],
    "bedrooms": { "count": 1 },
    "bathrooms": { "count": 1 },
    "kitchen": {
      "utensils": ["Refrigerator", "Electric cooker", "Water Kettle", "Cookware", "Microwave"]
    },
    "otherFacilities": ["Grill corner", "Outdoor session", "Outdoor games", "Exterior shower", "Bonfire session"],
    "location": "Red Island - behind Red Island Club",
    "rates": {
      "weekend": { "amount": 1265, "currency": "AED" },
      "weekdays": { "amount": 1035, "currency": "AED" },
      "halfDay": { "amount": 805, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "cash", "timing": "upon entry" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "3pm to 12pm second day" },
      "halfDay": { "timeRange": "3pm to 10pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-24-incomplete",
    "title": "Information on break number 24",
    "contactPhone": "0505609081",
    "resortDetails": {
      "overallCapacity": { "count": 10, "description": "Resort capacity for 10 people" },
      "numberOfUnits": 7,
      "unitDescription": "each house accommodates two people with the possibility of accompanying one child",
      "amenitiesPerUnit": ["Refrigerator", "Water Kettle", "Toaster", "Coffee", "Private grills in rooms with private pools"]
    },
    "capacity": {},
    "allowedVisitorTypes": ["Families", "Events", "Youths"],
    "pools": [
      {
        "type": "public",
        "size": { "description": "Large pool available / public" },
        "depth": { "description": "1.8 deep", "fixedCm": 180 },
        "heaterAvailable": false,
        "notes": ["Not at the public pool"]
      },
      {
        "type": "private",
        "notes": ["private pool for rooms where private pool service is available"],
        "depth": { "description": "1.4 depth", "fixedCm": 140 },
        "heaterAvailable": true,
      }
    ],
    "wifi": { "available": true, "notes": "in certain areas" },
    "kitchen": { "utensils": [] }, // Amenities are per unit
    "otherFacilities": [
      "A little corner",
      "Outdoor sessions",
      "Bonfire / fireplace session",
      "Horse back riding",
      "Bike ride",
      "Kids play area",
      "Soccer field",
      "Horseback riding option for kids"
    ],
    "additionalServices": [
      "We provide all grilling supplies on pre order (at least 2 hours in advance)",
      "Private Jacuzzi and massage for two persons only, upon request two hours in advance",
      "Bike rental service is also available at 300 per hour and horse riding at 120 for half an hour"
    ],
    "location": "Al-Hamarania - Ras Al-Khaimah",
    "rates": {
      "roomWithPrivatePoolWeekend": { "amount": 2000, "currency": "AED" },
      "roomWithoutPrivatePoolWeekend": { "amount": 1000, "currency": "AED", "notes": "with the possibility of public pool" },
      "roomWithPrivatePoolWeekdays": { "amount": 1800, "currency": "AED" },
      "roomWithoutPrivatePoolWeekdays": { "amount": 800, "currency": "AED", "notes": "with access to public pool" },
      "withoutSleepingRoomWithPrivatePool": { "amount": 1300, "currency": "AED", "notes": "Without sleeping" },
      "withoutSleepingRoomWithoutPool": { "amount": 500, "currency": "AED", "notes": "Without sleeping" }
    },
    "bedrooms": {"count": "Varies per house", "notes":"7 houses, each for 2 people + 1 child"},
    "bathrooms": {"count": "Varies per house"},
    "checkInPolicy": {
      "halfDay": { "timeRange": "3 pm to 9 pm", "notes": "Texting Walk-in Hours" },
      "fullDay": { "timeRange": "3pm to 12pm" }
    }
  },
  {
    "id": "villa-25",
    "capacity": {
      "daytime": { "count": 12 },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families", "Fashion and product photo sessions"],
    "pools": [
      {
        "size": { "description": "4x8 meters", "widthM": 4, "lengthM": 8 },
        "depth": { "description": "1.2-1.6 meters", "minCm": 120, "maxCm": 160 },
        "heaterAvailable": true
      }
    ],
    "wifi": { "available": true },
    "bedrooms": { "count": 4 },
    "bathrooms": {"count": "Unknown"},
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Toaster", "Espresso machine"]
    },
    "otherFacilities": ["A little corner", "Outdoor sessions", "Swing"],
    "location": "Emirates Street - near the entrance to Jabal Jeis",
    "rates": {
      "weekend": { "amount": 3000, "currency": "AED" },
      "weekdays": { "amount": 2000, "currency": "AED" },
      "halfDay": { "amount": 1600, "currency": "AED", "notes": "Half Day" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams", "timing": "upon entry" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "check-in at 3 pm, check-out at 12 noon" },
      "halfDay": { "timeRange": "Check in at 3pm and check out at 11pm", "notes": "Text Day/No Sleeper Hours" }
    }
  },
  {
    "id": "villa-26",
    "capacity": {
      "daytime": { "count": 7 },
      "sleeper": { "count": 7 }
    },
    "allowedVisitorTypes": ["Families", "Occasions", "Youths"],
    "pools": [
      {
        "size": { "description": "4x8 meters", "widthM": 4, "lengthM": 8 },
        "depth": { "description": "1.3 meters", "fixedCm": 130 },
        "heaterAvailable": true
      }
    ],
    "wifi": { "available": true },
    "bedrooms": { "count": 3, "notes": "Three rooms with bathrooms" },
    "bathrooms": {"count": 3, "notes": "Assumed from bedroom description"},
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Microwave"]
    },
    "otherFacilities": ["A little corner", "Outdoor sessions", "Bonfire / fireplace session"],
    "location": "Ras Al-Khimah. The Red Isle Al-Morasi Street near Al-Jazira Athletic Club.",
    "rates": {
      "weekend": { "amount": 1800, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 1000, "currency": "AED", "notes": "Without sleeper" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "check-in 3pm, check-out 12 noon second day" },
      "halfDay": { "timeRange": "from 3 pm to 11 pm", "notes": "Texting entry hours day / without sleeping" }
    }
  },
  {
    "id": "villa-27",
    "capacity": {
      "daytime": { "description": "from 10 to 20 people" },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      { "type": "Kiddie Pool Only" }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 15 }
    ],
    "bedrooms": { "count": "2 + 2 for the worker" },
    "familyArrangement": "8 separated",
    "bathrooms": { "count": 5 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions", "Rooftop session", "Kids play area", "Check in for valley farm"],
    "location": "Ras Al-Khaimah - Shamel",
    "rates": {
      "weekend": { "amount": 2000, "currency": "AED" },
      "weekdays": { "amount": 1800, "currency": "AED" },
      "halfDay": { "amount": 1200, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "3pm to 12pm next day" },
      "halfDay": { "timeRange": "3pm-11pm", "notes":"Walk-in hours for text today" }
    },
    "generalNotes": ["We are ready to prepare for all parties, weddings and gatherings"]
  },
  {
    "id": "villa-28",
    "contactPhone": "0501595954",
    "capacity": {
      "daytime": { "count": 20 },
      "sleeper": { "count": 10 }
    },
    "allowedVisitorTypes": ["Families", "Events", "Youths"],
    "pools": [
      {
        "size": { "description": "42 square meters", "areaSqM": 42 },
        "depth": { "description": "140 cm", "fixedCm": 140 },
        "heaterAvailable": true,
        "notes": ["with temperature adjusted between 10 degrees summer time to 40 degrees winter time"]
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 15 }
    ],
    "bedrooms": { "count": 3 },
    "familyArrangement": "6",
    "bathrooms": { "count": 4 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware", "Microwave", "Dishwasher", "Washer with a heater"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions", "Internal and external hearing system in the entire villa, with the ability to control voice in all rooms"],
    "location": "Ras Al-Khemeh, Al-Rifaa",
    "rates": {
      "weekend": { "amount": 6000, "currency": "AED", "perDuration": "for two nights, Friday and Saturday" },
      "weekdays": { "amount": 2000, "currency": "AED" },
      "halfDay": { "amount": 1610, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm to 11pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-29",
    "contactPhone": "0505609081",
    "title": "Requested information:",
    "capacity": {
      "daytime": { "count": 150 },
      "sleeper": { "count": 15 }
    },
    "allowedVisitorTypes": ["Families", "Events", "Youths"],
    "pools": [
      {
        "size": { "description": "15x8 meters", "widthM": 8, "lengthM": 15 },
        "depth": { "description": "100 - 220 cm", "minCm": 100, "maxCm": 220, "isGradual": true },
        "heaterAvailable": false
      }
    ],
    "wifi": { "available": true },
    "seatingAreas": [
      { "name": "Hall", "capacity": 20 },
      { "name": "Small outdoor meeting", "capacity": 7 }
    ],
    "bedrooms": { "count": 3 },
    "familyArrangement": "7",
    "bathrooms": { "count": 5 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware", "Micro wave"]
    },
    "otherFacilities": ["Two corners for the grill", "Coffee corner", "Outdoor sessions", "Hear it out", "Play area", "Airport"],
    "location": "Ras Al-Khemeh, Stallion",
    "rates": {
      "weekend": { "amount": 2000, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 1000, "currency": "AED", "notes": "Text day (bedrooms are closed)" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 p.m. to the next day, 11 a.m." },
      "halfDay": { "timeRange": "3pm to 11pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-30",
    "contactPhone": "0505609081",
    "title": "Info on farm 30",
    "capacity": {
      "daytime": { "description": "25-30" },
      "sleeper": { "count": 6, "description": "There are 6 prisoners." }
    },
    "allowedVisitorTypes": ["Families", "Events", "Youths"],
    "pools": [
      {
        "size": { "description": "5.2x9 meters", "widthM": 5.2, "lengthM": 9 },
        "depth": { "description": "1.33 meters", "fixedCm": 133 }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 15 }
    ],
    "bedrooms": { "count": 2 },
    "familyArrangement": "6",
    "bathrooms": { "count": 4 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions", "Kids play area"],
    "wifi": { "available": true },
    "location": "close to Al-Hamarania",
    "rates": {
      "weekend": { "amount": 1840, "currency": "AED" },
      "weekdays": { "amount": 1610, "currency": "AED" },
      "halfDay": { "amount": 920, "currency": "AED", "notes": "Text day, bedrooms are closing" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm-11pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-31",
    "title": "Info about Villa No. (31)",
    "capacity": {
      "daytime": { "description": "20 to 30 people" },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families", "Events", "Youths"],
    "pools": [ { "notes": ["None"] } ],
    "seatingAreas": [
      { "name": "Council", "capacity": 15 }
    ],
    "bedrooms": { "count": 3 },
    "familyArrangement": "7",
    "bathrooms": { "count": 3 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions", "Rooftop session", "Kids play area"],
    "location": "Villa site :",
    "rates": {
      "weekend": { "amount": 1850, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 920, "currency": "AED", "notes": "Text day, bedrooms are closing" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm-11pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-35",
    "contactPhone": "0505609081",
    "capacity": {
      "daytime": { "count": 12 },
      "sleeper": { "count": 4 }
    },
    "allowedVisitorTypes": ["Families", "Fashion and product photo sessions"],
    "pools": [
      {
        "size": { "description": "4x9 meters", "widthM": 4, "lengthM": 9 },
        "depth": { "description": "1.7 meters", "fixedCm": 170 },
        "heaterAvailable": true
      }
    ],
    "wifi": { "available": true },
    "bedrooms": { "count": 2 },
    "seatingAreas": [
      { "name": "Assembly", "capacity": 1 } // "Assembly1" likely means 1 assembly/council, capacity not specified, assuming 1 based on minimal info.
    ],
    "bathrooms": {"count": "Unknown"},
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Toaster", "Espresso machine"]
    },
    "otherFacilities": ["A little corner", "Outdoor sessions", "Swing"],
    "location": "Emirates Street - near the entrance to Jabal Jeis",
    "rates": {
      "weekend": { "amount": 2800, "currency": "AED" },
      "weekdays": { "amount": 2000, "currency": "AED" },
      "halfDay": { "amount": 1600, "currency": "AED", "notes": "Sleepless" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams", "timing": "delivered upon entry" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "check-in at 3 pm, check-out at 12 noon" },
      "halfDay": { "timeRange": "check in at 3 pm and check out at 11 pm", "notes": "Texting system login hours day/without sleep" }
    },
    "bookingConditions": ["Cancel and adjust booking 14 days before the date"]
  },
  {
    "id": "villa-38",
    "capacity": {
      "daytime": { "description": "12 to 15" },
      "sleeper": { "count": 6 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "6x4 m", "widthM": 4, "lengthM": 6 },
        "depth": { "description": "150 cm", "fixedCm": 150 }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 12 }
    ],
    "bedrooms": { "count": 3 },
    "familyArrangement": "13",
    "bathrooms": { "count": 5 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware", "Micro wave"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions"],
    "location": "Ras Al-Khemeh - Seh Ghab.",
    "rates": {
      "weekend": { "amount": 2000, "currency": "AED" },
      "weekdays": { "amount": 1800, "currency": "AED" },
      "halfDay": { "amount": 1200, "currency": "AED", "notes": "Text Day (Two rooms are closed)" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "Dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm to 11pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-39",
    "title": "Information on farm number (39)",
    "capacity": {
      "sleeper": { "description": "8 to 10" },
      "visitors": { "description": "20 to 25" }
    },
    "allowedVisitorTypes": ["Families", "Occasions"],
    "pools": [
      {
        "size": { "description": "14m ✖️8m", "widthM": 8, "lengthM": 14 },
        "depth": { "description": "80 cm to 180 cm", "minCm": 80, "maxCm": 180, "isGradual": true },
        "notes": ["3 shore baths and glass rooms overlooking the pool"]
      }
    ],
    "wifi": { "available": true },
    "bedrooms": { "count": 4, "notes": "master bedrooms and each room has its own bathroom" },
    "seatingAreas": [
      { "name": "Council", "capacity": 20, "count": 2, "notes":"Each board can seat 20 people" }
    ],
    "bathrooms": {"count": 4, "notes": "Assumed from bedroom description"},
    "kitchen": {
      "utensils": ["Refrigerator number :2", "Oven", "Gas", "Cooking utensils"]
    },
    "otherFacilities": ["A soccer field", "Play area for kid's", "Out door session", "Barn animals", "Grill area"],
    "location": "Hamraniyah area",
    "rates": {
      "weekend": { "amount": 2875, "currency": "AED" },
      "weekdays": { "amount": 2300, "currency": "AED" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "aed" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "Check in at 3:00 pm and check out at 12 noon" }
    }
  },
  {
    "id": "villa-4",
    "contactPhone": "0505609081",
    "title": "Info about villa number (4)",
    "capacity": {
      "daytime": { "count": 20 },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "4x7 m", "widthM": 4, "lengthM": 7 },
        "depth": { "description": "70 cm to 150 cm", "minCm": 70, "maxCm": 150, "isGradual": true }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 20 }
    ],
    "bedrooms": { "count": 2, "notes": "2 rooms" },
    "bathrooms": { "count": 3 },
    "kitchen": {
      "utensils": ["Refrigerator", "Water Kettle", "Coffee", "Cookware"]
    },
    "otherFacilities": ["Kids toys", "Outdoor session", "Mountain view"],
    "location": "Al-Ramas",
    "rates": {
      "weekend": { "amount": 2300, "currency": "AED" },
      "weekdays": { "amount": 1700, "currency": "AED" },
      "halfDay": { "amount": 1500, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm" },
      "halfDay": { "timeRange": "from 3 pm to 11 pm", "notes": "Hours of entry for text" }
    }
  },
  {
    "id": "villa-40",
    "capacity": {
      "daytime": { "count": 10 },
      "sleeper": { "count": 5 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "8x4 sqm", "widthM": 4, "lengthM": 8 },
        "depth": { "description": "Train me to 170 cm", "maxCm": 170, "isGradual": true, "notes":"'Train me' likely typo for 'Gradual' or similar" },
        "heaterAvailable": true
      }
    ],
    "seatingAreas": [
      { "name": "Board", "capacity": 10 }
    ],
    "bedrooms": { "count": 2 },
    "familyArrangement": "3",
    "bathrooms": { "count": 2 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware", "Micro wave"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions"],
    "location": "Ras Al-Kheima, Suhehila",
    "rates": {
      "weekend": { "amount": 1500, "currency": "AED" },
      "weekdays": { "amount": 1200, "currency": "AED" },
      "halfDay": { "amount": 1000, "currency": "AED", "notes": "Text of the Day" }
    },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to the next day, 12 pm" }
    }
  },
  {
    "id": "villa-41",
    "contactPhone": "0505609081",
    "capacity": {
      "daytime": { "count": 20 },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families", "Events", "Youths"],
    "pools": [
      {
        "size": { "description": "9 meters by 4", "widthM": 4, "lengthM": 9 },
        "depth": { "description": "Gradually from 90 cm to 160 cm", "minCm": 90, "maxCm": 160, "isGradual": true }
      }
    ],
    "seatingAreas": [
      { "name": "Board", "capacity": 20 }
    ],
    "bedrooms": { "count": 3 },
    "familyArrangement": "5",
    "bathrooms": { "count": 4 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware", "Micro wave", "Washing machine"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions"],
    "location": "Dubai, against us",
    "rates": {
      "weekend": { "amount": 3000, "currency": "AED" },
      "weekdays": { "amount": 2500, "currency": "AED" },
      "halfDay": { "amount": 2000, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm to 12pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-42",
    "contactPhone": "0501595954",
    "capacity": {
      "daytime": { "count": 30 },
      "sleeper": { "description": "5-10" }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "12x6 meters", "widthM": 6, "lengthM": 12 },
        "depth": { "description": "100 cm to 150 cm", "minCm": 100, "maxCm": 150, "isGradual": true },
        "heaterAvailable": true,
        "coolerAvailable": true,
        "notes": ["Cooling and water heating system in place"]
      }
    ],
    "wifi": { "available": true },
    "seatingAreas": [
      { "name": "Council", "capacity": 25 }
    ],
    "bedrooms": { "count": 2, "notes": "2 rooms" },
    "bathrooms": { "count": 3 },
    "kitchen": {
      "utensils": ["Refrigerator", "Electric cooker", "Water Kettle", "Micro wave"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions", "Sea view"],
    "location": "seminar area",
    "rates": {
      "weekend": { "amount": 2750, "currency": "AED" },
      "weekdays": { "amount": 2050, "currency": "AED" },
      "halfDay": { "amount": 1850, "currency": "AED", "notes": "Text Day" },
      "holidays": { "amount": 3800, "currency": "AED" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams", "timing": "upon entry" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm to 11pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-43",
    "capacity": {
      "daytime": { "count": 22 },
      "sleeper": { "count": 10 }
    },
    "allowedVisitorTypes": ["Families", "Events", "Youths"],
    "pools": [
      {
        "size": { "description": "13 x 7 m", "widthM": 7, "lengthM": 13 },
        "depth": { "description": "160 cm", "fixedCm": 160 }
      },
      {
        "type": "Private swimming pool for the kiddies"
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 20 }
    ],
    "bedrooms": { "count": "3 + maid's room" },
    "bathrooms": { "count": 6 },
    "kitchen": {
      "utensils": ["Refrigerator", "Oven", "Microwave", "Water Kettle", "Toaster", "Cookware"]
    },
    "otherFacilities": [
      "Grill corner",
      "Kids toys",
      "Jacuzzi",
      "Outdoor session + elevated session",
      "Soccer field",
      "Green spaces",
      "Horses for photography and to ride",
      "Animals (horses, hawks, peacocks, deer, goats)",
      "مسجد (Mosque)"
    ],
    "location": "Dakdaka - Al-Shaggy",
    "rates": {
      "weekend": { "amount": 2800, "currency": "AED" },
      "weekdays": { "amount": 2500, "currency": "AED" },
      "halfDay": { "amount": 1800, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 p.m. to the second day of 12 p.m." },
      "halfDay": { "timeRange": "from 3 pm to 10 pm" }
    }
  },
  {
    "id": "villa-44",
    "contactPhone": "0501595954",
    "capacity": {
      "daytime": { "count": 40 },
      "sleeper": { "count": 27 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "20 x 8m", "widthM": 8, "lengthM": 20 },
        "depth": { "description": "200 cm", "fixedCm": 200 }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 20 }
    ],
    "bedrooms": { "count": "4 + maid’s room", "notes": "+An extra suite, VIP rooms and lounge at an additional fee of 500 dirhams" },
    "bathrooms": { "count": 10 },
    "kitchen": {
      "utensils": ["Refrigerator", "Oven", "Microwave", "Water Kettle", "Cookware"]
    },
    "otherFacilities": ["Grill corner", "Kids toys", "Outdoor session + elevated session", "Soccer field", "Green spaces"],
    "location": "Tricks - Al-Kharan",
    "rates": {
      "weekend": { "amount": 4600, "currency": "AED" },
      "weekdays": { "amount": 3450, "currency": "AED" },
      "halfDay": { "amount": 1725, "currency": "AED", "notes": "Text day except the weekend" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 4 p.m. to the second day at 1 p.m." },
      "halfDay": { "timeRange": "from 4 pm to 1 am" }
    }
  },
  {
    "id": "villa-45",
    "contactPhone": "0501595954",
    "title": "Information on farm (45)",
    "capacity": {
      "daytime": { "count": 15 },
      "sleeper": { "count": 15 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "4.5x10 m", "widthM": 4.5, "lengthM": 10 },
        "depth": { "description": "70 cm to 140 cm", "minCm": 70, "maxCm": 140, "isGradual": true },
        "notes": ["With a special place for the kids"]
      }
    ],
    "wifi": { "available": true },
    "seatingAreas": [
      { "name": "Council / hall", "capacity": 15 }
    ],
    "bedrooms": { "count": 3, "notes": "+ 8 extra mattresses" },
    "bathrooms": { "count": 6, "notes": "+ sinks" },
    "kitchen": {
      "description": "Outdoor Kitchen + Coffee Bar",
      "utensils": ["Refrigerator", "Oven", "Water Kettle", "Toaster", "Cookware", "Coffee machine"]
    },
    "otherFacilities": [
      "Grill corner + outdoor oven + oven",
      "6 outdoor sessions + pool view session",
      "Out door games",
      "Volloyball Court",
      "Bat with badminton",
      "Mini bikes for kids",
      "Off track rest for bikes with helmet and gloves"
    ],
    "generalNotes": ["6 outdoor sessions", "Bluetooth headphones with mic"],
    "location": "behind the airport",
    "rates": {
      "weekend": { "amount": 2000, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 1100, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "2pm to 12pm" },
      "halfDay": { "timeRange": "2pm to 2pm", "notes":"Walk-in hours for text today - seems like a typo, likely 2pm to 12am or similar for half day" }
    }
  },
  {
    "id": "villa-46",
    "contactPhone": "0501595954",
    "title": "Information about farm number (46)",
    "capacity": {
      "daytime": { "count": 20 },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "8*5", "widthM": 5, "lengthM": 8 },
        "depth": { "description": "100 cm", "fixedCm": 100 }
      }
    ],
    "wifi": { "available": true },
    "seatingAreas": [
      { "name": "Council / hall", "capacity": 10 }
    ],
    "bedrooms": { "count": 2 },
    "bathrooms": { "count": 3 },
    "kitchen": {
      "description": "Outdoor Kitchen + Coffee Bar",
      "utensils": ["Refrigerator", "Oven", "Water Kettle", "Toaster", "Cookware", "Coffee machine"]
    },
    "otherFacilities": ["Grill corner + outdoor oven + oven", "Outdoor sessions", "Outdoor games"],
    "generalNotes": ["Outdoor sessions 8", "Hair tent"],
    "location": "Shaggy Stallions",
    "rates": {
      "weekend": { "amount": 2000, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 1200, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "AED" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "3pm to 12pm" },
      "halfDay": { "timeRange": "3pm lane 2:1pm", "notes":"Walk-in hours for text today - 'lane 2:1pm' seems like a typo or specific instruction" }
    }
  },
  {
    "id": "villa-48",
    "contactPhone": "0501595954",
    "title": "Requested information:",
    "capacity": {
      "daytime": { "count": 20 },
      "sleeper": { "count": 12, "description": "scientists that the number of 4 people is on the ground" } // "scientists" is likely a mistranslation
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "6/8 sqm there is a kiddie pool" },
        "depth": { "description": "150 cm", "fixedCm": 150 },
        "type": "Main pool + Kiddie pool",
        "heaterAvailable": false
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 15 }
    ],
    "bedrooms": { "count": 3 },
    "familyArrangement": "6 - 2 doubles and 4 singles",
    "bathrooms": { "count": 3 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware", "Microwave", "Coffee machine"]
    },
    "otherFacilities": ["Grill corner", "Outdoor session", "Indoor headphones"],
    "location": "The head of the bluffing tent",
    "rates": {
      "weekend": { "amount": 1800, "currency": "AED" },
      "weekdays": { "amount": 1400, "currency": "AED" },
      "halfDay": { "amount": 1000, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm to 11pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-49",
    "contactPhone": "0501595954",
    "capacity": {
      "daytime": { "count": 20 },
      "sleeper": { "count": 6 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "8x4 sqm", "widthM": 4, "lengthM": 8 },
        "depth": { "description": "150 cm", "fixedCm": 150 },
        "heaterAvailable": false
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 15 }
    ],
    "bedrooms": { "count": 2 },
    "familyArrangement": "3",
    "bathrooms": { "count": 3 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware", "Microwave", "Coffee machine"]
    },
    "otherFacilities": ["Grill corner", "Outdoor session", "Indoor headphones"],
    "location": "Ras Al-Khemeh, Al-Birat",
    "rates": {
      "weekend": { "amount": 2300, "currency": "AED" },
      "weekdays": { "amount": 2000, "currency": "AED" },
      "halfDay": { "amount": 1500, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm to 11pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-5",
    "contactPhone": "0505609081",
    "title": "Info about villa number (5)",
    "capacity": {
      "daytime": { "count": 12 },
      "sleeper": { "count": 9 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "3.5x4 m", "widthM": 3.5, "lengthM": 4 },
        "depth": { "description": "90 cm", "fixedCm": 90 }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 12 }
    ],
    "bedrooms": { "count": 4 },
    "bathrooms": { "count": 3 },
    "kitchen": {
      "utensils": ["Refrigerator", "Oven", "Microwave", "Water Kettle", "Toaster", "Coffee", "Cookware"]
    },
    "otherFacilities": ["Grill corner", "Outdoor session", "Public outdoor pool", "Beach"],
    "location": "Arab Port - Red Island",
    "rates": {
      "weekend": { "amount": 2000, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 1000, "currency": "AED", "notes": "Text Day" }
    },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm" },
      "halfDay": { "timeRange": "from 3 pm to 10 pm" }
    }
  },
  {
    "id": "villa-50",
    "title": "The break consists of two bedrooms and a lounge",
    "bedrooms": { "count": 2, "notes": "with bathrooms, master bedroom and 2 separate beds and smart TVs. Balcony with a sitting room overlooking the mountains Ras Kheema and a complete view of the rest." },
    "bathrooms": { "count": 4 },
    "capacity": {
      "daytime": { "description": "15-20 people" },
      "sleeper": { "count": 4, "description": "For a larger number of dormitories, you can save sleeping supplies before you" }
    },
    "allowedVisitorTypes": ["Families", "Youths", "Occasions"],
    "pools": [
      {
        "size": { "description": "width 4.50 length 8.50 meters", "widthM": 4.50, "lengthM": 8.50 },
        "depth": { "description": "from 60 cm gradual to 150 cm", "minCm": 60, "maxCm": 150, "isGradual": true }
      }
    ],
    "seatingAreas": [
      { "name": "Hall", "capacity": 20, "notes":"can seat from 15 to 20 people. With mini bar consisting of coffee machine kettle water fridge washroom with indoor bathroom" }
    ],
    "kitchen": {
      "description":"European kitchen consisting of a sink, Electric cooker, Coal grill with smoker, his out door refrigerator, out door mini bar",
      "utensils": ["Refrigerator", "Electric oven", "Water kettle", "Microwave", "Cookware", "Automatic washing machine"]
    },
    "otherFacilities": [
      "The outdoor session consists of modern Barqola",
      "85-inch smart TV screen, with the subscription of movies, series, BN Sports, and all international channels, Netflix and Watch.",
      "Speaker GPL 710 Partybox.",
      "large table can fit 6 people",
      "Grill area",
      "children (games/area)",
      "Parked inside the restroom holds 6 cars."
    ],
    "location": "Ras Al-Khaimah Emirate, Shamel area, directly on Emirates Street.",
    "checkInPolicy": {
      "checkInTime": "3:00 pm",
      "checkOutTime": "11:00 am"
    },
    "rates":{}
  },
  {
    "id": "villa-51",
    "contactPhone": "0505609081",
    "capacity": {
      "daytime": { "count": 20 },
      "sleeper": { "count": 10 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "4x8.6 meters", "widthM": 4, "lengthM": 8.6 },
        "depth": { "description": "140 cm to 160 cm", "minCm": 140, "maxCm": 160 }
      }
    ],
    "wifi": { "available": true },
    "seatingAreas": [
      { "name": "Hall", "capacity": 20 }
    ],
    "bedrooms": { "count": "4 + maid’s room" },
    "bathrooms": { "count": 6 },
    "kitchen": {
      "utensils": ["Refrigerator", "Electric cooker", "Water Kettle", "Cookware", "Toaster", "Coffee machine"]
    },
    "otherFacilities": ["Grill corner", "3 outdoor sessions", "Bonfire / fireplace session"],
    "location": "Ras Al-Khaimah - Fahalin",
    "rates": {
      "overnightStay": { "amount": 3450, "currency": "AED", "notes":"مبيت" },
      "halfDay": { "amount": 2300, "currency": "AED", "notes": "Text of the day" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams", "notes":"cash" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "3pm to 12pm Second day." },
      "notes": ["Please contact for prices"]
    }
  },
  {
    "id": "villa-52",
    "contactPhone": "0501595954",
    "title": "Info on farm 52",
    "capacity": {
      "daytime": { "count": 20 },
      "sleeper": { "count": 4 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "8*5", "widthM": 5, "lengthM": 8 },
        "depth": { "description": "100 cm", "fixedCm": 100 }
      }
    ],
    "wifi": { "available": true },
    "seatingAreas": [
      { "name": "Council / hall", "capacity": 15 }
    ],
    "bedrooms": { "count": 2 },
    "bathrooms": { "count": 2 },
    "kitchen": {
      "utensils": ["Refrigerator", "Oven", "Water Kettle", "Cookware"]
    },
    "otherFacilities": ["Grill corner + skirting", "Outdoor sessions", "Outdoor games"],
    "generalNotes": ["Outdoor sessions : 3"],
    "location": "Ras Al-Khemeh Airport",
    "rates": {
      "weekend": { "amount": 1900, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 1200, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "AED" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "3pm to 2pm 12pm", "notes":"Typo likely, should be '3pm to 12pm second day'" },
      "halfDay": { "timeRange": "3pm to 12am", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-53",
    "capacity": {
      "daytime": { "count": 25 },
      "sleeper": { "count": 6 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "42 m2", "areaSqM": 42 },
        "depth": { "description": "130 cm for adults", "fixedCm": 130 },
        "heaterAvailable": false,
        "notes": ["Kids size: 50 cm", "Ain't no heater"]
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 25 }
    ],
    "bedrooms": { "count": 3 },
    "familyArrangement": "3",
    "bathrooms": { "count": 3 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Micro wave"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions", "Corner of the world kids"],
    "location": "Ras Al-Kheimah - Fahalin.",
    "rates": {
      "weekend": { "amount": 2300, "currency": "AED" },
      "weekdays": { "amount": 1800, "currency": "AED" },
      "halfDay": { "amount": 1200, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "Dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 p.m. to the next day, 11 a.m." },
      "halfDay": { "timeRange": "3pm to 12pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-55",
    "contactPhone": "0501595954",
    "capacity": {
      "daytime": { "count": 10 },
      "sleeper": { "count": 4 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "8 by 4 meters", "widthM": 4, "lengthM": 8 },
        "depth": { "description": "Gradual up to 180 cm", "maxCm": 180, "isGradual": true }
      }
    ],
    "seatingAreas": [
      { "name": "Board", "capacity": 10 }
    ],
    "bedrooms": { "count": 2, "notes": "Extra room for the maid" },
    "familyArrangement": "3",
    "bathrooms": { "count": 4 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware", "Microwave"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions"],
    "location": "Al-Rifaa, Ras Al-Khaimah",
    "rates": {
      "weekend": { "amount": 1750, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 1200, "currency": "AED", "notes": "Text Day" }
    },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm to 11pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-56",
    "contactPhone": "0501595954",
    "capacity": {
      "daytime": { "description": "15-20" },
      "sleeper": { "count": 6 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "9 by 4 meters", "widthM": 4, "lengthM": 9 },
        "depth": { "description": "Gradual up to 160 cm", "maxCm": 160, "isGradual": true },
        "heaterAvailable": true
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 15 }
    ],
    "bedrooms": { "count": 2 },
    "familyArrangement": "5",
    "bathrooms": { "count": 4 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Electric cooker", "Water Kettle", "Cookware", "Microwave", "Coffee corner"]
    },
    "otherFacilities": [
      "Grill Corner",
      "Outdoor sessions",
      "Internal hearing system in the entire chalet from the inside with the possibility of voice control in every room",
      "Internet Services",
      "FIRST AID KIT"
    ],
    "location": "Shamel, Ras Al-Khaimah",
    "rates": {
      "weekend": { "amount": 2000, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 1000, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "AED" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm to 11pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-57",
    "contactPhone": "0505609081",
    "capacity": {
      "daytime": { "description": "15 - 30" },
      "sleeper": { "count": 6 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "10 by 4 meters", "widthM": 4, "lengthM": 10 },
        "depth": { "description": "Gradual up to 160 cm", "maxCm": 160, "isGradual": true }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 15 }
    ],
    "bedrooms": { "count": 3, "notes": "Extra linens are available" },
    "familyArrangement": "4",
    "bathrooms": { "count": 6 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware", "Microwave", "Coffee corner"]
    },
    "otherFacilities": ["Grill Corner", "Outdoor sessions"],
    "location": "Al-Hamarania, Ras Al-Khaimah",
    "rates": {
      "weekend": { "amount": 1900, "currency": "AED", "notes":"With a sleepover" },
      "weekdays": { "amount": 1500, "currency": "AED", "notes":"With a sleepover" },
      "halfDay": { "amount": 1200, "currency": "AED", "notes": "No sleeper" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "AED" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm to 12pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-58",
    "contactPhone": "0505609081",
    "capacity": {
      "daytime": { "description": "15 - 30" },
      "sleeper": { "count": 7 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "12 by 5 meters", "widthM": 5, "lengthM": 12 },
        "depth": { "description": "Gradual up to 160 cm", "maxCm": 160, "isGradual": true }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 20, "notes":"15 to 20 people" }
    ],
    "bedrooms": { "count": 3 },
    "familyArrangement": "2 king size and 3 single",
    "bathrooms": { "count": 3 },
    "kitchen": {
      "utensils": ["Refrigerator", "Electric cooker", "Water Kettle", "Cookware", "Microwave", "Coffee corner"]
    },
    "otherFacilities": [
      "Grill Corner",
      "Outdoor sessions",
      "Games for the kids",
      "Villa has indoor and outdoor speakers with voice control system for each room"
    ],
    "location": "Al-Hamarania, Ras Al-Khaimah",
    "rates": {
      "weekend": { "amount": 2900, "currency": "AED", "notes":"With a sleepover" },
      "weekdays": { "amount": 2300, "currency": "AED", "notes":"With a sleepover" },
      "halfDay": { "amount": 1700, "currency": "AED", "notes": "No sleeper. The bedrooms are going to be closed" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm the following day" },
      "halfDay": { "timeRange": "3pm to 12pm", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-59",
    "contactPhone": "0505609081",
    "title": "Info on farm 59",
    "capacity": {
      "daytime": { "count": 20 },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "8*5", "widthM": 5, "lengthM": 8 },
        "depth": { "description": "100 cm", "fixedCm": 100 }
      }
    ],
    "wifi": { "available": false },
    "seatingAreas": [
      { "name": "Council / hall", "capacity": 15 }
    ],
    "bedrooms": { "count": 2 },
    "bathrooms": { "count": 2 },
    "kitchen": {
      "utensils": ["Refrigerator", "Oven", "Water Kettle", "Toaster", "Cookware"]
    },
    "otherFacilities": ["Grill corner + skirting", "Outdoor sessions", "Outdoor games"],
    "generalNotes": ["Outdoor sessions : 2"],
    "location": "The Stallions",
    "rates": {
      "weekend": { "amount": 2000, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 1200, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "AED" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "3pm to 2pm 12pm", "notes":"Typo likely, should be '3pm to 12pm second day'" },
      "halfDay": { "timeRange": "3pm to 12am", "notes":"Walk-in hours for text today" }
    }
  },
  {
    "id": "villa-6",
    "contactPhone": "0505609081",
    "title": "Info about villa no. (6)",
    "capacity": {
      "daytime": { "count": 10 },
      "sleeper": { "count": 4 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "2,6x5,2m", "widthM": 2.6, "lengthM": 5.2 },
        "depth": { "description": "140 cm", "fixedCm": 140 }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 5 }
    ],
    "bedrooms": { "count": 2 },
    "bathrooms": { "count": 3 },
    "kitchen": {
      "utensils": ["Refrigerator", "Oven", "Microwave", "Water Kettle", "Toaster", "Coffee machine"]
    },
    "otherFacilities": ["Grill corner", "Outdoor session"],
    "location": "Southern Oil",
    "rates": {
      "weekend": { "amount": 1500, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 1000, "currency": "AED", "notes": "Text Day" }
    },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 12 pm" },
      "halfDay": { "timeRange": "from 3 pm to 10 pm" }
    }
  },
  {
    "id": "villa-60",
    "capacity": {
      "daytime": { "count": 12 },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families", "Events", "Youths"],
    "pools": [
      {
        "size": { "description": "8x4 sqm", "widthM": 4, "lengthM": 8 },
        "depth": { "description": "1 meter to 145 cm", "minCm": 100, "maxCm": 145, "isGradual": true },
        "heaterAvailable": true
      }
    ],
    "seatingAreas": [
      { "name": "Board", "capacity": 10 }
    ],
    "bedrooms": { "count": 4 },
    "familyArrangement": "5",
    "bathrooms": { "count": 4 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware", "Micro wave", "Washing machine", "Coffee machine"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions", "External noise", "Outdoor changing room"],
    "location": "Ras Al-Kheima, Al-Madafaq",
    "rates": {
      "weekend": { "amount": 2700, "currency": "AED" },
      "weekdays": { "amount": 2000, "currency": "AED" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to the next day, 12 pm" }
    }
  },
  {
    "id": "villa-62",
    "capacity": {
      "daytime": { "count": 12 },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families", "Events", "Youths"],
    "pools": [
      {
        "size": { "description": "6*3 square meters", "widthM": 3, "lengthM": 6 },
        "depth": { "description": "1 meter to 145 cm", "minCm": 100, "maxCm": 145, "isGradual": true },
        "heaterAvailable": false
      }
    ],
    "seatingAreas": [
      { "name": "Board", "capacity": 10 }
    ],
    "bedrooms": { "count": "2 + maid's room" },
    "familyArrangement": "4",
    "bathrooms": { "count": 4 },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware", "Micro wave", "Washing machine", "Coffee machine"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions", "External noise"],
    "location": "Ras Al-Khemeh, Al-Rifaa",
    "rates": {
      "weekend": { "amount": 1750, "currency": "AED" },
      "weekdays": { "amount": 1500, "currency": "AED" },
      "halfDay": { "amount": 1200, "currency": "AED", "notes": "Half Day" }
    },
    "insurance": { "required": true, "amount": 1000, "currency": "dirhams" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to the next day, 12 pm" }
    }
  },
  {
    "id": "villa-63",
    "capacity": {
      "daytime": { "count": 10 },
      "sleeper": { "count": 5 }
    },
    "allowedVisitorTypes": ["Families"],
    "pools": [
      {
        "size": { "description": "7x4 square meters", "widthM": 4, "lengthM": 7 },
        "depth": { "description": "Train me to 170 cm", "maxCm": 170, "isGradual": true, "notes":"'Train me' likely typo for 'Gradual' or similar" },
        "heaterAvailable": false
      }
    ],
    "seatingAreas": [
      { "name": "Board", "capacity": 10 }
    ],
    "bedrooms": { "count": 2, "notes":"Maid's room with bathroom" },
    "familyArrangement": "3",
    "bathrooms": { "count": 3, "notes":"Main + Maid's bathroom assumed" },
    "kitchen": {
      "utensils": ["Refrigerator", "Gas cooker", "Water Kettle", "Cookware"]
    },
    "otherFacilities": ["Grill corner", "Outdoor sessions"],
    "location": "Ras Al-Kheima, Al-Maqoura",
    "rates": {
      "weekend": { "amount": 1500, "currency": "AED" },
      "weekdays": { "amount": 1200, "currency": "AED" },
      "halfDay": { "amount": 1000, "currency": "AED", "notes": "Text of the Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "AED" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to the next day, 12 pm" },
      "halfDay": { "timeRange": "from 3 pm to 11 pm" }
    }
  },
  {
    "id": "villa-7",
    "contactPhone": "0505609081",
    "title": "Information on farm number (7)",
    "capacity": {
      "daytime": { "count": 15 },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "5x10 m", "widthM": 5, "lengthM": 10 },
        "depth": { "description": "40cm wide to 150cm wide", "minCm": 40, "maxCm": 150, "isGradual": true }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 15 }
    ],
    "bedrooms": { "count": "2 + maid's room" },
    "bathrooms": { "count": 3 },
    "kitchen": {
      "utensils": ["Refrigerator", "Oven", "Microwave", "Water Kettle"]
    },
    "otherFacilities": ["Grill corner", "Kids toys", "Video games", "Outdoor session"],
    "location": "Airport Street",
    "rates": {
      "weekend": { "amount": 2300, "currency": "AED" },
      "weekdays": { "amount": 1750, "currency": "AED" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "dirhams", "timing": "on entry" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 11 pm" },
      "halfDay": { "timeRange": "from 3 pm to 10 pm", "notes": "Entry hours for text are" }
    }
  },
  {
    "id": "villa-8",
    "contactPhone": "0505609081",
    "title": "Information on farm number (8)",
    "capacity": {
      "daytime": { "count": 15 },
      "sleeper": { "count": 8 }
    },
    "allowedVisitorTypes": ["Families", "Events"],
    "pools": [
      {
        "size": { "description": "5x10 m", "widthM": 5, "lengthM": 10 },
        "depth": { "description": "40cm wide to 150cm wide", "minCm": 40, "maxCm": 150, "isGradual": true }
      }
    ],
    "seatingAreas": [
      { "name": "Council", "capacity": 15 }
    ],
    "bedrooms": { "count": 3 },
    "bathrooms": { "count": 3 },
    "kitchen": {
      "utensils": ["Refrigerator", "Oven", "Microwave", "Water Kettle"]
    },
    "otherFacilities": ["Grill corner", "Kids toys", "Outdoor session"],
    "location": "The beginning of Ras Al-Khaimah - Muhammad Bin Zayed Street",
    "rates": {
      "weekend": { "amount": 2300, "currency": "AED" },
      "weekdays": { "amount": 1750, "currency": "AED" },
      "halfDay": { "amount": 1500, "currency": "AED", "notes": "Text Day" }
    },
    "insurance": { "required": true, "amount": 500, "currency": "dirhams", "timing": "on entry" },
    "checkInPolicy": {
      "fullDay": { "timeRange": "from 3 pm to 11 pm" },
      "halfDay": { "timeRange": "from 3 pm to 11 pm" }
    }
  }
]

