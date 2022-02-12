import React, { useState } from "react";
import mainContentStyles from "../styles/maincontent.module.scss";
function Maincontent() {
  const [dynamicwidth, setdynamicwidth] = useState(200);
  let sectionId;
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const movingObject = document.getElementById("bubble");
          const element = document.getElementById(`side${entry.target.id}`);
          const getCordinates = element.getBoundingClientRect();
          const { height, width, left, right, x, y, top, bottom } =
            getCordinates;

          if (entry.isIntersecting) {
            // movingObject.style.setProperty("left", `${left}px`);
            // movingObject.style.setProperty("x", `${x}px`);
            // movingObject.style.setProperty("y", `${y * 2}px`);
            // // movingObject.style.setProperty("right", `${right}px`);
            // console.log(entry.target.getBoundingClientRect());
            movingObject.style.setProperty("height", `${height + 10}px`);
            movingObject.style.setProperty("width", `${width + 20}px`);
            movingObject.style.top = `${element.offsetTop}px`;
            // movingObject.style.left = `${left}px`;
            // movingObject.style.right = `${-right}px`;
            movingObject.style.bottom = `${bottom}px`;
          }
          // else {
          //   document.getElementById(
          //     `side${entry.target.id}`
          //   ).style.borderBottom = "none";
          // }
        });
      },
      { threshold: 0.5 }
    );
    [...document.querySelectorAll("section")].forEach((item) => {
      observer.observe(item);
    });
  }, [sectionId]);
  return (
    <div className={mainContentStyles.mainContent}>
      <section id="1" className={mainContentStyles.sections}></section>
      <section id="2" className={mainContentStyles.sections}></section>
      <section id="3" className={mainContentStyles.sections}></section>
      <section id="4" className={mainContentStyles.sections}></section>
      <section id="5" className={mainContentStyles.sections}></section>
      <section id="6" className={mainContentStyles.sections}></section>
    </div>
  );
}

export default Maincontent;
