import { locations } from "./locationList.js";

const locationhtml = document.querySelector(".locate");

locationhtml.innerHTML = locations();


import { travelL } from "../travelQuotes/travelQuotes.js";

let travelhtml = document.querySelector(".quotes");

travelhtml.innerHTML = travelL();