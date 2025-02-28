import Link from "next/link";
import styles from "./coating.module.css";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaMedal, FaCheck, FaArrowRight } from 'react-icons/fa';

//comment
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
    title: 'Ceramic Coating | Platinum Auto Detailing',
    description: 'Protect your vehicle’s paint with Platinum Auto Detailing’s professional ceramic coating services. Our advanced coatings provide long-lasting protection, enhanced gloss, and superior resistance to dirt, UV rays, and environmental damage.',
    keywords: 'ceramic coating, Platinum Auto Detailing ceramic services, paint protection, hydrophobic coating, car ceramic coating, vehicle paint protection, UV protection, exterior car care, premium detailing, long-lasting shine',
    metadataBase: new URL(BASE_URL),
    openGraph: {
        title: 'Ceramic Coating | Platinum Auto Detailing',
        description: 'Protect your vehicle’s paint with Platinum Auto Detailing’s professional ceramic coating services. Our advanced coatings provide long-lasting protection, enhanced gloss, and superior resistance to dirt, UV rays, and environmental damage.',
        type: 'website',
        url: `${BASE_URL}/ceramic-coating`,
        site_name: 'Platinum Auto Detailing'
    },
};

export default function Coating() {

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
                            <h1 className={styles.heading}>Our <strong>Ceramic Coating</strong> Service</h1>

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
                            <Image src='/images/client-pics/ceramic2.jpg' className={`my-3 ${styles.sectionImage}`} />
                        </Col>
                        <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
                            <h2 className={styles.sectionHeading}><strong>Ceramic</strong> Coating</h2>

                            <p className={styles.sectioinSubheading}><strong className={styles.convenience}>Protect</strong> Your Car with Advanced Coating</p>
                            <p>Our ceramic coating service is designed to provide long-term protection and unmatched shine for your vehicle’s exterior. At Platinum Auto Detailing, we use industry-leading ceramic coatings that bond with your car’s paint to create a durable, hydrophobic layer that repels water, dirt, and contaminants. This advanced protection keeps your vehicle cleaner for longer and enhances its glossy finish.</p>

                            <p>Ceramic coatings do more than just make your car look incredible—they act as a shield against UV rays, oxidation, bird droppings, road salt, and other environmental hazards that can damage your paint over time. By adding this protective layer, you not only preserve your vehicle's appearance but also maintain its resale value.</p>

                            <p>Investing in ceramic coating is about more than just aesthetics—it’s a smart way to safeguard your vehicle’s exterior for years to come, ensuring your car stays looking showroom-ready with minimal maintenance.</p>
                        </Col>
                    </Row>
                </Container>
                <div className="container pricing-container my-5 text-center">

                    <div className="row justify-content-center">


                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="pricing-card text-start d-flex flex-column justify-content-between delay-3">
                                <div className="pricing-card-body">
                                    <p className="pricing-card-title-small">Prices may vary depending on vehicle size.</p>
                                    <h2 className="pricing-card-title platinum-style">PLATINUM PACKAGE</h2>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li><FaCheck /> Application of professional-grade ceramic coating.</li>
                                        <li><FaCheck /> Long-lasting protection against UV rays, dirt, and pollutants.</li>
                                        <li><FaCheck /> Enhanced gloss and hydrophobic finish.</li>

                                    </ul>
                                </div>
                                <div className="pricing-card-footer">
                                    <div className="footer-text text-start">
                                        Our Ceramic Coating Package offers advanced protection and a stunning gloss finish, ensuring your vehicle stays cleaner for longer while maintaining its showroom shine.
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