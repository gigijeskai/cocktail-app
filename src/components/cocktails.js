import React from "react";
import Cocktail from "./Cocktail";

const Cocktails = ({ data }) => {
  return (
    <>
      <div className="row d-flex justify-content-center mb-5">
        {console.log(data)}
        {data.map((el) => {
          return <Cocktail key={el.idDrink} {...el} />;
        })}
      </div>
    </>
  );
};

export default Cocktails;
