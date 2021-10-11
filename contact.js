gsap.from(".card", {
  duration: 2,
  scale: 0.5, 
  opacity: 0, 
  delay: 0.5, 
  stagger: 0.2,
  ease: "elastic", 
  force3D: true
});

/*document.querySelectorAll(".card").forEach(function(card) {
  card.addEventListener("click", function() {
    gsap.to(".card", {
      duration: 0.5, 
      opacity: 0, 
      y: -100, 
      stagger: 0.1,
      ease: "back.in"
    });
  });
});*/

/*var tl = gsap.timeline(), 
    mySplitText = new SplitText("#quote", {type:"words,chars"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#quote", {perspective: 400});

tl.from(chars, {duration: 0.8, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");

document.getElementById("#quote").onclick = function() {
  tl();
}*/
