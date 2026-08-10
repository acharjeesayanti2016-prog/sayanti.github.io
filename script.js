const themeToggle = document.getElementById("theme-toggle");

let darkMode = true;

themeToggle.addEventListener("click", () => {

    darkMode = !darkMode;

    if (!darkMode) {

        document.documentElement.style.setProperty(
            "--bg",
            "#f5f7fa"
        );

        document.documentElement.style.setProperty(
            "--bg-secondary",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#111827"
        );

        document.documentElement.style.setProperty(
            "--muted",
            "#667085"
        );

        themeToggle.textContent = "🌙";

    } else {

        document.documentElement.style.setProperty(
            "--bg",
            "#070a0f"
        );

        document.documentElement.style.setProperty(
            "--bg-secondary",
            "#0d1117"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#11161e"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#f5f7fa"
        );

        document.documentElement.style.setProperty(
            "--muted",
            "#9299a6"
        );

        themeToggle.textContent = "☀";
    }

});
