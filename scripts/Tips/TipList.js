import {getTip} from "./TipData.js";
import { Tip } from "./Tip.js";

export const TipList = () => {
    const contentElement = document.querySelector(".tipList");
    const allTips = getTip();

    let tipHTMLRepresentation = "";
    for (const oneTipFromTheSea of allTips) {
        tipHTMLRepresentation += Tip(oneTipFromTheSea);
    }
    contentElement.innerHTML += `${tipHTMLRepresentation}`
}
