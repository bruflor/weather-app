import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container, Row, Col, Card } from "react-bootstrap";
import { SideBar } from "./components/SideBar";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="p-0 m-0" style={{ height: "100vh" }}>
        <SideBar />
        <Dashboard />
      </Row>
    </Container>
  );
}

export default App;
