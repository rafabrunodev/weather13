import { useState, createContext, useEffect } from "react";
import styled from "styled-components";
import ForecastCover from "./components/ForecastCover";
import Header from "./components/Header";
import ForecastWeek from "./components/ForecastWeek";

import { getForecastList, IForecast } from "./services/weatherService";
import { device } from "./utils";

export const ForecastContext = createContext<IForecast[]>([]);

const AppContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
`;

const AppContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

function App() {
  const [forecast, setForecast] = useState<IForecast[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getApi = async () => {
      const forecastList = await getForecastList();

      if (forecastList) {
        setLoading(true);
        setForecast(forecastList);
      }
    };

    getApi();
  }, []);

  return (
    <AppContainer>
      <Header />
      <ForecastContext.Provider value={forecast}>
        {loading ? (
          <AppContent>
            <ForecastCover />
            <ForecastWeek />
          </AppContent>
        ) : (
          <h3>Loading...</h3>
        )}
      </ForecastContext.Provider>
    </AppContainer>
  );
}

export default App;
