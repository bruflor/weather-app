import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container, Row, Col, Card } from "react-bootstrap";
import { SideBar } from "./components/SideBar";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <Container fluid>
      <Row className="p-0 mx-auto " style={{ height: "100vh" }}>
        <SideBar />
        <Dashboard />
      </Row>
    </Container>
  );
}

export default App;
