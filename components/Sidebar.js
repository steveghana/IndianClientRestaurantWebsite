import React, { useState } from "react";
import { settingStickyScrollItems } from "./Utilities";
import sidebarStyles from "../styles/sidebar.module.scss";
function Sidebar({ setswitchsides, switchsides }) {
  React.useEffect(() => {
    settingStickyScrollItems(setswitchsides);
  }, [switchsides]);
  return (
    <div
      id="sidebar"
      style={{ position: switchsides }}
      className={sidebarStyles.sidebar}
    >
      <div id="bubble" className={sidebarStyles.bubble}></div>
      <a href="#1" className={sidebarStyles.item} id="side1">
        sides and Beverages
      </a>
      <a id="side2" href="#2">
        Cheese and burger
      </a>
      <a href="#3" id="side3">
        sides and Beverages
      </a>
      <a href="#4" id="side4">
        sides and Beverages
      </a>
      <a href="#5" id="side5">
        sides and Beverages
      </a>
      <a href="#6" id="side6">
        sides and Beverages
      </a>
      <a href="#7" id="side7">
        sides and Beverages
      </a>
      <a href="#8" id="side8">
        sides and Beverages
      </a>
    </div>
  );
}

export default Sidebar;
