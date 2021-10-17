var j = 3;
let x = 0;


const pages = document.getElementsByClassName("page");
const MAX_DELTA = 10;
var current = 0, delta = 0, size = pages.length;
console.log(size);
function fadeHeading(fadeIndex, x) {
    let promise = new Promise((resolve, reject) => {
        let fadeOutt = document.getElementsByClassName("fadet");
        console.log(fadeOutt[fadeIndex]);
        gsap.to(fadeOutt[fadeIndex], {
            scrollTrigger: {
                trigger: [fadeOutt[fadeIndex]],
                start: 'top 80%',
                toggleActions: "play none none none"
            },
            opacity: 0,
            duration: 0.5,
            y: x,
        });
        resolve();
    });
    return promise;


}
function fadeImage(fadeIndex, x) {
    let promise = new Promise((resolve, reject) => {
        let fadeOuti = document.getElementsByClassName("fadei");
        gsap.to(fadeOuti[fadeIndex], {
            scrollTrigger: {
                trigger: [fadeOuti[fadeIndex]],
                start: 'top 80%',
                toggleActions: "play none none none"
            },
            opacity: 0,
            duration: 0.5,
            y: x,
        });
        resolve();

    });
    return promise;
}
function fadeInHeading(index, x) {
    if (index > 5) return;

    let promise = new Promise((resolve, reject) => {
        let fadeint = document.getElementsByClassName("fadet");
        fadeint[index].style.display = "block";
        fadeint[index].style.opacity = "1";
        gsap.from(fadeint[index], {
            scrollTrigger: {
                trigger: [fadeint[index]],
                start: 'top 80%',
                toggleActions: "play none none none"
            },
            opacity: 0,

            duration: 0.5,
            y: x,
        });
        resolve();
    });
    return promise;
}
function fadeInImage(index, x) {
    if (index > 6) return;

    let promise = new Promise((resolve, reject) => {
        let fadeini = document.getElementsByClassName("fadei");
        fadeini[index].style.display = "block";
        fadeini[index].style.opacity = "1";

        gsap.from(fadeini[index], {
            scrollTrigger: {
                trigger: [fadeini[index]],
                start: 'top 80%',
                toggleActions: "play none none none"
            },
            opacity: 0,

            duration: 0.5,
            y: x,
        });
        resolve();
    });
    return promise;
}

