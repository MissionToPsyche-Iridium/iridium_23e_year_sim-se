const tl = gsap.timeline()

        tl.fromTo(
            "#sun",
            {
                y: -300
            },
            {
                y: -300
            }
        );

        tl.fromTo (
            "#spaceship",
            {
                rotate: 0,
                x: 0, 
                y: -300
            },
            {
                rotate: 45, 
                duration: 4
            }
    );

    tl.fromTo(
        "#spaceship",
        {
            x: 0, 
            y: -300
        },
        {
            x: 500,
            y: -500,
            duration: 5
        }
    );

    tl.to (
        "#flames",
        {
            opacity: 0,
            repeat: 5,
            yoyo: true
        }, "<"
    )

    tl.to(
        ".flames",
        {
            opacity: 1,
            fill: "orange",
            repeat: 7,
            yoyo: true
        }, "<"
    );

    
    tl.to (
        "#spaceship",
        {
            rotate: 140,
            duration: 2
        }
    );

    tl.fromTo(
        "#spaceship",
        {
            x: 500, 
            y: -300
        },
        {
            x: 3000,
            y: 3000,
            duration: 5
        }

    );

    tl.to (
        ".flames",
        {
            opacity: 0,
            repeat: 5,
            yoyo: true
        }, "<"
    )

    tl.to(
        ".flames",
        {
            opacity: 1,
            fill: "orange",
            repeat: 7,
            yoyo: true
        }, "<"
    );

    tl.fromTo(
        "#header-img",
        {
            visibility: "hidden",
            scale: 4,
            y: 400,
            opacity: 0
        },
        {
            visibility: "visible",
            delay: 0.2,
            scale: 1,
            y: 0,
            opacity: 1,
            duration:5
        }, "<"
    );

    tl.fromTo (
        "#sun",
        {
            y: -300
        },
        {
            y: 0,
            duration: 3, 
            ease: Linear.easeNone, 
        }, "<30%"
    );

    tl.to(
        "header",
        {
            visibility: "visible"
        },"<80%"
    );

    tl.fromTo(
        "#spaceship",
        {
            x: -300,
            y: 300
        },
        {
            rotate: 45,
            x: 0,
            y: 0,
            duration: 1
        }, "<"
    );

    tl.fromTo(
        "#div-astronaut",
        {
            visibility: "hidden",
            opacity: 0
        },
        {
            visibility: "visible",
            opacity: 1
        }
    );

    const button = document.getElementById('submit');

    button.addEventListener("click", () => {
        const textField = document.getElementById("enter-name");
        const nameInput = textField.value.trim();
        const hiText = document.getElementById("hi");
        const welcome = document.getElementById("welcome-p");

        if (nameInput) {
            hiText.style.fontSize = "50px";
            hiText.textContent = `Hi astronaut ${nameInput}!`;
            button.style.opacity = 0;
            welcome.style.visibility = "visible";
            textField.style.visibility = "hidden";
            button.style.visibility = "hidden";
            gsap.to(
                "#hi",
                {
                    y: 300,
                    duration: 1
                }
            )
        } else {
            hiText.textContent = "Hi astronaut! What is your name?";
        }
    });

    gsap.set(".flames", {opacity: 1});

    tl.fromTo(
        "#spaceship",
        {
            x: 0,
            y: 0
        },
        {
            rotate: 90,
            x: 1000,
            duration: 4,
            scrollTrigger: {
                trigger: '#div1',
                start: 'top 50%, center',
                end: 'bottom center',
                scrub: true
            }
        }
    );

    tl.to (
        "#flames",
        {
            opacity: 0,
            repeat: 5,
            yoyo: true
        }, "<"
    )

    tl.to(
        ".flames",
        {
            opacity: 1,
            fill: "orange",
            repeat: 7,
            yoyo: true
        }, "<"
    );

    tl.fromTo(
        "#div2",
        {
            x: -3000,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
            trigger: '#div2',
            start: 'top center',
            end: '10% center',
            scrub: true
            }
        }
    );

    tl.fromTo(
        "#spaceship",
        {
            x: 1000,
            y: 0,
            rotate: 90
        },
        {
            rotate: 220,
            x: 850,
            y: 2000,
            duration: 6,
            scrollTrigger: {
                trigger: '#div2',
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        }
    );

    tl.to (
        "#flames",
        {
            opacity: 0,
            repeat: 5,
            yoyo: true
        }, "<"
    )

    tl.to(
        ".flames",
        {
            opacity: 1,
            fill: "orange",
            repeat: 7,
            yoyo: true
        }, "<"
    );

    tl.fromTo(
        "#spaceship",
        {
            x: 850,
            y: 2000,
            rotate: 220
        },
        {
            rotate: 200,
            x: 50,
            y: 3000,
            duration: 6,
            scrollTrigger: {
                trigger: '#div3',
                start: 'top center',
                end: 'bottom 60%, center',
                scrub: true
            }
        }
    );

    tl.to (
        "#flames",
        {
            opacity: 0,
            repeat: 5,
            yoyo: true
        }, "<"
    )

    tl.to(
        ".flames",
        {
            opacity: 1,
            fill: "orange",
            repeat: 7,
            yoyo: true
        }, "<"
    );

    tl.fromTo(
        "#spaceship",
        {
            x: 50,
            y: 3000,
            rotate: 200
        },
        {
            rotate: 180,
            x: 60,
            y: 3700,
            duration: 6,
            scrollTrigger: {
                trigger: '#div4',
                start: 'top center',
                end: 'bottom 60%, center',
                scrub: true
            }
        }
    );

    tl.to (
        "#flames",
        {
            opacity: 0,
            repeat: 5,
            yoyo: true
        }, "<"
    )

    tl.to(
        ".flames",
        {
            opacity: 1,
            fill: "orange",
            repeat: 7,
            yoyo: true
        }, "<"
    );

    tl.fromTo(
        "#spaceship",
        {
            x: 60,
            y: 3700,
            rotate: 180
        },
        {
            rotate: 150,
            x: 300,
            y: 4500,
            duration: 6,
            scrollTrigger: {
                trigger: '#div4',
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        }
    );

    tl.to (
        "#flames",
        {
            opacity: 0,
            repeat: 5,
            yoyo: true
        }, "<"
    )

    tl.to(
        ".flames",
        {
            opacity: 1,
            fill: "orange",
            repeat: 7,
            yoyo: true
        }, "<"
    );

    const tl2 = gsap.timeline()

    tl2.to(
        "#Earth",
        {
            x: 140,
            y: -140,
            duration: 3,
            scrollTrigger: {
                trigger: '#solar',
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        }
    );

    tl2.to(
        "#Mars",
        {
            x: 180,
            y: -180,
            duration: 3,
            scrollTrigger: {
                trigger: '#solar',
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        }
    );

    tl2.to(
        "#Psyche",
        {
            x: 180,
            y: -80,
            duration: 7,
            scrollTrigger: {
                trigger: '#solar',
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        }
    );

    tl2.to(
        "#Jupiter",
        {
            x: 280,
            y: -140,
            duration: 7,
            scrollTrigger: {
                trigger: '#solar',
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        }
    );

    tl2.fromTo(
        "#Arrow",
        {
            opacity: 0
        },
        {
            opacity: 1,
            x: 150,
            y: -70,
            scaleY: 3,
            duration: 7,
            scrollTrigger: {
                trigger: '#solar',
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        }
    );

    tl2.to (
        "#ArrowColor",
        {
            fill: "red"
        }, "<"
    )

    const button2 = document.getElementById('ageButton');
    const ageInput = document.getElementById('ageText');
    const psycheAge = document.getElementById('psycheAge');
    

    button2.addEventListener("click", () => {
        const age = ageInput.value.trim();
        const calc = age / 5;
        psycheAge.textContent = 'You are approximately ' + calc + ' years old on Psyche!';

    });

    const planetSelect = document.getElementById('ageOnPlanet');
    
    function getPlanetInfo(planetName){
        const mercury = 0.241;
        const venus = 0.616;
        const mars = 1.882;
        const jupiter = 11.871;
        const saturn = 29.477;
        const neptune = 164.904;
        const uranus = 84.074;
        const pluto = 247.9;
        if(planetSelect.value == "Mercury"){
            return mercury;
        } else if (planetSelect.value == "Venus"){
            return venus;
        } else if (planetSelect.value == "Mars"){
            return mars;
        } else if (planetSelect.value == "Jupiter"){
            return jupiter;
        } else if (planetSelect.value == "Saturn"){
            return saturn;
        } else if (planetSelect.value == "Neptune"){
            return neptune;
        } else if (planetSelect.value == "Uranus"){
            return uranus;
        } else {
            return pluto;
        }
        
    }

    planetSelect.addEventListener("change", () => {
        const age = ageInput.value.trim();
        const results = age * getPlanetInfo(planetSelect.value);
        const showResults = document.getElementById('newAge');
        showResults.textContent = 'If you are ' + age + ' years on ' + planetSelect.value + ', you would be ' + results + ' years old on Earth!';
    });
