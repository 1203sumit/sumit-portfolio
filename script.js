// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const hiddenElements = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.15
});

hiddenElements.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});


// ==========================
// ACTIVE NAVBAR LINK
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});


// ==========================
// NAVBAR BACKGROUND + SHADOW
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,.92)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.75)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.05)";
    }

});


// ==========================
// BUTTON HOVER EFFECT
// ==========================

const buttons = document.querySelectorAll(".btn, .contact-buttons a");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-5px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});


// ==========================
// SOCIAL ICON HOVER EFFECT
// ==========================

const socialIcons = document.querySelectorAll(".social-links a");

socialIcons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {
        icon.style.transform = "translateY(-6px) scale(1.08)";
    });

    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "translateY(0) scale(1)";
    });

});


// ==========================
// SCROLL TO TOP ON REFRESH
// ==========================

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};