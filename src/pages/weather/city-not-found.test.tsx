import CityNotFound from "./city-not-found";
import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

describe("CityNotFound", () => {
  test("has button and can be clicked", () => {
    // is this E2E????
    const { getByRole } = render(<CityNotFound />);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(button).toMatchInlineSnapshot(`
      <button
        class=" inline-block     border-2hover:brightness-50  disabled:brightness-50 disabled:border-none disabled:opacity-40 bg-black text-white border-black m-5 p-2  "
        role="button"
      >
        <a
          href="/weather"
        >
          Search another city
        </a>
      </button>
    `);
  });
});
