import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { WeatherApi } from "../../api/api";
import { DayCard } from "../UI/Cards/daysCard";
import { StatusCard } from "../UI/Cards/statusCard";
import { RoundButtons } from "../UI/RoundButtons";

export const Dashboard = ({ cityKey, currentWeather }: any) => {
  const [forecast, setForecast] = useState<any>([]);

  const getForecasts = async (localCode: string) => {
    const response = await WeatherApi.get(
      `forecasts/v1/daily/5day/${localCode}`
    );
    setForecast(response.data.DailyForecasts);
  };

  useEffect(() => {
    getForecasts(cityKey);
  }, [cityKey]);

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
              icon={day.Day.Icon}
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
      {currentWeather ? (
        <Row xs={1} md={2} className="d-flex align-items-center gy-4">
          <StatusCard
            title={"Wind Status"}
            metric={currentWeather.Wind.Speed.Metric.Value}
            unit={currentWeather.Wind.Speed.Metric.Unit}
          />
          <StatusCard
            title={"Relative Humidity"}
            metric={currentWeather.RelativeHumidity}
            unit={"%"}
          />
          <StatusCard
            title={"Visibility"}
            metric={currentWeather.Visibility.Metric.Value}
            unit={currentWeather.Visibility.Metric.Unit}
          />
          <StatusCard
            title={"Air Pressure"}
            metric={currentWeather.Pressure.Metric.Value}
            unit={currentWeather.Pressure.Metric.Unit}
          />
        </Row>
      ) : (
        <Row></Row>
      )}
    </Col>
  );
};
