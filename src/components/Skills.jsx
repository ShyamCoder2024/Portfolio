import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Skills.css';

// Import all skill logos
import reactLogo from '../assets/skills/react.png';
import nodejsLogo from '../assets/skills/nodejs.png';
import mongodbLogo from '../assets/skills/mongodb.png';
import javascriptLogo from '../assets/skills/javascript.png';
import nextjsLogo from '../assets/skills/nextjs.png';
import tailwindLogo from '../assets/skills/tailwind.png';
import dockerLogo from '../assets/skills/docker.png';
import gitLogo from '../assets/skills/git.png';
import expressjsLogo from '../assets/skills/expressjs.png';
import restapiLogo from '../assets/skills/restapi.png';
import socketioLogo from '../assets/skills/socketio.png';
import genaiLogo from '../assets/skills/genai.png';
import n8nLogo from '../assets/skills/n8n.png';
import vercelLogo from '../assets/skills/vercel.png';
import githubLogo from '../assets/skills/github.png';
import saasLogo from '../assets/skills/saas.png';

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
        { name: 'Express.js', logo: expressjsLogo },
        { name: 'REST APIs', logo: restapiLogo },
        { name: 'Socket.IO', logo: socketioLogo },
        { name: 'Gen AI', logo: genaiLogo },
        { name: 'n8n', logo: n8nLogo },
        { name: 'Vercel', logo: vercelLogo },
        { name: 'GitHub', logo: githubLogo },
        { name: 'SaaS', logo: saasLogo },
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
                        transition={{ duration: 0.3, delay: index * 0.04 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.08,
                            y: -8,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <div className="skill-logo">
                            <img src={skill.logo} alt={skill.name} />
                        </div>
                        <span className="skill-name">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
