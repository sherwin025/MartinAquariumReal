import { getLocation } from "../fish/database.js";


export const locations = () => {
    const allLocations = getLocation();

    let htmlStringL = '<article class="locate">'

    // Create HTNL representations of each fish here
    for (const location of allLocations) {

        // Why is there a backtick used for this string?
        htmlStringL += `<section class="location_card">
            <div class="">${location.image}</div>
            <div class="">${location.name}</div>
            <div class="">${location.country}</div>
            <div class="">${location.water}</div>
            <div class="">${location.temp}</div>
            <div class="">${location.depth}</div>
     `   
    }
    htmlStringL += `</article>`

    return htmlStringL
}

