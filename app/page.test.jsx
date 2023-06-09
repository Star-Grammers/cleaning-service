/* eslint-disable no-undef */
// disabled because Jest installed globally on computer for describe, test, expect which causes elint errors

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Renders page component correctly", () => {
  test("renders reservations", () => {
    render(<Home />);
    const intro = screen.getByText(/hello world/i);
    expect(intro).toBeInTheDocument();
  });
});
