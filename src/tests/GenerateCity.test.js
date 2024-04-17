import GenerateCity from "../GenerateCity";
import { getTargetCity } from "../App";

test('easy city should return with population > 1 million', () => {
  GenerateCity("easy");
  expect(getTargetCity().population).toBeGreaterThan(1000000);
})

test('hard city should return with population > 100,000', () => {
  GenerateCity("hard");
  expect(getTargetCity().population).toBeGreaterThan(100000);
})