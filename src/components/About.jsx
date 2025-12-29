import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './About.css';
import profileImg from '../assets/profile.jpg';

const About = () => {
    const stats = [
        { number: '1', label: 'Year Experience' },
        { number: '20+', label: 'Projects Completed' },
        { number: '90%', label: 'Client Satisfaction' },
        { number: '20+', label: 'Technologies' },
    ];

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
                        Hi, I'm <span className="highlight-text">Shyam</span>, a passionate{' '}
                        <span className="highlight-text">Full-Stack Developer</span> with a knack for crafting
                        intuitive and <span className="highlight-text">high-performance web applications</span>.
                    </p>
                    <p className="about-description">
                        I specialize in React.js, Node.js, Express, and MongoDB, building fast, scalable,
                        and user-focused solutions. I leverage Generative AI and modern development
                        workflows to accelerate delivery and create production-ready applications that
                        solve real-world problems.
                    </p>

                    <a href="#contact" className="btn-primary">
                        Learn More
                        <span className="arrow-icon"><FaArrowRight /></span>
                    </a>

                    <div className="stats-row">
                        {stats.map((stat, index) => (
                            <motion.div
                                className="stat-item"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
