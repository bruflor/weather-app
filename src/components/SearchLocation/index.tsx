import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { WeatherApi } from "../../api/api";
import { CityProps } from "../../App";

//TODO: Validação no input para não tem caracter especial try catch / expressões regulares

export const SearchLocation = ({ setShowLocalWeather }: any) => {
  const [enteredCity, setEnteredCity] = useState("");
  const [responseCities, setResponseCities] = useState<any>([]);
  const [errorInput, setErrorInput] = useState("");
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   getSearchedCity(enteredCity);
  // };

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

  const onSubmiteValidate = (e: any) => {
    e.preventDefault();
    const specialChars = /[^A-Za-z\s]/g;
    try {
      if (specialChars.test(enteredCity)) {
        setErrorInput("The reasearch must contain just letters");
      } else if (enteredCity.length === 0) {
        setErrorInput("Please enter a city name");
      } else {
        getSearchedCity(enteredCity);
        // console.log("submit");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        className="d-flex mx-5 my-4 justify-content-between"
        onSubmit={onSubmiteValidate}
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
      {/* <input onChange={cityEnteredHandler} />
      <button type="button" onClick={onSubmiteValidate}>
        Confere
      </button> */}
      <div className="d-flex flex-column mx-5 my-5 gap-3">
        {responseCities && responseCities.length > 0 ? (
          responseCities.slice(0, 3).map((city: any) => {
            return (
              <button
                key={city.Key}
                className="bg-transparent border-secondary border py-3 text-light"
                onClick={() => {
                  localStorage.setItem("cityKey", `${city.Key}`);
                  localStorage.setItem("cityName", `${city.LocalizedName}`);
                  setShowLocalWeather(true);
                }}
              >
                {city.LocalizedName} • {city.AdministrativeArea.EnglishName} -{" "}
                {city.Country.EnglishName}
              </button>
            );
          })
        ) : (
          <div>{errorInput}</div>
        )}
      </div>
    </>
  );
};
