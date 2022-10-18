import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { WeatherApi } from "../../api/api";

//? Help: Error when search with ` ~ ' and ç
//? Help: How to lift the state of selectedCity, useContext, through props?

export const SearchLocation = () => {
  const [searchCity, setSearchCity] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [responseCities, setResponseCities] = useState<any>([]);
  const [selectedCity, setSelectedCity] = useState<number>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchCity(enteredCity);
  };

  const cityEnteredHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredCity(e.target.value);
  };

  const getSearchedCity = async (city: string) => {
    const response = await WeatherApi.get(
      `locations/v1/cities/search?q=${city}`
    );
    setResponseCities(response.data);
  };

  useEffect(() => {
    getSearchedCity(searchCity);
  }, [searchCity]);

  console.log(selectedCity);
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
        {responseCities && responseCities.length > 0 ? (
          <>
            <button
              className="bg-transparent border-secondary border py-3 text-light"
              onClick={() => {
                setSelectedCity(responseCities[0].Key);
              }}
            >
              {responseCities[0].LocalizedName} •{" "}
              {responseCities[0].AdministrativeArea.EnglishName} -{" "}
              {responseCities[0].Country.EnglishName}
            </button>
            <button
              className="bg-transparent border-secondary border py-3 text-light"
              onClick={() => {
                setSelectedCity(responseCities[1].Key);
              }}
            >
              {responseCities[1].LocalizedName} •{" "}
              {responseCities[1].AdministrativeArea.EnglishName} -{" "}
              {responseCities[1].Country.EnglishName}
            </button>
            <button
              className="bg-transparent border-secondary border py-3 text-light"
              onClick={() => {
                setSelectedCity(responseCities[2].Key);
              }}
            >
              {responseCities[2].LocalizedName} •{" "}
              {responseCities[2].AdministrativeArea.EnglishName} -{" "}
              {responseCities[2].Country.EnglishName}
            </button>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
