import React from "react";

const Footer = (props) => {
  const { copyRights } = props;
  return (
    <div className="footer">
      <h3> Copy Rights: {copyRights}</h3>
    </div>
  );
};

export default Footer;
