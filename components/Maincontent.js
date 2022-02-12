import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { checkingForInterSection, gsapSkewImgs } from "./Utilities";
import mainContentStyles from "../styles/maincontent.module.scss";
function Maincontent() {
  useEffect(() => {
    checkingForInterSection();
    gsap.registerPlugin(ScrollTrigger);
    gsapSkewElements();
  }, []);
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

//
function gsapSkewElements() {
  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter("section", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-10, 10); // don't let the skew go beyond 20 degrees.

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -200);
      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {
          skew: 0,
          duration: 0.8,
          ease: "power3",
          overwrite: true,
          onUpdate: () => skewSetter(proxy.skew),
        });
      }
    },
  });

  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set("section", { transformOrigin: "right center", force3D: true });
}
