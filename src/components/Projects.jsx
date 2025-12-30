import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import './Projects.css';
import scaleonImage from '../assets/scaleon-project.jpg';
import meetpuneImage from '../assets/meetpune-project.jpg';
import studyWiseBankingImage from '../assets/StudyWiseBanking.jpg';

const Projects = () => {
    const projects = [
        {
            title: 'ScaleOn Technologies',
            hook: 'AI-powered automation platform with workflow engines.',
            problem: 'Small businesses waste hours on repetitive operations—most AI tools are fragmented and require technical expertise.',
            solution: 'Built a full-stack agency platform delivering AI agents and automation workflows as managed services.',
            engineering: [
                'JWT auth with Admin/Client roles',
                'RESTful APIs for workflows',
                'AI agent integration',
                'Admin analytics dashboard'
            ],
            tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'JWT', 'AI'],
            impact: 'Enables non-technical businesses to adopt AI automation.',
            image: scaleonImage,
            demo: 'https://scaleon-grow-build.vercel.app/'
        },
        {
            title: 'Meet Pune',
            hook: 'Real-time platform with encrypted messaging & WebSockets.',
            problem: 'City discovery apps lack real-time interaction—users cannot connect or communicate instantly.',
            solution: 'Developed a full-stack real-time platform combining city discovery with secure instant messaging.',
            engineering: [
                'Socket.io real-time communication',
                'AES-256 message encryption',
                'JWT protected routes',
                'MongoDB aggregations'
            ],
            tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'AES'],
            impact: 'Production-grade real-time system with end-to-end security.',
            image: meetpuneImage,
            demo: 'https://chat-application-pink-three.vercel.app/login'
        },
        {
            title: 'StudyWise Banking',
            hook: 'AI-driven LMS with personalized learning paths.',
            problem: 'Banking exam aspirants struggle with generic content that fails to adapt to individual learning gaps.',
            solution: 'Engineered an AI-powered LMS tracking performance and generating personalized recommendations.',
            engineering: [
                'JWT User/Admin role systems',
                'REST APIs for quiz engine',
                'AI performance analysis',
                'Admin student dashboard'
            ],
            tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'JWT', 'AI'],
            impact: 'Improves student retention through adaptive learning paths.',
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
                                <p className="project-hook">{project.hook}</p>
                            </div>

                            <div className="project-story">
                                <div className="story-item">
                                    <span className="story-label">Problem</span>
                                    <p>{project.problem}</p>
                                </div>
                                <div className="story-item">
                                    <span className="story-label">Solution</span>
                                    <p>{project.solution}</p>
                                </div>
                            </div>

                            <div className="engineering-section">
                                <span className="engineering-label">Engineering Highlights</span>
                                <ul className="engineering-list">
                                    {project.engineering.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-tech">
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="tech-tag">{t}</span>
                                ))}
                            </div>

                            <div className="project-impact">
                                <span className="impact-label">Impact:</span> {project.impact}
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
