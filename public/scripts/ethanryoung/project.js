"use strict";

function scrollToTop() {
  let top = '#content';
  traverseTo(top);
};

function seniorContentToggle() {
  let seniorDesign = '#seniorDesign';
  contentToggle(seniorDesign);
  traverseTo(seniorDesign);
};

function noteCollabContentToggle () {
  let noteCollab = '#noteCollab';
  contentToggle(noteCollab);
  traverseTo(noteCollab);
};

function memoryContentToggle () {
  let memory = '#memory';
  contentToggle(memory);
  traverseTo(memory);
};

function drinkersChoiceContentToggle () {
  let drinkersChoice = '#drinkersChoice';
  contentToggle(drinkersChoice);
  traverseTo(drinkersChoice);
};

function hackISUContentToggle() {
  let hackISU = '#hackISU';
  contentToggle(hackISU);
  traverseTo(hackISU);
};

function websiteContentToggle() {
  let website = '#website';
  contentToggle(website);
  traverseTo(website);
};

function traverseTo(destination) {
  $('html, body').animate({
    scrollTop: $(destination).offset().top - 100
  }, 'fast');
}

function contentToggle(el) {
  let content = el + 'Content';
  let button = el + "ShowMore";
  $(content).toggle();
  var showMoreText = $(button).text();
  if (showMoreText === "Show more") {
    $(button).text("Show less");
  } else {
    $(button).text("Show more");
  }
};