import { FishList } from "./fish/fishList.js";



let parentHTMLElement = document.querySelector(".fishList");

parentHTMLElement.innerHTML = FishList();


import { tips } from "./tips/tipList.js";


let tiphtml = document.querySelector(".tips");

tiphtml.innerHTML = tips();



