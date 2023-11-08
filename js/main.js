// MAIN SLIDER
const swiper1 = new Swiper(".swiper-slider", {
  // Optional parameters
  centeredSlides: false,
  slidesPerView: 3,
  spaceBetween: 18,
  // grabCursor: true,
  // freeMode: false,
  loop: false,
  observer: true,
  observeParents: true,
  // mousewheel: false,
  
  // keyboard: {
  //   enabled: true
  // },

  // Enabled autoplay mode
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true
  },

  // If we need navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// const swiper2 = new Swiper(".project-slider-2", {
//   centeredSlides: false,
//   slidesPerView: 3,
//   spaceBetween: 18,
//   loop: false,
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: false,
//     clickable: true
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },

// });

// const swiper3 = new Swiper(".project-slider-3", {
//   centeredSlides: false,
//   slidesPerView: 3,
//   spaceBetween: 18,
//   loop: false,
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: false,
//     clickable: true
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },

// });

// const swiper4 = new Swiper(".project-slider-4", {
//   centeredSlides: false,
//   slidesPerView: 3,
//   spaceBetween: 18,
//   loop: false,
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: false,
//     clickable: true
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },

// });


// DATA BACKGROUND IMAGE
var pageSection = $("*");
pageSection.each(function (indx) {
  if ($(this).attr("data-background")) {
    $(this).css("background", "url(" + $(this).data("background") + ")");
  }
});

// DATA BACKGROUND COLOR
var pageSection = $("*");
pageSection.each(function (indx) {
  if ($(this).attr("data-background")) {
    $(this).css("background", $(this).data("background"));
  }
});


// HAMBURGER MENU
$('.hamburger-menu').on('click', function () {
  $(this).toggleClass('open');
  $('.site-menu').toggleClass('active');
});

$('.site-menu ul li a').click(function(){
  $('.hamburger-menu').toggleClass('open');
  $('.site-menu').toggleClass('active');
});



//GO to Top
let mybutton = document.getElementById("go-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



$(function () {
  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();

      if(scroll > 40){
        $('.navbar').css({position: 'fixed', top: '0px' , padding: '15px 0px' , background: '#263640'});
        $('.navbar').delay("show").slideDown(500);
      }else if ($(window).width() < 991) {
        $('.navbar').css({position: 'relative', top: '0px' , padding: '15px 0px' , background: '#263640' });
      } else{
        $('.navbar').css({position: 'relative', top: '0px' , padding: '15px 0px' , background: '#263640'});
        $('.navbar').delay("show").fadeIn(500);
      }
  });
});

