// Aktivere scrolltrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to(".scene2_ground", {
duration: 8,
scrollTrigger: {
trigger: ".scene3",
start: "top",
end: "bottom",
scrub: 4,
toggleActions: "restart none none none",
//Pin verdier: true, false
pin: ".scene2_ground",
//  Hvis man velger et element til pin, så er det lurt å legge til pinSpacing
      //I dette eksemplet lander square1 på square2
      // false = gjør ingenting, true = legger til auto padding, 
pinSpacing: true,
markers: {
startColor: "purple",
endColor: "fuchsia",
fontSize: "3rem",
},
},
});