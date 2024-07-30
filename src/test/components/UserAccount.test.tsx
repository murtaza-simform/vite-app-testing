import UserAccount from "../../components/UserAccount";
import { User } from "../../entities";
import { render, screen } from "../../utils/test-utils";

describe("UserAccount", () => {
  it("should render user name", () => {
    const user: User = { id: 1, name: "Murtaza" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render button if user is admin", () => {
    const user: User = { id: 1, name: "Murtaza", isAdmin: true };

    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not render button if user is not admin", () => {
    const user: User = { id: 1, name: "Murtaza" };

    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button"); // to query since button not exist

    expect(button).not.toBeInTheDocument();
  });
});
