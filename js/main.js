window.sr = new ScrollReveal();

sr.reveal("#profile-image", {
  delay: 700,
  distance: "100px",
  origin: "bottom",
  opacity: 0,
});

sr.reveal("#header-text", {
  delay: 900,
  distance: "100px",
  origin: "bottom",
  opacity: 0,
});
sr.reveal("#header-star", {
  delay: 1000,
  distance: "100px",
  origin: "bottom",
  opacity: 0,
});
sr.reveal("#header-pharagraph", {
  delay: 1200,
  distance: "100px",
  origin: "bottom",
  opacity: 0,
});

sr.reveal(".portfolio-item",{
    opacity:0,
    interval:300
});

sr.reveal("#aboutme-header", {
  delay: 500,
  rotate: {
    x: 30,
    z: 20,
  },
});

sr.reveal(".left", { delay: 1000, scale: 1, distance: "60px", origin: "left" });
sr.reveal(".right", { delay: 1000, distance: "60px", origin: "right" });
