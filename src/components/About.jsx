import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './About.css';
import profileImg from '../assets/profile.jpg';

const About = () => {
    return (
        <section id="about" className="about">
            <motion.div
                className="section-label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                About
            </motion.div>

            <div className="about-content">
                <motion.div
                    className="about-img"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src={profileImg} alt="About Me" />
                </motion.div>

                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="about-intro">
                        Hi, I'm <span className="highlight-text">Shyam</span> — a{' '}
                        <span className="highlight-text">Full-Stack Developer</span> focused on building
                        reliable, <span className="highlight-text">production-grade web applications</span>.
                    </p>
                    <p className="about-description">
                        I work across frontend, backend, and system architecture using React, Node.js,
                        Express, and MongoDB. My experience includes designing secure APIs, implementing
                        authentication and real-time features, and integrating AI-driven logic to deliver
                        scalable solutions that solve real-world problems.
                    </p>

                    <a href="#contact" className="btn-primary">
                        Learn More
                        <span className="arrow-icon"><FaArrowRight /></span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
