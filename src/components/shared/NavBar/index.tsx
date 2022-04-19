import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export type TNavItem = {
  title: string;
  path: string;
};

type TNavBarProps = {
  navList: TNavItem[];
};

const StyledNav = styled.nav`
  background-color: inherit;
  color: inherit;
  margin: 0 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

const StyledItem = styled.li`
  padding: 8px;
  margin: 0 4px;
  background-color: #335656;
  color: #ffe6bd;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #4a7272;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const NavBar: React.FC<TNavBarProps> = (props) => {
  return (
    <StyledNav>
      <StyledList>
        {props.navList.map((item, idx) => (
          <StyledItem key={idx}>
            <StyledLink to={item.path}>{item.title}</StyledLink>
          </StyledItem>
        ))}
      </StyledList>
    </StyledNav>
  );
};

export default NavBar;
