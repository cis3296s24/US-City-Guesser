import { getDistance } from "../calculateDistance";
import Cities from '../data/city_data.json'

const city1 = Cities.find(city => city.city === "Philadelphia");
const city2 = Cities.find(city => city.city === "New York");

test('calculates distance between two cities accurately', () => {
  expect(getDistance(city1.id, city2.id)).toEqual(79);
})