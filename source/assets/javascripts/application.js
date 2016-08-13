//= require blazy.min.js
//= require sloth.min.js
//= require smoothscroll.min.js
//= require retina.min.js

/* Lazy loading */
;(function() {
  var bLazy = new Blazy();
})();

/* Initialize components on scroll */
sloth({
  on: document.querySelectorAll('.work'),
  threshold: -200,
  callback: function(element){
    element.className += ' visible';
  }
});

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
