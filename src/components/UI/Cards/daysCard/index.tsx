import { Card, Col } from "react-bootstrap";
import Thunderstorm from "../../../../assets/Thunderstorm.png";
import LightRain from "../../../../assets/LightRain.png";
import HeavyCloud from "../../../../assets/HeavyCloud.png";
import Clear from "../../../../assets/Clear.png";
import Cloudy from "../../../../assets/LightCloud.png";
import Snow from "../../../../assets/Snow.png";
import Sleet from "../../../../assets/Sleet.png";
import "./styles.scss";
import { useEffect, useState } from "react";

export interface DayForeCastProps {
  currentDate: any;
  minWeather: number;
  maxWeather: number;
  icon?: number;
  id: string;
}
export const DayCard = ({
  id,
  currentDate,
  minWeather,
  maxWeather,
  icon,
}: DayForeCastProps) => {
  const [dayIcon, setDayIcon] = useState<string>();
  const formatedDate = new Date(currentDate).toLocaleDateString("en-us", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  useEffect(() => {
    switch (icon) {
      case 1:
      case 2:
      case 32:
      case 33:
      case 34:
      case 3: {
        const message = Clear;
        setDayIcon(message);
        break;
      }
      case 4:
      case 5:
      case 35:
      case 36:
      case 6: {
        const message = Cloudy;
        setDayIcon(message);
        break;
      }
      case 7:
      case 8:
      case 37:
      case 38:
      case 11: {
        const message = HeavyCloud;
        setDayIcon(message);
        break;
      }
      case 12:
      case 13:
      case 39:
      case 40:
      case 14: {
        const message = LightRain;
        setDayIcon(message);
        break;
      }
      case 17:
      case 15:
      case 18:
      case 41:
      case 42:
      case 16: {
        const message = Thunderstorm;
        setDayIcon(message);
        break;
      }
      case 22:
      case 24:
      case 44:
      case 43:
      case 23: {
        const message = Snow;
        setDayIcon(message);
        break;
      }
      case 25:
      case 26:
      case 29: {
        const message = Sleet;
        setDayIcon(message);
        break;
      }
    }
  }, [icon]);

  return (
    <Col>
      <Card className="cardContainer bg-primary py-4 align-items-center">
        <Card.Title>{`
          ${formatedDate}
        `}</Card.Title>
        <Card.Img src={dayIcon} />
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
