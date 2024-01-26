import { describe, expect, test, vi, beforeEach, it, beforeAll } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import WeatherCondition from ".";
import WeatherResult from "@/utils/weather-result";
import { prettyDOM } from "@testing-library/dom";

const Clock = () => {
  return <>i am a clock</>;
};

vi.mock("@/components/Clock", () => {
  return {
    default: Clock,
  };
});
describe("Weather Condition Component ", () => {
  beforeEach(() => {
    render(<WeatherCondition data={WeatherResult} />);
  });
  test("make sure the component get render", () => {
    const accordionElement = screen.getByRole("weather-condition");
    expect(accordionElement).toBeInTheDocument();
  });
});
