/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getFish, getSoldierFish } from "./FishData.js";
import { Fish } from "./Fish.js";
import { getMostHolyFish } from "./FishData.js";

export const FishList = () => {
    const holyFishes = getMostHolyFish();
    addFishToDom(holyFishes);
    const soldierFish = getSoldierFish();
    addFishToDom(soldierFish);
    // const unworthyFish
}

const addFishToDom = (arrayOfFish) => {
    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList");
     // // Add to the existing HTML in the content element
	let fishHTMLRepresentation = "";

	for (const oneFishObject of arrayOfFish) {
        //oneFishObject becomes allFishes[0]
        //next time through the loop, it becomes allFishes[1]
		fishHTMLRepresentation += Fish(oneFishObject);
	}	
    contentElement.innerHTML += fishHTMLRepresentation
}