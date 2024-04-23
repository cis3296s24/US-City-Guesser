import Cities from "./data/city_data.json"
import { setTargetCity} from "./App";

export default function GenerateCity(difficulty){

    let filteredCities;
    if (difficulty === "easy") {
      filteredCities = Cities.filter(city => city.population >= 1000000);
    } else if (difficulty === "medium") {
      filteredCities = Cities.filter(city => city.population >= 300000);
    } else if (difficulty === "hard") {
      filteredCities = Cities.filter(city => city.population >= 100000);
    } else {
      filteredCities = Cities.filter(city => city.population >= 50000);
    }
  
    const randomIndex = Math.floor(Math.random() * filteredCities.length);
    console.log(filteredCities[randomIndex]); // Check answer
    setTargetCity(filteredCities[randomIndex]);
  

}