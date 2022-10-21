import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container, Row } from "react-bootstrap";
import { SideBar } from "./components/SideBar";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [selectedCity, setSelectedCity] = useState<number>(226081);
  const [cityName, setCityName] = useState("Palhoça");
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
