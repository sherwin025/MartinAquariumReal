import { getTravelQuote } from "../fish/database.js";

export const travelL = () => {
    const getTravel = getTravelQuote();

    let htmlStringT = '<div class="quotes">'

    // Create HTNL representations of each fish here
    for (let travelss of getTravel) {

        // Why is there a backtick used for this string?
        htmlStringT += `<section class="travel_tips">
        <div class="travel__stuff">${travelss.statement}</div>
     `   
    }
    htmlStringT += `</div>`

    return htmlStringT
}