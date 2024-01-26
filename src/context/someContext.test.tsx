import useSomeContext, { withWrapper } from "./someContext";
import { describe, expect, test, vi, beforeEach, it, beforeAll } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";

const SomeContextConsumer = withWrapper(() => {
  const { theme } = useSomeContext();
  return (
    <div role="main">
      <span role="theme">{theme}</span>
    </div>
  );
});

describe("someContext component", () => {
  beforeEach(() => {
    render(<SomeContextConsumer theme="HALO UNIVERSE" />);
  });
  test("main to be defined", () => {
    console.log(prettyDOM());
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
  test("theme to be defined", () => {
    expect(screen.getByRole("theme")).toBeInTheDocument();
  });
});
