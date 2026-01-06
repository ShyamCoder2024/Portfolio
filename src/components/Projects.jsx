import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaArrowRight, FaCheck } from 'react-icons/fa';
import './Projects.css';
import scaleonImage from '../assets/scaleon-project.jpg';
import meetpuneImage from '../assets/meetpune-project.jpg';
import studyWiseBankingImage from '../assets/StudyWiseBanking.jpg';

const Projects = () => {
    const projects = [
        {
            title: 'ScaleOn Technologies',
            impact: 'Automating operations for SMBs, saving 20+ hours/week',
            narrative: 'Small businesses are losing hours to manual work because most AI tools are fragmented and require technical expertise.',
            solution: 'ScaleOn delivers AI agents and automation workflows as managed services—no internal tech team required.',
            engineering: [
                'JWT auth with Admin/Client roles',
                'RESTful APIs for workflows',
                'AI agent integration',
                'Admin analytics dashboard'
            ],
            tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'JWT', 'AI'],
            image: scaleonImage,
            demo: 'https://scale-on-technology.vercel.app/'
        },
        {
            title: 'Meet Pune',
            impact: 'Real-time city discovery with encrypted messaging',
            narrative: 'City discovery apps lack real-time interaction—users cannot connect or communicate instantly with locals.',
            solution: 'A full-stack platform combining city exploration with secure instant messaging via WebSockets.',
            engineering: [
                'Socket.io real-time communication',
                'AES-256 message encryption',
                'JWT protected routes',
                'MongoDB aggregations'
            ],
            tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'AES'],
            image: meetpuneImage,
            demo: 'https://chat-application-pink-three.vercel.app/login'
        },
        {
            title: 'StudyWise Banking',
            impact: 'AI-powered learning that adapts to each student',
            narrative: 'Banking exam aspirants struggle with generic content that fails to identify their learning gaps.',
            solution: 'An LMS that tracks performance, identifies weak topics, and generates personalized study recommendations.',
            engineering: [
                'JWT User/Admin role systems',
                'REST APIs for quiz engine',
                'AI performance analysis',
                'Admin student dashboard'
            ],
            tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'JWT', 'AI'],
            image: studyWiseBankingImage,
            demo: 'https://studywise-banking-site.vercel.app/login'
        }
    ];

    return (
        <section id="projects" className="projects">
            <motion.div
                className="section-label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.div>

            <motion.div
                className="projects-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <h2 className="projects-title">
                    Featured <span>Work</span>
                </h2>
                <p className="projects-tagline">
                    Production-grade systems with real backend architecture and security.
                </p>
            </motion.div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>

                        <div className="project-content">
                            <div className="project-header">
                                <h3 className="project-name">{project.title}</h3>
                                <p className="project-impact">{project.impact}</p>
                            </div>

                            <div className="project-narrative">
                                <p className="narrative-problem">{project.narrative}</p>
                                <p className="narrative-solution">{project.solution}</p>
                            </div>

                            <div className="engineering-section">
                                <ul className="engineering-list">
                                    {project.engineering.map((item, idx) => (
                                        <li key={idx}>
                                            <FaCheck className="check-icon" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-footer">
                                <div className="project-tech">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="tech-tag">{t}</span>
                                    ))}
                                </div>

                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-view-btn"
                                    >
                                        View Live
                                        <FaExternalLinkAlt />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="projects-cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <a href="https://github.com/ShyamCoder2024" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    View All Projects
                    <span className="arrow-icon"><FaArrowRight /></span>
                </a>
            </motion.div>
        </section>
    );
};

export default Projects;
