import React from "react";
import "jest-canvas-mock";
import { render } from "@testing-library/react";
import Lottie from "./index";

describe("Lottie", () => {
  test("render Lottie correctly", () => {
    const { container } = render(<Lottie path="/sample-lottie.json" width={500} />);
    
    expect(container.innerHTML).toContain('<div')
  });
});
