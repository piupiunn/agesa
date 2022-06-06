function checkCookie() {
  var isCookieEnabled = getCookie("cookie_enable");
  if (isCookieEnabled) {
    //nothing
  } else {
    //show popup
    $(".cookie-consent").removeClass("hidden");
  }
}
if ($(window).width() < 768) {
  $(".slider-responsive").removeClass("row");
  $(".slider-responsive").removeClass("off");
  $(".slider-responsive").addClass("owl-four owl-carousel owl-theme");
  $(".owl-four").owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        margin: 10,
        items: 1,
      },
      768: {
        items: 3,
      },
    },
    navText: [
      '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
      '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */,
    ],
  });
} else {
  $(".slider-responsive").addClass("row");
  $(".slider-responsive").trigger("destroy.owl.carousel");
  $(".slider-responsive").addClass("off");
  $(".slider-responsive").removeClass("owl-four owl-carousel owl-theme");
}
//owl-two owl-carousel owl-theme
$(window).resize(function () {
  if ($(window).width() < 768) {
    $(".slider-responsive").removeClass("row");
    $(".slider-responsive").removeClass("off");
    $(".slider-responsive").addClass("owl-four owl-carousel owl-theme");
    $(".owl-four").owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      responsive: {
        0: {
          margin: 10,
          items: 1,
        },
        768: {
          items: 3,
        },
      },
      navText: [
        '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
        '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */,
      ],
    });
  } else {
    $(".slider-responsive").addClass("row");
    $(".slider-responsive").trigger("destroy.owl.carousel");
    $(".slider-responsive").addClass("off");
    $(".slider-responsive").removeClass("owl-four owl-carousel owl-theme");
  }
});

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

$("a.btn.btn-cookie").click(function () {
  setCookie("cookie_enable", "true", "30");
});

$(function () {
  checkCookie();
});

$(".post_carousel").owlCarousel({
  loop: true,
  items: 3,
  margin: 20,
  autoHeight: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 1,
    },
  },
});

//Daha Fazla//

var $el, $ps, $up, totalHeight;

$(".cards .button").click(function () {
  totalHeight = 320;

  $el = $(this);
  $p = $el.parent();
  $up = $(".cards");
  $ps = $up.find("p:not('.read-more')");
  $less = $("span.less");

  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function () {
    totalHeight += $(this).outerHeight();
  });

  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "max-height": 9999,
    })
    .animate({
      height: totalHeight,
    });

  // fade out read-more
  $p.fadeOut();
  $less.fadeIn();

  // prevent jump-down
  return false;
});

$(".cards .button-less").click(function () {
  totalHeight = 190;

  $el = $(this);
  $p = $el.parent();
  $up = $(".cards");
  $ps = $up.find("p:not('.read-more')");
  $less = $("span.less");

  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function () {
    totalHeight += $(this).outerHeight();
  });

  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "max-height": 190,
    })
    .animate({
      height: totalHeight,
    });

  // fade out read-more
  $(".read-more").fadeIn();
  $less.fadeOut();

  // prevent jump-down
  return false;
});

//slider

/*JS way for setting height: 100vh to slides' height*/
/*const $slides = $(".owl-carousel .owl-slide");
$slides.css("height", $(window).height());
$(window).resize(() => {
  $slides.css("height", $(window).height());
});*/

$(".owl-carousel").on("initialized.owl.carousel", () => {
  setTimeout(() => {
    $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
    $("section").show();
  }, 200);
});

const $owlCarousel = $(".owl-one").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  dots: false,
  navText: [
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */,
  ],
});

const $owlCarouselNews = $(".owl-two").owlCarousel({
  items: 3,
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      margin: 10,
      items: 1,
    },
    768: {
      items: 3,
    },
  },
  navText: [
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */,
  ],
});

const $owlCarouselInterviews = $(".owl-three").owlCarousel({
  items: 3,
  loop: true,
  margin: 15,
  nav: false,
  dots: true,
  responsive: {
    0: {
      margin: 10,
      items: 1,
    },
    768: {
      items: 2,
    },
    960: {
      items: 3,
    },
  },
  navText: [
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */,
  ],
});
////Menu hamburger click

$(".navbar-toggler").click(function () {
  $(".navbar-toggler i").toggleClass("fa-bars");
  $(".navbar-toggler i").toggleClass("fa-xmark");
});

//top ad banner
function topBannerAdd() {
  const x = document.querySelector(".top-add-banner");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// $owlCarousel.on("changed.owl.carousel", e => {
//   $(".owl-slide-animated").removeClass("is-transitioned");
//
//   const $currentOwlItem = $(".owl-item").eq(e.item.index);
//   $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
//
//   const $target = $currentOwlItem.find(".owl-slide-text");
//   doDotsCalculations($target);
// });
//
// $owlCarousel.on("resize.owl.carousel", () => {
//   setTimeout(() => {
//     setOwlDotsPosition();
//   }, 50);
// });
//
// /*if there isn't content underneath the carousel*/
// //$owlCarousel.trigger("refresh.owl.carousel");
//
// setOwlDotsPosition();
//
// function setOwlDotsPosition() {
//   const $target = $(".owl-item.active .owl-slide-text");
//   doDotsCalculations($target);
// }
//
// function doDotsCalculations(el) {
//   const height = el.height();
//   const {top, left} = el.position();
//   const res = height + top + 20;
//
//   $(".owl-carousel .owl-dots").css({
//     top: `${res}px`,
//     left: `${left}px`
//   });
// }
