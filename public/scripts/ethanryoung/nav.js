"use strict";

function toggleMobileNav() {
  let items = document.getElementById("items");
  let hamburger = document.getElementById("hamburger");

  if (items.style.display == "") {
    items.style.display = "block";
    hamburger.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  } else {
    items.style.display = "";
    hamburger.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  }
};