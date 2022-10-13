import "./styles.scss";
import Thunderstorm from "../../assets/Thunderstorm.png";
import Clear from "../../assets/Clear.png";
import { useState } from "react";

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

  return (
    <div className="h-75 w-100 d-flex flex-column align-items-center py-5">
      <div className="imgContainer h-75 w-100 p-0 m-0">
        <img alt="" src={Clear} />
      </div>
      <div className="temperature d-flex p-2">
        <h1>{tempIs === "celsius" ? celsiusTemp : faTemp}</h1>
        <span>°{tempIs === "celsius" ? "C" : "F"}</span>
      </div>
      <h2>{weatherText}</h2>
    </div>
  );
};
