import { initializeTimes, updateTimes } from "../components/Main";

describe("initializeTimes function", () => {
  test("returns array of times from fetchAPI", () => {
    const times = initializeTimes();
    expect(times).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});

describe("updateTimes reducer function", () => {
  test("calls fetchAPI with selected date and returns updated times", () => {
    const currentState = [];
    const action = { type: "UPDATE_DATE", payload: "2025-08-04" };

    const updatedState = updateTimes(currentState, action);

    expect(updatedState).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });

  test("returns current state for unknown action type", () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { type: "UNKNOWN_ACTION" };
    const updatedState = updateTimes(currentState, action);
    expect(updatedState).toEqual(currentState);
  });
});
