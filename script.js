let crsr = document.querySelector("#cursor")
const crsrBlr = document.querySelector("#cursor-blur")
document.addEventListener('mousemove', function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"

    crsrBlr.style.left = dets.x - 75 +"px"
    crsrBlr.style.top = dets.y - 75  +"px"
})


gsap.to("#nav",{
    backgroundColor: "#000",
    height: "80px",
    duration:0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroll: "body",
        start: 'top -10%',
        scrub: 1
    }
})


gsap.to('#main',{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -30%",
        end: "top -100%",
        scrub: 2
        // scrub se hi dheere dheere color fade hona shuru hue hai
    }
})