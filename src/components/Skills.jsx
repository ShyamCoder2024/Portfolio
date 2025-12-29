import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Skills.css';

// Import skill logos
import reactLogo from '../assets/skills/react.png';
import nodejsLogo from '../assets/skills/nodejs.png';
import mongodbLogo from '../assets/skills/mongodb.png';
import javascriptLogo from '../assets/skills/javascript.png';
import nextjsLogo from '../assets/skills/nextjs.png';
import tailwindLogo from '../assets/skills/tailwind.png';
import dockerLogo from '../assets/skills/docker.png';
import gitLogo from '../assets/skills/git.png';

const Skills = () => {
    const skills = [
        { name: 'React.js', logo: reactLogo },
        { name: 'Next.js', logo: nextjsLogo },
        { name: 'Node.js', logo: nodejsLogo },
        { name: 'MongoDB', logo: mongodbLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'Tailwind', logo: tailwindLogo },
        { name: 'Docker', logo: dockerLogo },
        { name: 'Git', logo: gitLogo },
        { name: 'Express.js', logo: null },
        { name: 'REST APIs', logo: null },
        { name: 'Socket.IO', logo: null },
        { name: 'Generative AI', logo: null },
        { name: 'n8n', logo: null },
        { name: 'Vercel', logo: null },
        { name: 'GitHub', logo: null },
        { name: 'SaaS', logo: null },
    ];

    return (
        <section id="skills" className="skills">
            <motion.div
                className="section-label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Skills
            </motion.div>

            <motion.h2
                className="skills-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                My <span>Tech Stack</span>
            </motion.h2>

            <motion.p
                className="skills-tagline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Technologies I use to build modern, scalable applications
            </motion.p>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <motion.div
                        className="skill-card"
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.05,
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                    >
                        {skill.logo ? (
                            <div className="skill-logo">
                                <img src={skill.logo} alt={skill.name} />
                            </div>
                        ) : (
                            <div className="skill-icon">
                                {skill.name.charAt(0)}
                            </div>
                        )}
                        <span className="skill-name">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
