import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app", () => {
  test("h1 is present", async () => {
    render(<App />);
    const headElement = await screen.findByText(/number/);
    expect(headElement).toBeInTheDocument();
  });
  test("button is present", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  test("data renders advice slip", async () => {
    render(<App />)
    const adviceNull = screen.queryByText("advice")
    expect(adviceNull).toBeNull()
    const adviceRender = await screen.findByTestId("advice-slip")
    expect(adviceRender).toBeInTheDocument()
  })
});
