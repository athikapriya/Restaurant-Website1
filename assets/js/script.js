// nav on scroll color change
const navbar = document.querySelector('nav');
const toggleButton = document.querySelector('.fa-bars');

// Function to handle scroll and toggle background
const handleNavbarBackground = () => {
    if (window.scrollY > 50 || (window.innerWidth <= 992 && toggleButton.classList.contains('active'))) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

//scroll event listener
window.addEventListener('scroll', handleNavbarBackground);

//click event listener for the toggle button
toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    handleNavbarBackground(); 
});



// mixitup
$(function(){
    $('#Grid').mixitup();
});


// menu buttons
const menuButtons = document.querySelectorAll(".menu-btn");

menuButtons.forEach((button) => {
    button.addEventListener('click', () => {

      menuButtons.forEach((button) => button.classList.remove('active'));
      
      button.classList.add('active');
    });
 });


// swiper for banners
 var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


//  swipers for insta pictures
var swiper = new Swiper(".instaSwiper", {
    slidesPerView: 6,
    spaceBetween: 0,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1400:   {
            slidesPerView: 6,
        },
        1200:   {
            slidesPerView: 6,
        },
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 5, 
        },
        576:   {
            slidesPerView: 4,
        },
    },
});





