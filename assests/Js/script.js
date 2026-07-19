const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

window.addEventListener("scroll", () => {

    if(window.pageYOffset > sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }

});



const filterButtons = document.querySelectorAll(".room-filter");
const roomCards = document.querySelectorAll(".room-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active Button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        roomCards.forEach(card => {

            if (filterValue === "all" || card.dataset.filter === filterValue) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                }, 100);

            } else {

                card.style.opacity = "0";
                card.style.transform = "scale(.8)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 300);

            }

        });

    });

});


// Swiper Slider
const swiper = new Swiper(".gallerySwiper", {

    loop: true,

    speed: 800,

    spaceBetween: 30,

    grabCursor: true,

    centeredSlides: false,

    autoplay: {

        delay: 3000,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

    },

    breakpoints: {

        0: {

            slidesPerView: 1,

        },

        576: {

            slidesPerView: 1,

        },

        768: {

            slidesPerView: 2,

        },

        992: {

            slidesPerView: 3,

        },

        1200: {

            slidesPerView: 3,

        }

    }

});
// GLightbox

const lightbox = GLightbox({

    selector: ".glightbox",

    touchNavigation: true,

    loop: true,

    zoomable: true,

    autoplayVideos: true,

    openEffect: "zoom",
    closeEffect: "fade"

});


const gallery = document.querySelector(".gallerySwiper");

gallery.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
});

gallery.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
});

