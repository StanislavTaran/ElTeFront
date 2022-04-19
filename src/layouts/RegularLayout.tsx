import React from "react";
import Header from "../components/shared/Header";
import NavBar from "../components/shared/NavBar";
import { MENU_ITEMS } from "../data/constants/routes";

const RegularLayout: React.FC = (props) => {
  return (
    <div>
      <Header>
        <NavBar navList={Object.values(MENU_ITEMS)}></NavBar>
      </Header>
      <div>{props.children}</div>
    </div>
  );
};

export default RegularLayout;
