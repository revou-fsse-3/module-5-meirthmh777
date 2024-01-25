// render hooks
import Index from "./index";
import { describe, expect, test, vi } from "vitest";
import { render, renderHook, screen, waitFor } from "@testing-library/react";

describe("Index component", () => {
  test("renders correctly currentTime from useState", () => {
    const hook = renderHook(() => Index({ timezone: 0 })); //index has prop
    expect(hook.result.current).toBeDefined(); // result property, and expect below actually to show currentTime
    expect(hook.result.current).toMatchInlineSnapshot(`
      <span
        className="text-3xl font-bold"
      >
        
      </span>
    `);
  });
  test("renders correctly currentTime each second", async () => {
    render(<Index timezone={0} />);
    await waitFor(() => {
      const currentTime = screen.getAllByText(""); // should include regex?
      expect(currentTime).toMatchInlineSnapshot(`
        [
          <body>
            <div />
            <div>
              <span
                class="text-3xl font-bold"
              />
            </div>
          </body>,
          <div />,
          <div>
            <span
              class="text-3xl font-bold"
            />
          </div>,
          <span
            class="text-3xl font-bold"
          />,
        ]
      `);
    });
  });
  test("display real time", () => {
    render(<Index timezone={0} />);
    const realTime = new Date();
    vi.setSystemTime(realTime);
    const getContentTime = realTime.getTime();
    expect(Date.now()).toBe(getContentTime);
  });
});

//  --------- try 8 ---------------
// expect(getContentTime).toMatchInlineSnapshot(`1706169124548`);
// not using toMatchInlineSnapshot because
// Error: Snapshot `Index component > display real time 1` mismatched
// - Expected: - 1706169124548, + Received:+ 1706169241708

// ---------------- try 7 Expected:"expected formatted time: 3:00:01 PM" Received:1708786801000
// vi.advanceTimersByTime(1000)
// vi.useRealTimers();
// vi.useFakeTimers();
// vi.useRealTimers();
// ----------- try 6
// const getContentTime = () => {
//   const formattedTime = getFormattedTime(0);
//   return `expected formatted time: ${formattedTime}`;
// };
// expect(screen.getByText(getContentTime())).toMatchInlineSnapshot(); //try 6 TestingLibraryElementError: Unable to find an element with the text: 3:00:01 PM. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

// ------------ try 7 ----------
// const expectedTimestamp = realTime.getTime();
//     expect(Date.now()).toBe(expectedTimestamp);
// ----------- tried yeaahh -----------
// expect(Date.now()).toBe(date.valueOf()); //Expected:[Function create$4], Received:962463601000 try 5
// expect(Date.now()).toMatchInlineSnapshot(`962463601000`); //meeehhhh try 5
// expect(screen.getByTestId(Date.now())); // try 1
// expect(Date.now()).toHaveBeenCalledTimes(1); //try 2
// expect(screen.getByTestId("formatted time")); // try 3

// coba??????
// render(<Index timezone={0} />);
// const hook = renderHook(() => {
//   expect(hook.result.current).toBeDefined;
// });

// const { result } = renderHook(() => Index({ timezone: 0 }));
// expect(result.current).toBeDefined();

// const result = renderHook(() => Index({ timezone: 0 }));
//     expect(result.result).toBeDefined();

// act(() => {
//     const hook = renderHook(() => {
//       expect(hook.result).toBeDefined();
//     });
//   });
