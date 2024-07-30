import UserList from "../../components/UserList";
import { User } from "../../entities";
import { render, screen } from "../../utils/test-utils";

describe("UserList", () => {
  it("should render no users if users array is empty", () => {
    const users: User[] = [];

    render(<UserList users={users} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render a list of users", () => {
    const users: User[] = [
      {
        id: 1,
        name: "Murtaza",
      },
      {
        id: 2,
        name: "Juzer",
      },
    ];

    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
