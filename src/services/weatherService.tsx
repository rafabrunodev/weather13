import moment from "moment";
import api from "./apiService";

interface IForecastRequest {
  gridId: string;
  gridX: string;
  gridY: string;
}

export interface IForecast {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  windSpeed: string;
  shortForecast: string;
}

export const getForecasByLatLng = (lat: string, lng: string) => {
  return api.get(`/points/${lat},${lng}`);
};

export const getForecastByGriPoints = async () => {
  const { data: forecastByLatLng } = await getForecasByLatLng(
    "30.2688754",
    "-97.7405641"
  );

  const requestForecastData: IForecastRequest = {
    gridId: forecastByLatLng.properties.gridId,
    gridX: forecastByLatLng.properties.gridX,
    gridY: forecastByLatLng.properties.gridY,
  };

  return api.get(
    `/gridpoints/${requestForecastData.gridId}/${requestForecastData.gridX},${requestForecastData.gridY}/forecast`
  );
};

export const getForecastList = async () => {
  const { data: forecastResponse } = await getForecastByGriPoints();

  const forecastList: IForecast[] = forecastResponse.properties.periods.map(
    (period: any) => ({
      dayOfWeek: period.name,
      startTime: moment(period.startTime).format('ddd, DD MMM'),
      endTime: moment(period.endTime).format('ddd, DD MMM'),
      isDaytime: period.isDaytime,
      temperature: period.temperature,
      temperatureUnit: period.temperatureUnit,
      windSpeed: period.windSpeed,
      shortForecast: period.shortForecast,
    })
  );

  return forecastList;
};
