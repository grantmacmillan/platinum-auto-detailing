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
            list: ['Includes Gold package',
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

    return (
        <>

            <div className={styles.main}>
                <Container >
                    <Row>
                        <Col md={6} className={styles.overlay}>
                            <h1 className={styles.heading}>Our Services</h1>
                            <h2 className={styles.subHeading}>Exceptional Care Delivered to Your Location!</h2>
                            <div className={styles.buttons}>
                                <Button className={styles.btnGallery}>See Gallery</Button>
                                <Button className={styles.btnContactUs}>Contact Us</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img src="/svgs/triangle.svg" alt="Divider" className={styles.svgDivider} />
            </div>
            <Link href="#interior">Interior</Link> &nbsp;
            <Link href="#exterior">Exterior</Link> &nbsp;
            <Link href="#wax">Wax</Link>
            <section id="interior" className={styles.servicesSection} >
                <h1 className="mx-5 px-5">Interior Detailing</h1>
                <Container className="py-5">
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
                                        <Button className={`${styles.btnBookNow}`}>Book Now</Button>
                                    </div>
                                </Col>
                            );

                        })}
                    </Row>
                </Container>
            </section>

            <section id="exterior" className={styles.servicesSection} >
                <h1 className="mx-5 px-5">Exterior Detailing</h1>
                <Container className="py-5">
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
                                        <Button className={`${styles.btnBookNow}`}>Book Now</Button>
                                    </div>
                                </Col>
                            );

                        })}
                    </Row>
                </Container>
            </section>

            <section id="wax" className={styles.servicesSection} >
                <h1 className="mx-5 px-5">Clay Bar & Premium Waxing</h1>
                <Container className="py-5">
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
                                        <Button className={`${styles.btnBookNow}`}>Book Now</Button>
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