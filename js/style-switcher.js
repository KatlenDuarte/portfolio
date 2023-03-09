/* =============== TOGGLE STYLE SWITCHER =========== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// HIDE STYLE SWITCHER ON SCROLL
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }

})

/* =============== CORES DO TEMA =========== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {

    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        }
        else {
            style.setAttribute("disabled", "true");
        }
    });
}

/* =============== CORES DO TEMA =========== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("bxs-sun");
    dayNight.querySelector("i").classList.toggle("bxs-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("bxs-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("bxs-moon");
    }
})