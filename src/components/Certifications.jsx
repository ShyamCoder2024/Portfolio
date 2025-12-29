import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
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
            logo: oracleLogo
        },
        {
            title: 'Microsoft Generative AI',
            issuer: 'Microsoft via upGrad',
            date: '2024',
            credential: 'https://certificates.upgrad.com/5ab2b664-9018-445a-88cd-b96727ab02ae-Gen-AI-SsdN11uHwjAsprKn.pdf',
            logo: microsoftLogo
        },
        {
            title: 'JavaScript (Intermediate)',
            issuer: 'HackerRank',
            date: '2024',
            credential: 'https://www.hackerrank.com/certificates/3883390ffa04',
            logo: hackerrankLogo
        },
        {
            title: 'Problem Solving (Intermediate)',
            issuer: 'HackerRank',
            date: '2024',
            credential: 'https://www.hackerrank.com/certificates/99914d1405de',
            logo: hackerrankLogo
        }
    ];

    return (
        <section id="certifications" className="certifications">
            <motion.div
                className="section-label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Certifications
            </motion.div>

            <motion.h2
                className="certifications-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                Professional <span>Credentials</span>
            </motion.h2>

            <div className="certifications-grid">
                {certifications.map((cert, index) => (
                    <motion.div
                        className="cert-card"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="cert-header">
                            <div className="cert-logo-box">
                                <img src={cert.logo} alt={cert.issuer} />
                            </div>
                            <span className="cert-year">{cert.date}</span>
                        </div>

                        <h3 className="cert-title">{cert.title}</h3>
                        <p className="cert-issuer">{cert.issuer}</p>

                        <a
                            href={cert.credential}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary cert-btn"
                        >
                            View Credential
                            <span className="arrow-icon"><FaArrowRight /></span>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