function Change(index) {

    current = index;
    console.log(index, current);
    delta = 0;
    for (let i = 0; i < size; i++) {
        pages[i].style.display = "none";
        pages[i].style.opacity = "1";
        if (i == 8 || i == (index - 1)) continue;
        pages[i].style.paddingTop = "0%";

    };
    let fadeint = document.getElementsByClassName("fadet");
    let fadeini = document.getElementsByClassName("fadei");
    setTimeout(() => { pages[index - 1].style.paddingTop = "0%"; }, 1000);
    // pages[index].style.paddingTop = "0%";


    if (index == 8) {
        pages[index].style.display = "block";
        // cards = document.getElementsByClassName("card");
        // for (i = 0; i < 4; i++) cards[i].style.opacity = "1";
        console.log(pages[index]);
        gsap.from(".card", {
            duration: 2,
            scale: 0.5,
            opacity: 0,
            delay: 0.5,
            stagger: 0.2,
            ease: "elastic",
            force3D: true
        });
        gsap.to(".card", {
            duration: 2,
            scale: 1,
            opacity: 1,
            delay: 0.5,
            stagger: 0.2,
            ease: "elastic",
            force3D: true
        });

    }
    else if (index == 1) {
        pages[index].style.display = "block";
        var fadeh = document.getElementsByClassName("fadeh")[0];
        var fadec = document.getElementsByClassName("fadec")[0];
        var fadev = document.getElementsByClassName("fadev")[0];

        fadeh.style.opacity = "1";

        fadeh.style.display = "block";
        fadec.style.display = "none";
        fadev.style.display = "none";
        gsap.from(fadeh, {
            scrollTrigger: {
                trigger: [fadeh],
                start: 'top 80%',
                toggleActions: "play none none none"
            },
            opacity: 1,
            duration: 0.5,
            x: 30
        }
        );
        setTimeout(() => {
            fadec.style.display = "block"; fadec.style.opacity = "1";
            gsap.from(fadec, {
                scrollTrigger: {
                    trigger: [fadec],
                    start: 'top 80%',
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 0.5,
                x: 30
            }
            );
        }, 300)
        setTimeout(() => {
            fadev.style.display = "block";
            fadev.style.opacity = "1";
            gsap.from(fadev, {
                scrollTrigger: {
                    trigger: [fadev],
                    start: 'top 80%',
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 0.5,
                x: 30
            }
            );
        }, 600)

    }
    else {

        for (i = 0; i < fadeini.length; i++) {
            fadeini[i].style.opacity = "1";
            fadeini[i].style.opacity = "1";
        }

        if (index == 2) {
            pages[index - 1].style.display = "block";
            pages[index].style.display = "block";
            pages[index].style.paddingTop = "1.2%";
            fadeint[index - 2].style.display = "none";

            fadeini[index - 2].style.display = "none";


            var fadeh = document.getElementsByClassName("fadeh")[0];
            var fadec = document.getElementsByClassName("fadec")[0];
            var fadev = document.getElementsByClassName("fadev")[0];
            fadeh.style.opacity = "1";
            fadec.style.opacity = "1";
            // fadec.style.position = "absolute";
            // fadec.style.left = "10%";
            fadev.style.opacity = "1";
            gsap.to(fadeh, {
                scrollTrigger: {
                    trigger: [fadeh],
                    start: 'top 80%',
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 0.5,
                x: -30
            }
            );
            setTimeout(() => {

                gsap.to(fadec, {
                    scrollTrigger: {
                        trigger: [fadec],
                        start: 'top 80%',
                        toggleActions: "play none none none"
                    },
                    opacity: 0,
                    duration: 0.5,
                    x: -30
                }
                );
            }, 500)
            setTimeout(() => {

                gsap.to(fadev, {
                    scrollTrigger: {
                        trigger: [fadev],
                        start: 'top 80%',
                        toggleActions: "play none none none"
                    },
                    opacity: 0,
                    duration: 0.5,
                    x: -50
                }
                );
            }, 700);
            setTimeout(() => { pages[index - 1].style.display = "none"; }, 1002);
            setTimeout(() => { fadeInHeading(index - 2, 30).then().catch(err => console.log(err)); }, 1002)
            setTimeout(() => { fadeInImage(index - 2, 100).then().catch(err => console.log(err)); }, 1500);

        }
        else {
            pages[index - 1].style.display = "block";
            pages[index].style.display = "block";
            fadeint[index - 2].style.display = "none";
            fadeini[index - 2].style.display = "none";

            fadeHeading(index - 3, -20).then().catch(err => console.log(err));
            setTimeout(() => {
                fadeImage(index - 3, -20).then().catch(err => console.log(err));

            }, 400);

            setTimeout(() => { pages[index - 1].style.display = "none"; }, 1001);

            setTimeout(() => { fadeInHeading(index - 2, 30).then().catch(err => console.log(err)); }, 1001)
            setTimeout(() => { fadeInImage(index - 2, 100).then().catch(err => console.log(err)); }, 1500);
        }


    }


}
function Changeprev(index) {

    current = index;
    console.log(index, current);
    delta = 0;
    let fadei = document.getElementsByClassName("fadei");
    let fadet = document.getElementsByClassName("fadet");

    for (let i = 0; i < size; i++) {
        pages[i].style.display = "none";
        pages[i].style.opacity = "1";
        if (i >= 2 && i <= 7) {
            fadei[i - 2].style.opacity = "1";
            fadet[i - 2].style.opacity = "1";
        }
        if (i == 8 || i == (index + 1) || i == 0) continue;
        pages[i].style.paddingTop = "1.35%";
    };
    setTimeout(() => { if ((index + 1) != 8) { pages[index + 1].style.paddingTop = "1.35%"; } }, 1000);
    if (index == 0) {
        pages[index + 1].style.display = "block";
        var fadeh = document.getElementsByClassName("fadeh")[0];
        var fadec = document.getElementsByClassName("fadec")[0];
        var fadev = document.getElementsByClassName("fadev")[0];

        gsap.to(fadeh, {
            scrollTrigger: {
                trigger: [fadeh],
                start: 'top 80%',
                toggleActions: "play none none none"
            },
            opacity: 0,
            duration: 0.5,
            x: 20
        }
        );
        setTimeout(() => {

            gsap.to(fadec, {
                scrollTrigger: {
                    trigger: [fadec],
                    start: 'top 80%',
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 0.5,
                x: 20
            }
            );
        }, 500)
        setTimeout(() => {

            gsap.to(fadev, {
                scrollTrigger: {
                    trigger: [fadev],
                    start: 'top 80%',
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 0.5,
                x: 20
            }
            );
        }, 700);
        setTimeout(() => { pages[index + 1].style.display = "none"; pages[index].style.display = "block"; }, 1400);
    }
    else if (index == 1) {
        pages[index + 1].style.display = "block";
        let fadeh = document.getElementsByClassName("fadeh")[0];
        let fadec = document.getElementsByClassName("fadec")[0];
        let fadev = document.getElementsByClassName("fadev")[0];
        fadeh.style.display = "none";
        fadec.style.display = "none";
        fadev.style.display = "none";

        fadeHeading(index - 1).then().catch(err => console.log(err));
        setTimeout(() => {
            fadeImage(index - 1).then().catch(err => console.log(err));

        }, 502);

        setTimeout(() => { pages[index + 1].style.display = "none"; pages[index].style.display = "block"; }, 1001);
        setTimeout(() => {
            fadeh.style.display = "block";
            fadeh.style.opacity = "1";

            gsap.from(fadeh, {
                scrollTrigger: {
                    trigger: [fadeh],
                    start: 'top 80%',
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 1,
                x: 100
            }
            );

        }, 1002);
        setTimeout(() => {
            fadec.style.display = "block";
            fadec.style.opacity = "1";
            gsap.from(fadec, {
                scrollTrigger: {
                    trigger: [fadec],
                    start: 'top 80%',
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 1,
                x: 100
            }
            );

        }, 1400);
        setTimeout(() => {
            fadev.style.display = "block";
            fadev.style.opacity = "1";
            gsap.from(fadev, {
                scrollTrigger: {
                    trigger: [fadev],
                    start: 'top 80%',
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 1,
                x: 100
            }
            );

        }, 1500);
    }
    else if (index == 7) {
        pages[index + 1].style.display = "block";
        pages[index + 1].style.opacity = "1";

        fadei[index - 2].style.display = "none";
        fadet[index - 2].style.display = "none";
        gsap.to(".card", {
            duration: 2,
            scale: 0.5,
            opacity: 0,
            delay: 0.5,
            stagger: 0.2,
            ease: "elastic",
            force3D: true
        });
        setTimeout(() => {
            gsap.to(pages[index + 1],
                {
                    scrollTrigger: {
                        trigger: [fadec],
                        start: 'top 80%',
                        toggleActions: "play none none none"
                    },
                    opacity: 0,
                    duration: 0.5,

                }
            );

        }, 1000);
        setTimeout(() => { pages[index + 1].style.display = "none"; pages[index].style.paddingTop = "0%"; pages[index].style.display = "block"; }, 1001);
        setTimeout(() => { fadeInHeading(index - 2, -30).then().catch(err => console.log(err)); }, 1100);
        setTimeout(() => { fadeInImage(index - 2, -100).then().catch(err => console.log(err)); }, 1500);

    }
    else {
        pages[index + 1].style.display = "block";
        fadei[index - 2].style.display = "none";
        fadet[index - 2].style.display = "none";
        fadeHeading(index - 1, 20).then().catch(err => console.log(err));
        setTimeout(() => {
            fadeImage(index - 1, 20).then().catch(err => console.log(err));

        }, 510);

        setTimeout(() => { pages[index + 1].style.display = "none"; pages[index].style.display = "block"; }, 1100);

        setTimeout(() => { fadeInHeading(index - 2, -30).then().catch(err => console.log(err)); }, 1203)
        setTimeout(() => { fadeInImage(index - 2, -100).then().catch(err => console.log(err)); }, 1502);

    }




}
function Next() {
    if (current + 1 == size) return;

    Change(current + 1);
};

function Prev() {
    if (current - 1 < 0) return;
    Changeprev(current - 1);
};

$(".page").bind('mousewheel', function (e) {
    if (j > 0) {
        if (e.originalEvent.wheelDelta < 0) {
            //scroll down
            delta = Math.max(delta + 1, 1);
            if (delta >= MAX_DELTA) {
                console.log(current);
                Next();
                j = 0;
                setTimeout(disable, 2000);

            }
        } else {
            //scroll up
            delta = Math.min(delta - 1, -1);
            if (delta <= -MAX_DELTA) {
                Prev();
                j = 0;
                setTimeout(disable, 2000);

            }
        }
    }
    return false;
});



var arr2 = document.getElementsByClassName("bgimg");
var arr3 = document.getElementsByClassName("abtus");
gsap.from(arr2, {
    scrollTrigger: {
        trigger: [arr2],
        start: 'top 80%',
        toggleActions: "play none none none"
    },
    opacity: 0,
    duration: 1.25,
    x: 100
}
);
gsap.from(arr3, {
    scrollTrigger: {
        trigger: [arr3],
        start: 'top 80%',
        toggleActions: "play none none none"
    },
    opacity: 0,
    duration: 1.25,
    x: 100
}
);
function disable() {
    j++;
}


$(window).on('load', function () {
    for (let i = 1; i < size; i++) {
        pages[i].style.display = "none";
    }
    if ($('.wrapper').length) {
        $('.wrapper').delay(1600).fadeOut('fast', function () {
            $(this).remove();
        });
    }
});

window.addEventListener('scroll', function () {
    gsap.to(window, { duration: 1, scrollTo: { y: "#section" + (index + 1), offsetY: 70 } });
})
