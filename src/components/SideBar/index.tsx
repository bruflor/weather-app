import { Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { TodayWeather } from "../TodayWeather";
import { RoundButtons } from "../UI/RoundButtons";
import { WeatherApi } from "../../api/api";
import { useEffect, useState } from "react";
import { SearchLocation } from "../SearchLocation";
import { CityProps } from "../../App";

//TODO: Get pc local network with button (browser authorizin)

export const SideBar = ({
  location,
  currentWeather,
  setCurrentWeather,
}: any) => {
  const [showLocalWeather, setShowLocalWeather] = useState(true);

  const getCurrentWeather = async (localCode: string) => {
    const response = await WeatherApi.get(`currentconditions/v1/${localCode}`);
    setCurrentWeather(response.data[0]);
  };
  // console.log(currentWeather);

  useEffect(() => {
    getCurrentWeather(location);
  }, [location]);

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
        <RoundButtons color="secondary" onClick={() => {}}>
          <Icon icon="bx:current-location" fontSize={24} />
        </RoundButtons>
      </div>
      {/* {showLocalWeather && currentWeather ? (
        <TodayWeather
          dateTime={currentWeather?.LocalObservationDateTime}
          weatherText={currentWeather.WeatherText}
          tempIs={"celsius"}
          celsiusTemp={currentWeather.Temperature.Metric.Value}
          faTemp={currentWeather.Temperature.Imperial.Value}
        />
      ) : (
        <SearchLocation setShowLocalWeather={setShowLocalWeather} />
        )} */}
      <SearchLocation setShowLocalWeather={setShowLocalWeather} />
    </Col>
  );
};
