import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container, Row } from "react-bootstrap";
import { SideBar } from "./components/SideBar";
import { Dashboard } from "./components/Dashboard";

export interface CityProps {
  selectedCity?: number;
  setSelectedCity: (selectedCity: number) => void;
  cityName?: string;
  setCityName: (cityName: string) => void;
}

function App() {
  const [selectedCity, setSelectedCity] = useState<CityProps>();
  const [cityName, setCityName] = useState<CityProps>();
  return (
    <Container fluid className="p-0 m-0">
      <Row className="p-0 m-0" style={{ height: "100vh" }}>
        <SideBar
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
          setCityName={setCityName}
          cityName={cityName}
        />
        <Dashboard selectedCity={selectedCity} />
      </Row>
    </Container>
  );
}

export default App;
