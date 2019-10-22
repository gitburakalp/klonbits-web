var countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central Arfrican Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauro",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre & Miquelon",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St Kitts & Nevis",
  "St Lucia",
  "St Vincent",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks & Caicos",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

document.addEventListener("DOMContentLoaded", function() {
  $(".preload").fadeOut(500);
});

$(".header").each(function() {
  $header = $(this);
  $backToTopBtn = $("#btnBackToTop");
  $langBtn = $(".lang-trigger");

  $langBtn.on("click", function() {
    $(this)
      .closest(".lang-section")
      .toggleClass("is-opened");
  });

  $backToTopBtn.on("click", () => {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  window.addEventListener("scroll", function() {
    var thisY = $(window).scrollTop();
    if (thisY > 250) {
      $header.addClass("is-sticky");
      $backToTopBtn.fadeIn();
    } else {
      $header.removeClass("is-sticky");
      $backToTopBtn.fadeOut();
    }
  });
});

$(".hamburger").on("click", function() {
  $("body").toggleClass("header-shown");
  $(".header").toggleClass("is-shown");
});

$("#inpCountry").each((i, e) => {
  autocomplete(e, countries);
});

var callRefCount = () => {
  $(".ref-count .count").each(function() {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate(
      { Counter: $this.data("count") },
      {
        duration: 2500,
        easing: "swing",
        step: function(now) {
          $this.text(
            Math.ceil(now)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "+"
          );
        }
      }
    );
  });
};

$(".header-menu").each(function() {
  let ww = window.innerWidth;

  if (ww < 1280) {
    $(this)
      .find(".header-menu__link")
      .on("click", function(e) {
        $(".header-menu .header-menu__item").removeClass("active");
        $(this)
          .parent()
          .toggleClass("active");

        $(this)
          .siblings()
          .slideToggle();
      });
  }
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
        pagination: {
          el: "[data-slider-name=main-hero] > .slider-pagination",
          type: "bullets",
          clickable: true
        },
        containerModifierClass: "slider-container--",
        wrapperClass: "slider-wrapper",
        slideClass: "slider-slide",
        slideActiveClass: "slider-slide--active",
        slideNextClass: "slider-slide--next",
        slidePrevClass: "slider-slide--prev",
        breakpoints: {
          1279: {
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
          1279: {
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
        autoplay: { delay: 5000 },
        centeredSlides: true,
        loop: true,
        containerModifierClass: "slider-container--",
        wrapperClass: "slider-wrapper",
        slideClass: "slider-slide",
        slideActiveClass: "slider-slide--active",
        slideNextClass: "slider-slide--next",
        slidePrevClass: "slider-slide--prev",
        navigation: {
          nextEl: ".ref-slider-block .slider-controls .next",
          prevEl: ".ref-slider-block .slider-controls .prev"
        },
        breakpoints: {
          1279: {
            slidesPerView: 1.75,
            spaceBetween: 15
          }
        },
        on: {
          transitionStart: function() {
            $(".ref-slider-block--sm")
              .find(".slider-wrapper > *")
              .remove();
            $(".ref-slider-block--sm").removeClass("fade-in");
          },
          transitionEnd: function() {
            $(".ref-slider-block--sm").addClass("fade-in");
            var refSliderSm = $(".ref-slider-block--sm .slider-container")[0]
              .swiper;

            var $activeSlide = $(".ref-slider-block .slider-slide--active");
            var projects =
              $activeSlide.data("projects") != undefined &&
              $activeSlide.data("projects") != ""
                ? $activeSlide.data("projects").split(/,(?![^{}]*\})/gm)
                : "";

            $.each(projects, function(i, e) {
              var jsonVal = JSON.parse(e);
              var currentLang = $("html").attr("lang");
              var btnText = "";

              if (jsonVal.projectType !== undefined) {
                if (jsonVal.projectType.toLowerCase().includes("web")) {
                  btnText = currentLang != "tr" ? "EXPLORER" : "İNCELE";
                } else {
                  btnText = currentLang != "tr" ? "READ MORE" : "DAHA FAZLASI";
                }
              }

              var content = `<div class="slider-slide"><div class="card text-center"><h2 class="card-title">${
                jsonVal.projectType
              }</h2><span class="card-blocks ${
                i % 2 == 0
                  ? "card-blocks--cerulean"
                  : "card-blocks--dull-orange"
              }">${jsonVal.projectDetail}</span><a href="${
                jsonVal.url
              }" class="btn btn--primary">${btnText}</a></div></div>`;
              $(".ref-slider-block--sm")
                .find(".slider-wrapper")
                .append(content);
            });

            refSliderSm != undefined ? refSliderSm.update() : "";
          }
        }
      };
      break;
    case "ref-slider--sm":
      sliderConfig = {
        slidesPerView: 3,
        spaceBetween: 20,
        containerModifierClass: "slider-container--",
        wrapperClass: "slider-wrapper",
        slideClass: "slider-slide",
        slideActiveClass: "slider-slide--active",
        slideNextClass: "slider-slide--next",
        slidePrevClass: "slider-slide--prev",
        breakpoints: {
          1279: {
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
          1279: {
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

var swipersInit = () => {
  sliders.forEach((elem, idx) => {
    $(elem).update(true);
  });
};

$(".cards").each(function(e) {
  $(this).on("click", function() {
    $(".cards").removeClass("is-active");
    $(this).toggleClass("is-active");

    var cardsMenuStatus = $(this)
      .find(".cards-menu")
      .find("li").length;

    if (cardsMenuStatus == 0)
      $(this)
        .find(".cards-menu")
        .addClass("d-none");
  });

  $("html,body").on("click", function(e) {
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

      if (ww < 1280) {
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
      1279: {
        slidesPerView: 1.69076,
        spaceBetween: 11.7
      }
    }
  };

  ww < 1280 ? (rectangleSlider = new Swiper($(this), sliderConfig)) : "";
});

$(".accordion-menu").each(function() {
  var $accordionMenu = $(this);
  var ww = $(window).width();
  var $accordionMenuContents = $(".accordion-menu-contents");

  $accordionMenu.find(".accordion-menu-item").on("click", function() {
    var $this = $(this);
    var elemHeight = $this.offset().top + $this.innerHeight() - 20;
    var showTab = $this.data("show-tab");
    ww = $(window).width();

    $(".accordion-menu-item").removeClass("active");
    $this.addClass("active");

    var a = document.getElementsByClassName("accordion-menu-item active")[0];
    var titleText = a.getElementsByTagName("h3")[0].innerHTML.trim();
    console.log(titleText);

    var descriptionText = a.getElementsByTagName("p")[0].innerHTML.trim();
    console.log(descriptionText);
    document.getElementsByClassName(
      "main-title main-title--colored cerulean innerText"
    )[0].innerHTML = titleText;
    document.getElementsByClassName(
      "main-description longDescription"
    )[0].innerHTML = descriptionText;

    $accordionMenuContents.find(`[data-tab-content]`).fadeOut(1);
    $accordionMenuContents.find(`[data-tab-content]`).fadeIn();

    if (ww < 1280) {
      $accordionMenuContents.attr("style", `top:${elemHeight}px`);
      $accordionMenuContents.fadeIn();
    }
  });

  if (ww < 1280) {
    $(".back-button").on("click", function() {
      $accordionMenuContents.fadeOut();
    });
  }
});

// var lastIdx = null;

// $(".square-cards .special-cards").each(function(i, e) {
//   $(this).on("click", function(e) {
//     var $sqCards = $(".square-cards .special-cards");
//     var $specialCardsDetails = $("[special-cards-details]");

//     $sqCards.removeClass("active");
//     $(this).addClass("active");

//     var thisIdx = $sqCards.index($(e.target).closest(".special-cards"));

//     var thisDescription = $(this).data("description");

//     setTimeout(function() {
//       $specialCardsDetails.find(".main-description").html(thisDescription);
//     }, 500);

//     if (!$specialCardsDetails.is(":visible")) {
//       $specialCardsDetails.slideDown();
//     } else if ($specialCardsDetails.is(":visible") && lastIdx !== thisIdx) {
//       $specialCardsDetails.slideUp();
//       $specialCardsDetails.slideDown();
//     } else if ($specialCardsDetails.is(":visible")) {
//       $specialCardsDetails.slideUp();
//     }

//     lastIdx = thisIdx;
//   });
// });

window.addEventListener("DOMContentLoaded", event => {
  $("body").removeClass("loading");

  window.addEventListener("scroll", () => {
    var thisY = window.pageYOffset;

    $(".main div section").each(function(i) {
      var $this = $(this);
      var elemTop = $this.position().top;
      var elemBottom = $this.position().top + $this.outerHeight();

      if ($this.hasClass("fh-section")) {
        $this.find("> div").each(function() {
          var $this = $(this);
          var eTop = $this.position().top;
          var eBottom = $this.position().top + $this.outerHeight();

          thisY > eTop / 1.15 && thisY <= eBottom
            ? $this.addClass("is-shown")
            : "";

          $this.hasClass("ref-section") && !$this.hasClass("is-shown")
            ? callRefCount()
            : "";
        });
      }

      thisY > elemTop / 2.75 && thisY <= elemBottom
        ? $this.addClass("is-shown")
        : "";
    });
  });
});

$(function() {
  var accordionItemList = [];
  var specialCardsList = [];

  var $sqCards = $(".square-cards > .special-cards:not(:last-child)");
  var $specialCardsDetails = $("[special-cards-details]");

  var oldIdx = -1;
  var isShown = false;
  var duration = 600;

  $(".accordion-item").each(function(idx, e) {
    accordionItemList.push(e);

    $(this).on("click", function(e) {
      var $this = $(this);
      var thisIdx = accordionItemList.indexOf(e.target);

      if (oldIdx == thisIdx) {
        $this.next().slideToggle(duration);
        isShown != isShown;
      } else if (!isShown && oldIdx !== thisIdx) {
        $this.next().slideDown(duration);
        isShown = true;
      } else if (isShown && oldIdx !== thisIdx) {
        $(".accordion-item-cards").slideUp(duration);
        $this.next().slideDown(duration);
        isShown = true;
      } else {
        $(".accordion-item-cards").slideUp(duration);
        isShown = false;
      }

      oldIdx = accordionItemList.indexOf(e.target);
    });
  });

  $(".square-cards > .special-cards:not(:last-child)").each(function(idx, e) {
    specialCardsList.push(e);

    var ww = $(window).width();

    if (ww > 1280) {
      var $firstSqCard = $(".square-cards > .special-cards:nth-child(1)");
      var firstCardDesc = $firstSqCard.data("description");

      $firstSqCard.addClass("active");
      $specialCardsDetails.find(".main-description").html(firstCardDesc);
      $specialCardsDetails.fadeIn();
    }

    $(this).on("click", function() {
      var $this = $(this);
      var thisIdx = specialCardsList.indexOf($this[0]);
      var ww = $(window).width();
      var cardDesc = $this.data("description");

      $sqCards.removeClass("active");
      $this.addClass("active");

      $specialCardsDetails.fadeIn();
      $specialCardsDetails.find(".main-description").html(cardDesc);

      if (ww < 1280) {
        $("html").addClass("i-overflow-x-hidden");
        $("html").addClass("i-overflow-y-hidden");
      } else {
      }
    });
  });

  $("html,body").on("click", function(e) {
    var ww = $(window).width();

    var $activeSquareCards = $(e.target).closest(
      ".special-cards:not('[special-cards-details]')"
    );

    if ($activeSquareCards.length === 0) {
      $sqCards.removeClass("active");
      $specialCardsDetails.fadeOut();

      if (ww < 1280) {
        $("html").removeClass("i-overflow-x-hidden");
        $("html").removeClass("i-overflow-y-hidden");
      }
    }
  });
});

$(".rectangle-cards .special-cards").on("click", function() {
  $(this).toggleClass("is-rotated");
});

var notValidCssClass = "not-valid";

$('[data-validation="true"]').each(function() {
  var $this = $(this);
  var thisType = $(this).attr("type");
  var regex = "";
  var isValid = false;

  switch (thisType) {
    case "text":
      regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ ]+$/;
      break;
    case "number":
      regex = /^[0-9]+$/;
      break;
    case "email":
      regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    default:
      regex = /./g;
      break;
  }

  if (thisType == "email") {
    $this.on("focus keyup", event => {
      isValid = regex.test($this.val());

      if (!isValid) {
        $this.addClass(notValidCssClass);
      } else {
        $this.removeClass(notValidCssClass);
      }
    });
  } else if (thisType !== undefined) {
    var isRequired = $this.attr("required");

    $this.on("keypress", function(event) {
      var key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode
      );

      isValid = regex.test(key);

      if (!isValid) {
        return false;
      }
    });

    $this.on("focusout", () => {
      if (isRequired !== undefined) {
        $this.val() === ""
          ? $this.addClass(notValidCssClass)
          : $this.removeClass(notValidCssClass);
      }
    });
  }
});

var checkIsValid = () => {
  var isValid = false;

  $("*[required]").each(function() {
    var $this = $(this);
    var type = $(this).attr("type");

    if (type == "checkbox") {
      if (!$this.is(":checked")) {
        $this.addClass("not-valid");
        isValid = false;
      } else {
        isValid = true;
      }
    } else {
      if ($this.val() == "") {
        $this.addClass(notValidCssClass);
        isValid = false;
      } else {
        isValid = true;
      }
    }
  });

  return isValid;
};

$("#sendMail").on("click", function(e) {
  e.preventDefault();
  var isValid = checkIsValid();

  if (isValid) {
    var mailBody = {
      name: $("#inpName").val(),
      lastName: $("#inpLName").val(),
      email: $("#inpEmail").val(),
      phone: $("#inpPhone").val(),
      company: $("#inpCompany").val(),
      country: $("#inpCountry").val(),
      message: $("#txtMessage").val()
    };

    sendMail(mailBody, "ProjectForm");
  } else {
    var $firstErrorItem = $("." + notValidCssClass).eq(0);
    var firstTop = $firstErrorItem.offset().top - 150;

    $("html,body").animate(
      {
        scrollTop: firstTop
      },
      1000
    );

    $firstErrorItem.focus();
  }
});
