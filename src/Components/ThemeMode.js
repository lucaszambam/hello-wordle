import React, { useEffect } from "react";
import "../Styles/ThemeMode.css";

const ThemeMode = () => {
    let clickedClass = "clicked";
    const body = document.body;
    const menuInside = document.getElementsByName("menuInside");
    const menuSpan = document.getElementsByClassName("menuSpan");
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    useEffect(() => {
        if (theme === lightTheme || theme === darkTheme) {
            body.classList.add(theme);
            Array.from(menuInside).forEach(element => {
                element.classList.add(theme);
            });
            Array.from(menuSpan).forEach(element => {
                element.classList.add(theme);
            });
        } else {
            body.classList.add(lightTheme);
            Array.from(menuInside).forEach(element => {
                element.classList.add(lightTheme);
            });
            Array.from(menuSpan).forEach(element => {
                element.classList.add(lightTheme);
            });

        }
    }, []);

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            Array.from(menuInside).forEach(element => {
                element.classList.replace(darkTheme, lightTheme);
            });
            Array.from(menuSpan).forEach(element => {
                element.classList.replace(darkTheme, lightTheme);
            });
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            Array.from(menuInside).forEach(element => {
                element.classList.replace(lightTheme, darkTheme);
            });
            Array.from(menuSpan).forEach(element => {
                element.classList.replace(lightTheme, darkTheme);
            });
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    };

    return (
        <input type="checkbox"
            className={theme === "dark" ? clickedClass : ""}
            id="darkMode"
            onClick={(e) => switchTheme(e)}
        ></input>
    );
};

export default ThemeMode;