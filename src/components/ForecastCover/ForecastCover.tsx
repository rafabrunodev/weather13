import { useContext } from "react";
import moment from "moment";

import styled, { css } from "styled-components";
import { ForecastContext } from "../../App";

import { WiDaySunny, WiNightAltCloudy, WiStrongWind } from "weather-icons-react";

import { IForecast } from "../../services/weatherService";
import { device } from "../../utils";

interface IWeatherCover {
  isDayTime: boolean
}

const Container = styled.div`
  margin: 10px;

  @media ${device.laptop} { 
    width: 100%;
    padding: 60px 30px;
  }
`;

const CoverDefault = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${device.laptop} { 
    min-height: 500px;
  }
`;

const WeatherCover = styled(CoverDefault)<IWeatherCover>`
  ${({ isDayTime }) =>
    isDayTime ?
    css`
      background: #fce570;
      color: black;
    ` :
    css`
      background: #1b2051;
      color: white;
    `
    }
`;

const Location = styled.h3`
  font-weight: 500;
  margin: 0;
`;
const Date = styled.h4`
  font-weight: 300;
  margin: 0;
`;

const WeatherInfo = styled.div`
  font-size: 40px;

  small {
    text-transform: lowercase;
  }
`;

const ShortForecast = styled.div`
  font-size: 20px;
  font-weight: 300;
`;

const WindInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 15px;
    margin-left: 10px;
  }
`;

const ForecastCover: React.FC = () => {
  const forecastList: IForecast[] = useContext(ForecastContext);
  const isDayTime = moment().hours() < 18;
  const today: IForecast = forecastList[0]

  return (
    <>
      {today && (
        <Container>
          <WeatherCover isDayTime={isDayTime}>
            <div>
              <Location>701 Brazos St, Austin</Location>
              <Date>{today.startTime}</Date>
            </div>
            <WeatherInfo>
              {today.temperature}&deg;<small>{today.temperatureUnit}</small>
            </WeatherInfo>

            {isDayTime ? (
              <WiDaySunny size={80} />
            ) : (
              <WiNightAltCloudy size={80} />
            )}

            <ShortForecast>
              {today.shortForecast}
              <br />
              <WindInfo>
                <WiStrongWind size={25} />
                <span>{today.windSpeed}</span>
              </WindInfo>
            </ShortForecast>
          </WeatherCover>
        </Container>
      )}
    </>
  );
};

export default ForecastCover;
