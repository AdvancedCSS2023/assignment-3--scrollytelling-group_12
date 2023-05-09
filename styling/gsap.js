// Aktivere scrolltrigger
gsap.registerPlugin(ScrollTrigger);

// Husk å link pluginsene i HTML
/*
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>

// 1

// Scrolltrigger = Objekt X aktiveres når objekt X/Y dukker opp i skjermen

//gsap.to(".square",  {
//  x: 700,
//duration: 3,
//scrollTrigger: ".square2"
// })

// Designe Markers (Ikke viktig)

markers: {
//    startColor: "purple",
//    endColor: "fuchsia",
//    fontSize: "4rem",
//    indent: 200
// },

// 2
// Lage toggleClass endrer på fargen til objektet

// gsap.to(".square", {
//  duration: 3,
// scrollTrigger: {
//   trigger: ".square",
// start: "top 30%",
// end: "center 20%",
// Bedre metode: legger til verdien av .Square (høyden) som den er (mer dynamisk) Her kan man legge til vh! (i css)
// end: () => `+=${document.querySelector(".square").offsetHeight}`,
// markers: true,
// Ny animasjon lagt til i CSS
// toggleClass: "red"
// }
// })

// 3
// Toogle Actions 

//gsap.to(".square", {
 // x: 1000,
 //duration: 8,
 // scrollTrigger: {
  //  trigger: ".square",
   // start: "top 60%",
   // end: "top 40%",
    // Legger til Toogle Actions med en string (Play, pause, resuem, reverse, restart, reset, complete, none)
   // toggleActions: "restart pause resume complete",
    //              onEnter onLeave onEnterBack onLeaveBack
   // markers: {
    //  startColor: "purple",
    //  endColor: "fuchsia",
     // fontSize: "3rem",
  //  },
 // },
// });


// 4
// Scrub Property = Kontrollere animasjonen med scroll! NB! VIKTIG!

//gsap.to(".square", {
  //  x: 1000,
   // duration: 8,
  //  scrollTrigger: {
   //   trigger: ".square",
   //   start: "top 80%",
  //    end: "top 30%",
      // Her aktiverer man Scrub: Man kan endre verdien også slik at animasjonen blir mer/mindre smooth: (true, x-sekunder)
  //    scrub: true,
  //    toggleActions: "restart pause resume complete",
  //    markers: {
  //      startColor: "purple",
  //      endColor: "fuchsia",
   //     fontSize: "3rem",
  //    },
  //  },
 // });



 // 5 Pinning!

 // gsap.to(".square", {
 //   duration: 8,
 //   scrollTrigger: {
 //     trigger: ".square2",
 //     start: "top 80%",
 //   end: "top 30%",
 // scrub: 4,
 //     toggleActions: "restart none none none",
      // Pin verdier: true, false
 //     pin: ".square",
      // Hvis man velger et element til pin, så er det lurt å legge til pinSpacing
      // I dette eksemplet lander square1 på square2
      // false = gjør ingenting, true = legger til auto padding, 
 //     pinSpacing: true,
 //    markers: {
 //       startColor: "purple",
 //    endColor: "fuchsia",
 //    fontSize: "3rem",
 //   },
 //   },
 // });




 // 6
// Timeline

gsap.registerPlugin(ScrollTrigger);


/* Aktivere animasjon, men blir et problem hvis deleyet overskrider hverandre
gsap.to(".box", {x: 500, duration: 5})
gsap.to(".box", {y: 200, duration: 3, delay: 2})
gsap.to(".box", {y: 0, duration: 2, delay: 5 })
*/

// LØSNING:
//Timeline:

/*
const tl = gsap.timeline();

tl.to(".box", {x: 500, duration: 2})
to(".box", {y: 200, duration: 3})
to(".box", {x: 0, duration: 2})
*/


// Legge til ScrollTrigger
/*
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 1
    }
});

tl.to(".box", {x: 500, duration: 5})
.to(".box", {y: 200, duration: 2})
.to(".box", {x: 0, duration: 2})
*/



// 7
// Standalone ScrollTriggers = Triggre Classes når man scroller ned

/*
ScrollTrigger.create({
    trigger: ".box",
    start: "top 80%",
    end: "top 50%",
    markers: true,
    toggleClass: "box-red"
})
*/

/*
// Endrer på nav bar med Scroll trigger. Blir aktivert etter top 6%
ScrollTrigger.create({
  markers: true,
    start: "top 6%",
    trigger: ".panel",
    toggleClass: { targets: "nav", className: "nav-active" },
});

*/

// Endrer class med toggle actions og rekkefølger. Bytt console.log med hvilke som helst event du vil! 
// Oversikt over alle ScrollTrigger Events: https://greensock.com/docs/v3/Plugins/ScrollTrigger

/*
ScrollTrigger.create({
    markers: true,
    start: "top 80%",
    end: "top 50%",
    trigger: ".box",
    //EXempel på events:
    onUpdate: (self) => console.log(self),
    onEnter: () => console.log("enter!"),
    onLeave: () => console.log("leave!"),
    OnEnterBack: () => console.log("enterBack!"),
    onLeaveBack: () => console.log("leaveBack!")
});
*/






  

