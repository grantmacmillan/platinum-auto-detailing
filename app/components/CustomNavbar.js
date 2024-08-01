"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../public/images/clear-logo.png';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeNavbar = () => setExpanded(false);

    return (
        <>
            <Navbar expand="lg" className={`navbar-container ${scrolled ? 'scrolled' : ''} ${expanded ? 'navbar-expanded' : ''}`} expanded={expanded} onToggle={() => setExpanded(!expanded)}>
                <Container className='mt-0 mb-0'>
                    <Navbar.Brand as={Link} href="/" passHref onClick={() => setExpanded(false)}>
                        <Image src={Logo} alt="Platinum Auto Detailing Logo" width={150} layout="intrinsic" />
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



                            <Nav.Link as={Link} href="/our-services" passHref>
                                <span className={`nav-link ${pathname === '/our-services' ? 'active' : ''}`} onClick={() => setExpanded(false)}>Services</span>
                            </Nav.Link>
                            <Nav.Link as={Link} href="/about-us" passHref>
                                <span className={`nav-link ${pathname === '/about-us' ? 'active' : ''}`} onClick={() => setExpanded(false)}>About Us</span>
                            </Nav.Link>
                            <Nav.Link as={Link} href="/gallery" passHref>
                                <span className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`} onClick={() => setExpanded(false)}>Gallery</span>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Link href="/contact" passHref >
                                <span className="cta-button">

                                    Schedule Cleaning
                                </span>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {expanded && <div className="nav-overlay" onClick={closeNavbar}></div>}
        </>
    );
};

export default CustomNavbar;
