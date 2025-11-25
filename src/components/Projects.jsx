import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';
import scaleonImage from '../assets/scaleon-project.jpg';
import instaledImage from '../assets/instaled-project.jpg';

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
            title: 'InstaLED',
            description: 'IoT LED Controller, React Native, Arduino, Bluetooth Integration',
            image: instaledImage,
            tags: ['React Native', 'IoT', 'Arduino'],
            github: '#',
            demo: '#'
        },
        {
            title: 'MeetPune',
            description: 'Video Conferencing App, React, Socket.io, Node.js, MongoDB',
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'Socket.io', 'WebRTC'],
            github: '#',
            demo: '#'
        },
        {
            title: 'StudyStream',
            description: 'Educational Platform for Online Learning',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'Education', 'Platform'],
            github: '#',
            demo: '#'
        },
        {
            title: 'TalentHunt',
            description: 'Recruitment Platform connecting talent with opportunities',
            image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'Recruitment', 'MERN'],
            github: '#',
            demo: '#'
        },
        {
            title: 'LeadGen & CRM Automation',
            description: 'Business Automation Tool for lead generation and customer management',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Automation', 'CRM', 'Analytics'],
            github: '#',
            demo: '#'
        }
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
