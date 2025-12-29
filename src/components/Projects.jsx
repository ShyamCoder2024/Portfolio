import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';
import './Projects.css';
import scaleonImage from '../assets/scaleon-project.jpg';
import meetpuneImage from '../assets/meetpune-project.jpg';
import studyWiseBankingImage from '../assets/StudyWiseBanking.jpg';
import talenthuntImage from '../assets/talenthunt-project.jpg';

const Projects = () => {
    const projects = [
        {
            title: 'ScaleOn Technologies',
            year: '2024',
            tags: ['MERN Stack', 'AI-Powered', 'SaaS'],
            image: scaleonImage,
            github: null,
            demo: 'https://scaleon-grow-build.vercel.app/'
        },
        {
            title: 'MeetPune',
            year: '2024',
            tags: ['React', 'Socket.io', 'WebRTC'],
            image: meetpuneImage,
            github: null,
            demo: 'https://chat-application-pink-three.vercel.app/login'
        },
        {
            title: 'StudyWiseBanking',
            year: '2024',
            tags: ['React', 'Education', 'Platform'],
            image: studyWiseBankingImage,
            github: null,
            demo: 'https://studywise-banking-site.vercel.app/login'
        },
        {
            title: 'TalentHunt',
            year: '2024',
            tags: ['React', 'Recruitment', 'MERN'],
            image: talenthuntImage,
            github: null,
            demo: null
        },
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
                    A showcase of projects that demonstrate my skills in building
                    modern, scalable web applications.
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
                            <div className="project-overlay">
                                <div className="overlay-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                            <FaGithub />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-name">{project.title}</h3>
                            <div className="project-meta">
                                <span className="project-year">{project.year}</span>
                                {project.tags.map((tag, idx) => (
                                    <React.Fragment key={idx}>
                                        <span className="meta-separator">•</span>
                                        <span className="project-tag">{tag}</span>
                                    </React.Fragment>
                                ))}
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
