import React from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__search">
        <Button className="banner__searchButton" variant="outlined">
          Search Dates
        </Button>
      </div>
      <div className="banner__info">
        <h1>ICHIRYU、新たな個性、個性を形に...Comming soon</h1>
        <h5>身長: 180 個性：一流</h5>
        <Button variant="outlined">私が来た</Button>
      </div>
    </div>
  );
};

export default Banner;
