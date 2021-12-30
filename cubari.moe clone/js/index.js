const about = document.getElementById("about");
const body = document.getElementById("body");
const scrollChecker = document.getElementById("scroll");

let lastScrollY = window.scrollY;

function openAbout() {
    body.style.overflow = "hidden";
    about.style.display = "";
}

function closeAbout() {
    body.style.overflow = "";
    about.style.display = "none";
}

document.addEventListener("scroll", (e) => {
    if (window.scrollY > 50) {
        document.body.classList.add("hide-after-scroll");
    } else {
        document.body.classList.remove("hide-after-scroll");
    }
});
