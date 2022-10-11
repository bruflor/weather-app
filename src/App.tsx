import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import { Dashboard } from "./components/Dashboard";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <Container fluid className="mx-auto">
      <Row className="p-0">
        <SideBar />
        <Dashboard />
      </Row>
    </Container>
  );
}

export default App;
