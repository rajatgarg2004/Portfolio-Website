import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check if the dark mode preference exists in localStorage
        const darkModePreference = localStorage.getItem('isDarkMode');
        // Return true if it exists and is set to true, otherwise false
        return darkModePreference ? JSON.parse(darkModePreference) : false;
    });

    const toggleMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            // Store the new mode preference in localStorage
            localStorage.setItem('isDarkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    useEffect(() => {
        // Add event listener to listen for changes in localStorage
        const handleStorageChange = () => {
            const darkModePreference = localStorage.getItem('isDarkMode');
            setIsDarkMode(darkModePreference ? JSON.parse(darkModePreference) : false);
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            // Remove event listener when component unmounts
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => useContext(DarkModeContext);