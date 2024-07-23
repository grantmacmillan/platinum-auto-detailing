import Link from "next/link";
import styles from "./services.module.css";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
    title: 'Our Services | Platinum Auto Detailing',

};

export default function Services() {

    const interiorPlans = [
        {
            id: '1',
            title: 'Silver Package',
            image: '/images/wash-car.jpg',
            price: 'Price = $80',
            list: ['Full vacuuming throughout the entire vehicle',
                'Wipe down on front dash and console, doors, and seats']
        },
        {
            id: '2',
            title: 'Gold Package',
            image: '/images/wash-car.jpg',
            price: 'Price = $150',
            list: ['Full vacuuming throughout the entire vehicle',
                'Removable mat and removable carpet shampoo',
                'Driver side pedal cleanse',
                'Wipe down and cleanse on surfaces such as seats, windows, doors, door jambs, trunk, trunk jambs, front dash and console']
        },
        {
            id: '3',
            title: 'Platinum Package',
            image: '/images/wash-car.jpg',
            price: 'Price = $200',
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
            price: 'Price = $40',
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
            price: 'Price = $40',
            list: ['Full exterior hand wash + dry',
                'Full tire and rim cleaning + tire dressing']
        },
    ]

    const cardsData = [
        {
            id: 1,
            title: 'Interior Car Detailing',
            description: 'Meticulous interior car detailing service to keep your car\'s interior spotless and fresh.',
            imgSrc: '/images/client-pics/interior1.jpg', // Replace with your image URL
            link: '/our-services#interior'
        },
        {
            id: 2,
            title: 'Exterior Car Detailing',
            description: 'Thorough exterior car detailing to restore and protect your car\'s paint and finish.',
            imgSrc: '/images/client-pics/cleaning1.jpg', // Replace with your image URL
            link: '/our-services#exterior'
        },
        {
            id: 3,
            title: 'Clay Bar and Premium Wax',
            description: 'Advanced clay bar treatment and premium wax for a smooth and glossy car exterior.',
            imgSrc: '/images/client-pics/exterior1.jpg', // Replace with your image URL
            link: '/our-services#wax'
        },
    ];

    return (
        <>

            <div className={styles.main}>
                <Container >
                    <Row>
                        <Col md={6} className={styles.overlay}>
                            <h1 className={styles.heading}>Our <strong>Services</strong></h1>
                            <h2 className={styles.subHeading}>Revive Your Ride with an Unmatched Shine!</h2>
                            <div className={styles.buttons}>
                                <Link href="/contact" passHref >
                                    <span className="cta-button">
                                        Book Now
                                    </span>
                                </Link>
                                <Link href="/our-services" passHref >
                                    <span className="cta-button">
                                        Our Services
                                    </span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img src="/svgs/triangle.svg" alt="Divider" className={styles.svgDivider} />
            </div>

            <section className={styles.servicesSection} >
                <Container className="py-5">
                    <Row className="justify-content-center">
                        {cardsData.map(card => {
                            const IconComponent = card.icon;
                            return (
                                <Col key={card.id} lg={4} md={6} sm={12} className="mb-4">
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

            <section id="interior" className={`${styles.interiorSection} ${styles.servicesSection}`} >
                <Container className="pt-5">
                    <Row className="justify-content-center">
                        <Col md={4} >
                            <h2 className={styles.sectionHeading}><strong>Interior</strong> Detailing</h2>

                            <p className={styles.sectioinSubheading}>Unmatched <strong>Quality,</strong> Unbeatable <strong className={styles.convenience}>Convenience</strong></p>
                            <br />
                            <p>We bring top-notch car detailing services directly to your home or workplace, saving you time and effort. Our professional team uses high-quality products and techniques to ensure your vehicle looks its best.</p>

                        </Col>
                        <Col md={4}>
                            <Image src='/images/client-pics/exterior1.jpg' className={`my-3 ${styles.sectionImage}`}></Image>
                        </Col>
                    </Row>
                </Container>
                <Container className="pb-5">
                    <Row className="justify-content-center">
                        {interiorPlans.map(plan => {
                            const myList = plan.list.map((item) =>
                                <ul className={styles.list}>
                                    <li>{item}</li>
                                </ul>
                            )
                            return (
                                <Col key={plan.id} lg={4} md={6} sm={12} className="mb-4">
                                    <div className={styles.plan}>
                                        <h2>{plan.title}</h2>
                                        <Image src={plan.image} className={`my-3 ${styles.planImage}`}></Image>
                                        <div className="pt-3">
                                            {myList}
                                        </div>
                                        <p className={styles.planPrice}>Price = {plan.price}</p>
                                        <Link href="/about-us" passHref >
                                            <span className={styles.ctaButton}>
                                                Book Now
                                            </span>
                                        </Link>
                                    </div>
                                </Col>
                            );

                        })}
                    </Row>
                </Container>
            </section>

            <section id="exterior" className={`${styles.exteriorSection} ${styles.servicesSection}`} >
                <Container className="pt-5">
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <h2 className={styles.sectionHeading}><strong>Exterior</strong> Detailing</h2>

                            <p className={styles.sectioinSubheading}>Unmatched <strong>Quality,</strong> Unbeatable <strong className={styles.convenience}>Convenience</strong></p>
                            <br />
                            <p>We bring top-notch car detailing services directly to your home or workplace, saving you time and effort. Our professional team uses high-quality products and techniques to ensure your vehicle looks its best.</p>

                        </Col>
                        <Col md={4}>
                            <Image src='/images/client-pics/exterior1.jpg' className={`my-3 ${styles.sectionImage}`}></Image>
                        </Col>
                    </Row>
                </Container>
                <Container className="pb-5">
                    <Row className="justify-content-center">
                        {exteriorPlans.map(plan => {
                            const myList = plan.list.map((item) =>
                                <ul className={styles.list}>
                                    <li>{item}</li>
                                </ul>
                            )
                            return (
                                <Col key={plan.id} lg={4} md={6} sm={12} className="mb-4">
                                    <div className={styles.plan}>
                                        <h2>{plan.title}</h2>
                                        <Image src={plan.image} className={`my-3 ${styles.planImage}`}></Image>
                                        <div className="pt-3">
                                            {myList}
                                        </div>
                                        <p className={styles.planPrice}>{plan.price}</p>
                                        <Link href="/about-us" passHref >
                                            <span className={styles.ctaButton}>
                                                Book Now
                                            </span>
                                        </Link>
                                    </div>
                                </Col>
                            );

                        })}
                    </Row>
                </Container>
            </section>


            <section id="wax" className={`${styles.waxSection} ${styles.servicesSection}`} >
                <Container className="pt-5">
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <h2 className={styles.sectionHeading}>Clay Bar & <strong>Premium Wax</strong></h2>

                            <p className={styles.sectioinSubheading}>Unmatched <strong>Quality,</strong> Unbeatable <strong className={styles.convenience}>Convenience</strong></p>
                            <br />
                            <p>We bring top-notch car detailing services directly to your home or workplace, saving you time and effort. Our professional team uses high-quality products and techniques to ensure your vehicle looks its best.</p>

                        </Col>
                        <Col md={4}>
                            <Image src='/images/client-pics/exterior1.jpg' className={`my-3 ${styles.sectionImage}`} />
                        </Col>
                        {/* <Col md={4} className={`my-3 ${styles.sectionImage}`}>

                            <Image
                                src="/images/client-pics/exterior1.jpg"
                                alt="Clay Bar & Premium Waxing"
                                width={500}
                                height={500}
                                className={styles.image}
                            />
                        </Col> */}
                    </Row>
                </Container>
                <Container className="pb-5">
                    <Row className="justify-content-center">
                        {waxPlans.map(plan => {
                            const myList = plan.list.map((item) =>
                                <ul className={styles.list}>
                                    <li>{item}</li>
                                </ul>
                            )
                            return (
                                <Col key={plan.id} lg={4} md={6} sm={12} className="mb-4">
                                    <div className={styles.plan}>
                                        <h2>{plan.title}</h2>
                                        <Image src={plan.image} className={`my-3 ${styles.planImage}`}></Image>
                                        <div className="pt-3">
                                            {myList}
                                        </div>
                                        <p className={styles.planPrice}>{plan.price}</p>
                                        <Link href="/about-us" passHref >
                                            <span className={styles.ctaButton}>
                                                Book Now
                                            </span>
                                        </Link>
                                    </div>
                                </Col>
                            );

                        })}
                    </Row>
                </Container>
            </section>
        </>
    );
}