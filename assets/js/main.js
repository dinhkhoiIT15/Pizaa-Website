/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
    const navMenu = document.getElementById("nav-menu"); //When we click on each nav-link, we remove the 'show-menu' class
    navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== ADD SHADOW HEADER =====*/
const shadowHeader = () => {
    const header = document.getElementById("header"); //Add the class if the bottom is offset is greater than 50...
    this.scrollY >= 50
        ? header.classList.add("shadow-header")
        : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*===== SWIPER POPULAR =====*/
const swiperPopular = new Swiper(".popular-swiper", {
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: "auto"
});

/*===== SHOW SCROLL UP =====*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    this.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*===== SCROLL SECTION ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".nav-menu a[href*=" + sectionId + "]"
            );
        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300
    // reset: true //Animation repeat
});

sr.reveal(".home-data, .popular-container, .footer");
sr.reveal(".home-board", { delay: 700, distance: "100px", origin: "right" });
sr.reveal(".home-pizza", {
    delay: 1400,
    distance: "100px",
    origin: "bottom",
    rotate: { z: -90 }
});
sr.reveal(".home-ingredient", {
    delay: 2000,
    interval: 100
});
sr.reveal(".about-data, .recipe-list, .contact-data", {
    origin: "right"
});
sr.reveal(".about-img, .recipe-img, .contact-image", {
    origin: "left"
});
sr.reveal(".products-card", { interval: 100 });
