import { Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { TodayWeather } from "../TodayWeather";
import { RoundButtons } from "../UI/RoundButtons";
import { WeatherApi } from "../../api/api";
import { useEffect, useState } from "react";
import { SearchLocation } from "../SearchLocation";

//TODO: Get pc local network with button (browser authorizin)

interface CurrentWeatherProps {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: true;
  PrecipitationType: null;
  IsDayTime: false;
  Temperature: {
    Metric: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
}
export const SideBar = ({
  setSelectedCity,
  selectedCity,
  setCityName,
  cityName,
}: any) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherProps>();

  // const [location, setLocation] = useState();
  const [localWeather, setLocalWeather] = useState(true);

  const getCurrentWeather = async (localCode: string) => {
    const response = await WeatherApi.get(`currentconditions/v1/${localCode}`);
    setCurrentWeather(response.data[0]);
    // console.log(response.data);
  };

  useEffect(() => {
    getCurrentWeather(selectedCity);
  }, [selectedCity]);

  //code locations: 226081, 274087
  console.log(currentWeather?.LocalObservationDateTime);
  return (
    <Col md={4} className="bg-primary m-0 px-0 py-5">
      <div className="d-flex mx-5 gap-5 justify-content-between">
        <button
          className="bg-secondary text-light p-2"
          onClick={() => setLocalWeather(!localWeather)}
        >
          {localWeather ? "Search for places" : "Back to previous"}
        </button>
        {/* <RoundButtons color="secondary" onClick={() => setLocation(274087)}>
          <Icon icon="bx:current-location" fontSize={24} />
        </RoundButtons> */}
      </div>
      {localWeather && currentWeather ? (
        <TodayWeather
          dateTime={currentWeather?.LocalObservationDateTime}
          weatherText={currentWeather.WeatherText}
          tempIs={"celsius"}
          celsiusTemp={currentWeather.Temperature.Metric.Value}
          faTemp={currentWeather.Temperature.Imperial.Value}
          cityName={cityName}
        />
      ) : (
        <SearchLocation
          setSelectedCity={setSelectedCity}
          setCityName={setCityName}
        />
      )}
    </Col>
  );
};
