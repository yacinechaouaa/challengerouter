import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ setName }) => {
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="type the name of the tour"
        onChange={handleChange}
      />
      <ul>
        <li>
          <Link to="/"> home </Link>
        </li>
        <li>
          <Link to="/OurTours"> our tours </Link>
        </li>
        <li>
          <Link to="/addtours">add tours </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
