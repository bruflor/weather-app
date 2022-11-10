import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TodayWeather } from ".";

describe("TodayWeather component", () => {
  it("should render", async () => {
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
