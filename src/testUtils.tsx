import { IForecast } from "./services/weatherService";

export const forecastListMock: IForecast[] = [
  {
    dayOfWeek: "MockDayOfWeek",
    startTime: new Date().toDateString(),
    endTime: new Date().toDateString(),
    isDaytime: true,
    temperature: 50,
    temperatureUnit: "F",
    windSpeed: "5 km",
    shortForecast: "Clear",
  },
  {
    dayOfWeek: "MockDayOfWeekNight",
    startTime: new Date().toDateString(),
    endTime: new Date().toDateString(),
    isDaytime: false,
    temperature: 10,
    temperatureUnit: "F",
    windSpeed: "2 km",
    shortForecast: "With Fog",
  },
];

export const forecastMockAPIResponse = {
  properties: {
    periods: [
      {
        number: 1,
        name: "This Afternoon",
        startTime: "2023-02-07T12:00:00-06:00",
        endTime: "2023-02-07T18:00:00-06:00",
        isDaytime: true,
        temperature: 48,
        temperatureUnit: "F",
        temperatureTrend: null,
        windSpeed: "5 to 10 mph",
        windDirection: "N",
        icon: "https://api.weather.gov/icons/land/day/skc?size=medium",
        shortForecast: "Sunny",
        detailedForecast: "Sunny, with a high near 48. North wind 5 to 10 mph.",
      },
      {
        number: 2,
        name: "Tonight",
        startTime: "2023-02-07T18:00:00-06:00",
        endTime: "2023-02-08T06:00:00-06:00",
        isDaytime: false,
        temperature: 26,
        temperatureUnit: "F",
        temperatureTrend: null,
        windSpeed: "5 mph",
        windDirection: "SW",
        icon: "https://api.weather.gov/icons/land/night/few?size=medium",
        shortForecast: "Mostly Clear",
        detailedForecast:
          "Mostly clear, with a low around 26. Southwest wind around 5 mph.",
      },
    ],
  },
};

export const forecastMockGrid = {
  gridId: "MOCK_ID",
  gridX: "MOCK_X",
  gridY: "MOCK_Y",
};
