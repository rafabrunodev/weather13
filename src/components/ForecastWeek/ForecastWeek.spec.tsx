import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ForecastWeek from "./ForecastWeek";
import { forecastListMock } from "../../testUtils";
import { ForecastContext } from "../../App";

vi.mock("moment", async () => {
  const actual: any = await vi.importActual("moment");
  return {
    ...actual,
    hours: () => 21
  }
})

describe("ForecastWeek.tsx", () => {
  it("should match Snapshot", () => {
    const { container } = render(
      <ForecastContext.Provider value={forecastListMock}>
        <ForecastWeek />
      </ForecastContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
