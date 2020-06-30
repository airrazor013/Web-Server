"use strict";

function scrollToTop() {
  let top = '#content';
  traverseTo(top);
};

function seniorContentToggle() {
  let seniorDesign = '#seniorDesign';
  contentToggle(seniorDesign);
  traverseTo(seniorDesign);
  $('.senior-slider').slick("refresh");
};

function noteCollabContentToggle () {
  let noteCollab = '#noteCollab';
  contentToggle(noteCollab);
  traverseTo(noteCollab);
  $('.noteCollab-slider').slick("refresh");
};

function memoryContentToggle () {
  let memory = '#memory';
  contentToggle(memory);
  traverseTo(memory);
  $('.memory-slider').slick("refresh");
};

function drinkersChoiceContentToggle () {
  let drinkersChoice = '#drinkersChoice';
  contentToggle(drinkersChoice);
  traverseTo(drinkersChoice);
  $('.drinkersChoice-slider').slick("refresh");
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
    scrollTop: $(destination).offset().top - 60
  }, 'fast');
}

function contentToggle(el) {
  let content = el + 'Content';
  let button = el + "ShowMore";
  let slick = el + "-slider";
  $(content).slideToggle("fast");
  var showMoreText = $(button).text();
  let width = $(el).css("width");
  width = parseInt(width, 10);

  if (showMoreText === "Show more") {
    $(button).text("Show less");
    if (window.innerWidth > 1200){
      $(el).animate({
        maxWidth: width + 200
      }, 100);
    }
  } else {
    $(button).text("Show more");
    if (window.innerWidth > 1200){
      $(el).animate({
        maxWidth: width - 200
      }, 100);
    }
  }
};

$(document).ready(() => {
  $(".noteCollab-slider").slick(slickObj);

  $(".memory-slider").slick(slickObj);

  $(".drinkersChoice-slider").slick(slickObj);

  $(".senior-slider").slick(slickObj);
});

const slickObj = {
  infinite: true,
  dots: true,
  prevArrow: '<button type="button" class="slick-prev arrow"></button>',
  nextArrow: '<button type="button" class="slick-next arrow"></button>',
  waitForAnimate: false,
  touchThreshold: 8,
  mobileFirst: true,
  zIndex: 0
};