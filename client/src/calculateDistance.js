const fs = require('fs'); 
const path = require('path');
const filePath = path.join(__dirname, 'city_data.json');

function getDistance(cityName1, cityName2) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error loading the JSON file:', err);
            return;
        }

        try {
            // Parse JSON data
            const cityDetails = JSON.parse(data).city_details;
            // Retrieve latitude and longitude for the first city
            const cityLat1 = getLatitude(cityName1, cityDetails);
            const cityLong1 = getLongitude(cityName1, cityDetails);

            // Retrieve latitude and longitude for the second city
            const cityLat2 = getLatitude(cityName2, cityDetails);
            const cityLong2 = getLongitude(cityName2, cityDetails);

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
            return distance;

        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
}

function getLatitude(cityName, cityDetails) {
    const city = cityDetails.find(city => city.city === cityName);
    if (city) {
        const { lat: latitude } = city;
        return latitude;
    } else {
        console.log(`City '${cityName}' not found`);
        return null;
    }
}

function getLongitude(cityName, cityDetails) {
    const city = cityDetails.find(city => city.city === cityName);
    if (city) {
        const { lng: longitude } = city;
        return longitude;
    } else {
        console.log(`City '${cityName}' not found`)
        return null; 
    }
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}


// Test the function with two city names
//getDistance("Philadelphia", "Atlanta");