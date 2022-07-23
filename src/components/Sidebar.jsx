import React, { useState, useRef } from "react";
import { useMediaQuery } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { settingStickyScrollItems } from "./Utilities";
import sidebarStyles from "../styles/sidebar.module.scss";
import { data, nav } from "data/data";
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
        {nav.map((item, i) => (
          <a
            className="sidenav"
            key={i}
            onClick={triggerNav}
            id={`side${i + 1}`}
            href={`#${i + 1}`}
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
