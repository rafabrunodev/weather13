import styled from "styled-components";
import { IForecast } from "../../services/weatherService";
import { device } from "../../utils";
import ForecastItem from "./ForecastItem";

interface IForecastWeekList {
  forecastByDay: IForecast[][];
}

const Ul = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;

  @media ${device.laptop} { 
    width: 100%;
    padding: 0 40px 30px 40px;
  }
`;

const Li = styled.li`
  margin: 10px;
`;

const DayOfWeek = styled.h4`
  text-align: left;

  small {
    font-weight: 400;
    font-size: 12px;
  }
`;

const ForecastWeekList: React.FC<IForecastWeekList> = ({ forecastByDay }) => {
  return (
    <Ul>
      {forecastByDay.map((forecast, index) => (
        <Li key={index}>
          <DayOfWeek>{index === 0 ? "Today" : forecast[0].dayOfWeek}</DayOfWeek>
          <ForecastItem dayForecast={forecast[0]} nightForecast={forecast[1]} />
        </Li>
      ))}
    </Ul>
  );
};

export default ForecastWeekList;
