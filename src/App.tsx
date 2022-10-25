import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container, Row } from "react-bootstrap";
import { SideBar } from "./components/SideBar";
import { Dashboard } from "./components/Dashboard";

export interface CityProps {
  selectedCity: number;
  setSelectedCity: (selectedCity: number) => void;
  cityName: string;
  setCityName: (cityName: string) => void;
}
interface CurrentWeatherProps {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: true;
  PrecipitationType: null;
  IsDayTime: false;
  Temperature: {
    Metric: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
}

function App() {
  const getlocalStorageCityKey = localStorage.getItem("cityKey");
  const getlocalStorageCityName = localStorage.getItem("cityName");

  const [cityName, setCityName] = useState<any>(getlocalStorageCityName);
  const [cityKey, setCityKey] = useState(getlocalStorageCityKey);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherProps>();

  useEffect(() => {
    localStorage.setItem("cityKey", `${cityKey}`);
    localStorage.setItem("cityName", `${cityName}`);
  }, [cityKey, cityName]);

  return (
    <Container fluid className="p-0 m-0">
      <Row className="p-0 m-0" style={{ height: "100vh" }}>
        <SideBar
          cityName={cityName}
          cityKey={cityKey}
          setCityName={setCityName}
          setCityKey={setCityKey}
          currentWeather={currentWeather}
          setCurrentWeather={setCurrentWeather}
        />
        <Dashboard
          cityName={cityName}
          cityKey={cityKey}
          currentWeather={currentWeather}
        />
      </Row>
    </Container>
  );
}

export default App;
