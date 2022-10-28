import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { WeatherApi } from "../../api/api";
import { CurrentWeatherProps } from "../../App";

//TODO: Change the validation to include Ç and `´~^
export const SearchLocation = ({
  setShowLocalWeather,
  setCityKey,
  setCityName,
}: any) => {
  const [enteredCity, setEnteredCity] = useState("");
  const [responseCities, setResponseCities] = useState<CurrentWeatherProps[]>(
    []
  );
  const [errorInput, setErrorInput] = useState("");

  useEffect(() => {}, [errorInput]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const specialChars = /[\p{Lu}\p{Lt}\p{Mn}\p{M}\ç ]/g;

    try {
      if (specialChars.test(enteredCity) && enteredCity.length !== 0) {
        return getSearchedCity(enteredCity);
      }
      throw new Error("Search must contain just letters");
    } catch (err: any) {
      setErrorInput(err.message);
      console.error(err);
    }
  };
  //TODO: Trocar o if ternario para renderizar o erro quando há erro e as cidades quando não há erro e as validações abaixo

  const cityEnteredHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredCity(e.target.value);
  };

  const getSearchedCity = async (city: string) => {
    const encodedCity = encodeURIComponent(city);
    const response = await WeatherApi.get(
      `locations/v1/cities/search?q=${encodedCity}`
    );
    setResponseCities(response.data);
  };
  return (
    <>
      <form
        className="d-flex mx-5 my-4 justify-content-between"
        onSubmit={handleSubmit}
      >
        <div className="d-flex gap-2 px-2 border border-light align-items-center col-md-9">
          <Icon icon="charm:search" fontSize={24} className="text-secondary" />
          <input
            placeholder="search location"
            type="text"
            className="bg-transparent border-0 text-light "
            style={{ outline: "none" }}
            onChange={cityEnteredHandler}
          />
        </div>
        <button
          className="bg-info border-0 text-light py-2 px-3 col-md-2"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="d-flex flex-column mx-5 my-5 gap-3">
        {responseCities && responseCities.length > 0 && errorInput === "" ? (
          responseCities.slice(0, 3).map((city: any) => {
            return (
              <button
                key={city.Key}
                className="bg-transparent border-secondary border py-3 text-light"
                onClick={() => {
                  setCityKey(city.Key);
                  setCityName(city.LocalizedName);
                  setShowLocalWeather(true);
                }}
              >
                {city.LocalizedName} • {city.AdministrativeArea.EnglishName} -{" "}
                {city.Country.EnglishName}
              </button>
            );
          })
        ) : (
          <div className=" text-warning fw-bold fs-5">{errorInput}</div>
        )}
      </div>
    </>
  );
};
