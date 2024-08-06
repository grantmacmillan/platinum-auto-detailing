import Link from "next/link";
import styles from "./services.module.css";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaMedal, FaCheck, FaArrowRight } from 'react-icons/fa';

//comment
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
    title: 'Our Services | Platinum Auto Detailing',
    description: 'Explore the premium auto detailing services offered by Platinum Auto Detailing. From interior to exterior detailing, we provide top-notch services to keep your car in pristine condition.',
    keywords: 'Platinum Auto Detailing services, car detailing, interior detailing, exterior detailing, mobile car cleaning, auto detailing packages, vehicle maintenance',
    metadataBase: new URL(BASE_URL),
    openGraph: {
        title: 'Our Services | Platinum Auto Detailing',
        description: 'Explore the premium auto detailing services offered by Platinum Auto Detailing. From interior to exterior detailing, we provide top-notch services to keep your car in pristine condition.',
        type: 'website',
        url: `${BASE_URL}/our-services`,
        site_name: 'Platinum Auto Detailing'
    },
};

export default function Services() {

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
                            <h1 className={styles.heading}>Our <strong>Premium</strong> Auto Detailing Services</h1>

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

            <section className={styles.servicesSection} >
                <Container className="py-5 mt-0">
                    <Row className="justify-content-center">
                        {cardsData.map(card => {
                            const IconComponent = card.icon;
                            return (
                                <Col key={card.id} lg={6} md={6} sm={12} className="mb-4">
                                    <Link href={card.link} passHref style={{ textDecoration: 'none' }}>
                                        <div className={styles.hoverCardLinkWrapper}>
                                            <div className={styles.hoverCard} style={{ backgroundImage: `url(${card.imgSrc})` }}>
                                                <div className={styles.hoverCardContent}>
                                                    <h2 className={styles.hoverCardTitle}>{card.title}</h2>
                                                    <p className={styles.hoverCardDescription}>{card.description}</p>
                                                    <p className={styles.hoverCardLink}>Learn More</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </section>

            <div className="custom-shape-divider-top-1721843337">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
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
                                    <p className="pricing-card-title-small silver-text">$80</p>
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
                                    <p className="pricing-card-title-small gold-text">Starting at $150</p>
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
                                    <p className="pricing-card-title-small">Starting at $200</p>
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
                                    <p className="pricing-card-title-small gold-text">$50</p>
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