$(".hamburger").on("click", function() {
  $("body").toggleClass("header-shown");
  $(".header").toggleClass("is-shown");
});

let sliders = [];

$(".slider-container").each(function(i, e) {
  var $this = $(e);
  var config = $(e).data("slider-config");

  var sliderConfig = {
    containerModifierClass: "slider-container--",
    wrapperClass: "slider-wrapper",
    slideClass: "slider-slide",
    slideActiveClass: "slider-slide--active",
    slideNextClass: "slider-slide--next",
    slidePrevClass: "slider-slide--prev",
  };

  if (config != undefined) {
    var subs = /(?!<(?:\{|\[)[^}\]]+),(?![^{\[]+(?:\}|\]))(?![0-9])/g;
    var configArray = config.split(subs);

    $.each(configArray, function(i, e) {
      var regExp = /:(.+)/;
      var configID = e.split(regExp)[0];
      var configValue = e.split(regExp)[1];

      sliderConfig[configID] = configValue;
    });
  }

  console.log(sliderConfig);

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
