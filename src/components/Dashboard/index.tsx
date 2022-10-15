import { Col, Row } from "react-bootstrap";
import { DayCard } from "../UI/Cards/daysCard";
import { StatusCard } from "../UI/Cards/statusCard";
import { RoundButtons } from "../UI/RoundButtons";

// forecasts/v1/daily/5day/

export const Dashboard = () => {
  return (
    <Col md={6} className="mx-auto p-5">
      <Row className="d-flex gap-2 justify-content-end pb-5">
        <RoundButtons color="secondary">
          <b>°C</b>
        </RoundButtons>
        <RoundButtons color="light">
          <b>°F</b>
        </RoundButtons>
      </Row>
      <Row xs={1} md={5} className="py-5">
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </Row>
      <h3 className="py-2">Today's Highlights</h3>
      <Row xs={1} md={2} className="d-flex align-items-center gy-4">
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </Row>
    </Col>
  );
};
