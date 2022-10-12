import { Card, Col } from "react-bootstrap";
import WeatherIcon from "../../../../assets/Snow.png";
import "./styles.scss";

export const DayCard = () => {
  return (
    <Col>
      <Card className="cardContainer bg-primary py-4 align-items-center">
        <Card.Title>Day</Card.Title>
        <Card.Img src={WeatherIcon} />
        <Card.Body className="d-flex gap-2">
          <Card.Text className="p-0 m-0">Maxima</Card.Text>
          <Card.Text className="text-secondary p-0 m-0">Minima</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
