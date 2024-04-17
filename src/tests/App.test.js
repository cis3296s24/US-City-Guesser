import App, { getCurrentGuess, setCurrentGuess } from "../App"
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Cities from "../data/city_data.json"
import React from "react";
import userEvent from "@testing-library/user-event";
import renderer from 'react-test-renderer';

setCurrentGuess(Cities[0]);

test('getCurrentTest should return set guess', () => {
  expect(getCurrentGuess()).toBe(Cities[0]);
})

const component = renderer.create(<App />);

test('Map should function', () => {
  expect(component).toBeTruthy();
});
