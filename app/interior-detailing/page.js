import Link from "next/link";
import styles from "./interior.module.css";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaMedal, FaCheck, FaArrowRight } from 'react-icons/fa';

//comment
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
    title: 'Interior Detailing | Platinum Auto Detailing',
    description: 'Experience top-quality interior detailing services with Platinum Auto Detailing. We specialize in deep cleaning, stain removal, and interior protection to keep your vehicle’s cabin fresh, clean, and looking brand new.',
    keywords: 'interior car detailing, Platinum Auto Detailing interior services, deep cleaning, stain removal, upholstery cleaning, leather conditioning, interior vacuuming, odor removal, dashboard cleaning, mobile interior detailing',
    metadataBase: new URL(BASE_URL),
    openGraph: {
        title: 'Interior Detailing | Platinum Auto Detailing',
        description: 'Experience top-quality interior detailing services with Platinum Auto Detailing. We specialize in deep cleaning, stain removal, and interior protection to keep your vehicle’s cabin fresh, clean, and looking brand new.',
        type: 'website',
        url: `${BASE_URL}/interior-detailing`,
        site_name: 'Platinum Auto Detailing'
    },
};

export default function Interior() {

    const interiorPlans = [
        {
            id: '1',
            title: 'Silver Package',
            image: '/images/wash-car.jpg',
            price: '$80',
            list: ['Full vacuuming throughout the entire vehicle',
                'Wipe down on front dash and console, doors, and seats']
        },
        {
            id: '2',
            title: 'Gold Package',
            image: '/images/wash-car.jpg',
            price: '$150',
            list: ['Full vacuuming throughout the entire vehicle',
                'Removable mat and removable carpet shampoo',
                'Driver side pedal cleanse',
                'Wipe down and cleanse on surfaces such as seats, windows, doors, door jambs, trunk, trunk jambs, front dash and console']
        },
        {
            id: '3',
            title: 'Platinum Package',
            image: '/images/wash-car.jpg',
            price: '$200',
            list: ['Full vacuuming throughout the entire vehicle',
                'Removable mat and removable carpet shampoo',
                'Driver side pedal cleanse',
                'Full shampoo and deep clean on all upholstery such as front dash and console, seats, doors, door jambs, trunk, trunk jambs, and windows',
                'Steam cleaning to remove any odor and stains on all carpets, seats, and interior surfaces',
                'Interior protectant applied on all surfaces',
                'Leather conditioner applied to all leather seats and surfaces ']
        },
    ]

    const exteriorPlans = [
        {
            id: '1',
            title: 'Silver Package',
            image: '/images/wash-car.jpg',
            price: '$40',
            list: ['Full exterior hand wash + dry',
                'Full tire and rim cleaning + tire dressing']
        },
        {
            id: '2',
            title: 'Gold Package',
            image: '/images/wash-car.jpg',
            price: 'Pricing may vary',
            list: ['Full exterior hand wash + dry',
                'Full tire and rim cleaning + tire dressing',
                'Clay bar and premium wax on your cars paint',]
        },
    ]

    const waxPlans = [
        {
            id: '1',
            title: 'Wax Package',
            image: '/images/wash-car.jpg',
            price: '$40',
            list: ['Full exterior hand wash + dry',
                'Full tire and rim cleaning + tire dressing']
        },
    ]

    const cardsData = [
        {
            id: 1,
            title: 'Interior Car Detailing',
            description: 'Meticulous interior car detailing service to keep your car\'s interior spotless and fresh.',
            imgSrc: '/images/client-pics/inside3.jpg', // Replace with your image URL
            link: '/our-services#interior'
        },
        {
            id: 2,
            title: 'Exterior Car Detailing',
            description: 'Thorough exterior car detailing to restore and protect your car\'s paint and finish.',
            imgSrc: '/images/client-pics/cleaning1.jpg', // Replace with your image URL
            link: '/our-services#exterior'
        },

    ];

    return (
        <>

            <div className={styles.main}>
                <Container >
                    <Row>
                        <Col md={6} className={styles.overlay}>
                            <h1 className={styles.heading}>Our <strong>Premium</strong> Interior Detailing Services</h1>

                            <h2 className={styles.subHeading}>Experience Excellence and Convenience with Platinum Auto Detailing</h2>
                            <div className={styles.buttons}>
                                <Link href="/contact" passHref >
                                    <span className="cta-button">

                                        Book Now
                                    </span>
                                </Link>

                            </div>
                        </Col>
                    </Row>
                </Container>
                <img src="/svgs/triangle.svg" alt="Divider" className={styles.svgDivider} />
            </div>

            <section id="interior" className={styles.InteriorSection}>
                <Container className="pt-5">
                    <Row className="justify-content-center">
                        <Col md={4} >
                            <h2 className={styles.sectionHeading}><strong>Interior</strong> Detailing</h2>

                            <p className={styles.sectioinSubheading}><strong className={styles.convenience}>Revitalize</strong> Your Car's Interior</p>
                            <br />
                            <p>At Platinum Auto Detailing, we bring the ultimate in interior car care directly to you. Our meticulous interior detailing services are designed to ensure your vehicle’s interior remains spotless, fresh, and inviting. From basic cleaning to comprehensive deep cleaning, we offer packages that cater to your specific needs and ensure every corner of your car's interior shines.

                            </p>

                        </Col>
                        <Col md={6}>
                            <Image src='/images/client-pics/inside5.jpg' className={`my-3 ${styles.sectionImage}`}></Image>
                        </Col>
                    </Row>
                </Container>
                <div className="container pricing-container my-5 text-center">

                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="pricing-card text-start d-flex flex-column justify-content-between delay-1">
                                <div className="pricing-card-body">
                                    <p className="pricing-card-title-small silver-text">$90</p>
                                    <p className="pricing-card-title silver-style">SILVER PACKAGE</p>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li><FaCheck /> Full vacuuming throughout the entire vehicle.</li>
                                        <li><FaCheck /> Wipe down on front dash and console, doors, and seats.</li>
                                    </ul>
                                </div>
                                <div className="pricing-card-footer">
                                    <div className="footer-text text-start">
                                        Our Silver Package offers essential cleaning services to keep your vehicle fresh and tidy.
                                    </div>
                                    <Link href="/contact" passHref className='no-underline'>
                                        <div className="cssbuttonsIoButton mt-2">
                                            Book an Appointment
                                            <div className="arrow-icon">
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="pricing-card text-start d-flex flex-column justify-content-between delay-2">
                                <div className="pricing-card-body">
                                    <p className="pricing-card-title-small gold-text">Starting at $100</p>
                                    <h2 className="pricing-card-title gold-style">GOLD PACKAGE</h2>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li><FaCheck /> Includes all items from the Silver Package.</li>
                                        <li><FaCheck /> Removable mat and removable carpet shampoo.</li>
                                        <li><FaCheck /> Driver side pedal cleanse.</li>
                                        <li><FaCheck /> Wipe down and cleanse on surfaces such as seats, windows, doors, door jambs, trunk, trunk jambs, front dash and console.</li>
                                    </ul>
                                </div>
                                <div className="pricing-card-footer">
                                    <div className="footer-text text-start">
                                        The Gold Package offers a more thorough clean, perfect for maintaining your vehicle’s appearance and cleanliness.
                                    </div>
                                    <Link href="/contact" passHref className='no-underline'>
                                        <div className="cssbuttonsIoButton gold-button mt-2">
                                            Book an Appointment
                                            <div className="arrow-icon">
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="pricing-card text-start d-flex flex-column justify-content-between delay-3">
                                <div className="pricing-card-body">
                                    <p className="pricing-card-title-small">Starting at $175</p>
                                    <h2 className="pricing-card-title platinum-style">PLATINUM PACKAGE</h2>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li><FaCheck /> Includes all items from the Gold Package.</li>
                                        <li><FaCheck /> Full shampoo and deep clean on all interior floor carpets.</li>
                                        <li><FaCheck /> Full shampoo and deep clean on all upholstery such as front dash and console, seats, doors, door jambs, trunk, trunk jambs, and windows.</li>
                                        <li><FaCheck /> Steam cleaning to remove any odor and stains on all carpets, seats, and interior surfaces.</li>
                                        <li><FaCheck /> Interior protectant applied on all surfaces.</li>
                                        <li><FaCheck /> Leather conditioner applied to all leather seats and surfaces.</li>
                                    </ul>
                                </div>
                                <div className="pricing-card-footer">
                                    <div className="footer-text text-start">
                                        The Platinum Package offers the ultimate in car care, providing a comprehensive deep clean for a pristine vehicle.
                                    </div>
                                    <Link href="/contact" passHref className='no-underline'>
                                        <div className="cssbuttonsIoButton mt-2">
                                            Book an Appointment
                                            <div className="arrow-icon">
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>







        </>
    );
}