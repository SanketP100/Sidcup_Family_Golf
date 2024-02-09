var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

const h4all = document.querySelectorAll("#nav h4,#nav img");
const allelm = document.querySelectorAll(["#page1 #arrow, .card,.elem, body a, #footer img"]);
const cards = document.querySelectorAll(".overlay");


document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x - 10 + "px";
  crsr.style.top = dets.y - 10 + "px";
  blur.style.left = dets.x - 170 + "px";
  blur.style.top = dets.y - 170 + "px";
});



h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 4.5;
    crsr.style.border = "0.5px solid #fff";
    crsr.style.backgroundColor = "transparent";
    // elem.style.color="#000"
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "none";
    crsr.style.backgroundColor = "#95c11e";
    // elem.style.color="#fff"

  });
});

allelm.forEach(function (allelem) {
  allelem.addEventListener("mouseenter", function () {
    crsr.style.scale = 4.5;
    crsr.style.border = "0.5px solid #fff";
    crsr.style.backgroundColor = "transparent";
    // elem.style.color="#000"
  });
  allelem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "none";
    crsr.style.backgroundColor = "#95c11e";
    // elem.style.color="#fff"

  });
});

cards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    crsr.style.scale = 4.5;
    crsr.style.border = "0.5px solid #fff";
    crsr.style.backgroundColor = "transparent";
    // elem.style.color="#000"
  });
  
  card.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "none";
    crsr.style.backgroundColor = "#95c11e";
    // elem.style.color="#fff"

  });
});
// mousecrsr()
// h4all()
// crsr()

gsap.to("#nav ", {
  backgroundColor: "#000",
  boxShadow: "1px 10px 50px #000",
  duration: 1,
  height: "90px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -60%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 0.2,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 60%",
    scrub: 2,
  },
});

gsap.from(".card", {
  y: 50,
  opacity: 0,
  duration: 0.4,
  // stagger:4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 70%",
    scrub: 3,
  },
});
gsap.from("#card-img", {
  y: 50,
  opacity: 0,
  duration: 0.4,
  // stagger:4,
  scrollTrigger: {
    trigger: "#card-img",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 3,
  },
});

gsap.from("#colon1", {
  y: -55,
  x: -55,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 85%",
    end: "top 67%",
    scrub: 3,
  },
});
gsap.from("#colon2", {
  y: 45,
  x: 50,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    // markers: true,
    start: "top 95%",
    end: "top 67%",
    scrub: 3,
  },
});
gsap.from("#page3>p", {
  y: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3>p",
    scroller: "body",
    // markers:true,
    start: "top 90%",
    end: "top 85%",
    scrub: 3,
  },
});
gsap.from("#page4 h1", {
  y: 30,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 95%",
    end: "top 83%",
    scrub: 2,
  },
});

