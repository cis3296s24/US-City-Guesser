import Map from "../Map";
import Cities from "../data/city_data.json"
import React from "react";
import renderer from 'react-test-renderer';

var tGuessList = [];
tGuessList.push(Cities[1]);

const component = renderer.create(<Map guesses = {tGuessList} />);

test('Map should function', () => {
  expect(component).toBeTruthy();
});

