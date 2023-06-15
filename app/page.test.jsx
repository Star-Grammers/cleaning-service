/* eslint-disable no-undef */
// disabled because Jest installed globally on computer for describe, test, expect which causes elint errors

import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Renders page component correctly", () => {
  test("renders reservations", () => {
    render(<Home />);
    const intro = screen.getByText(/FUN LOVE/i);
    expect(intro).toBeInTheDocument();
  });
});
