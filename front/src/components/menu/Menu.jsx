import React from "react";
import Animal from "../animal/Animal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Menu() {
  return (
    <div className="px-5">
      <Tabs defaultActiveKey="animal" id="menu" className="mb-3">
        <Tab eventKey="home" title="Home">
          <div>Home</div>
        </Tab>
        <Tab eventKey="animal" title="Animal">
          <Animal />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Menu;
