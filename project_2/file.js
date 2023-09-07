// import "slick-carousel/slick/slick.scss";
// import "slick-carousel/slick/slick-theme.scss";
// import "@styles/styles.scss";
// import "@styles/slider.scss";
// import "@js/slider";

// import $ from "jquery";

// $(document).ready(function () {
//   $(".demo").slick();
// });

$(".slider").slick({
  dots: true,
//   infinite: true,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplaySpeed: 2000,
});

$(".three-cards").slick({
  arrow: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


