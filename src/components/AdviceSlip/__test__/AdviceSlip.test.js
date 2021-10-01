import { render, screen } from "@testing-library/react";
import AdviceSlip from "../AdviceSlip";


describe("advice slip", () => {
    test("find advice element", () => {
        render(<AdviceSlip />)
        const adviceParagraph = screen.getByTestId("advice-slip")
        expect(adviceParagraph).toBeInTheDocument()
    })
    test("will show advice give as prop", () => {
        render(<AdviceSlip slip={"some advice"} />)
        const adviceParagraph = screen.getByText(/some advice/i)
        expect(adviceParagraph).toBeInTheDocument()
    })
})