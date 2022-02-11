import React, { useState } from "react";
import sidebarStyles from "../styles/sidebar.module.css";
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
    <div style={{ position: switchsides }} className={sidebarStyles.sidebar}>
      <div>sides and Beverages</div>
    </div>
  );
}

export default Sidebar;
