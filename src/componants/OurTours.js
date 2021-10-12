import React from "react";
import Card from "./card";
import { useState } from "react";

const OurTours = (props ) => {
  const [tours, setTours] = useState(props.list);
  return (
    <div>
      {tours.filter(el=>el.title.toUpperCase().includes(props.name.toUpperCase())).map((el) => (
        <Card el={el} />
      ))}
    
    </div>
  );
};

export default OurTours;
