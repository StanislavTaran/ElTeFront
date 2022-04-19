import React from "react";
import styled from "styled-components";
import logo from "../../../logo.png";

const StyledHeader = styled.header`
  background-color: #101b34;
  padding: 2px 0 0 20px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
`;

const Header: React.FC = (props) => {
  return (
    <StyledHeader>
      <div>
        <img height={100} src={logo} alt="logo" />
      </div>
      {props.children}
    </StyledHeader>
  );
};

export default Header;
