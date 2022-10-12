import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container, Row, Col, Card } from "react-bootstrap";

function App() {
  return (
    <Row
      as={Container}
      fluid
      className="p-0 mx-auto"
      style={{ height: "100vh" }}
    >
      <Col md={4} className="bg-primary">
        <Row className="d-flex">
          <Col>Search for places</Col>
          <Col>Icon</Col>
        </Row>
        <Row>img e icon</Row>
        <h1>15°c</h1>
        <h2>Shower</h2>
        <div>Today . Fri, 5 Jun</div>
        <Row className="d-flex">
          <span>Icon</span>
          <p>Helsinki</p>
        </Row>
      </Col>
      <Col md={8} className="p-4 mx-0">
        <Row className="d-flex">
          <button>°C</button>
          <button>°F</button>
        </Row>
        <Row xs={1} md={6} className="gy-4 gap-2 mx-auto ">
          <Card>
            <Card.Title>Day</Card.Title>
            <Card.Img src="./assets/HeavyRain.png" />
            <Card.Body>
              <Card.Text>Maxima</Card.Text>
              <Card.Text>Minima</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Day</Card.Title>
            <Card.Img src="./assets/HeavyRain.png" />
            <Card.Body>
              <Card.Text>Maxima</Card.Text>
              <Card.Text>Minima</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Day</Card.Title>
            <Card.Img src="./assets/HeavyRain.png" />
            <Card.Body>
              <Card.Text>Maxima</Card.Text>
              <Card.Text>Minima</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Day</Card.Title>
            <Card.Img src="./assets/HeavyRain.png" />
            <Card.Body>
              <Card.Text>Maxima</Card.Text>
              <Card.Text>Minima</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Day</Card.Title>
            <Card.Img src="./assets/HeavyRain.png" />
            <Card.Body>
              <Card.Text>Maxima</Card.Text>
              <Card.Text>Minima</Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <h3>Today's Highlights</h3>
        <Row xs={1} md={3} className="gy-4 gap-4 mx-auto ">
          <Card>
            <Card.Text>Wind status</Card.Text>
            <Card.Title>7mph</Card.Title>
            <Card.Body>
              <Card.Text>icon</Card.Text>
              <Card.Text>wsw</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Text>Humidity</Card.Text>
            <Card.Title>84%</Card.Title>
            <Card.Body>
              <Card.Text>icon</Card.Text>
              <Card.Text>blabla</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Text>Visibility</Card.Text>
            <Card.Title>6.4 miles</Card.Title>
          </Card>
          <Card>
            <Card.Text>Air Pressure</Card.Text>
            <Card.Title>998 mb</Card.Title>
          </Card>
        </Row>
      </Col>
    </Row>
  );
}

export default App;
