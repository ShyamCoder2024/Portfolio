import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const serviceId = 'YOUR_SERVICE_ID';
            const templateId = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'shyammangaonkar330@gmail.com'
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            console.error('EmailJS Error:', err);
            setError('Failed to send message. Please try again or email me directly.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <motion.div
                className="section-label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Contact
            </motion.div>

            <motion.h2
                className="contact-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                Let's Work <span>Together</span>
            </motion.h2>

            <div className="contact-layout">
                {/* Contact Info */}
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="contact-intro">
                        Have a project in mind? Let's discuss how we can collaborate to bring your ideas to life.
                    </p>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="info-icon"><FaEnvelope /></div>
                            <div className="info-text">
                                <span className="info-label">Email</span>
                                <a href="mailto:shyammangaonkar330@gmail.com">shyammangaonkar330@gmail.com</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><FaPhoneAlt /></div>
                            <div className="info-text">
                                <span className="info-label">Phone</span>
                                <a href="tel:+918459311191">+91-8459311191</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><FaMapMarkerAlt /></div>
                            <div className="info-text">
                                <span className="info-label">Location</span>
                                <span>Pune, Maharashtra, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="social-row">
                        <a href="https://www.linkedin.com/in/shyam-mangaonkar-bb8b58229/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://github.com/ShyamCoder2024" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="contact-form-box"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {success && (
                        <div className="success-message">
                            ✓ Message sent successfully!
                        </div>
                    )}

                    {error && (
                        <div className="error-message">{error}</div>
                    )}

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name *"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email *"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Message *"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="btn-primary" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            {!loading && <span className="arrow-icon"><FaArrowRight /></span>}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
