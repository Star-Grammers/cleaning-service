import React from "react";
import { render, screen, describe, test, expect } from "@testing-library/react";
import Home from "./page";

describe("Renders page component correctly", () => {
  test("renders reservations", () => {
    render(<Home />);
    const intro = screen.getByText(/hello world/i);
    expect(intro).toBeInTheDocument();
  });
});
