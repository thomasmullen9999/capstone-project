import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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
      submitForm={mockSubmitForm} // Pass the submitForm mock here!
    />
  );

  // Select a date
  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: "2025-08-04" } });

  // Select a time
  const timeSelect = screen.getByLabelText(/Choose time/i);
  fireEvent.change(timeSelect, { target: { value: "17:00" } });

  // Number of guests
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  fireEvent.change(guestsInput, { target: { value: "4" } });

  // Occasion
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  // Submit the form
  const submitButton = screen.getByRole("button", {
    name: /Make Your reservation/i,
  });
  fireEvent.click(submitButton);

  // This should be dispatched when date changes
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "UPDATE_DATE",
    payload: "2025-08-04",
  });

  // This checks that submitForm is called with correct form data
  expect(mockSubmitForm).toHaveBeenCalledWith({
    resDate: "2025-08-04",
    resTime: "17:00",
    guests: "4",
    occasion: "Birthday",
  });
});
