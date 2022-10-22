import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { WeatherApi } from "../../api/api";
import { DayCard } from "../UI/Cards/daysCard";
import { StatusCard } from "../UI/Cards/statusCard";
import { RoundButtons } from "../UI/RoundButtons";

//TODO: Today's highlight with data

export const Dashboard = ({ location }: any) => {
  const [forecast, setForecast] = useState<any>([]);

  const getForecasts = async (localCode: string) => {
    const response = await WeatherApi.get(
      `forecasts/v1/daily/5day/${localCode}`
    );
    setForecast(response.data.DailyForecasts);
  };

  useEffect(() => {
    getForecasts(location);
  }, [location]);

  return (
    <Col md={6} className="mx-auto p-5">
      <Row className="d-flex gap-2 justify-content-end pb-5">
        {/* <RoundButtons color="secondary">
          <b>°C</b>
        </RoundButtons>
        <RoundButtons color="light">
          <b>°F</b>
        </RoundButtons> */}
      </Row>
      <Row xs={1} md={5} className="py-5">
        {forecast.map((day: any) => {
          const cardId = Math.random().toString();
          return (
            <DayCard
              id={cardId}
              key={cardId}
              currentDate={day.Date}
              minWeather={day.Temperature.Minimum.Value}
              maxWeather={day.Temperature.Maximum.Value}
            />
          );
        })}
      </Row>
      <h3 className="py-2">
        {localStorage.getItem("cityName")}'s Highlights for Today
      </h3>
      <Row xs={1} md={2} className="d-flex align-items-center gy-4">
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </Row>
    </Col>
  );
};
