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
                        <Col md={4} sm={12}>
                            <Navbar.Brand as={Link} href="/" passHref>
                                <div className="logo-container">
                                    <Image src={Logo} alt="BBQ Rescue Logo" width={150} height={50} layout="intrinsic" />
                                </div>
                            </Navbar.Brand>
                            <p className="col-md-10 mt-3">
                                Professional BBQ Cleaning
                            </p>
                        </Col>
                        <Col md={4} sm={12}>
                            <h4>Helpful Links</h4>
                            <Row className="">
                                <Col md={6} sm={12} >
                                    <p><Link className='contact-link' href="/bbq-assembly">BBQ Assembly</Link></p>
                                    <p><Link className='contact-link' href="/bbq-cleaning">BBQ Cleaning</Link></p>
                                    <p><Link className='contact-link' href="/oven-cleaning">Oven Cleaning</Link></p>
                                    <p><Link className='contact-link' href="/gas-line-installation">Gas Line Installation</Link></p>
                                    <p><Link className='contact-link' href="/contact">Contact Us</Link></p>
                                </Col>
                                <Col md={6} sm={12}>
                                    <p><Link className='contact-link' href="/about-us">About Us</Link></p>
                                    <p><Link className='contact-link' href="/gallery">Gallery</Link></p>
                                    <p><Link className='contact-link' href="/faq">FAQ</Link></p>
                                    <p><Link className='contact-link' href="/blog">BBQ Tips</Link></p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3} sm={12}>
                            <h4>Contact Information</h4>
                            <p><Link className='contact-link' href="mailto:s@gma.com" target='_blank'>Email: Clean@bbqrescue.ca</Link></p>
                            <p><Link className='contact-link' href="tel:44544" target='_blank'>Phone: (647) 527-6899</Link></p>
                            <p><Link className='contact-link' href="http://maps.google.com/?q=Stoufville, ON" target='_blank'>Location: Stouffville, Ontario</Link></p>
                            <h4 className='footer-heading'>Our Socials</h4>
                            <div className="d-flex justify-content-start align-items-center mt-2">
                                <a href="https://www.instagram.com/bbq.rescue/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={30} className="icon-style-light" />
                                </a>
                                <a href="https://www.twitter.com/bbq_rescue" className="mx-3" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                    <FaXTwitter size={30} className="icon-style-light" />
                                </a>
                                <a href="https://www.facebook.com/109166991771878" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={30} className="icon-style-light" />
                                </a>
                                <a href="https://www.linkedin.com/company/bbq-rescue-inc/" className="mx-3" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={30} className="icon-style-light" />
                                </a>
                                <a href="https://www.tiktok.com/@bbq_rescue?is_from_webapp=1&sender_device=pc" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok size={30} className="icon-style-light" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-3'>
                        <Col md={3} className='justiy-content-center footer-heading'>
                            <h4>Our Service Areas</h4>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col md={8}>
                            <p>The GTA, Ottawa, Niagara Region, Barrie Region, York, Halton, Durham, Peel Region, & Surrounding Areas</p>
                        </Col>
                    </Row>
                </Container>
                <div className='bottom-strip'>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col md={12}>
                                <p className='text-center'>
                                    Copyright © 2024 BBQ Rescue - All Rights Reserved.

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