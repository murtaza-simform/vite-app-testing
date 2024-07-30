import Greet from "../../components/Greet";
import { render, screen } from "../../utils/test-utils";

describe("Greet", () => {
  it("should render heading when name is provided", () => {
    render(<Greet name="Murtaza" />);
    // screen.debug();

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/murtaza/i);
  });

  it("should render button when name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
