export const checkingForInterSection = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const movingObject = document.getElementById("bubble");
        const element = document.getElementById(`side${entry.target.id}`);
        const getCordinates = element.getBoundingClientRect();
        const { height, width, bottom } = getCordinates;

        if (entry.isIntersecting) {
          movingObject.style.height = `${height + 10}px`;
          movingObject.style.width = `${width + 20}px`;
          movingObject.style.top = `${element.offsetTop}px`;
          movingObject.style.bottom = `${bottom}px`;
        }
      });
    },
    { threshold: 0.3 }
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

export const triggerNav = (e) => {
  if (!isMobile) return;
  const bubble = document.getElementById("bubble");
  const { height, width } = e.target.getBoundingClientRect();
  bubble.style.height = `${height + 10}px`;
  bubble.style.width = `${width + 20}px`;
  bubble.style.top = `${e.target.offsetTop}px`;
};
export const toggleswitch = (switchsides) =>
  switchsides === "unset" ? "absolute" : switchsides;
