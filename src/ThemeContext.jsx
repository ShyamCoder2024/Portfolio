import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const theme = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [isDark]);

    const toggleTheme = useCallback(() => {
        // Add transitioning class for smooth fade
        setIsTransitioning(true);

        // Small delay for fade effect
        setTimeout(() => {
            setIsDark(prev => {
                const newTheme = !prev;
                const theme = newTheme ? 'dark' : 'light';
                localStorage.setItem('theme', theme);
                document.documentElement.setAttribute('data-theme', theme);
                return newTheme;
            });

            // Remove transition after theme change
            setTimeout(() => {
                setIsTransitioning(false);
            }, 150);
        }, 150);
    }, []);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme, isTransitioning }}>
            {children}
            {/* Premium Theme Transition Overlay */}
            <div className={`theme-transition-overlay ${isTransitioning ? 'active' : ''}`} />
        </ThemeContext.Provider>
    );
};
