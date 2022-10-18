import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { WeatherApi } from "../../api/api";

export const SearchLocation = () => {
  const [searchCity, setSearchCity] = useState("");
  const [enteredCity, setenteredCity] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchCity(enteredCity);
    // console.log(enteredCity);
  };

  const cityEnteredHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setenteredCity(e.target.value);
  };

  const getSearchedCity = async (city: string) => {
    const response = await WeatherApi.get(
      `locations/v1/cities/search?q=${city}`
    );
    console.log(response.data);
  };

  useEffect(() => {
    getSearchedCity(searchCity);
  }, [searchCity]);

  return (
    <form className="d-flex p-5 gap-4" onSubmit={handleSubmit}>
      <div className="d-flex gap-2 px-2 border border-light align-items-center ">
        <Icon icon="charm:search" fontSize={24} className="text-secondary" />
        <input
          placeholder="search location"
          type="text"
          className="bg-transparent border-0 text-light"
          style={{ outline: "none" }}
          onChange={cityEnteredHandler}
        />
      </div>
      <button className="bg-info border-0" type="submit">
        Search
      </button>
    </form>
  );
};
