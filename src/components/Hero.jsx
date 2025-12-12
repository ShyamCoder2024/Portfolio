import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h3 variants={itemVariants}>Hello, It's Me</motion.h3>
                    <motion.h1 variants={itemVariants}>SHYAM MANGAONKAR</motion.h1>
                    <motion.h2 variants={itemVariants}>And I'm a <span>Software Engineer</span></motion.h2>
                    <motion.p variants={itemVariants}>
                        Full-stack and AI-driven developer skilled in React.js, Node.js, and MongoDB. I build scalable applications and integrate Generative AI and automation to deliver production-ready, high-impact solutions. Backed by strong DSA skills, I write clean, optimized code that solves real-world problems.
                    </motion.p>

                    <motion.div className="social-icons" variants={itemVariants}>
                        <a href="https://github.com/ShyamCoder2024" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/shyam-mangaonkar-bb8b58229/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/shyam_mangaonkar?igsh=MXdvZXQyMHozcnh2dQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </motion.div>

                    <motion.a
                        href="/Shyam_Mangaonkar_CV.pdf"
                        download="Shyam_Mangaonkar_CV.pdf"
                        className="btn"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download CV
                    </motion.a>
                </motion.div>

                <motion.div
                    className="hero-img"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="img-box">
                        <img src={profileImg} alt="Profile" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
