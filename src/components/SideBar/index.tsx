import { Col } from "react-bootstrap";
import { TodayWeather } from "../TodayWeather";
import { WeatherApi } from "../../api/api";
import { useEffect, useState } from "react";
import { SearchLocation } from "../SearchLocation";

export const SideBar = ({
  currentWeather,
  setCurrentWeather,
  cityName,
  cityKey,
  setCityKey,
  setCityName,
}: any) => {
  const [showLocalWeather, setShowLocalWeather] = useState(true);

  const getCurrentWeather = async (localCode: string) => {
    const response = await WeatherApi.get(`currentconditions/v1/${localCode}`);
    setCurrentWeather(response.data[0]);
  };
  // console.log(currentWeather);

  useEffect(() => {
    getCurrentWeather(cityKey);
  }, [cityKey]);

  //code locations: 226081, 274087
  return (
    <Col md={4} className="bg-primary m-0 px-0 py-5">
      <div className="d-flex mx-5 gap-5 justify-content-between">
        <button
          className="bg-secondary text-light p-2"
          onClick={() => setShowLocalWeather(!showLocalWeather)}
        >
          {showLocalWeather ? "Search for places" : "Back to previous"}
        </button>
      </div>
      {showLocalWeather && currentWeather ? (
        <TodayWeather
          cityName={cityName}
          dateTime={currentWeather?.LocalObservationDateTime}
          weatherText={currentWeather.WeatherText}
          tempIs={"celsius"}
          celsiusTemp={currentWeather.Temperature.Metric.Value}
          faTemp={currentWeather.Temperature.Imperial.Value}
          apiIcon={currentWeather.WeatherIcon}
        />
      ) : (
        <SearchLocation
          setShowLocalWeather={setShowLocalWeather}
          cityName={cityName}
          cityKey={cityKey}
          setCityName={setCityName}
          setCityKey={setCityKey}
        />
      )}
    </Col>
  );
};
