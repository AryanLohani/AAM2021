const pages = document.getElementsByClassName("page");
const MAX_DELTA = 10;
var current = 0, delta = 0, size = pages.length;
console.log(size);

function Change(index) {
    pages[current].style.display = "none";
    pages[index].style.display = "block";
    current = index;
    delta = 0;
}
function Next() {
    if (current + 1 == size) return;
    Change(current + 1);
};
function Prev() {
    if (current - 1 < 0) return;
    Change(current - 1);
};

$(".page").bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta < 0) {
        //scroll down
        delta = Math.max(delta + 1, 1);
        if (delta >= MAX_DELTA) {
            Next();
        }
    } else {
        //scroll up
        delta = Math.min(delta - 1, -1);
        if (delta <= -MAX_DELTA) {
            Prev();
        }
    }
});


const fadeIn = document.getElementsByClassName("FadeIn");
for (let i = 0; i < fadeIn.length; i++) {
    gsap.to(fadeIn[i], {
        scrollTrigger: {
            trigger: fadeIn[i],
            start: 'top 80%',
            toggleActions: "play none none none"
        },
        opacity: 1,
        duration: 1.25,
        y: 50,
    });
}
// var arr = document.getElementsByClassName("arex");

// gsap.to(arr, {
//     scrollTrigger: {
//         trigger: arr,
//         start: 'top 80%',
//         toggleActions: "play none none none"
//     },
//     opacity: 1,
//     duration: 1.25,
//     y: 50,
// }
// );
// gsap.from(arr2, {
//     scrollTrigger: {
//         trigger: [arr2],
//         start: 'top 80%',
//         toggleActions: "play none none none"
//     },
//     opacity: 0,
//     duration: 1.25,
//     x: 100
// }
// );
// gsap.from(arr3, {
//     scrollTrigger: {
//         trigger: [arr3],
//         start: 'top 80%',
//         toggleActions: "play none none none"
//     },
//     opacity: 0,
//     duration: 1.25,
//     x: 100
// }
// );

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