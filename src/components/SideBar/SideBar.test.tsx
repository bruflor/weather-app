import { render } from "@testing-library/react";
import { SideBar } from ".";

describe("SideBar component", () => {
  it("should render todayWeatherApp", () => {
    render(<SideBar />);
  });
});
export {};
