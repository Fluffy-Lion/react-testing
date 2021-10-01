import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app", () => {
  test("h1 is present", () => {
    render(<App />);
    const headElement = screen.getByRole("heading");
    expect(headElement).toBeInTheDocument();
  });

  test("button is present", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
