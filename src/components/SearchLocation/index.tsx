import { Icon } from "@iconify/react";
import { InputGroup } from "react-bootstrap";

export const SearchLocation = () => {
  return (
    <div className="d-flex p-5 justify-content-between">
      {/* <InputGroup size="lg" className="mb-3 border-light">
        <Icon icon="charm:search" />
        <input placeholder="search location" className="bg-primary border-0" />
      </InputGroup> */}
      <div className="d-flex gap-2 px-2 border border-light align-items-center ">
        <Icon icon="charm:search" fontSize={24} className="text-secondary" />
        <input placeholder="search location" className="bg-0 border-0" />
      </div>
      <button className="bg-info">Search</button>
    </div>
  );
};
