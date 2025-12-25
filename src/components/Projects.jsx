import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';
import scaleonImage from '../assets/scaleon-project.jpg';

import meetpuneImage from '../assets/meetpune-project.jpg';
import studyWiseBankingImage from '../assets/StudyWiseBanking.jpg';
import talenthuntImage from '../assets/talenthunt-project.jpg';


const Projects = () => {
    const projects = [
        {
            title: 'ScaleOn Technologies',
            description: 'MERN Stack, AI-Powered, SaaS Platform, Analytics',
            image: scaleonImage,
            tags: ['React', 'Node.js', 'AI', 'SaaS'],
            github: '#',
            demo: 'https://scaleon-grow-build.vercel.app/'
        },

        {
            title: 'MeetPune',
            description: 'Video Conferencing App, React, Socket.io, Node.js, MongoDB',
            image: meetpuneImage,
            tags: ['React', 'Socket.io', 'WebRTC'],
            github: '#',
            demo: 'https://chat-application-pink-three.vercel.app/login'
        },
        {
            title: 'StudyWiseBanking',
            description: 'Educational Platform for Online Learning',
            image: studyWiseBankingImage,
            tags: ['React', 'Education', 'Platform'],
            github: '#',
            demo: 'https://studywise-banking-site.vercel.app/login'
        },
        {
            title: 'TalentHunt',
            description: 'Recruitment Platform connecting talent with opportunities',
            image: talenthuntImage,
            tags: ['React', 'Recruitment', 'MERN'],
            github: '#',
            demo: '#'
        },

    ];

    return (
        <section id="projects" className="projects">
            <h2 className="heading">Latest <span>Projects</span></h2>
            <p className="projects-description">
                Here are some of my recent projects showcasing my skills and expertise
            </p>

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
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="tag">{tag}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn">
                                    <FaGithub /> Code
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-btn primary">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
