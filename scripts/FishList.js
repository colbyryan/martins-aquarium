/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module

import { getFish } from "./Fishdata.js";
import { Fish } from "./Fish.js";

export const FishList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList")
    const allFishes = getFish()

    // Add to the existing HTML in the content element

    let fishHTMLRepersentation = "";
    for (const oneThingFromTheSea of allFishes) {
        fishHTMLRepersentation += Fish(oneThingFromTheSea);
    }
    contentElement.innerHTML += `${fishHTMLRepersentation}`
}