import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react'
import Greet from "../../src/components/Greet";
import "@testing-library/jest-dom/vitest";

describe('Greet', () => {
    it('should render heading when name is provided', () => {
        render(<Greet name='Murtaza' />);
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

})