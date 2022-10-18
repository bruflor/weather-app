import { Icon } from "@iconify/react";
import { useState } from "react";
import { WeatherApi } from "../../api/api";

//TODO: Error when search with ` ~ ' and ç (Validação no input para não tem caracter especial try catch / expressões regulares)
//TODO: SeachLocationProps / definir tipo de props para o component SearchLocation

export const SearchLocation = ({ setSelectedCity }: any) => {
  const [enteredCity, setEnteredCity] = useState("");
  const [responseCities, setResponseCities] = useState<any>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSearchedCity(enteredCity);
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
          responseCities.slice(0, 3).map((city: any) => {
            return (
              <button
                key={city.Key}
                className="bg-transparent border-secondary border py-3 text-light"
                onClick={() => {
                  setSelectedCity(city.Key);
                }}
              >
                {city.LocalizedName} • {city.AdministrativeArea.EnglishName} -{" "}
                {city.Country.EnglishName}
              </button>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
