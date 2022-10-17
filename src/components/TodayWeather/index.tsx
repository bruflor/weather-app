import "./styles.scss";
import Thunderstorm from "../../assets/Thunderstorm.png";
import HeavyCloud from "../../assets/HeavyCloud.png";
import LightCloud from "../../assets/LightCloud.png";
import HeavyRain from "../../assets/HeavyRain.png";
import Clear from "../../assets/Clear.png";
import { useState } from "react";
import { Icon } from "@iconify/react";

//TODO: Change de date by props.
//? Switch Case to change de icon

interface WeatherProps {
  weatherText: string;
  tempIs: string;
  celsiusTemp: number;
  faTemp: number;
}

export const TodayWeather = ({
  weatherText,
  tempIs,
  celsiusTemp,
  faTemp,
}: WeatherProps) => {
  // "Clear", "Cloudy", "Partly sunny",  "Sunny",
  // const [weatherIcon, setWeatherIcon] = useState<any>();

  // switch (weatherText) {
  //   case "Clear" || "Sunny":
  //     setWeatherIcon(Clear);
  //     break;
  //   case "Cloudy":
  //     setWeatherIcon(HeavyCloud);
  //     break;
  //   case "Partly sunny":
  //     setWeatherIcon(LightCloud);
  //     break;
  //   case "Thunderstorm":
  //     setWeatherIcon(Thunderstorm);
  //     break;
  //   case "Rain":
  //     setWeatherIcon(HeavyRain);
  //     break;
  //   default:
  //     setWeatherIcon(HeavyCloud);
  //     break;
  // }
  // console.log(weatherIcon);

  return (
    <div className="h-75 w-100 d-flex flex-column align-items-center mt-5 py-5">
      <div className="imgContainer h-75 w-100 p-0 m-0">
        <img alt="" src={Clear} />
      </div>
      <div className="temperature d-flex p-2">
        <h1>{tempIs === "celsius" ? celsiusTemp : faTemp}</h1>
        <span>°{tempIs === "celsius" ? "C" : "F"}</span>
      </div>
      <h2 className="py-5">{weatherText}</h2>
      <div className="d-flex justify-content-center mt-5">Fri • 5 • Jun</div>
      <div className="d-flex mb-5 mt-3 gap-2 justify-content-center align-items-center">
        <Icon icon="carbon:location-filled" />
        <p className="p-0 m-0">Lisbon</p>
      </div>
    </div>
  );
};
