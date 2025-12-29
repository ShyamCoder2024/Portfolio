import React from 'react';
import { FaArrowUp, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
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
            {/* CTA Section */}
            <motion.div
                className="footer-cta"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="cta-headline">
                    Have an Awesome Idea?<br />
                    Let's Work Together
                </h2>
                <a href="#contact" className="btn-primary cta-btn">
                    Get In Touch
                    <span className="arrow-icon"><FaArrowRight /></span>
                </a>
            </motion.div>

            {/* Footer Content */}
            <div className="footer-main">
                <div className="footer-brand">
                    <h3>Shyam.</h3>
                    <p>Crafting digital experiences with precision & creativity - let's build something extraordinary.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Main Page</h4>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                    </div>

                    <div className="footer-col">
                        <h4>Social</h4>
                        <a href="https://github.com/ShyamCoder2024" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/shyam-mangaonkar-bb8b58229/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/shyam_mangaonkar?igsh=MXdvZXQyMHozcnh2dQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <a href="mailto:your@email.com">Email</a>
                        <a href="https://wa.me/your-number">WhatsApp</a>
                    </div>
                </div>

                <div className="footer-back-top">
                    <button onClick={scrollToTop} className="back-top-btn">
                        <FaArrowUp />
                    </button>
                    <span>Back to Top</span>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>Design by Shyam ❤️</p>
                <p>© 2025 SHYAM. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
