import { Card } from "react-bootstrap";
import WeatherIcon from "../../../../assets/Snow.png";
import "./styles.scss";

export const DayCard = () => {
  return (
    <Card className="cardContainer bg-primary p-3 m-0 align-items-center gap-3">
      <Card.Title>Day</Card.Title>
      <Card.Img src={WeatherIcon} />
      <Card.Body className="d-flex gap-3 m-0 p-0">
        <Card.Text>Maxima</Card.Text>
        <Card.Text className="text-secondary">Minima</Card.Text>
      </Card.Body>
    </Card>
  );
};
