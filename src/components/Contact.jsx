import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
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
            // EmailJS configuration - User needs to replace these with their own values
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
            <h2 className="heading">Let's Work <span>Together</span></h2>
            <p className="contact-subtitle">
                Have a project in mind? Let's discuss how we can collaborate to bring your ideas to life.
            </p>

            <div className="contact-wrapper">
                <div className="contact-cards">
                    <div className="contact-card">
                        <div className="card-icon">
                            <FaEnvelope />
                        </div>
                        <h3>Email Me</h3>
                        <a href="mailto:shyammangaonkar330@gmail.com">shyammangaonkar330@gmail.com</a>
                    </div>

                    <div className="contact-card">
                        <div className="card-icon">
                            <FaPhone />
                        </div>
                        <h3>Call Me</h3>
                        <a href="tel:+918459311191">+91-8459311191</a>
                    </div>

                    <div className="contact-card">
                        <div className="card-icon">
                            <FaMapMarkerAlt />
                        </div>
                        <h3>Location</h3>
                        <p>Pune, Maharashtra, India</p>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h3>Send Me a Message</h3>

                    {success && (
                        <div className="success-message">
                            ✓ Message sent successfully! I'll get back to you soon.
                        </div>
                    )}

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                rows="6"
                                name="message"
                                placeholder="Your Message *"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="social-connect">
                <h3>Connect With Me</h3>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/shyam-mangaonkar-bb8b58229/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/shyam" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
