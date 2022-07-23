import React from "react";
import { useMediaQuery } from "@material-ui/core";

import stickyheader from "../styles/stickycontenthead.module.scss";
function ContentStickyHeader({ switchsides, settoggleSide, toggleSide }) {
  const isMobile = useMediaQuery("(max-width:750px");
  const toggeleSidebar = () => settoggleSide((prev) => !prev);
  const renderText =
    isMobile && toggleSide
      ? "Close Categories"
      : !isMobile
      ? "Category"
      : "Select Category";
  return (
    <div style={{ position: switchsides }} className={stickyheader.container}>
      <div className={stickyheader.content}>
        <div onClick={toggeleSidebar} className={stickyheader.categoryHeader}>
          {renderText}
        </div>
        <div>Veg</div>
        <div>Price</div>
        <div>Filters</div>
      </div>
    </div>
  );
}

export default ContentStickyHeader;
