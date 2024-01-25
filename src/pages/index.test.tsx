import Index from "./index";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Index", () => {
  test("display Home Page text", () => {
    render(<Index />);
    expect(screen.getByText("Home Page")).toMatchInlineSnapshot(`
      <h2
        class="text-2xl font-bold"
      >
        Home Page
      </h2>
    `); //.toMatch .toBeDefined()
  });
});

// try 3
// test("clock display time", async () => {
//   render(<Index />);
//   const clockComponents = await screen.findByRole("clock component"); // the TestingLibraryElementError said Unable to find role="clock component"
//   expect(clockComponents).toMatchInlineSnapshot(); // if you 'npm run test' you can see it in the terminal it has the right current time. But here I still confuse how to get it :)
// }); // in the index-clock.test.tsx.snap it returns Promise{} because of asyncronous behaviour of findByrole

// try 1
// test("Index", () => {
//   render(<Index />);
//   expect(screen.getByText("Home Page")).toMatchFileSnapshot(
//     "index.test.tsx.snap"
//   );
// });
// try 2
// const clockComponent = screen.getByTestId("clock component");
//     expect(clockComponent).toBeDefined();
