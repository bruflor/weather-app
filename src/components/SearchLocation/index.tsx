import { Icon } from "@iconify/react";

export const SearchLocation = () => {
  return (
    <div className="d-flex p-5 gap-4">
      <div className="d-flex gap-2 px-2 border border-light align-items-center ">
        <Icon icon="charm:search" fontSize={24} className="text-secondary" />
        <input
          placeholder="search location"
          className="bg-transparent border-0 text-light"
          style={{ outline: "none" }}
        />
      </div>
      <button className="bg-info border-0">Search</button>
    </div>
  );
};
