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
            subtitle: 'AI Agents & Automation Solutions',
            problem: 'SMBs struggle to adopt AI due to high costs, lack of expertise, and fragmented tools.',
            solution: 'Built a scalable agency platform with AI agents, automation workflows, and SaaS solutions to streamline business operations.',
            tech: ['AI Agents', 'Automation', 'Web Dev', 'Product Design'],
            outcome: 'Helps clients save time, reduce friction, and adopt AI practically.',
            image: scaleonImage,
            demo: 'https://scaleon-grow-build.vercel.app/'
        },
        {
            title: 'Meet Pune',
            subtitle: 'City Discovery Platform',
            problem: 'People struggle to discover local places and events in Pune—info is scattered across social media and blogs.',
            solution: 'Created a centralized city discovery platform with structured navigation and fast-loading pages.',
            tech: ['React.js', 'JavaScript', 'Scalable UI', 'Modern Frontend'],
            outcome: 'Demonstrates turning a local problem into a scalable digital product.',
            image: meetpuneImage,
            demo: 'https://chat-application-pink-three.vercel.app/login'
        },
        {
            title: 'StudyWise Banking',
            subtitle: 'AI-Driven Learning Platform',
            problem: 'Banking exam aspirants lose motivation and lack personalized guidance after enrollment.',
            solution: 'Built a full-stack learning system with AI-based performance analysis and personalized study recommendations.',
            tech: ['React.js', 'Node.js', 'AI Analysis', 'Full-Stack'],
            outcome: 'Improves student engagement and learning outcomes through data-driven prep.',
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
                    Real-world projects solving real problems with modern technology.
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
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    aria-label="View Live"
                                >
                                    <FaExternalLinkAlt />
                                </a>
                            )}
                        </div>

                        <div className="project-content">
                            <div className="project-header">
                                <h3 className="project-name">{project.title}</h3>
                                <span className="project-subtitle">{project.subtitle}</span>
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

                            <div className="project-tech">
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="tech-tag">{t}</span>
                                ))}
                            </div>

                            <div className="project-outcome">
                                <span className="outcome-label">Impact:</span> {project.outcome}
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
