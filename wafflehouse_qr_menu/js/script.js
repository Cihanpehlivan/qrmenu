/* HERO SLIDER  */

var heroSplide = new Splide('.hero-slider', {
    type: 'loop',
    perPage: 1,
    perScroll: 1,
    autoplay: true,
});

heroSplide.mount();


var announcementSplide = new Splide('.announcement-card', {
    type: 'loop',
    perPage: 1,
    perScroll: 1,
    arrows: false,
    pagination: false,
    autoplay: true,
});

announcementSplide.mount();


var favoritesSplide = new Splide('.favorites__splide', {
    type: 'loop',
    perPage: 'auto',
    perScroll: 1,
    arrows: false,
    pagination: false,
    autoplay: true,
});

favoritesSplide.mount();


function openAccordionAndGoTo(targetId) {
    var accordionId = event.currentTarget.getAttribute("data-accordion-id");
    var accordion = document.getElementById(accordionId);
    if (accordion) {
      if (accordion.classList.contains("show")) {
        var target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        accordion.classList.add("show");
        var target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }