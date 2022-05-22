import React from "react";
import Navigation from "../Navbar/Navigation";
import Time from "../Time/Time";

const Header = () => {
  return (
    <header
      className="fw-bolder"
      style={{
        backgroundColor: "blue",
      }}
    >
      <div
        className="timer text-light text-center"
        style={{
          backgroundColor: "#3baefa",
        }}
      >
        <Time />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
