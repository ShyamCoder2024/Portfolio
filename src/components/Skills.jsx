import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Frontend',
            items: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind']
        },
        {
            title: 'Backend',
            items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'MongoDB']
        },
        {
            title: 'AI & Automation',
            items: ['Generative AI', 'n8n', 'AI Agents', 'RAG Pipelines']
        },
        {
            title: 'DevOps',
            items: ['Git', 'GitHub', 'Vercel', 'Docker', 'CI/CD']
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

            <div className="skills-grid">
                {skillGroups.map((group, groupIndex) => (
                    <motion.div
                        className="skill-group"
                        key={groupIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="skill-group-title">{group.title}</h3>
                        <div className="skill-list">
                            {group.items.map((skill, skillIndex) => (
                                <span className="skill-item" key={skillIndex}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
