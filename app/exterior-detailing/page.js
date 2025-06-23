import Link from "next/link";
import styles from "./exterior.module.css";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaMedal, FaCheck, FaArrowRight } from 'react-icons/fa';

//comment
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
    title: 'Exterior Detailing | Platinum Auto Detailing',
    description: 'Discover our professional exterior detailing services at Platinum Auto Detailing. We specialize in restoring and protecting your vehicle’s exterior with expert techniques, premium products, and attention to detail.',
    keywords: 'exterior car detailing, Platinum Auto Detailing exterior services, paint protection, clay bar treatment, premium wax, car wash, exterior vehicle cleaning, mobile detailing, car polish, paint enhancement',

    metadataBase: new URL(BASE_URL),
    openGraph: {
        title: 'Exterior Detailing | Platinum Auto Detailing',
        description: 'Discover our professional exterior detailing services at Platinum Auto Detailing. We specialize in restoring and protecting your vehicle’s exterior with expert techniques, premium products, and attention to detail.',
        type: 'website',
        url: `${BASE_URL}/exterior-detailing`,
        site_name: 'Platinum Auto Detailing'
    },
};

export default function Exterior() {

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
                            <h1 className={styles.heading}>Our <strong>Premium</strong> Exterior Detailing Services</h1>

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

            <section id="exterior" >
                <Container className="pt-5">
                    <Row className="justify-content-center">
                        <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
                            <Image src='/images/client-pics/exterior1.jpg' className={`my-3 ${styles.sectionImage}`} />
                        </Col>
                        <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
                            <h2 className={styles.sectionHeading}><strong>Exterior</strong> Detailing</h2>

                            <p className={styles.sectioinSubheading}><strong className={styles.convenience}>Transform</strong> Your Car's Exterior</p>
                            <br />
                            <p>Our exterior detailing services are crafted to restore and protect your vehicle’s exterior to its finest condition. At Platinum Auto Detailing, we use high-quality products and expert techniques to deliver a thorough clean and polish that not only enhances your car’s appearance but also protects its paint and finish. Whether it's a basic wash or a premium wax, we ensure your car looks its best.</p>

                            <p>Our premium wax application goes beyond its stunning aesthetic results. It forms a barrier that safeguards your car's paint from UV rays, harsh weather, and environmental pollutants, ensuring your vehicle remains in pristine condition. By preserving your vehicle's exterior, you are extending its lifespan and this service is a safeguard against potential deterioration and costly repairs.</p>

                            <p>The outcome is not merely a car that looks exquisite; it's a testament to the care you invest in maintaining the elegance, longevity, and value of your vehicle.</p>
                        </Col>
                    </Row>
                </Container>
                <div className="container pricing-container my-5 text-center">

                    <div className="row justify-content-center">

                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="pricing-card text-start d-flex flex-column justify-content-between delay-2">
                                <div className="pricing-card-body">
                                    <p className="pricing-card-title-small gold-text">$100</p>
                                    <h2 className="pricing-card-title gold-style">GOLD PACKAGE</h2>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li><FaCheck /> Full exterior hand wash & dry.</li>
                                        <li><FaCheck /> Full tire and rim cleaning & tire dressing.</li>

                                    </ul>
                                </div>
                                <div className="pricing-card-footer">
                                    <div className="footer-text text-start">
                                        Our Gold Package provides essential exterior cleaning services to keep your vehicle looking its best.
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
                                    <p className="pricing-card-title-small">Prices may vary depending on vehicle size.</p>
                                    <h2 className="pricing-card-title platinum-style">PLATINUM PACKAGE</h2>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li><FaCheck /> Includes all items from the Gold Package.</li>
                                        <li><FaCheck /> Clay bar and premium wax on your cars paint.</li>

                                    </ul>
                                </div>
                                <div className="pricing-card-footer">
                                    <div className="footer-text text-start">
                                        The Platinum Package ensures your vehicle receives a premium treatment, including a clay bar and wax application for a superior finish.
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