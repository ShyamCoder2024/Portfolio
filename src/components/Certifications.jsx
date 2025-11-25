import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';
import oracleLogo from '../assets/oracle-logo.png';
import microsoftLogo from '../assets/microsoft-logo.png';
import hackerrankLogo from '../assets/hackerrank-logo.png';

const Certifications = () => {
    const certifications = [
        {
            title: 'Oracle Certified Generative AI Professional',
            issuer: 'Oracle',
            date: '2024',
            credential: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7174934&trackId=OCI25GAIOCP&key=f7abb457cb2461a2fd7af77b172c7ed7c2387d81',
            description: 'Professional certification in Generative AI technologies and Oracle Cloud Infrastructure',
            logo: oracleLogo
        },
        {
            title: 'Microsoft Generative AI',
            issuer: 'Microsoft via upGrad',
            date: '2024',
            credential: 'https://certificates.upgrad.com/5ab2b664-9018-445a-88cd-b96727ab02ae-Gen-AI-SsdN11uHwjAsprKn.pdf',
            description: 'Advanced training in Microsoft Generative AI technologies and applications',
            logo: microsoftLogo
        },
        {
            title: 'JavaScript (Intermediate)',
            issuer: 'HackerRank',
            date: '2024',
            credential: 'https://www.hackerrank.com/certificates/3883390ffa04',
            description: 'Intermediate-level JavaScript programming skills and ES6+ features',
            logo: hackerrankLogo
        },
        {
            title: 'Problem Solving (Intermediate)',
            issuer: 'HackerRank',
            date: '2024',
            credential: 'https://www.hackerrank.com/certificates/99914d1405de',
            description: 'Data structures, algorithms, and computational problem-solving',
            logo: hackerrankLogo
        }
    ];

    return (
        <section id="certifications" className="certifications">
            <h2 className="heading">Professional <span>Certifications</span></h2>
            <p className="certifications-description">
                Certifications and credentials showcasing my commitment to continuous learning
            </p>

            <div className="certifications-grid">
                {certifications.map((cert, index) => (
                    <motion.div
                        className="certification-card"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="cert-icon">
                            <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
                        </div>

                        <div className="cert-content">
                            <h3>{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-description">{cert.description}</p>
                            <p className="cert-date">{cert.date}</p>

                            <a
                                href={cert.credential}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-link"
                            >
                                <FaExternalLinkAlt /> View Credential
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
