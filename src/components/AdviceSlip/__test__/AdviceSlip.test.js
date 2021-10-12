import { render, screen } from "@testing-library/react";
import AdviceSlip from "../AdviceSlip";

describe("advice slip", () => {
  test("renders slip", async () => {
    render(<AdviceSlip slip={"advice text"} />);
    const seenSlip = await screen.findByTestId("advice-slip");
    expect(seenSlip).toBeInTheDocument();
  });
});
