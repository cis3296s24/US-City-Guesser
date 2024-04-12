import Cities from "./data/city_data.json"

export function getDistance(cityID1, cityID2) {

    try {
        // Retrieve latitude and longitude for the first city
        const cityLat1 = getLatitude(cityID1, Cities);
        const cityLong1 = getLongitude(cityID1, Cities);

        // Retrieve latitude and longitude for the second city
        const cityLat2 = getLatitude(cityID2, Cities);
        const cityLong2 = getLongitude(cityID2, Cities);

        //Calculations
        var R = 3958.8;
        const dLat = deg2rad(cityLat2 - cityLat1);
        const dLon = deg2rad(cityLong2 - cityLong1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(cityLat1)) * Math.cos(deg2rad(cityLat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = R * c; // Distance in miles
        console.log("Distance between two cities in miles => ", distance.toFixed(2));
        return Math.round(distance);

    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}

function getLatitude(cityID, Cities) {
    const city = Cities.find(city => city.id === cityID);
    if (city) {
        const { lat: latitude } = city;
        return latitude;
    } else {
        console.log(`City '${cityID}' not found`);
        return null;
    }
}

function getLongitude(cityID, Cities) {
    const city = Cities.find(city => city.id === cityID);
    if (city) {
        const { lng: longitude } = city;
        return longitude;
    } else {
        console.log(`City '${cityID}' not found`)
        return null; 
    }
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}


// Test the function with two city names
//getDistance("Philadelphia", "Atlanta");