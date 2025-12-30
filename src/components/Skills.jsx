import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Skills.css';

// Import skill logos
import reactLogo from '../assets/skills/react.png';
import nodejsLogo from '../assets/skills/nodejs.png';
import mongodbLogo from '../assets/skills/mongodb.png';
import javascriptLogo from '../assets/skills/javascript.png';
import expressjsLogo from '../assets/skills/expressjs.png';
import restapiLogo from '../assets/skills/restapi.png';
import socketioLogo from '../assets/skills/socketio.png';
import genaiLogo from '../assets/skills/genai.png';
import n8nLogo from '../assets/skills/n8n.png';
import gitLogo from '../assets/skills/git.png';
import dockerLogo from '../assets/skills/docker.png';
import vercelLogo from '../assets/skills/vercel.png';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Core Stack',
            description: 'My primary development tools',
            skills: [
                { name: 'React.js', logo: reactLogo },
                { name: 'Node.js', logo: nodejsLogo },
                { name: 'JavaScript', logo: javascriptLogo },
                { name: 'MongoDB', logo: mongodbLogo },
                { name: 'Express.js', logo: expressjsLogo },
                { name: 'REST APIs', logo: restapiLogo },
            ]
        },
        {
            title: 'AI & Automation',
            description: 'Building intelligent systems',
            skills: [
                { name: 'Gen AI', logo: genaiLogo },
                { name: 'n8n', logo: n8nLogo },
                { name: 'Socket.IO', logo: socketioLogo },
            ]
        },
        {
            title: 'DevOps & Tools',
            description: 'Deployment & version control',
            skills: [
                { name: 'Git', logo: gitLogo },
                { name: 'Docker', logo: dockerLogo },
                { name: 'Vercel', logo: vercelLogo },
            ]
        }
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

            <div className="skills-groups">
                {skillGroups.map((group, groupIndex) => (
                    <motion.div
                        className="skill-group"
                        key={groupIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="group-header">
                            <h3 className="group-title">{group.title}</h3>
                            <p className="group-desc">{group.description}</p>
                        </div>
                        <div className="group-skills">
                            {group.skills.map((skill, skillIndex) => (
                                <motion.div
                                    className="skill-card"
                                    key={skillIndex}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -4,
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
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
