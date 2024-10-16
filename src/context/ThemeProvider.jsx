import React, { useState, useEffect, useMemo } from 'react';
import { ThemeContext, themes } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
    const [themeValue, setThemeValue] = useState(themes.light);

    useEffect(() => {
        const persistedTheme = JSON.parse(localStorage.getItem("currentTheme"));
        if (persistedTheme) {
            setThemeValue(persistedTheme);
        }
    }, []);

    const toggleTheme = () => {
        setThemeValue((prev) => {
            let newTheme = prev === themes.light ? themes.dark : themes.light;
            localStorage.setItem("currentTheme", JSON.stringify(newTheme)); // Fixed typo here
            return newTheme;
        });
    };

    const contextValue = useMemo(() => {
        return {
            theme: themeValue,
            toggleTheme,
        };
    }, [themeValue]);

    return (
        <ThemeContext.Provider value={contextValue}> {/* Added value prop here */}
            {children}
        </ThemeContext.Provider>
    );
};
