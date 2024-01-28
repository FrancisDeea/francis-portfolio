(() => {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
    } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
    }
})();
