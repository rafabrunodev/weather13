import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WeatherBlock from "./WeatherBlock";
import { forecastListMock } from "../../testUtils";
import { IForecast } from "../../services/weatherService";

describe("WeatherBlock.tsx", () => {
  let forecast:IForecast;

  beforeEach(() => {
    forecast = forecastListMock[0];
  })

  it("should display the Sun icon", () => {
    const { getAllByRole } = render(<WeatherBlock forecast={forecast} />);
    expect(getAllByRole('dayIcon').length).toBeGreaterThan(0)
  });

  it("should display the Night icon", () => {
    forecast.isDaytime = false;
    const { getAllByRole } = render(<WeatherBlock forecast={forecast} />);
    expect(getAllByRole('nightIcon').length).toBeGreaterThan(0)
  });

  it("should match Snapshot", () => {
    const { container } = render(<WeatherBlock forecast={forecast} />);
    expect(container).toMatchSnapshot();
  });
});
