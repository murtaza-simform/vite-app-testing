import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";
import "@testing-library/jest-dom/vitest";

describe("UserList", () => {
  it("should render no users if users array is empty", () => {
    const users: User[] = [];

    render(<UserList users={users} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it('should render a list of users', () => {
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

    render(<UserList users={users} />)

    users.forEach(user => {
        const link = screen.getByRole("link", {name: user.name});
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", `/users/${user.id}`)
    })
  })
});
