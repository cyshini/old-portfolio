//= require stickyfill.min.js
//= require retina.min.js
//= require smoothscroll.min.js
//= require wow.min.js
//= require barba.min.js

/* Ajax loading for pages */
Barba.Pjax.start();

var HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.finish.bind(this));
  },

  finish: function() {
    document.body.scrollTop = 0;
    this.done();
  }
});

Barba.Pjax.getTransition = function() {
  return HideShowTransition;
};

/* Smooth scrolling */
smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 50, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: false, // Boolean. If true, update the URL hash on scroll
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});

/* Animated elements on scroll */
new WOW().init();

/* Sticky sidebar in projects pages */
Barba.Dispatcher.on('transitionCompleted', function() {
  var sidebar = document.getElementById('sidebar');
  Stickyfill.add(sidebar);
});
