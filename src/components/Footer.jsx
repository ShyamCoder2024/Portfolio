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
                    Looking for a Passionate Developer?<br />
                    Let's Connect
                </h2>
                <a href="#contact" className="btn-primary cta-btn">
                    Hire Me
                    <span className="arrow-icon"><FaArrowRight /></span>
                </a>
            </motion.div>

            {/* Footer Content */}
            <div className="footer-main">
                <div className="footer-left">
                    <h3 className="footer-logo">SHYAM<span>.</span></h3>
                </div>

                <div className="footer-right">
                    <div className="footer-col">
                        <h4>Social</h4>
                        <a href="https://github.com/ShyamCoder2024" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/shyam-mangaonkar-bb8b58229/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <a href="mailto:shyammangaonkar330@gmail.com">Email</a>
                        <a href="https://wa.me/918459311191">WhatsApp</a>
                    </div>
                </div>

                <button onClick={scrollToTop} className="back-top-btn desktop-only">
                    <FaArrowUp />
                </button>
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
