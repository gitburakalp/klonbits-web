$(".hamburger").on("click", function() {
  $("body").toggleClass("header-shown");
  $(".header").toggleClass("is-shown");
});

let sliders = [];

$("[data-slider-name]").each(function(i, e) {
  var $this = $(e);
  var sliderName = $this.data("slider-name");
  var sliderConfig = getSliderConfig(sliderName);

  sliders[i] = new Swiper($this, sliderConfig);
});

window.addEventListener("resize orientationchange", function() {
  sliders.length != 0
    ? sliders.forEach(function(e, i) {
        sliders[i].update(true);
      })
    : "";
});

function getSliderConfig(sliderName) {
  var sliderConfig = null;

  switch (sliderName) {
    case "main-hero":
      sliderConfig = {
        slidesPerView: 1,
        speed: 0,
        // autoplay: { delay: 5000 },
        navigation: {
          nextEl: ".slider-controller .next",
          prevEl: ".slider-controller .prev"
        },
        containerModifierClass: "slider-container--",
        wrapperClass: "slider-wrapper",
        slideClass: "slider-slide",
        slideActiveClass: "slider-slide--active",
        slideNextClass: "slider-slide--next",
        slidePrevClass: "slider-slide--prev",
        breakpoints: {
          767: {
            speed: 500,
            spaceBetween: 30
          }
        }
      };
      break;
    case "other-solutions":
      sliderConfig = {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
        loop: true,
        autoplay: { delay: 5000 },
        containerModifierClass: "slider-container--",
        wrapperClass: "slider-wrapper",
        slideClass: "slider-slide",
        slideActiveClass: "slider-slide--active",
        slideNextClass: "slider-slide--next",
        slidePrevClass: "slider-slide--prev",
        breakpoints: {
          1023: {
            slidesPerView: 1.875,
            spaceBetween: 50,
            loop: false
          },
          767: {
            slidesPerView: 1.5,
            spaceBetween: 30,
            loop: false
          }
        }
      };
      break;
    case "ref-slider":
      sliderConfig = {
        slidesPerView: 5,
        spaceBetween: 0,
        speed: 1000,
        centeredSlides: true,
        loop: true,
        containerModifierClass: "slider-container--",
        wrapperClass: "slider-wrapper",
        slideClass: "slider-slide",
        slideActiveClass: "slider-slide--active",
        slideNextClass: "slider-slide--next",
        slidePrevClass: "slider-slide--prev",
        navigation: {
          nextEl: ".ref-slider + .slider-controls .next",
          prevEl: ".ref-slider + .slider-controls .prev"
        },
        breakpoints: {
          1023: {
            slidesPerView: 1.75,
            spaceBetween: 15
          }
        }
      };
      break;
    case "ref-slider--sm":
      sliderConfig = {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        containerModifierClass: "slider-container--",
        wrapperClass: "slider-wrapper",
        slideClass: "slider-slide",
        slideActiveClass: "slider-slide--active",
        slideNextClass: "slider-slide--next",
        slidePrevClass: "slider-slide--prev",
        breakpoints: {
          767: {
            slidesPerView: 1.75,
            spaceBetween: 15,
            centeredSlides: true
          }
        }
      };
      break;
    case "product-slider":
      sliderConfig = {
        slidesPerView: 3,
        spaceBetween: "9.1281%",
        loop: true,
        speed: 1000,
        containerModifierClass: "slider-container--",
        wrapperClass: "slider-wrapper",
        slideClass: "slider-slide",
        slideActiveClass: "slider-slide--active",
        slideNextClass: "slider-slide--next",
        slidePrevClass: "slider-slide--prev",
        breakpoints: {
          1023: {
            slidesPerView: 1.75,
            spaceBetween: "70",
            centeredSlides: true
          },
          767: {
            slidesPerView: 1.75,
            spaceBetween: "30",
            centeredSlides: true
          }
        },
        navigation: {
          nextEl: ".product-slider .slider-controller .next",
          prevEl: ".product-slider .slider-controller .prev"
        }
      };
      break;
  }

  return sliderConfig;
}

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

$(".footer").each(function() {
  $(this)
    .find(".footer-title")
    .on("click", function() {
      var ww = $(window).width();

      if (ww < 1024) {
        $(this)
          .siblings()
          .slideToggle();
      }
    });
});

let rectangleSlider = null;

$(".rectangle-cards").each(function() {
  var ww = $(window).width();

  var sliderConfig = {
    slidesPerView: 1.735089,
    spaceBetween: 23.2,
    speed: 1000,
    centeredSlides: true,
    loop: true,
    containerModifierClass: "rectangle-cards--",
    wrapperClass: "special-cards-details",
    slideClass: "special-cards",
    slideActiveClass: "special-cards--active",
    slideNextClass: "special-cards--next",
    slidePrevClass: "special-cards--prev",
    breakpoints: {
      767: {
        slidesPerView: 1.69076,
        spaceBetween: 11.7
      }
    }
  };

  ww < 1024 ? (rectangleSlider = new Swiper($(this), sliderConfig)) : "";
});

$(".iconic-cards").each(function() {
  $(this).on("click", function() {
    $(".iconic-cards__description").slideUp();
    $(this)
      .find(".iconic-cards__description")
      .slideDown();
  });

  $("html").on("click", function(e) {
    var $thisTarget = $(e.target).parent();

    console.log($thisTarget);

    if (!$thisTarget.hasClass("iconic-cards")) {
      $(".iconic-cards__description").slideUp();
    }
  });
});
