import ValidateGuess from "../ValidateGuess";
import Cities from "../data/city_data.json";
import React from "react";

var tGuessList = [];
tGuessList.push({ id: 0, city: Cities[0], distance: 1, distance2: 1});


test('null city should not pass validation', () => {
  expect(ValidateGuess(null, tGuessList)).toBe(false);
});

test('duplicate city should not pass validation', () => {
  expect(ValidateGuess(Cities[0], tGuessList)).toBe(false);
});

test('new city should return true', () => {
  expect(ValidateGuess(Cities[2], tGuessList)).toBe(true);
});
