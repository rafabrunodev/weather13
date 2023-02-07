import styled from "styled-components";
import { WiDaySunny, WiNightAltCloudy } from "weather-icons-react";
import { IForecast } from "../../services/weatherService";

interface IWeatherBlock {
  forecast: IForecast;
}

const WeatherDefault = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  width: 50%;
  justify-content: flex-start;
`;

const InfoWeather = styled.div`
  text-align: left;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;

  strong {
    font-size: 15px;
    text-transform: lowercase;
  }

  span {
    font-size: 10px;
    margin-top: 6px;
    line-height: 18px;
    display: block;
    word-break: break-word;
  }
`;

const WeatherBlock: React.FC<IWeatherBlock> = ({ forecast }) => (
  <WeatherDefault>
    {forecast.isDaytime ? (
      <WiDaySunny role="dayIcon" size={40} />
    ) : (
      <WiNightAltCloudy role="nightIcon" size={40} />
    )}
    <InfoWeather>
      <strong>
        {forecast.temperature}&deg;<small>{forecast.temperatureUnit}</small>
      </strong>
      <span>{forecast.shortForecast}</span>
    </InfoWeather>
  </WeatherDefault>
);

export default WeatherBlock;
