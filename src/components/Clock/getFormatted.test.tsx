import useGetFormattedTime from "./getFormatedTime";
import {
  describe,
  expect,
  test,
  vi,
  beforeAll,
  beforeEach,
  afterEach,
} from "vitest";
import {
  render,
  renderHook,
  screen,
  waitFor,
  act,
} from "@/utils/react-testing-library";
import { prettyDOM } from "@testing-library/dom";
import Clock from "./index";

describe("testing the useGetFormattedTime hooks", () => {
  test("return the time match the pattern ", () => {
    const { result } = renderHook(() => useGetFormattedTime());
    const actual = result.current(+8);
    const timeTest = new Date(actual);

    const testingPattern = actual.match(
      /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/
    );
    console.log("actual result  " + actual);
    console.log("timeTest result  " + timeTest);
    console.log("testingPattern result  " + testingPattern);
    expect(testingPattern).toBeTruthy();
  });
});

function expamleHooks() {
  return {
    massage: "halloo",
    name: "mei",
    food: "bakso",
    callback: (param: number) => param ** 2,
  };
}

describe("testing the expamleHooks hooks", () => {
  test("returns logged in user", () => {
    const { result } = renderHook(() => expamleHooks());

    console.log(result);
    console.log(result.current);
    console.log(result.current.massage);
    console.log(result.current.name);
    expect(result.current.callback(2)).toBe(4);
    expect(result.current.callback(3)).toBe(9);
    expect(result.current.callback(4)).toBe(16);
  });
});
