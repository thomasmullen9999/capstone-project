import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "../components/BookingForm";


test("renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText(/Book Now/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders BookingForm label Choose date", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const labelElement = screen.getByText(/Choose date/i);
  expect(labelElement).toBeInTheDocument();
});

test("form can be submitted by the user", () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: "2025-08-04" } });

  const timeSelect = screen.getByLabelText(/Choose time/i);
  fireEvent.change(timeSelect, { target: { value: "17:00" } });

  const guestsInput = screen.getByLabelText(/Number of guests/i);
  fireEvent.change(guestsInput, { target: { value: "4" } });

  const occasionSelect = screen.getByLabelText(/Occasion/i);
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  const submitButton = screen.getByRole("button", {
    name: /Make Your reservation/i,
  });
  fireEvent.click(submitButton);

  expect(mockDispatch).toHaveBeenCalledWith({
    type: "UPDATE_DATE",
    payload: "2025-08-04",
  });

  expect(mockSubmitForm).toHaveBeenCalledWith({
    resDate: "2025-08-04",
    resTime: "17:00",
    guests: 4,
    occasion: "Birthday",
  });
});

describe("BookingForm HTML5 validations", () => {
  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
        submitForm={() => {}}
      />
    );
  });

  test("Date input has required and min attributes", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min");
  });

  test("Time select has required attribute", () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute("required");
  });

  test("Guests input has required, min=1, max=10", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("Occasion select has required attribute", () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute("required");
  });
});

describe("BookingForm client-side validation logic", () => {
  test("Submit button is disabled by default", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
        submitForm={() => {}}
      />
    );
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is enabled when all fields are valid", async () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
        submitForm={() => {}}
      />
    );

    const today = new Date().toISOString().split("T")[0];

    await userEvent.type(screen.getByLabelText(/choose date/i), today);
    await userEvent.selectOptions(
      screen.getByLabelText(/choose time/i),
      "17:00"
    );
    await userEvent.clear(screen.getByLabelText(/number of guests/i));
    await userEvent.type(screen.getByLabelText(/number of guests/i), "4");
    await userEvent.selectOptions(
      screen.getByLabelText(/occasion/i),
      "Birthday"
    );

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    expect(submitButton).toBeEnabled();
  });

  test("Submit button is disabled if guests < 1", async () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
        submitForm={() => {}}
      />
    );

    const today = new Date().toISOString().split("T")[0];

    await userEvent.type(screen.getByLabelText(/choose date/i), today);
    await userEvent.selectOptions(
      screen.getByLabelText(/choose time/i),
      "17:00"
    );
    await userEvent.clear(screen.getByLabelText(/number of guests/i));
    await userEvent.type(screen.getByLabelText(/number of guests/i), "0"); 
    await userEvent.selectOptions(
      screen.getByLabelText(/occasion/i),
      "Birthday"
    );

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    expect(submitButton).toBeDisabled();
  });
});
