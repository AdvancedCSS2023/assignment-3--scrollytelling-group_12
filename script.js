

gsap.registerPlugin(ScrollTrigger);


 ScrollTrigger.create ({
    trigger:"#space",
    start: "top 20%",
    end: "bottom 30%",
    pin:"#movieboard"
 })


gsap.to("#movieboard", {
  x: -1500,
 duration: 5,
  scrollTrigger: {
  trigger: "#space",
  start: "center",
   end: "bottom 70%",

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
    y: -2400,
   duration: 5,
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



   gsap.to(".scene1", {
    duration: 3,
    scrollTrigger: {
      trigger: ".scene1",
      start: "top 100%",
      scrub: 1
    }
  });

  

  
 

  ScrollTrigger.create ({
    trigger:".scene1",
    start: "top",
    end: "bottom bottom",
    pin:".scene1_ground"
 })

 
 ScrollTrigger.create({
  trigger: '.scene1', 
  start: "top 100%",
  end: "bottom bottom",
  pin: ".scene1_ground2", 
  pinSpacing: false,
  onLeave: () => {
    // unpin the ".ground2" element when the "#scene1" element leaves the viewport
    gsap.set(".ground2", { clearProps: "position" });
  }
});






const shove = gsap.timeline({
  scrollTrigger: {
  trigger: "#UN__Fact",
  start: "top top",
  toggleActions: "play reverse play reverse"
  }
  });
      
  shove.to("#UN__Fact", {x: -1000, opacity:0, duration: 1});



  const shove2 = gsap.timeline({
    scrollTrigger: {
    trigger: "#UN__Fact2",
    start: "top top",
    toggleActions: "play reverse play reverse"
    }
    });
        
    shove2.to("#UN__Fact2", {x: -1000, opacity:0, duration: 1});
  
  
    const shove3 = gsap.timeline({
      scrollTrigger: {
      trigger: "#lack-water",
      start: "top top",
      toggleActions: "play reverse play reverse"
      }
      });
          
      shove3.to("#lack-water", {x: 1000, opacity:0, duration: 1});
    
    


  gsap.to(".text-container", {
    scrollTrigger: {
      trigger: ".text-container",
      start: "top 100%",
      pin: ".text-container",
    },
    },
  );


// Pinner sola
  ScrollTrigger.create ({
    trigger:".sun",
    start: "top 100%",
    end: "+=12000",
    pin:".sun",
 })

 
// animasjon for sola/månen
  const tlSun = gsap.timeline({
    scrollTrigger: {
        trigger: ".sun",
        start: "top 100%",
        end: "+=18000",
        scrub: true,
    }
});

tlSun.to(".sun", {x:1050, y:-850, duration: 50})
.to(".sun", {x: 2500, y: 0, duration: 50})



ScrollTrigger.create ({
  trigger:"#UN__GOAL__IN",
  start: "top bottom",
  end: "top 100%",
  pin:"#UN__GOAL",

})


window.onload = function() {
    

  gsap.registerPlugin(ScrollTrigger);

 
  gsap.to('#UN__GOAL', {
      scrollTrigger: {
          trigger: '#UN__GOAL', 
          start: 'top top',
          end: "+=1000",
          pin: true,
          onUpdate: function(self) {
            console.log( self.scroll() )
          }
      }
  })};


  const kofi = gsap.timeline({
    scrollTrigger: {
      trigger: ".text-container",
      start: "bottom top",
      end: "+=1500",
      scrub: true
    }
  });
  
  kofi.to("#KOFItest", {x: 220, y: 70, duration: 5})
     .to("#KOFItest", {x: -350, y: 70, duration: 5});
  


    





    const scene1Gone = gsap.timeline({
      scrollTrigger: {
      trigger: ".scene2__ground-sun",
      start: "top 100%",
      scrub: 1
      }
      });  
      scene1Gone.to(".scene1_ground2", {x: -3000, opacity:0, duration: 2})



//scroll scene2
gsap.to(".scene2__ground", {
  duration: 8,
  scrollTrigger: {
    trigger: ".scene2__ground",
    start: "bottom bottom",
    endTrigger: ".scene2", // change to end at the end of scene2
    end: "bottom bottom",
    scrub: 1,
    toggleActions: "restart none none none",
    pin: ".scene2__ground",
    pinSpacing: true,
  },
});
  
//scroll scene4
gsap.to(".scene4__ground", {
duration: 8,
scrollTrigger: {
trigger: ".scene4__ground",
start: "bottom bottom",
endTrigger: ".scene4", // change to end at the end of scene2
end: "bottom bottom",
scrub: 1,
toggleActions: "restart none none none",
pin: ".scene4__ground",
pinSpacing: true,
},
});

//airplane takeoff
const airplane = gsap.timeline({
scrollTrigger: {
trigger: ".scene2__ground",
start: "top 70%",
end: "top 30%",
scrub: 1
}
});

airplane.to(".scene2__ground-airplane", {x: 250, y: -45, duration: 2})
    .to(".scene2__ground-airplane", {x: 1000, y: -500, duration: 5})
    .to(".scene2__ground", {opacity: 0, duration: 1}, "-=1");



//airplane landing
const landing = gsap.timeline({
scrollTrigger: {
trigger: ".scene4__ground",
start: "top 70%",
end: "top 30",
scrub: 1
}
});
    
landing.to(".scene4__ground-airplane", {x: -700, y: 400, duration: 2})
.to(".scene4__ground-airplane", {x: -1000, y: 480, duration: 5})
.to(".scene4__ground", {opacity: 0, duration: 1}, "-=1");
    

