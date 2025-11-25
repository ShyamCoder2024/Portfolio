import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiArduino, SiSocketdotio } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const allSkills = [
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, color: '#000000' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Socket.io', icon: <SiSocketdotio />, color: '#010101' },
        { name: 'Arduino', icon: <SiArduino />, color: '#00979D' },
    ];

    return (
        <section id="skills" className="skills">
            <h2 className="heading">Skills & <span>Technologies</span></h2>
            <p className="skills-description">
                Technologies and tools I work with to build modern applications
            </p>

            <motion.div
                className="skills-grid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {allSkills.map((skill, index) => (
                    <motion.div
                        className="skill-card"
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
