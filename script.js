// Aktivere scrolltrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to(".scene2_ground", {
      duration: 8,
      scrollTrigger: {
        trigger: ".scene2_ground",
        start: "bottom bottom",
        endTrigger: ".scene2", // change to end at the end of scene2
        end: "bottom bottom",
        scrub: 1,
        toggleActions: "restart none none none",
        pin: ".scene2_ground",
        pinSpacing: true,
      },
});
  

const airplane = gsap.timeline({
  scrollTrigger: {
    trigger: ".scene2_ground",
    start: "top 70%",
    end: "top 30%",
    scrub: 1
  }
});

airplane.to("#scene2_airplane", {x: 250, y: -45, duration: 2})
        .to("#scene2_airplane", {x: 1000, y: -500, duration: 5})
        .to(".scene2_ground", {opacity: 0, duration: 1}, "-=1");



