import { useContext } from "react";
import { ForecastContext } from "../../App";
import { IForecast } from "../../services/weatherService";
import ForecastWeekList from "./ForecastWeekList";

const getForecastByDay = (forecastList: IForecast[]) => {
  const chunkSize = 2;
  const myArray = [];

  for (let i = 0; i < forecastList.length; i += chunkSize) {
    myArray.push(forecastList.slice(i, i + chunkSize));
  }

  return myArray;
};

const ForecastWeek: React.FC = () => {
  const forecastList: IForecast[] = useContext(ForecastContext);
  const forecastByDay = getForecastByDay(forecastList);
  return <ForecastWeekList forecastByDay={forecastByDay} />;
};

export default ForecastWeek;
