import { Card, Col, Row } from "react-bootstrap";
import { DayCard } from "../UI/Cards/daysCard";

export const Dashboard = () => {
  return (
    <Col md={8} className="mx-auto py-5" style={{ paddingLeft: "120px" }}>
      <Row className="d-flex gap-2 justify-content-end pb-5">
        <button
          className="rounded-circle border-0 bg-light text-dark"
          style={{ height: "40px", width: "40px" }}
        >
          <b>°C</b>
        </button>
        <button
          className="rounded-circle border-0 bg-secondary text-light"
          style={{ height: "40px", width: "40px" }}
        >
          <b>°F</b>
        </button>
      </Row>
      <Row xs={1} md={6} className="gap-3 mx-auto py-5 justify-content-between">
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </Row>
      <h3>Today's Highlights</h3>
      <Row xs={1} md={3} className="gy-4 gap-4 mx-auto py-2">
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
  );
};
