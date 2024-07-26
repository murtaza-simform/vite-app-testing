import React from 'react'
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react'
import UserAccount from "../../src/components/UserAccount";
import { User } from '../../src/entities';
import "@testing-library/jest-dom/vitest";

describe('UserAccount', () => {
    it('should render user name', () => {
        const user:User = {id: 1, name:"Murtaza"};

        render(<UserAccount user={user} />)

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
      const user: User = { id: 1, name: "Murtaza"};

      render(<UserAccount user={user} />);

      const button = screen.queryByRole("button"); // to query since button not exist

      expect(button).not.toBeInTheDocument();
    });
})