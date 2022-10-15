import { Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { TodayWeather } from "../TodayWeather";
import { RoundButtons } from "../UI/RoundButtons";
import { WeatherApi } from "../../api/api";
import { useEffect, useState } from "react";
// import { currentWeatherApi } from "../../api/api";

//TODO: Get data from API
//TODO: Search bar
//TODO: Convert date format and pass dynamically
//TODO: Get local with button
//TODO: Local dynamic
//TODO: create a prop to receive tempIs °C or °F from the dashboard selection

//? Initialize state without fake data
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

  const [location, setLocation] = useState("274087");

  const getCurrentWeather = async (localCode: string) => {
    const response = await WeatherApi.get(`currentconditions/v1/${localCode}`);
    setCurrentWeather(response.data[0]);
    console.log(response.data);
  };

  useEffect(() => {
    getCurrentWeather(location);
  }, [location]);

  //code locations: 226081, 274087
  return (
    <Col md={4} className="bg-primary m-0 px-0 py-5">
      <div className="d-flex mx-5 gap-5 justify-content-between">
        <div className="bg-secondary text-light p-2">Search for places</div>
        <RoundButtons color="secondary" onClick={() => setLocation("274087")}>
          <Icon icon="bx:current-location" fontSize={24} />
        </RoundButtons>
      </div>
      <TodayWeather
        weatherText={currentWeather.WeatherText}
        tempIs={"celsius"}
        celsiusTemp={currentWeather.Temperature.Metric.Value}
        faTemp={currentWeather.Temperature.Imperial.Value}
      />
    </Col>
  );
};
