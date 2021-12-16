import React from "react";
import Heading from "./Heading";
import MainHeading from "./MainHeading";
import CardFooter from "./CardFooter";

const Card = () => {
  return (
    <div className="cardEffect">
      <div className="card-info">
        <Heading />
        <MainHeading />
      </div>
      <div className="myFooter">
        <CardFooter />
      </div>
    </div>
  );
};

export default Card;
