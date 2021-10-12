import React from "react";

const Card = ({ el }) => {
  return (
    <div>
      <img src={el.src} />
      <h1>{el.title}</h1>
      <h4>{el.price}</h4>
      <p> {el.description} </p>
     
    </div>
  );
};

export default Card;
