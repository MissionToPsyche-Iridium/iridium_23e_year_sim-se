gsap.set([
    "#page-header", 
    "#div1", 
    "#div2", 
    "#div3", 
    "#div4", 
    "footer"
], { opacity: 0 });

const tl = gsap.timeline({
    defaults: {duration: .75, ease: "power4.out"}
})

tl.fromTo('header', {scale: 10}, {scale: 1, duration: 6})
tl.fromTo('#logo', {scale: 10, y: 250}, {scale: 3, duration:2}, '<')
tl.to('body', {background: 'linear-gradient(to right, #f9a000, #f47c33, #ef5966, #a53f5b, #592651, #302144)'})
tl.to('#logo', {scale: 1, y: 0, duration: 2}, '<')
tl.to('body', {background: 'white', delay: 1})
tl.fromTo(
    '#page-header', 
    {
        opacity: 0, 
        x: -400,
        y: -400
    }, 
    {
        opacity: 1, 
        x: 0, 
        y: 0, 
        duration: 2
    }
)

tl.fromTo(
    '#div1', 
    {opacity: 0}, 
    {
        opacity: 1,
        duration: 2
    }
)

tl.fromTo(
    '#location-title',
    {
        y: 0
    },
    {
        y: 150,
        duration: 2,
        scrollTrigger: {
            trigger: '#div1',
            start: 'top center',
            end: '50% center',
            scrub: true
        }
    }
)

tl.fromTo(
    '#div2',
    { 
        x: 1000, 
        opacity: 0 
    },
    {
        x: 0,
        opacity: 1,
        duration: 7,
        scrollTrigger: {
            trigger: '#div2',
            start: 'top center',
            end: '40% center',
            scrub: true
        }
    }
);

tl.fromTo(
    '#div3',
    {
        opacity: 0
    },
    {
        opacity: 1,
        duration: 7,
        scrollTrigger: {
            trigger: '#div3',
            start: 'top center',
            end: '60% center',
            scrub: true
        }
    }
);

tl.fromTo(
    '#div4',
    {
        opacity: 0,
        x: -1000,
        pointerEvents: "none"
    },
    {
        opacity: 1,
        x: 0,
        duration: 2,
        pointerEvents: "auto",
        scrollTrigger: {
            trigger: '#div4',
            start: 'top center',
            end: '50% center',
            scrub: true
        }
    }
);

tl.fromTo(
    'footer',
    {
        opacity: 0,
        y: 100
    },
    {
        opacity: 1,
        y: 0,
        duration: 7,
        scrollTrigger: {
            trigger: '#div4',
            start: '70% center',
            end: '80% center',
            scrub: true
        }
    }
);

