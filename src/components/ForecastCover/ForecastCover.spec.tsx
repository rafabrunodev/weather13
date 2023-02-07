import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ForecastCover from "./ForecastCover";
import { forecastListMock } from "../../testUtils";
import { ForecastContext } from "../../App";

describe("ForecastCover.tsx", () => {
  it("should match Snapshot", () => {
    const { container } = render(
      <ForecastContext.Provider value={forecastListMock}>
        <ForecastCover />
      </ForecastContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
