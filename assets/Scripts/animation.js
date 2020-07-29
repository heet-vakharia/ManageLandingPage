const hamburgerIcon = document.querySelector(".navbar__mobile");
const master = new TimelineMax();
const body = document.querySelector('body');
if(window.outerWidth < 800)
master.set("nav ~ section", {
  y: -300,
});
var active = false;
//Navbar
  // Fade In Navbar
const navbarAnimation = () => {
  const tl = new TimelineMax();
  tl.from(".navbar", 1.5, {
    opacity: 0,
    y: -100,
  });
  return tl;
};
  // NavBar Navigationa
const navigationAnimation = () => {
  const tl = new TimelineMax({ resversed: true });
  tl.to(
    "nav ~ section",
    3,
    {
      y: 10,
      ease: Bounce.easeOut
    },
    "start"
  );
  tl.to(
    ".nav_hide",
    3,
    {
      display: "flex",
      scaleY: 1,
      transformOrigin: "top",
      ease: Power3.easeOut,
    },
    "start"
  );
  return tl;
};
const navigationAnimationR = () => {
  const tl = new TimelineMax({ resversed: true });

  tl.to(
    ".nav_hide",
    3,
    {
      scaleY: 0,
      ease: Power3.easeOut,
      transformOrigin: "top",
    },
    "start"
  );
  tl.to(
    "nav ~ section",
    3,
    {
      y: -300,
      ease:Power1.easeOut
    },
    "start"
  );
  return tl;
};
// Hamburger
const hamburger = new TimelineMax({ reverse: true,paused:true });
hamburger.set('rect', {
      x:10
  })
  hamburger.add("convert");
  hamburger.to(
    ".rect1",
    1,
    {
      rotate: 38,
      transformOrigin: "top left",
      ease: Elastic.easeOut,
    },
    "convert+=.5"
  );
  hamburger.to(
    ".rect3",
    1,
    {
      rotate: -35,
      transformOrigin: "bottom left",
      ease: Elastic.easeOut,
    },
    "convert+=.5"
  );
  hamburger.to(
    ".rect2",
    1,
    {
      x: 200,
      opacity: 0,
      ease: Power1.easOut,
    },
    "convert"
  );
  hamburger.duration(1.8)
// Btn eventListener
hamburgerIcon.addEventListener("click", () => {
  console.log("clicked");
  
  if (active) {
    body.style.height = `100px`
    active = false;
    hamburger.reverse();
    navigationAnimationR();
  } else {
    
    active = true;
    hamburger.restart()
    navigationAnimation();
  }
});

//Section Header
const headerAnimation = () => {
  const tl = new TimelineMax();
  tl.addLabel("start");
  tl.from(
    ".header--img",
    2,
    {
      opacity: 0,
      x: 700,
    },
    "start"
  );
  tl.from(
    ".header--content",
    2,
    {
      opacity: 0,
      x: -700,
    },
    "start"
  );
  return tl;
};
// Running All 
navbarAnimation();
headerAnimation();