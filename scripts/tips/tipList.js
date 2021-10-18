import { getTip } from "../fish/database.js";


export const tips = () => {
    const allTip = getTip();

    let htmlStringT = '<div class="tips">'

    // Create HTNL representations of each fish here
    for (const tip of allTip) {

        // Why is there a backtick used for this string?
        htmlStringT += `<section class="tip_card">
            <div class="tip__number">${tip.Number}</div>
            c
     `   
    }
    htmlStringT += `</div>`

    return htmlStringT
}

