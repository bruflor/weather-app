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

//TODO: initialize state with locaStorage value

function App() {
  const [location, setLocation] = useState<any>(
    localStorage.getItem("cityKey")
  );
  return (
    <Container fluid className="p-0 m-0">
      <Row className="p-0 m-0" style={{ height: "100vh" }}>
        <SideBar location={location} />
        <Dashboard location={location} />
      </Row>
    </Container>
  );
}

export default App;
