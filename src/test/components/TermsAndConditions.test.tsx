import { render, screen, userEvent } from "../../utils/test-utils";
import TermsAndConditions from "../../components/TermsAndConditions";

describe("TermsAndConditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button"),
    };
  };

  it("should render with correct text and initial state", () => {
    const { heading, checkbox, button } = renderComponent();

    expect(heading).toHaveTextContent("Terms & Conditions");
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable the button when the checkbox is checked", async () => {
    const { checkbox, button } = renderComponent();

    //method 1
    // fireEvent.click(checkbox);

    //method 2
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(checkbox).toBeChecked();

    expect(button).toBeEnabled();
  });
});
