//= require blazy.min.js
//= require smoothscroll.min.js
//= require wow.min.js

/* Lazy loading */
;(function() {
  var bLazy = new Blazy();
})();

/* Smooth scrolling */
smoothScroll.init({
    selector: '[data-scroll]',
    selectorHeader: '[data-scroll-header]',
    speed: 500,
    easing: 'easeInOutCubic',
    offset: 50,
    updateURL: false,
    callback: function ( anchor, toggle ) {}
});

/* Animated elements on scroll */
new WOW().init();
