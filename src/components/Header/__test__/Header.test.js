import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  test("found header element", () => {
    render(<Header />);
    const headElement = screen.getByRole("heading");
    expect(headElement).toBeInTheDocument();
  });
  test("text sent as prop is rendered to document", () => {
    render(<Header text={"sent text"} />);
    const headElement = screen.getByText(/sent text/i);
    expect(headElement).toBeInTheDocument();
  });
});
