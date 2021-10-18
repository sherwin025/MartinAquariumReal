const database = {
    fish: [
        {
            image: "",
            name: "Barft",
            food: "crustaceans",
            length: 3,
            species: "sjdg",
            location: "aruba",
            water: "type"
        }
    ],
    tip: [
        { 
            Number: "1",
            Statement: "Test the Water"
        },
        { 
            Number: "2",
            Statement: "Remove Algae"
        },
        { 
            Number: "3",
            Statement: "Prune the Plants"
        },
        { 
            Number: "4",
            Statement: "Turn off Equipment"
        },
        { 
            Number: "5",
            Statement: "Vacuum the Substrater"
        },
        { 
            Number: "6",
            Statement: "Clean the Filter"
        },
        { 
            Number: "7",
            Statement: "Refill the Water"
        },
        { 
            Number: "8",
            Statement: "Turn on Equipment"
        },
        { 
            Number: "9",
            Statement: "Wipe the Glass"
        },
    ],
    location: [
        {
            image: "v",
            name: "",
            country: "",
            water: "",
            temp: "",
            depth: ""
        },
        {
            image: "",
            name: "",
            country: "",
            water: "v",
            temp: "",
            depth: ""
        },
        {
            image: "",
            name: "",
            country: "",
            water: "v",
            temp: "",
            depth: ""
        },

    ],
    travelQuote: [
        {
            statement: `"Thou Shall Know Your Location..."`
        },
        {
            statement: `Thou Shall Hire A Fishing Guide..."`
        },
        {
            statement: `"Thou Shall Pack Good Food (Or have food Plans) ..."`
        },
        {
            statement: `"Thou Shall Research The River Conditions And Hatches..."`
        },
        {
            statement: `"Thou Shall Bring The Right Gear..."`
        },
        {
            statement: `"Thou Shall Know The Rules & Regulations..."`
        },
        {
            statement: `"Thou Shall Bring A Camera..."`
        },
        {
            statement: `"Thou Shall Prepare Your Gear Before You Leave..."`
        },
        {
            statement: `"Thou Shall Check the weather"`
        },
        {
            statement: `"Thou Shall Stay Fed and Hydrated"`
        },
    ]

}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTip = () => {
    return database.tip.map(tip => ({...tip}))
}

export const getLocation = () => {
    return database.location.map(location => ({...location}))
}

export const getTravelQuote= () => {
    return database.travelQuote.map(travelse => ({...travelse}))
}



export const mostHolyFish = () => {
    const holyFish = []

    for (const eachFish of database.fish) {
        if (eachFish.length % 3 === 0) {
          holyFish.push(eachFish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    const soldiers = []

    for (eachFishs of database.fish) {
        if (eachFishs.length % 5 === 0){
            soldiers.push(eachFishs)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []
     for (eachFishr of database.fish) {
         if (eachFishr.length % 3 !== 0 && eachFishr.length % 5 !== 0) {
             regularFish.push(eachFishr)
         }
     }
    return regularFish
}
