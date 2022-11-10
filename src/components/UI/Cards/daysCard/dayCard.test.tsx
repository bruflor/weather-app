import { render, screen } from "@testing-library/react";
import { DayCard } from ".";
import "@testing-library/jest-dom";

describe("Forecast dayCard", () => {
  const dummyForecast = [
    {
      Day: {
        Icon: 34,
      },
      Date: "2022-11-10T07:00:00+00:00",
      Temperature: {
        Minimum: {
          Value: 33,
        },
        Maximum: {
          Value: 45,
        },
      },
    },
    {
      Day: {
        Icon: 11,
      },
      Date: "2022-09-20T07:00:00+00:00",
      Temperature: {
        Minimum: {
          Value: 12,
        },
        Maximum: {
          Value: 18,
        },
      },
    },
  ];
  it("should render converted data, day and temperature", async () => {
    const { debug } = render(
      <>
        {dummyForecast.map((day) => {
          return (
            <DayCard
              currentDate={day.Date}
              minWeather={day.Temperature.Minimum.Value}
              maxWeather={day.Temperature.Maximum.Value}
              icon={day.Day.Icon}
              id={Math.random().toString()}
              key={Math.random().toString()}
            />
          );
        })}
      </>
    );
    expect(await screen.findByText("Tue, Sep 20")).toBeInTheDocument();
    expect(await screen.findByText("↑ 45")).toBeInTheDocument();
  });
});
export {};
