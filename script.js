const toggles = document.querySelectorAll(".theme_toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const dark = document.body.getAttribute("data-theme") === "dark";

        if (dark) {
            document.body.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
}