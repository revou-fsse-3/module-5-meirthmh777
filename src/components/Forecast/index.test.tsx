import Forecast from "./index";
import { describe, expect, test, vi, beforeAll, beforeEach } from "vitest";
import {
  render,
  renderHook,
  screen,
  waitFor,
  act,
} from "@/utils/react-testing-library";
import forecastResult from "@/utils/forecast-result";
describe("Forecast component", () => {
  beforeEach(() => {
    render(<Forecast data={forecastResult} />);
  });
  test("display forecast accordion", () => {
    const accordionElement = screen.getByRole("accordion");
    expect(accordionElement).toBeInTheDocument();
  });
});
