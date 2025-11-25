// THEME TOGGLE (DARK/LIGHT)

function toggleTheme() {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
}

const toggleBtn = document.getElementById("theme-toggle");
const toggleBtnMobile = document.getElementById("theme-toggle-mobile");

toggleBtn?.addEventListener("click", toggleTheme);
toggleBtnMobile?.addEventListener("click", toggleTheme);


// MOBILE MENU — FIXED VERSION

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll("#mobile-menu a");

// Open/close the menu
hamburger?.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");

    if (isHidden) {
        mobileMenu.classList.remove("hidden");
        document.body.style.overflow = "hidden";       // lock scroll
    } else {
        mobileMenu.classList.add("hidden");
        document.body.style.overflow = "";             // restore scroll
    }
});

// Close when clicking any mobile menu link

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        document.body.style.overflow = "";
    });
});

// Close menu when clicking outside of it

document.addEventListener("click", (e) => {
    const clickInsideMenu = mobileMenu.contains(e.target);
    const clickOnHamburger = hamburger.contains(e.target);

    if (!clickInsideMenu && !clickOnHamburger) {
        mobileMenu.classList.add("hidden");
        document.body.style.overflow = "";
    }
});


// FADE-IN ON SCROLL

// const faders = document.querySelectorAll(".fade-in");


// SCROLL REVEAL (FADE SECTIONS IN ON SCROLL)

const faders = document.querySelectorAll(".fade-in");

const revealOptions = {
    root: null,
    threshold: .5,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate once
        }
    });
}, revealOptions);

faders.forEach(fade => {
    revealOnScroll.observe(fade);
});


/*
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.15 }
);

faders.forEach(el => observer.observe(el));
*/


// SMOOTH SCROLL (fallback for older browsers)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const id = this.getAttribute("href");
        if (!id || !id.startsWith("#")) return;

        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});
