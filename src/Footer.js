import React from "react";
import styled from "styled-components";

// .footer {
// margin-top: 5rem;
// margin-bottom: 0;
// padding: 1%;
// background-color: #0872af;
// color: white;
// font-family: "Times New Roman", Times, serif;
// font-weight: 100;
// font-size: 1.1rem;
// }

const FooterDiv = styled.div`
  margin-top: 5rem;
  margin-bottom: 0;
  padding: 1%;
  background-color: #0872af;
  color: white;
  font-family: "Times New Roman", Times, serif;
  font-weight: 100;
  font-size: 1.1rem;
`;

const Footer = (props) => {
  const { copyRights } = props;
  return (
    <FooterDiv>
      <h3> Copy Rights: {copyRights}</h3>
    </FooterDiv>
  );
};

export default Footer;
