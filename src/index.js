document.addEventListener("DOMContentLoaded", () => {
  // Navbar - Scrolling Effect
  var header = document.querySelector("header");
  var navLogo = document.querySelector("#nav-logo");
  var screenWidth = window.innerWidth;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.style.backgroundColor = "#fff";
      header.style.boxShadow = "0px 0.5px 8px 1px #858585";
      header.style.paddingBottom = "10px";
      navLogo.style.paddingBottom = "5px";
    } else {
      header.style.backgroundColor = "transparent";
      header.style.paddingTop = "10px";
      header.style.boxShadow = "0px 1px 2px 1px transparent";
      header.style.paddingBottom = "0px";
      navLogo.style.paddingBottom = "0px";
    }
  });

  // Navbar - main logo and home links top scrolling
  var logo = document.querySelectorAll(".top");

  logo.forEach((link) => {
    link.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  });

  // Navbar - Burger icon display switching for mobile
  var burger = document.querySelector("#burger");
  var navLinks = document.querySelector("#nav-links");
  var navShown = false;

  burger.addEventListener("click", () => {
    if (navShown === false) {
      navLinks.style.display = "flex";
      navShown = true;
    } else {
      navLinks.style.display = "none";
      navShown = false;
    }
  });

  function foodSwap() {
    if (screenWidth <= 840) {
      if (currentActive == 1) {
        imgCon.src = "src/images/pie.png";
        currentActive++;
      } else if (currentActive == 2) {
        imgCon.src = "src/images/matcha.png";
        currentActive++;
      } else if (currentActive == 3) {
        imgCon.src = "src/images/donut.png";
        currentActive = 1;
      }
    }
  }

  let currentActive = 2;
  let matcha = document.querySelector("#matcha-container");
  let pie = document.querySelector("#pie-container");
  let imgCon = document.querySelector("#pie");
  let donut = document.querySelector("#donut-container");
  let intervalID;

  intervalID = setInterval(() => {
    foodSwap();
  }, 3000);

  if (screenWidth > 840) {
    clearInterval(intervalID);
    imgCon.src = "src/images/pie.png";
  }

  // Managing the text content to avoid overflow
  function aboutUsContent() {
    var screenWidth = window.innerWidth;
    var aboutUsText = document.querySelector(".aboutus-text p");

    if (screenWidth > 840) {
      aboutUsText.innerHTML =
        "Welcome to Comfy Cafe, your cozy neighborhood haven! Nestled in the heart of the community, Comfy Cafe offers a warm, inviting atmosphere where you can unwind, catch up with friends, or simply enjoy a quiet moment alone. Our mission is to provide a space that feels like an extension of your own living room, but with the added delight of delicious, handcrafted beverages and freshly baked treats. At Comfy Cafe, we are passionate about coffee and committed to sustainability, sourcing our beans from local, organic farms.";
    } else if (screenWidth > 700) {
      aboutUsText.innerHTML =
        "Welcome to Comfy Cafe, your cozy neighborhood haven! Nestled in the heart of the community, Comfy Cafe offers a warm, inviting atmosphere where you can unwind, catch up with friends, or simply enjoy a quiet moment alone. Our mission is to provide a space that feels like an extension of your own living room, but with the added delight of delicious, handcrafted beverages and freshly baked treats.";
    } else {
      aboutUsText.innerHTML =
        "Welcome to Comfy Cafe, your cozy neighborhood haven! Nestled in the heart of the community, Comfy Cafe offers a warm, inviting atmosphere where you can unwind, catch up with friends, or simply enjoy a quiet moment alone. Our mission is to provide.";
    }
  }

  aboutUsContent();

  window.addEventListener("resize", () => {
    // Rechecking of triggers once screen width resized
    var screenWidth = window.innerWidth;

    aboutUsContent();

    if (screenWidth > 1095) {
      navLinks.style.display = "flex";
      navShown = false;
    } else {
      navLinks.style.display = "none";
      navShown = false;
    }
    clearInterval(intervalID);
    if (screenWidth > 840) {
      clearInterval(intervalID);
      imgCon.src = "src/images/pie.png";
    } else {
      intervalID = setInterval(() => {
        foodSwap();
      }, 3000);
    }
  });
});
