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
        markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "3rem",
        },
      },
    });
    