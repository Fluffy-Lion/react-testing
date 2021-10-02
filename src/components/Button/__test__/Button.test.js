import { render, screen, fireEvent} from "@testing-library/react";
import Button from "../Button";

describe("button", () => {
  test("button is found", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  test("button fires function", () => {
      const mockFunc = jest.fn()
      render(<Button collect={mockFunc}/>)
      const buttonElement = screen.getByRole("button");
      fireEvent.click(buttonElement)
      expect(mockFunc).toHaveBeenCalledTimes(1)
  })
});