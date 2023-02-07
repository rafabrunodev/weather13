import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header.tsx", () => {
  it("should match Snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
