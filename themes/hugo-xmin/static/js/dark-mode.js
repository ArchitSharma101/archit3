document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const darkModeClass = "dark-mode";

    // Apply saved theme on page load
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add(darkModeClass);
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener("click", () => {
        if (document.body.classList.contains(darkModeClass)) {
            document.body.classList.remove(darkModeClass);
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.add(darkModeClass);
            localStorage.setItem("theme", "dark");
        }
    });
});
