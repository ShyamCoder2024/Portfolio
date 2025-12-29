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
            github: '#',
            demo: 'https://scaleon-grow-build.vercel.app/',
            size: 'large' // for bento layout
        },
        {
            title: 'MeetPune',
            year: '2024',
            tags: ['React', 'Socket.io', 'WebRTC'],
            image: meetpuneImage,
            github: '#',
            demo: 'https://chat-application-pink-three.vercel.app/login',
            size: 'medium'
        },
        {
            title: 'StudyWiseBanking',
            year: '2024',
            tags: ['React', 'Education', 'Platform'],
            image: studyWiseBankingImage,
            github: '#',
            demo: 'https://studywise-banking-site.vercel.app/login',
            size: 'medium'
        },
        {
            title: 'TalentHunt',
            year: '2024',
            tags: ['React', 'Recruitment', 'MERN'],
            image: talenthuntImage,
            github: '#',
            demo: '#',
            size: 'large'
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-header">
                <div className="projects-header-left">
                    <motion.div
                        className="section-label"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Project
                    </motion.div>
                    <motion.h2
                        className="projects-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        My Newest<br />Projects
                    </motion.h2>
                </div>
                <motion.p
                    className="projects-tagline"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    A showcase of projects that<br />demonstrate my skills and expertise.
                </motion.p>
            </div>

            <div className="projects-bento">
                {projects.map((project, index) => (
                    <motion.div
                        className={`bento-card bento-${project.size}`}
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bento-image-wrapper"
                        >
                            <img src={project.image} alt={project.title} />
                            <div className="bento-overlay">
                                <div className="overlay-icons">
                                    {project.github !== '#' && (
                                        <span onClick={(e) => { e.preventDefault(); window.open(project.github, '_blank'); }}>
                                            <FaGithub />
                                        </span>
                                    )}
                                    <span>
                                        <FaExternalLinkAlt />
                                    </span>
                                </div>
                            </div>
                        </a>
                        <div className="bento-content">
                            <h3 className="bento-title">{project.title}</h3>
                            <div className="bento-meta">
                                <span className="bento-year">{project.year}</span>
                                {project.tags.map((tag, idx) => (
                                    <React.Fragment key={idx}>
                                        <span className="meta-divider">|</span>
                                        <span className="bento-tag">{tag}</span>
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
