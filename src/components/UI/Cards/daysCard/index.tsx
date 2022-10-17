import { RandomUUIDOptions } from "crypto";
import { Card, Col } from "react-bootstrap";
import WeatherIcon from "../../../../assets/Snow.png";
import "./styles.scss";

export interface DayForeCastProps {
  currentDate: any;
  minWeather: number;
  maxWeather: number;
  icon?: string;
  id: RandomUUIDOptions;
}
export const DayCard = ({
  id,
  currentDate,
  minWeather,
  maxWeather,
  icon,
}: DayForeCastProps) => {
  const formatedDate = new Date(currentDate).toLocaleDateString("en-us", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <Col>
      <Card className="cardContainer bg-primary py-4 align-items-center">
        <Card.Title>{`
          ${formatedDate}
        `}</Card.Title>
        <Card.Img src={WeatherIcon} />
        <Card.Body className="d-flex gap-2">
          <Card.Text className="p-0 m-0">↑ {maxWeather}</Card.Text>
          <Card.Text className="text-secondary p-0 m-0">
            ↓ {minWeather}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
