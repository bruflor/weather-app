import { Card, Col, Row } from "react-bootstrap";
import { DayCard } from "../UI/Cards/daysCard";
import { StatusCard } from "../UI/Cards/statusCard";

export const Dashboard = () => {
  return (
    <Col
      md={8}
      className="mx-auto py-5"
      style={{ paddingLeft: "120px", paddingRight: "120px" }}
    >
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
      <h3 className="py-2">Today's Highlights</h3>
      <Row xs={1} md={3} className="gy-4 gap-1 w-100 mx-auto py-2">
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </Row>
    </Col>
  );
};
