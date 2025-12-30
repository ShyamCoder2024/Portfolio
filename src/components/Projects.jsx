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
            hook: 'AI-powered automation agency platform with integrated workflow engines and client management.',
            problem: 'Small businesses waste hours on repetitive operations because most AI tools are fragmented, expensive, and require technical expertise to deploy.',
            solution: 'Built a full-stack agency platform that delivers AI agents and automation workflows as managed services—enabling businesses to automate operations without building internal tech teams.',
            engineering: [
                'JWT-based authentication with role separation (Admin/Client)',
                'RESTful API architecture for workflow management',
                'AI agent integration for document processing & analysis',
                'Admin dashboard with client analytics and service tracking',
                'Modular automation engine for reusable workflow templates'
            ],
            tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'AI Integration', 'Admin Dashboard'],
            impact: 'Enables non-technical businesses to adopt AI automation with zero infrastructure overhead.',
            image: scaleonImage,
            demo: 'https://scaleon-grow-build.vercel.app/'
        },
        {
            title: 'Meet Pune',
            hook: 'Real-time communication platform with encrypted messaging, WebSocket connections, and user authentication.',
            problem: 'Existing city discovery apps lack real-time interaction—users cannot connect, share recommendations, or communicate instantly with locals.',
            solution: 'Developed a full-stack real-time platform combining city discovery with secure instant messaging, enabling users to explore places and connect with others simultaneously.',
            engineering: [
                'Socket.io implementation for real-time bidirectional communication',
                'AES-256 encryption for secure message handling',
                'JWT authentication with protected route middleware',
                'RESTful APIs for user management and content delivery',
                'MongoDB aggregation pipelines for location-based queries',
                'Session management with automatic reconnection handling'
            ],
            tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT Auth', 'AES Encryption', 'REST APIs', 'WebSockets'],
            impact: 'Demonstrates production-grade real-time systems with end-to-end security implementation.',
            image: meetpuneImage,
            demo: 'https://chat-application-pink-three.vercel.app/login'
        },
        {
            title: 'StudyWise Banking',
            hook: 'Full-stack learning management system with AI-driven performance analysis and personalized study paths.',
            problem: 'Banking exam aspirants struggle with generic study content that fails to adapt to individual learning gaps, leading to low engagement and poor preparation outcomes.',
            solution: 'Engineered an AI-powered LMS that tracks student performance, identifies weak topics through data analysis, and generates personalized learning recommendations with curated resources.',
            engineering: [
                'JWT authentication with separate User/Admin role systems',
                'RESTful API design for quiz engine and progress tracking',
                'AI-based performance analysis with strength/weakness mapping',
                'Admin dashboard for student monitoring and content management',
                'MongoDB schema design for hierarchical course structures',
                'Automated recommendation engine using learning analytics'
            ],
            tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'AI Analysis', 'Admin Dashboard', 'Full-Stack'],
            impact: 'Improves student retention and content utilization through data-driven, adaptive learning paths.',
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
                    Production-grade systems built with real backend architecture, security, and scalability.
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
