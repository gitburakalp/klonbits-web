$(".hamburger").on("click", function() {
  $("body").toggleClass("header-shown");
  $(".header").toggleClass("is-shown");
});

let sliders = [];

$(".slider-container").each(function(i, e) {
  var $this = $(e);
  var spv = $(e).data('slides-pv');
  var centeredSlides = $(e).data('centered-slides') == undefined ? false : true;
  var sliderConfig = {
    slidesPerView: spv,
    speed: 0,
    autoplay: {
      delay: 5000
    },
    centeredSlides:centeredSlides,
    containerModifierClass: "slider-container--",
    wrapperClass: "slider-wrapper",
    slideClass: "slider-slide",
    slideActiveClass: "slider-slide--active",
    slideNextClass: "slider-slide--next",
    slidePrevClass: "slider-slide--prev",
    navigation: {
      nextEl: $this.find(".next"),
      prevEl: $this.find(".prev")
    },
    breakpoints: {
      767: {
        speed: 500,
        spaceBetween: 30
      }
    }
  };

  sliders[i] = new Swiper($this, sliderConfig);
});

window.addEventListener("resize", function() {});

window.addEventListener("orientationchange", function() {});

var swipersInit = () => {
  sliders.forEach((elem, idx) => {
    $(elem).update(true);
  });
};

$(".cards").each(function(e) {
  $(this).on("click", function() {
    $(".cards").removeClass("is-active");
    $(this).toggleClass("is-active");
  });

  $("html,body").on("click", function(e) {
    console.log($(e.target).closest(".cards").length);

    if (
      !$(e.target).hasClass("cards") &&
      $(e.target).closest(".cards").length != 1
    ) {
      $(".cards").removeClass("is-active");
    }
  });
});
