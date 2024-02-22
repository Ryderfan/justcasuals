const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)




gsap.registerPlugin(ScrollTrigger);

gsap.to(".about-img2", {
    x: -180,
    y: -180,
    duration: 5,
    scrollTrigger: {
        trigger: ".about-img2",


        scrub: "true",

        toggleActions: "play reverse resume reverse",
    }
})


gsap.to(".about-img3", {
    x: -170,
    y: -170,
    duration: 5,
    scrollTrigger: {
        trigger: ".about-img3",



        scrub: "true",
        toggleActions: "play reverse resume reverse",
    }
})
gsap.to(".marqueeone", {
    xPercent: -100,
    repeat: -1,
    duration: 90,
    ease: "linear",
}).totalProgress(0.5);

gsap.to(".bannerimg", {
    xPercent: -100,
    repeat: -1,
    duration: 70,
    ease: "linear"
}).totalProgress(0.9);
gsap.set(".marquee1", {
    xPercent: -50
});
gsap.to("Scroll", {
    duration: 2.5,
    ease: "steps(2)",
    x: -500
});



