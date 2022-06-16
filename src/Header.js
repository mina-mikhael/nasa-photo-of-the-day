import React from "react";

const Header = (props) => {
  const { title, date } = props;
  return (
    <div className="App-header">
      <h1>Nasa Astronomy Photo of the Day</h1>
      <h2>{title}</h2>
      <h4>{date}</h4>
    </div>
  );
};

export default Header;
