import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skills = [
        // Core Development
        'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB',
        // Languages & Styling
        'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
        // Real-time & APIs
        'REST APIs', 'Socket.IO', 'WebRTC',
        // AI & Automation
        'Generative AI', 'n8n', 'AI Agents', 'RAG Pipelines',
        // DevOps & Tools
        'Git', 'GitHub', 'Vercel', 'Docker',
        // Domains
        'SaaS Development', 'Real-time Apps', 'API Integrations'
    ];

    return (
        <section id="skills" className="skills">
            <motion.div
                className="skills-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="section-label">Skills</div>
                <h2 className="skills-title">
                    Technologies I <span>Work With</span>
                </h2>
                <p className="skills-tagline">
                    Building modern, scalable applications with cutting-edge tools
                </p>
            </motion.div>

            <motion.div
                className="skills-cloud"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {skills.map((skill, index) => (
                    <motion.span
                        className="skill-tag"
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
