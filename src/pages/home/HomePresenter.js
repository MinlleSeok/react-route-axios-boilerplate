import React from "react";
import { NavLink } from "react-router-dom";

const HomePresenter = () => {
  return (
    <div id="Home">
        <h1>React.js</h1>
      <NavLink to="/axios">
        <p>NavLink to="axios" 악시오스로 떠나는 여행</p>
      </NavLink>
    </div>
  );
};

export default HomePresenter;
