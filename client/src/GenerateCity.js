import Cities from "./city_data.json"

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function GenerateCity(){
  return (Cities[getRandomInt(47)]);
}