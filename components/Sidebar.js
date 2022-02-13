import React, { useState, useRef } from "react";
import { useMediaQuery } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { settingStickyScrollItems } from "./Utilities";
import sidebarStyles from "../styles/sidebar.module.scss";
function Sidebar({ setswitchsides, switchsides, toggleSide }) {
  const side = useRef(null);
  const isMobile = useMediaQuery("(max-width:750px");
  React.useEffect(() => {
    settingStickyScrollItems(setswitchsides);
  }, [switchsides]);
  const triggerNav = (e) => {
    if (!isMobile) return;
    const bubble = document.getElementById("bubble");
    const { height, width } = e.target.getBoundingClientRect();
    bubble.style.height = `${height + 10}px`;
    bubble.style.width = `${width + 20}px`;
    bubble.style.top = `${e.target.offsetTop}px`;
  };
  const toggleswitch = switchsides === "unset" ? "absolute" : switchsides;
  return (
    <>
      <div
        ref={side}
        id="sidebar"
        style={{
          position: toggleswitch,
          top: toggleswitch === "absolute" ? "0%" : "134px",
          left: isMobile && toggleSide ? "0%" : isMobile ? "-100%" : null,
        }}
        className={sidebarStyles.sidebar}
      >
        <div id="bubble" className={sidebarStyles.bubble}></div>
        <a
          className="sidenav"
          onClick={triggerNav}
          href="#1"
          className={sidebarStyles.item}
          id="side1"
        >
          sides and Beverages
        </a>
        <a className="sidenav" onClick={triggerNav} id="side2" href="#2">
          Cheese and burger
        </a>
        <a className="sidenav" onClick={triggerNav} href="#3" id="side3">
          sides and Beverages
        </a>
        <a className="sidenav" onClick={triggerNav} href="#4" id="side4">
          sides and Beverages
        </a>
        <a className="sidenav" onClick={triggerNav} href="#5" id="side5">
          sides and Beverages
        </a>
        <a className="sidenav" onClick={triggerNav} href="#6" id="side6">
          sides and Beverages
        </a>
        <a className="sidenav" onClick={triggerNav} href="#7" id="side7">
          sides and Beverages
        </a>
        <a className="sidenav" onClick={triggerNav} href="#8" id="side8">
          sides and Beverages
        </a>
      </div>
    </>
  );
}

export default Sidebar;
