import moment from "moment";
import styled, { css } from "styled-components";
import { IForecast } from "../../services/weatherService";
import WeatherBlock from "../WeatherBlock";

interface IForecastItem {
  dayForecast: IForecast;
  nightForecast: IForecast;
}

interface IWeatherContainer {
  isDayTime: boolean;
}

const WeatherContainer = styled.div<IWeatherContainer>`
  min-height: 80px;
  padding: 10px 0;
  border-radius: 15px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  color: white;

  ${({ isDayTime }) =>
    isDayTime
      ? css`
          background-color: #e89f0038;
        `
      : css`
          background-color: #041aba20;
        `}
`;

const ForecastItem: React.FC<IForecastItem> = ({
  dayForecast,
  nightForecast,
}) => {
  const isDayTime = moment().hours() < 18;

  return (
    <WeatherContainer isDayTime={isDayTime}>
      <WeatherBlock forecast={dayForecast} />
      <WeatherBlock forecast={nightForecast} />
    </WeatherContainer>
  );
};

export default ForecastItem;
