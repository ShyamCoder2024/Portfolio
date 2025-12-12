import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-col">
                    <h3>Shyam.</h3>
                    <p>Software Engineer</p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                </div>

                <div className="footer-col">
                    <h4>Social</h4>
                    <a href="https://github.com/ShyamCoder2024" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/shyam-mangaonkar-bb8b58229/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/shyam_mangaonkar?igsh=MXdvZXQyMHozcnh2dQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright &copy; 2024 by SHYAM MANGAONKAR | All Rights Reserved.</p>
                <div className="footer-iconTop">
                    <a onClick={scrollToTop}><FaArrowUp /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
