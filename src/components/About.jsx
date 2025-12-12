import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './About.css';
import profileImg from '../assets/profile.jpg';

const About = () => {
    return (
        <section id="about" className="about">
            <h2 className="heading">About <span>Me</span></h2>

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
                    <h3>Software Engineer</h3>
                    <p>
                        Full Stack Developer specializing in React.js, Node.js, Express, and MongoDB, building fast, scalable, and user-focused web applications. I leverage Generative AI, automation, and modern development workflows to accelerate delivery and create production-ready solutions. Backed by a strong foundation in Data Structures & Algorithms, I write clean, optimized code and integrate AI tools to solve real-world problems and deliver measurable impact.
                    </p>
                    <a href="#contact" className="btn">Read More</a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
