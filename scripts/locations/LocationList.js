import { getLocation } from "./LocationData.js";
import { Location } from "./Location.js";

export const locationList = () => {
    const contentElement = document.querySelector(".locationList");
    const allLocations = getLocation();
    let locationHTMLRepresentation = "";
    for (const oneLocationFromTheSea of allLocations) {
        locationHTMLRepresentation += Location(oneLocationFromTheSea);
    }

    contentElement.innerHTML =+ `${locationHTMLRepresentation}`
}