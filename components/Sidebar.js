import React, { useState } from "react";
import sidebarStyles from "../styles/sidebar.module.scss";
function Sidebar({ setswitchsides, switchsides }) {
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setswitchsides("fixed");
      } else {
        setswitchsides("unset");
      }
    });
  }, [switchsides]);
  return (
    <div
      id="sidebar"
      style={{ position: switchsides }}
      className={sidebarStyles.sidebar}
    >
      <div id="bubble" className={sidebarStyles.bubble}></div>
      <div className={sidebarStyles.item} id="side1">
        sides and Beverages
      </div>
      <div id="side2">sides and Beverages</div>
      <div id="side3">sides and Beverages</div>
      <div id="side4">sides and Beverages</div>
      <div id="side5">sides and Beverages</div>
      <div id="side6">sides and Beverages</div>
      <div id="side7">sides and Beverages</div>
      <div id="side8">sides and Beverages</div>
      <div>sides and Beverages</div>
      <div>sides and Beverages</div>
      <div>sides and Beverages</div>
      <div>sides and Beverages</div>
      <div>sides and Beverages</div>
      <div>sides and Beverages</div>
    </div>
  );
}

export default Sidebar;
