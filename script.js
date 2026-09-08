// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const hiddenElements = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                entry.target.classList.remove("hidden");
            }

        });

    },
    {
        threshold: 0.08
    }
);

hiddenElements.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ==========================
// ACTIVE NAVBAR LINK
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 200;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${current}`) {
            link.classList.add("active");
        }

    });
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


// ==========================
// NAVBAR BACKGROUND + SHADOW
// ==========================

const header = document.querySelector(".header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,.92)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.75)";
        header.style.backdropFilter = "blur(15px)";
        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.05)";
    }
}

window.addEventListener("scroll", updateHeader);

updateHeader();


// ==========================
// BUTTON HOVER EFFECT
// ==========================

const buttons = document.querySelectorAll(
    ".btn, .contact-buttons a"
);

buttons.forEach((button) => {

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

const socialIcons = document.querySelectorAll(
    ".social-links a"
);

socialIcons.forEach((icon) => {

    icon.addEventListener("mouseenter", () => {
        icon.style.transform =
            "translateY(-6px) scale(1.08)";
    });

    icon.addEventListener("mouseleave", () => {
        icon.style.transform =
            "translateY(0) scale(1)";
    });

});


// ==========================
// SCROLL TO TOP ON REFRESH
// ==========================

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});