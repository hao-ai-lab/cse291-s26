(function () {
    function isDarkModeEnabled() {
        return localStorage.getItem("darkMode") === "1";
    }

    function currentLanguage() {
        return document.documentElement.lang === "zh" ? "zh" : "en";
    }

    function updateToggleState() {
        var toggle = document.querySelector("[data-theme-toggle]");
        if (!toggle) {
            return;
        }

        var labels = {
            en: {
                buttonDark: "Dark",
                buttonLight: "Light",
                dark: "Switch to dark mode",
                light: "Switch to light mode"
            },
            zh: {
                buttonDark: "Dark",
                buttonLight: "Light",
                dark: "切换到深色模式",
                light: "切换到浅色模式"
            }
        };
        var lang = currentLanguage();
        var isDark = isDarkModeEnabled();
        var themeText = document.querySelector("[data-theme-toggle-text]");

        if (themeText) {
            themeText.textContent = isDark ? labels[lang].buttonLight : labels[lang].buttonDark;
        }

        toggle.setAttribute("aria-pressed", isDark ? "true" : "false");
        toggle.setAttribute("aria-label", isDark ? labels[lang].light : labels[lang].dark);
    }

    function applyTheme() {
        if (typeof jtd !== "undefined") {
            jtd.setTheme(isDarkModeEnabled() ? "custom_dark" : "light");
        }

        updateToggleState();
    }

    function toggleTheme() {
        localStorage.setItem("darkMode", isDarkModeEnabled() ? "0" : "1");
        applyTheme();
    }

    window.onLoad = applyTheme;

    document.addEventListener("DOMContentLoaded", function () {
        applyTheme();

        var toggle = document.querySelector("[data-theme-toggle]");
        if (toggle) {
            toggle.addEventListener("click", toggleTheme);
        }
    });
})();
