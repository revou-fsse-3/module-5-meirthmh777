import WeatherForm from "./index";
import { describe, expect, test, vi, beforeEach, it, beforeAll } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import {

//   prettyDOM,
// } from "@testing-library/dom";

const mocks = vi.hoisted(() => {
  return {
    useRouterMock: vi.fn(),
    pushMock: vi.fn(),
  };
});
vi.mock("next/router", async () => {
  return {
    useRouter: mocks.useRouterMock,
  };
});

mocks.useRouterMock.mockReturnValue({
  push: mocks.pushMock,
});

const MOCK_CITY = "mei";
describe("WeatherForm component", () => {
  let inputElement: HTMLElement;
  let buttonElement: HTMLElement;
  beforeAll(() => {
    render(<WeatherForm />);
    inputElement = screen.getByRole("city-input");
    buttonElement = screen.getByRole("button");
    fireEvent.input(inputElement, {
      target: {
        value: MOCK_CITY,
      },
    });
    fireEvent.submit(buttonElement);
  });

  it("use router get call", () => {
    waitFor(() => {
      expect(mocks.useRouterMock).toHaveBeenCalledOnce();
    });
  });

  it("push get call when submit get triger", () => {
    waitFor(() => {
      expect(mocks.pushMock).toHaveBeenCalledTimes(1);
    });
  });
  it("push get call with the city in input city", () => {
    waitFor(() => {
      expect(mocks.pushMock).toHaveBeenCalledWith(
        `weather/result?city=${MOCK_CITY}`
      );
    });
  });
});

// describe("Index component", () => {
//   test("mock the useRouter hook", () => {
//     mocks.useRouterMock.mockReturnValue({
//       push: mocks.pushMock,
//     });
//     render(<WeatherForm />);
//     const MOCK_CITY = "atambua";
//     const inputElement = screen.getByRole("city-input");
//     const buttonElement = screen.getByRole("button");
//     fireEvent.input(inputElement, {
//       target: {
//         value: MOCK_CITY,
//       },
//     });
//     fireEvent.submit(buttonElement);
//     // console.log(prettyDOM());
//     waitFor(() => {
//       it("use router get call", () => {
//         expect(mocks.useRouterMock).toHaveBeenCalledOnce();
//       });
//       it("push get call when submit get triger", () => {
//         expect(mocks.pushMock).toHaveBeenCalledTimes(1);
//       });
//       it("push get call with the city in input city", () => {
//         expect(mocks.pushMock).toHaveBeenCalledWith(
//           `weather/result?city=${MOCK_CITY}`
//         );
//       });
//     });
//   });
// });

// ------- try 2 ----------
// vi.mock("next/router", () => mockRouter);

// describe("Index component", () => {
//   test("mock the useRouter hook", () => {
//     render(<Index />);
//     mockRouter.push("/result?city=city");
//     expect(screen.getByText("Submit"));
//     fireEvent.click(screen.getByRole("button"));
//     expect(mockRouter.asPath).toBe("/result?city=city");
//     expect(mockRouter.pathname).toBe("/result");
//     expect(mockRouter.query).toMatchObject({ city: "city" });
//   });
// });

// ----- try 1 -------------
// test("mock the useRouter hook", () => {
//   render(<Index />);
//   mockRouter.push("/initial-path");
//   expect(screen.getByText("Submit"));
//   fireEvent.click(screen.getByRole("button"));
//   expect(mockRouter).toMatchObject({
//     asPath: "/result?city=city",
//     pathname: "/result",
//     query: { bar: "city" },
//   });
// });
// - Expected
// + Received

// - Object {
// -   "asPath": "/result?city=city",
// -   "pathname": "/result",
// -   "query": Object {
// -     "bar": "city",
// + MemoryRouter {
// +   "asPath": "/initial-path",
// +   "async": false,
// +   "basePath": "",
// +   "events": Object {
// +     "emit": [Function emit],
// +     "off": [Function off],
// +     "on": [Function on],
//     },
// +   "hash": "",
// +   "isFallback": false,
// +   "isLocaleDomain": false,
// +   "isPreview": false,
// +   "isReady": true,
// +   "locale": undefined,
// +   "locales": Array [],
// +   "pathname": "/initial-path",
// +   "push": [Function anonymous],
// +   "query": Object {},
// +   "registerPaths": [Function anonymous],
// +   "replace": [Function anonymous],
// +   "setCurrentUrl": [Function anonymous],

// ----- not yet ------------
// test("handle onClick", () => {
//   const onClickMock = vi.fn();
//   render(<Index onClick={onClickMock} />);
//   const button = screen.getByText("Submit");
//   fireEvent.click(button);
//   expect(onClickMock).toHaveBeenCalledTimes(0);
// });
