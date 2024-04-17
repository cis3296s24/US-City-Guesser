import Cities from "../data/city_data.json"
import React from "react";
import renderer from 'react-test-renderer';
import GuessList from "../GuessList";

var tGuessList = [];
tGuessList.push({ id: 0, city: Cities[0], distance: 1, distance2: 1});

const component = renderer.create(<GuessList sorted = {tGuessList} km = {true}/>);

test('GuessList should function', () => {
  expect(component).toBeTruthy();
});