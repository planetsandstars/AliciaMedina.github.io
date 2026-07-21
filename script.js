const toggle = document.getElementById("theme_toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
}


toggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");


    if (currentTheme === "dark") {

        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");

    } else {

        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");

    }

});