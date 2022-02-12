import React, { useState } from "react";
import mainContentStyles from "../styles/maincontent.module.css";
function Maincontent() {
  const [dynamicwidth, setdynamicwidth] = useState(200);
  let sectionId;
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(
            document
              .getElementById(`side${entry.target.id}`)
              .getBoundingClientRect().y
          );
          if (entry.isIntersecting) {
            document.getElementById(
              `side${entry.target.id}`
            ).style.borderBottom = "3px solid green";
          } else {
            document.getElementById(
              `side${entry.target.id}`
            ).style.borderBottom = "none";
          }
        });
      },
      { threshold: 0.3 }
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
