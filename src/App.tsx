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
export interface CurrentWeatherProps {
  LocalObservationDateTime: string;
  WeatherText: string;
  WeatherIcon: number;
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
  Wind: {
    Speed: {
      Metric: {
        Value: number;
        Unit: string;
      };
    };
  };
  Visibility: {
    Metric: {
      Value: number;
      Unit: string;
    };
  };
  Pressure: {
    Metric: {
      Value: number;
      Unit: string;
    };
  };
  RelativeHumidity: number;
}

function App() {
  const getlocalStorageCityName = localStorage.getItem("cityName") || "Lisbon";
  const getlocalStorageCityKey = localStorage.getItem("cityKey") || "274087";

  const [cityName, setCityName] = useState<string>(getlocalStorageCityName);
  const [cityKey, setCityKey] = useState<number>(
    parseInt(getlocalStorageCityKey)
  );
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
        <Dashboard cityKey={cityKey} currentWeather={currentWeather} />
      </Row>
    </Container>
  );
}

export default App;
