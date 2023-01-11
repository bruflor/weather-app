import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TodayWeather } from ".";

//TODO? Além de components, testar funções.

describe("TodayWeather component", () => {
  const dummyWeather = {
    cityName: "Nárnia",
    LocalObservationDateTime: "2022-09-20T07:00:00+00:00",
    WeatherText: "Sunny like always",
    WeatherIcon: 1,
    Temperature: {
      Metric: {
        Value: 21,
      },
      Imperial: {
        Value: 36,
      },
    },
  };

  it("should render date as formated, weekday, month and day", async () => {
    render(
      <TodayWeather
        weatherText={dummyWeather.WeatherText}
        tempIs={"celsius"}
        celsiusTemp={dummyWeather.Temperature.Metric.Value}
        faTemp={dummyWeather.Temperature.Imperial.Value}
        dateTime={dummyWeather.LocalObservationDateTime}
        apiIcon={dummyWeather.WeatherIcon}
        cityName={dummyWeather.cityName}
      />
    );
    expect(await screen.findByText("Tue, Sep 20")).toBeInTheDocument();
  });
});
