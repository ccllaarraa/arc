gsap.registerPlugin(ScrollTrigger);



function startAnim()  {
        gsap.to('.logo--left', {
            x:-265,
            y:-187,
            duration: 2,
            pin: true
        });
        gsap.to('.logo--right', {
            x:370,
            y:190,
            duration: 2,
            pin: true
        });
        var hi = document.getElementById("hi");
        hi.className += " fadeIn";
}


gsap.to(".hiddenImage img", {
    scrollTrigger: {
        trigger: ".hiddenImage img",
        toggleActions: "play none none none"
    },
    rotation: 360,
    duration: 1,
    pin: true
});



gsap.to(".center", {
    scrollTrigger: {
        trigger: ".center",
        toggleActions: "play none none none"
    },
    rotation: 360,
    duration: 1,
    pin: true
})