import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Row
      as={Container}
      fluid
      className="p-0 mx-auto"
      style={{ height: "100vh" }}
    >
      <Col md={3} className="bg-primary">
        Today
      </Col>
      <Col md={9} className="">
        Dashboard
      </Col>
    </Row>
  );
}

export default App;
