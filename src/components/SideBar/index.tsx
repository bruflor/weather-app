import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { TodayWeather } from "../TodayWeather";
import { RoundButtons } from "../UI/RoundButtons";

export const SideBar = () => {
  return (
    <Col md={4} className="bg-primary m-0 px-0 py-5">
      <div className="d-flex mx-5 gap-5 justify-content-between">
        <div className="bg-secondary text-light p-2">Search for places</div>
        <RoundButtons color="secondary">
          <Icon icon="bx:current-location" fontSize={24} />
        </RoundButtons>
      </div>
      <TodayWeather />
      <div className="d-flex justify-content-center mt-5">
        Today • Fri, 5 Jun
      </div>
      <div className="d-flex mb-5 mt-3 gap-2 justify-content-center align-items-center">
        <Icon icon="carbon:location-filled" />
        <p className="p-0 m-0">Helsinki</p>
      </div>
    </Col>
  );
};
