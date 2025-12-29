import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(() => {
        // Initialize scrolled to true on mobile to prevent burger menu from being cut off on initial render
        if (typeof window !== 'undefined') {
            return window.scrollY > 50 || window.innerWidth <= 1024;
        }
        return false;
    });
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 || window.innerWidth <= 1024) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo">
                    <a href="#home">SHYAM<span>.</span></a>
                </div>

                <div className={`nav-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-right">
                    <button
                        className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        <span className="toggle-track">
                            <span className="toggle-thumb">
                                {isDark ? <FaSun /> : <FaMoon />}
                            </span>
                        </span>
                    </button>
                    <a href="#contact" className="header-cta">
                        Let's Talk
                        <span className="arrow-icon"><FaArrowRight /></span>
                    </a>
                    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
