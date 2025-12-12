import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Frontend',
            skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS']
        },
        {
            category: 'Backend',
            skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO']
        },
        {
            category: 'Database',
            skills: ['MongoDB']
        },
        {
            category: 'Automation & AI',
            skills: ['n8n', 'AI Agents', 'Prompt Engineering', 'RAG Pipelines', 'Document Automation']
        },
        {
            category: 'Tools',
            skills: ['Git', 'GitHub', 'Postman', 'VS Code']
        },
        {
            category: 'Cloud & Deployment',
            skills: ['Vercel', 'Render', 'Railway', 'Netlify']
        },
        {
            category: 'Other Skills',
            skills: ['SaaS Development', 'Real-time Apps', 'CRM & Automation Workflows', 'API Integrations']
        }
    ];

    return (
        <section id="skills" className="skills">
            <h2 className="heading">Skills & <span>Technologies</span></h2>
            <p className="skills-description">
                Technologies and tools I work with to build modern applications
            </p>

            <div className="skills-categories">
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        className="skill-category"
                        key={categoryIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="category-title">{category.category}</h3>
                        <div className="category-skills">
                            {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                    className="skill-badge"
                                    key={skillIndex}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                    <span className="skill-badge-icon" style={{ color: '#6366f1' }}>
                                        <FaCheckCircle />
                                    </span>
                                    <span className="skill-badge-name">{skill}</span>
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
