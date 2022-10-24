import "./styles.scss";
import Thunderstorm from "../../assets/Thunderstorm.png";
import LightRain from "../../assets/LightRain.png";
import HeavyCloud from "../../assets/HeavyCloud.png";
import Clear from "../../assets/Clear.png";
import Cloudy from "../../assets/LightCloud.png";
import Snow from "../../assets/Snow.png";
import Sleet from "../../assets/Sleet.png";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

//? Help: Switch Case to change de icon here and in forecast

interface WeatherProps {
  weatherText: string;
  tempIs: string;
  celsiusTemp: number;
  faTemp: number;
  dateTime: string;
  apiIcon: number;
  cityName: string;
}

export const TodayWeather = ({
  weatherText,
  tempIs,
  celsiusTemp,
  faTemp,
  dateTime,
  apiIcon,
  cityName,
}: WeatherProps) => {
  const [weatherIcon, setWeatherIcon] = useState<any>();

  useEffect(() => {
    switch (apiIcon) {
      case 1:
      case 2:
      case 32:
      case 33:
      case 34:
      case 3: {
        const message = Clear;
        setWeatherIcon(message);
        break;
      }
      case 4:
      case 5:
      case 35:
      case 36:
      case 6: {
        const message = Cloudy;
        setWeatherIcon(message);
        break;
      }
      case 7:
      case 8:
      case 37:
      case 38:
      case 11: {
        const message = HeavyCloud;
        setWeatherIcon(message);
        break;
      }
      case 12:
      case 13:
      case 39:
      case 40:
      case 14: {
        const message = LightRain;
        setWeatherIcon(message);
        break;
      }
      case 17:
      case 15:
      case 18:
      case 41:
      case 42:
      case 16: {
        const message = Thunderstorm;
        setWeatherIcon(message);
        break;
      }
      case 22:
      case 24:
      case 44:
      case 43:
      case 23: {
        const message = Snow;
        setWeatherIcon(message);
        break;
      }
      case 25:
      case 26:
      case 29: {
        const message = Sleet;
        setWeatherIcon(message);
        break;
      }
    }
  }, [apiIcon]);
  // console.log(weatherIcon);

  const formatedDate = new Date(dateTime).toLocaleDateString("en-us", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  return (
    <div className="h-75 w-100 d-flex flex-column align-items-center mt-5 py-5">
      <div className="imgContainer h-75 w-100 p-0 m-0">
        <img alt="" src={weatherIcon} />
      </div>
      <div className="temperature d-flex p-2">
        <h1>{tempIs === "celsius" ? celsiusTemp.toFixed(0) : faTemp}</h1>
        <span>°{tempIs === "celsius" ? "C" : "F"}</span>
      </div>
      <h2 className="py-5">{weatherText}</h2>
      <div className="d-flex justify-content-center mt-5">{formatedDate}</div>
      <div className="d-flex mb-5 mt-3 gap-2 justify-content-center align-items-center">
        <Icon icon="carbon:location-filled" />
        <p className="p-0 m-0">{cityName}</p>
      </div>
    </div>
  );
};
