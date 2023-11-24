const menuBtn = document.querySelector(".menu-Btn");
const navigation = document.querySelector(".navigation_items");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});


document.addEventListener('DOMContentLoaded', function () {
  const cardSwiper = new Swiper('.card_swiper', {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      620: {
        slidesPerView: 2,
      },
      980: {
        slidesPerView: 3,
      },

    },
  });
});




var videoContainer = document.getElementById("videoContainer");
var video = document.getElementById("video");

function btn_display() {
    if (videoContainer.classList.contains("display")) {
        videoContainer.classList.remove("display");
        video.pause();
    } else {
        videoContainer.classList.add("display");
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
}

function btn_hide() {
    videoContainer.classList.remove("display");
    video.pause();
}

video.addEventListener('ended', function () {
    btn_hide();
});



$(document).ready(function () {
  ScrollReveal({
    reset: true,
    duration: 2500,
    delay: 0,
  });


ScrollReveal().reveal('.upper li,.top ', {origin: 'top', interval: 500, distance: '200px', duration: 1000, reset: true });
ScrollReveal().reveal('.left', { origin: 'left', interval: 200, distance: '200px', duration: 2000, reset: true });
ScrollReveal().reveal('.right', { origin: 'right', interval: 200, distance: '200px', duration: 2000, reset: true });
ScrollReveal().reveal('.bottom ', { origin: 'bottom', interval: 300, distance: '200px', duration: 2000, reset: true });
ScrollReveal().reveal('.stop', { origin: 'bottom', interval: 300, distance: '1px', duration: 1000, reset: false ,delay: 150, });

});


