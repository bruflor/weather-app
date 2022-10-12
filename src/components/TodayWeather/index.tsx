import "./styles.scss";
import Thunderstorm from "../../assets/Thunderstorm.png";

export const TodayWeather = () => {
  return (
    <div className="h-75 w-100 d-flex flex-column align-items-center py-5">
      <div className="imgContainer h-75 w-100 p-0 m-0">
        <img alt="" src={Thunderstorm} />
      </div>
      <div className="temperature d-flex p-2">
        <h1>15</h1>
        <span>°c</span>
      </div>
      <h2>Shower</h2>
    </div>
  );
};
