import { Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { TodayWeather } from "../TodayWeather";
import { RoundButtons } from "../UI/RoundButtons";
import { WeatherApi } from "../../api/api";
import { useEffect, useState } from "react";
import { SearchLocation } from "../SearchLocation";

//TODO: Convert date format and send via props
//TODO: send via props city name
//TODO: Get pc local network with button

//? Help:  Get data location from selectedCity
//? Help: Initialize state without fake data

export const SideBar = () => {
  const [currentWeather, setCurrentWeather] = useState({
    LocalObservationDateTime: "2022-10-13T16:27:00+01:00",
    EpochTime: 1665674820,
    WeatherText: "Chovendo nugget",
    WeatherIcon: 4,
    HasPrecipitation: true,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 49.7,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 160.0,
        Unit: "F",
        UnitType: 18,
      },
    },
  });

  const [location, setLocation] = useState("226081");
  const [localWeather, setLocalWeather] = useState(true);

  const getCurrentWeather = async (localCode: string) => {
    const response = await WeatherApi.get(`currentconditions/v1/${localCode}`);
    setCurrentWeather(response.data[0]);
    // console.log(response.data);
  };

  useEffect(() => {
    getCurrentWeather(location);
  }, [location]);

  //code locations: 226081, 274087
  return (
    <Col md={4} className="bg-primary m-0 px-0 py-5">
      <div className="d-flex mx-5 gap-5 justify-content-between">
        <button
          className="bg-secondary text-light p-2"
          onClick={() => setLocalWeather(!localWeather)}
        >
          {localWeather ? "Search for places" : "Back to previous"}
        </button>
        <RoundButtons color="secondary" onClick={() => setLocation("274087")}>
          <Icon icon="bx:current-location" fontSize={24} />
        </RoundButtons>
      </div>
      {localWeather ? (
        <TodayWeather
          weatherText={currentWeather.WeatherText}
          tempIs={"celsius"}
          celsiusTemp={currentWeather.Temperature.Metric.Value}
          faTemp={currentWeather.Temperature.Imperial.Value}
        />
      ) : (
        <SearchLocation />
      )}
    </Col>
  );
};
