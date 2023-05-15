import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddStaffFields from "./AddStaffFields";

const mockedStaffRecords = jest.mock("../../Staff/staffRecords.json");

const mockedAddStaff = jest.fn();

describe("AddStaffFields", () => {
  it("should render first name input element", () => {
    render(
      <AddStaffFields
        staffList={[mockedStaffRecords]}
        addStaff={[mockedAddStaff]}
      />
    );

    const inputElement = screen.getByPlaceholderText(/First name.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    render(
      <AddStaffFields
        staffList={[mockedStaffRecords]}
        addStaff={[mockedAddStaff]}
      />
    );

    const inputElement = screen.getByPlaceholderText(/First name.../i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "TestFirstName" } });
    expect(inputElement.value).toBe("TestFirstName");
  });

});
