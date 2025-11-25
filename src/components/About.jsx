import React from 'react';
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
                        I am a passionate UI/UX Designer and Developer with a strong background in building responsive and user-friendly websites.
                        I love to create designs that are not only visually appealing but also provide a seamless user experience.
                        With expertise in React, JavaScript, and modern CSS frameworks, I bring ideas to life through code.
                    </p>
                    <p>
                        My journey in web development started with a curiosity for how things work on the internet, and it has evolved into a career
                        where I constantly learn and adapt to new technologies. I am always open to new opportunities and collaborations.
                    </p>
                    <a href="#contact" className="btn">Read More</a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
