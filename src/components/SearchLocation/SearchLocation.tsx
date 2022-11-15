import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SearchLocation } from ".";

// describe("Search by city Form", () => {
//   it("should be able to search new city by text", () => {
//     render(<SearchLocation />);
//     const inputElement = screen.getByPlaceholderText("search location");
//     const buttonSubmit = screen.getByText("Search");
//     userEvent.type(inputElement, "Narnia");
//     userEvent.click(buttonSubmit);
//     expect(screen.getByText("Narnia")).toBeInTheDocument();
//   });
// });
// export {};
