import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3>Hello, It's Me</h3>
                    <h1>Shyam Sudhir Mangaonkar</h1>
                    <h2>And I'm a <span>Software Engineer</span></h2>
                    <p>
                        Full Stack Developer specializing in React.js, Node.js, Express, and MongoDB, building fast, scalable, and user-focused web applications. I leverage Generative AI, automation, and modern development workflows to accelerate delivery and create production-ready solutions. Backed by a strong foundation in Data Structures & Algorithms, I write clean, optimized code and integrate AI tools to solve real-world problems and deliver measurable impact.
                    </p>

                    <div className="social-icons">
                        <a href="https://github.com/shyam" style={{ '--i': 1 }}><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/shyam-mangaonkar-bb8b58229/" target="_blank" rel="noopener noreferrer" style={{ '--i': 2 }}><FaLinkedin /></a>
                        <a href="https://twitter.com/shyam" style={{ '--i': 3 }}><FaTwitter /></a>
                        <a href="https://www.instagram.com/shyam_mangaonkar?igsh=MXdvZXQyMHozcnh2dQ==" target="_blank" rel="noopener noreferrer" style={{ '--i': 4 }}><FaInstagram /></a>
                    </div>

                    <a href="/Shyam_Mangaonkar_CV.pdf" download="Shyam_Mangaonkar_CV.pdf" className="btn">Download CV</a>
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
