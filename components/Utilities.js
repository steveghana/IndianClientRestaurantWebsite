export const checkingForInterSection = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const movingObject = document.getElementById("bubble");
        const element = document.getElementById(`side${entry.target.id}`);
        const getCordinates = element.getBoundingClientRect();
        const { height, width, bottom } = getCordinates;

        if (entry.isIntersecting) {
          // const {setProperty, top, bottom} = movingObject.style
          movingObject.style.setProperty("height", `${height + 10}px`);
          movingObject.style.setProperty("width", `${width + 20}px`);
          movingObject.style.top = `${element.offsetTop}px`;
          movingObject.style.bottom = `${bottom}px`;
        }
      });
    },
    { threshold: 0.5 }
  );
  [...document.querySelectorAll("section")].forEach((item) => {
    observer.observe(item);
  });
};

//
export const settingStickyScrollItems = (setswitchsides) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      setswitchsides("fixed");
    } else {
      setswitchsides("unset");
    }
  });
};

export const gsapSkewImgs = (gsap, ScrollTrigger) => {};
