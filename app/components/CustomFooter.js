"use client";

import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { FaCheck, FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'
import { Container, Row, Col, Navbar, } from 'react-bootstrap';
import Logo from '../../public/images/clear-logo.png';

const CustomFooter = () => {
    return (
        <>
            <div className="custom-shape-divider-bottom-1720163553">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" className="shape-fill"></path>
                </svg>
            </div>

            <div className='footer'>
                <Container className='py-4'>
                    <Row className='justify-content-center'>
                        <Col md={2} sm={12}>
                            <Navbar.Brand as={Link} href="/" passHref>
                                <div className="logo-container">
                                    <Image src={Logo} alt="Platinum Car Detailing Logo" width={175} height={50} layout="intrinsic" />
                                </div>
                            </Navbar.Brand>
                            <p className="col-md-12 mt-3">
                                Premium Car Detailing
                            </p>
                        </Col>
                        <Col md={2} sm={12}>
                            <h4>Helpful Links</h4>
                            <p><Link className='contact-link' href="/our-services">Services</Link></p>
                            <p><Link className='contact-link' href="/our-services/#interior">Interior Detailing</Link></p>
                            <p><Link className='contact-link' href="/our-servies/#exterior">Exterior Detailing</Link></p>
                            <p><Link className='contact-link' href="/about-us">About Us</Link></p>
                            <p><Link className='contact-link' href="/gallery">Gallery</Link></p>
                        </Col>
                        <Col md={3} sm={12}>
                            <h4>Contact Information</h4>
                            <p><Link className='contact-link' href="mailto:autodetailing.platinum@gmail.com" target='_blank'>Email: Autodetailing.platinum@gmail.com</Link></p>
                            <p><Link className='contact-link' href="tel:44544" target='_blank'>Phone: +1 (647) 482-1898</Link></p>
                            <h4 className='footer-heading'>Follow Us</h4>
                            <div className="d-flex justify-content-start align-items-center mt-2">
                                <a href="https://instagram.com/platinumamd" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={30} className="icon-style-light" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='bottom-strip'>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col md={12}>
                                <p className='text-center'>
                                    Copyright © 2024 Platinum Auto Detailing - All Rights Reserved.
                                </p>
                            </Col>

                        </Row>
                    </Container>
                </div >

            </div >
        </>
    );
};

export default CustomFooter;