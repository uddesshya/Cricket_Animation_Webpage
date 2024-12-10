var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    blur.style.left = dets.x - 190 + "px"
    blur.style.top = dets.y -190 + "px"
})

gsap.to("#nav",{
  backgroundColor: "#000",
  duration:0.5,
  height:"85px",
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -20%",
    end:"top -21%",
    scrub:1
  }  
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top: -25%",
        end:"top: -70%",
        scrub: 2
    }
})

gsap.from("#about-us img,#about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub: 3
  }
})


gsap.from(".card",{
  scale:0.8,
  opacity:0,
  duration:0.5,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub: 1
  }
})

gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger: "#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub: 4
  }
})

gsap.from("#colon2",{
  y: 70,
  x: 70,
  scrollTrigger:{
    trigger: "#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub: 4
  }
})

gsap.from("#page4 h1",{
  y:120,
  scrollTrigger:{
    trigger: "#page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub: 3
  }
})