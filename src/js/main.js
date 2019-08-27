$(".hamburger").on("click", function() {
  $("body").toggleClass("header-shown");
  $(".header").toggleClass("is-shown");
});

let sliders = [];

$(".slider-container").each(function(i, e) {
  var $this = $(e);
  var sliderConfig = {
    slidesPerView: 1,
    speed:0,
    autoplay:{
       delay:5000, 
    },
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
    breakpoints:{
        767: {
            speed:500,
            spaceBetween:30
        }
    }
  };

  sliders[i] = new Swiper($this, sliderConfig);
});

window.addEventListener('resize',function(){

});

window.addEventListener('orientationchange',function(){

});

var swipersInit = () => {
  sliders.forEach((elem,idx)=>{
    $(elem).update(true);
  });
}