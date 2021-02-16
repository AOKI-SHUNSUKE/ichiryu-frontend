import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "HIDE" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>新たな個性、個性を形に、無個性が個性を、Comming soon</h1>
        <h5>身長: 180 個性：一流</h5>
        <Button variant="outlined">私が来た</Button>
      </div>
    </div>
  );
};

export default Banner;
