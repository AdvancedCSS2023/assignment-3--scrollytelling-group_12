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





// Legge til ScrollTrigger

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        start: "top 90%",
        end: "top 30%",
        scrub: 1
    }
});

tl.to(".box", {x: 500, duration: 5})
.to(".box", {y: 200, duration: 2})
.to(".box", {x: 0, duration: 2})




/*
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#movieboard",
        markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 1
    }
});

tl2.to("#movieboard", {x: 500, duration: 5})
.to("#movieboard", {y: 200, duration: 2})
.to("#movieboard", {x: 0, duration: 2})
*/





/* animasjon som tar objektet utenfor skjermen og plasseren den i midten. */
/*
TweenMax.set("#movieboard", {xPercent:-50, yPercent:-50, left:"50%",y:-100})

var h = window.innerHeight,
    tl3 = new TimelineMax({yoyo:true, repeat: 0, repeatDelay:0.3});

tl3.to("#movieboard", 0.5, {y:h})
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







// 5 Pinning!

 // gsap.to("#movieboard", {
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

 ScrollTrigger.create ({
    trigger:"#space",
    start: "top 20%",
    end: "bottom 80%",
    pin:"#movieboard"
 })



// 4
// Scrub Property = Kontrollere animasjonen med scroll! NB! VIKTIG!

gsap.to("#movieboard", {
  x: -1500,
 duration: 5,
  scrollTrigger: {
  trigger: "#space",
  start: "bottom 70%",
   end: "bottom bottom",

    scrub: 3,
   toggleActions: "none none none none",

 },
 });




 ScrollTrigger.create ({
    trigger:"#space",
    start: "top",
    end: "bottom 80%",
    pin:".curtains"
 })


 // Scrub Property = Kontrollere animasjonen med scroll! NB! VIKTIG!



 const tl_left_curtain = gsap.timeline({
    scrollTrigger: {
        trigger: "#space",
        start: "top",
        end: "bottom bottom",
        scrub: 1
    }
});

tl_left_curtain.to(".left-curtain", {xPercent: -100, duration: 1})
.to(".box", {y: 200, duration: 1})
.to(".box", {x: 0, duration: 1})


const tl_Right_curtain = gsap.timeline({
    scrollTrigger: {
        trigger: "#space",
        start: "top",
        end: "bottom bottom",
        scrub: 1
    }
});

tl_Right_curtain.to(".right-curtain", {xPercent: 100, duration: 1})
.to(".box", {y: 200, duration: 1})
.to(".box", {x: 0, duration: 1})





gsap.utils.toArray("span").forEach((span) => {
    ScrollTrigger.create({
        trigger: "#space",
        start: "top",
        toggleClass: "active",
        /*Eller den forblir*/
        onEnter: () => span.classList.add("active"),
    
    })
});





gsap.to("#birds1", {
    x: 2000,
    y: -500,
   duration: 2,
    scrollTrigger: {
    trigger: ".birds",
    start: "top 100%"
    
   },
   });


   gsap.to("#astroid", {
    x: 5000,
    y: 4000,
   duration: 5,
    scrollTrigger: {
    trigger: "#satelite",
    start: "bottom",
     end: "bottom",
   },
   });



   gsap.to("#scene1", {
    background: "linear-gradient(to bottom, #a8c0ff, #FF5733 10%, #1b1c20 20%, #FFA500 40%, #a8c0ff 50%, #FF5733 60%, #1b1c20 80%, #FFA500 90%, #FF5733 100%",
    duration: 3,
    scrollTrigger: {
      trigger: "#scene1",
      start: "top 100%",
      scrub: 1
    }
  });


  /*
  "linear-gradient(to bottom, #a8c0ff 0%, #FF5733 10%, #1b1c20 20%, #FFA500 40%, #a8c0ff 50%, #FF5733 60%, #1b1c20 80%, #FFA500 90%, #FF5733 100%",
   background: "linear-gradient(to bottom, #a8c0ff 0%, #FF5733 10%, #1b1c20 20%, #FFA500 30%, #a8c0ff 40%, #FF5733 50%, #1b1c20 60%, #FFA500 70%, #FF5733 80%, #1b1c20 90%, #FFA500 100%",
   */

  ScrollTrigger.create ({
    trigger:"#scene1",
    start: "top",
    end: "bottom bottom",
    pin:".ground"
 })

 





ScrollTrigger.create({
  trigger: '#scene1', 
  start: "top 100%",
  endTrigger: "bottom", 
  pin: ".ground2", 
  pinSpacing: false 
});





/*
  gsap.to(".text-container", {
    scrollTrigger: {
      trigger: ".text-container",
      start: "top",
    end: "bottom",
      pin: ".text-container",
    },
    },
  );
*/

  ScrollTrigger.create ({
    trigger:".text-container",
    start: "top",
    end: "+=5000",
    pin:".text.container"
,  })



// Pinner sola
  ScrollTrigger.create ({
    trigger:".sun",
    start: "top 100%",
    end: "+=12000",
    pin:".sun",
    markers: true 
 })

 
// animasjon for sola
  const tlSun = gsap.timeline({
    scrollTrigger: {
        trigger: ".sun",
        //markers: true,
        start: "top 100%",
        end: "+=12000",
        scrub: true,
    }
});

tlSun.to(".sun", {x:1050, y:-850, duration: 50})
.to(".sun", {x: 2500, y: 0, duration: 50})









/*
// Pinner sola
ScrollTrigger.create ({
  trigger:".sun1",
  start: "top 100%",
  end: "+=3000",
  pin:".sun",
  markers: true 
})




/*
// animasjon for sola
const tlSun1 = gsap.timeline({
  scrollTrigger: {
      trigger: ".sun1",
      //markers: true,
      start: "top",
      end: "+=1500",
      scrub: true,
  }
});

tlSun1.to(".sun1", {x: 2500, y: 3000, duration: 5})
*/

