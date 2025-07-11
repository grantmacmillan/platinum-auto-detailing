'use client';

import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaCheck, FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin, FaTiktok, FaClock } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'
import { useRouter } from 'next/navigation';

export default function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [reason, setReason] = useState([]);
    const [message, setMessage] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const router = useRouter(); // Initialize the router here


    const handleReasonChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setReason([...reason, value]);
        } else {
            setReason(reason.filter((item) => item !== value));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('reason', reason.join(', '));

        formData.append('message', message);


        console.log('Form data being sent:', {
            firstName,
            lastName,
            email,
            phone,
            address,
            reason,
            message,
        });

        try {
            const response = await fetch('/api/upimage', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            const result = await response.json();
            console.log('Response from server:', result);

            if (response.ok) {
                setStatus('Submission successful');
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setAddress('');
                setReason('Interior Cleaning');
                setMessage('');
                setSubmitted(true);
                router.push('/thank-you');
            } else {
                setStatus(result.error || 'Error submitting form');
                setSubmitted(false);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('Error submitting form');
            setSubmitted(false);
        }
    };

    return (
        <div>

            <Row className="form-container justify-content-center">
                <Col md={4} className='mb-5'>
                    <div className="col-md-10 contact-info">
                        <h1>Have Questions?<br />Get In Touch</h1>
                        <p className='contact-info'>        Schedule an appointment with Platinum Auto Detailing, a mobile service that comes directly to your home! Get a free quote and enjoy professional detailing without leaving your driveway.

                        </p>
                        <h2 className='contact-heading'>Contact Information</h2>
                        <p className='home-contact-bullets'><FaPhone className='contact-icons' /> <a className='contact-link' href="tel:+16475293354"> +1 (647) 529-3354</a></p>
                        <p className='home-contact-bullets'><FaEnvelope className='contact-icons' /> <a className='contact-link' href="mailto:Autodetailing.platinum@gmail.com"> Autodetailing.platinum@gmail.com</a></p>
                        <p className='home-contact-bullets'><FaClock className='contact-icons' /> Mon-Sun: 8 AM - 7 PM</p>

                        <div className="social-icons">
                            <h3 className='contact-subheading'>Follow Us</h3>

                            <a href="https://www.instagram.com/platinumamd/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} className="icon-style-light" />
                            </a>

                        </div>
                    </div>
                </Col>
                <Col md={4} className='mb-4'>
                    <h1 className='contact-heading'>Schedule Your Mobile Detailing Service Today!</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="row ">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName" className="form-label">*First Name:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-control form-input"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control form-input"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">*Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control form-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="phone" className="form-label">Phone Number:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="form-control form-input"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">*Address:</label>
                            <input
                                type="text"
                                id="address"
                                className="form-control form-input"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">*Reason for Contacting (Select all that apply):</label>
                            <div id="reason">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="interiorCleaningSilverPackage"
                                        value="Interior Cleaning - Silver Package"
                                        onChange={handleReasonChange}
                                    />
                                    <label className="form-check-label" htmlFor="interiorCleaningSilverPackage">
                                        Interior Cleaning - Silver Package ($80)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="interiorCleaningGoldPackage"
                                        value="Interior Cleaning - Gold Package"
                                        onChange={handleReasonChange}
                                    />
                                    <label className="form-check-label" htmlFor="interiorCleaningGoldPackage">
                                        Interior Cleaning - Gold Package ($130)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="interiorCleaningPlatinumPackage"
                                        value="Interior Cleaning - Platinum Package"
                                        onChange={handleReasonChange}
                                    />
                                    <label className="form-check-label" htmlFor="interiorCleaningPlatinumPackage">
                                        Interior Cleaning - Platinum Package ($200)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="ExteriorDetailingGoldPackage"
                                        value="Exterior Detailing - Gold Package"
                                        onChange={handleReasonChange}
                                    />
                                    <label className="form-check-label" htmlFor="ExteriorDetailingGoldPackage">
                                        Exterior Cleaning - Gold Package ($100)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="ExteriorDetailingPlatinumPackage"
                                        value="Exterior Detailing - Platinum Package"
                                        onChange={handleReasonChange}
                                    />
                                    <label className="form-check-label" htmlFor="ExteriorDetailingPlatinumPackage">
                                        Exterior Detailing - Platinum Package
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="CeramicCoating"
                                        value="Ceramic Coating"
                                        onChange={handleReasonChange}
                                    />
                                    <label className="form-check-label" htmlFor="ExteriorDetailingPlatinumPackage">
                                        Ceramic Coating
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="other"
                                        value="Other"
                                        onChange={handleReasonChange}
                                    />
                                    <label className="form-check-label" htmlFor="other">
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">What Model is your Vehicle? What City are you Located in? Do you have any questions or is there anything you would like us to know?:</label>
                            <textarea
                                id="message"
                                className="form-control form-input"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>

                        <div className='mb-3 justify-content-center'>
                            <button
                                type="submit"
                                className={`btn ${submitted ? 'submit-btn-success' : 'submit-btn-primary'} submit-btn`}
                            >
                                {submitted ? (
                                    <>
                                        <FaCheck /> Submitted
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane /> Submit
                                    </>
                                )}
                            </button>
                        </div>
                        {status && <p className={status.includes('Error') ? 'error-message' : 'status-message'}>{status}</p>}
                    </form>
                </Col>

            </Row>
        </div >
    );
}
