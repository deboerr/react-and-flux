import React from "react";
import { render } from "@testing-library/react";
import Contact from "./contact";

test("renders react link", () => {
    const { getByText } = render(<Contact />);
    const linkElement = getByText(/react/i);
    expect(linkElement).toBeInTheDocument();
});
