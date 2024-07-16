"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaChevronDown, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../public/images/logo.png';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const servicesRef = useRef(null);
    const aboutRef = useRef(null);
    const pathname = usePathname();

    const servicesPaths = ['/bbq-assembly', '/bbq-cleaning', '/oven-cleaning', '/gas-line-installation'];
    const aboutPaths = ['/about-us', '/faq'];

    const callNumber = () => {
        window.location.href = 'tel:+1234567890';
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        const handleClickOutside = (event) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setServicesOpen(false);
            }
            if (aboutRef.current && !aboutRef.current.contains(event.target)) {
                setAboutOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggle = (dropdown) => {
        if (dropdown === 'services') {
            setServicesOpen((prev) => !prev);
        } else if (dropdown === 'about') {
            setAboutOpen((prev) => !prev);
        }
        console.log(`Toggled ${dropdown} dropdown: ${dropdown === 'services' ? !servicesOpen : !aboutOpen}`);
    };

    const closeNavbar = () => setExpanded(false);

    return (
        <>
            <Navbar expand="lg" className={`navbar-container ${scrolled ? 'scrolled' : ''} ${expanded ? 'navbar-expanded' : ''}`} expanded={expanded} onToggle={() => setExpanded(!expanded)}>
                <Container>
                    <Navbar.Brand as={Link} href="/" passHref>
                        <Image src={Logo} alt="BBQ Rescue Logo" width={150} layout="intrinsic" />
                    </Navbar.Brand>
                    <motion.button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        aria-controls="navbarNav"
                        aria-expanded={expanded}
                        aria-label="Toggle navigation"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ rotate: expanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {expanded ? <FaTimes size={30} className='navbar-icons' /> : <FaBars size={30} className='navbar-icons' />}
                    </motion.button>
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="me-auto justify-content-center flex-grow-1 nav-custom">

                            <NavDropdown
                                title={
                                    <div className={`d-flex align-items-center ${pathname.includes('/bbq-assembly') || pathname.includes('/bbq-cleaning') || pathname.includes('/oven-cleaning') || pathname.includes('/gas-line-installation') ? 'highlight-nav' : ''}`}>
                                        <span>Services</span>
                                        <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-1">
                                            <FaChevronDown />
                                        </motion.div>
                                    </div>
                                }
                                id="services-dropdown"
                                className="align-items-center"
                                show={servicesOpen}
                                onClick={() => handleToggle('services')}
                                ref={servicesRef}
                            >
                                <motion.div
                                    initial={{ height: 0, overflow: 'hidden' }}
                                    animate={{ height: servicesOpen ? 'auto' : 0 }}
                                    exit={{ height: 0, overflow: 'hidden' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <NavDropdown.Item as={Link} href="/bbq-assembly" passHref>
                                        <span className={`nav-link ${pathname === '/bbq-assembly' ? 'active' : ''}`} onClick={() => setExpanded(false)}>BBQ Assembly</span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} href="/bbq-cleaning" passHref>
                                        <span className={`nav-link ${pathname === '/bbq-cleaning' ? 'active' : ''}`} onClick={() => setExpanded(false)}>BBQ Cleaning</span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} href="/oven-cleaning" passHref>
                                        <span className={`nav-link ${pathname === '/oven-cleaning' ? 'active' : ''}`} onClick={() => setExpanded(false)}>Oven Cleaning</span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} href="/gas-line-installation" passHref>
                                        <span className={`nav-link ${pathname === '/gas-line-installation' ? 'active' : ''}`} onClick={() => setExpanded(false)}>Gas Line Installation</span>
                                    </NavDropdown.Item>
                                </motion.div>
                            </NavDropdown>
                            <NavDropdown
                                title={
                                    <div className={`d-flex align-items-center ${pathname.includes('/about-us') || pathname.includes('/faq') ? 'highlight-nav' : ''}`}>
                                        <span>About</span>
                                        <motion.div animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-1">
                                            <FaChevronDown />
                                        </motion.div>
                                    </div>
                                }
                                id="about-dropdown"
                                className="align-items-center"
                                show={aboutOpen}
                                onClick={() => handleToggle('about')}
                                ref={aboutRef}
                            >
                                <motion.div
                                    initial={{ height: 0, overflow: 'hidden' }}
                                    animate={{ height: aboutOpen ? 'auto' : 0 }}
                                    exit={{ height: 0, overflow: 'hidden' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <NavDropdown.Item as={Link} href="/about-us" passHref>
                                        <span className={`nav-link ${pathname === '/about-us' ? 'active' : ''}`} onClick={() => setExpanded(false)}>About Us</span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} href="/gallery" passHref>
                                        <span className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`} onClick={() => setExpanded(false)}>Gallery</span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} href="/faq" passHref>
                                        <span className={`nav-link ${pathname === '/faq' ? 'active' : ''}`} onClick={() => setExpanded(false)}>FAQ</span>
                                    </NavDropdown.Item>
                                </motion.div>
                            </NavDropdown>
                            <Nav.Link as={Link} href="/blog" passHref>
                                <span className={`nav-link ${pathname === '/blog' ? 'active' : ''}`} onClick={() => setExpanded(false)}>BBQ Tips</span>
                            </Nav.Link>
                            <Nav.Link as={Link} href="/contact" passHref>
                                <span className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={() => setExpanded(false)}>Contact</span>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <a href="tel:+16475276899" className="cta-button">
                                <FaPhoneAlt style={{ marginRight: '8px' }} />
                                (647) 527-6899
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {expanded && <div className="nav-overlay" onClick={closeNavbar}></div>}
        </>
    );
};

export default CustomNavbar;
