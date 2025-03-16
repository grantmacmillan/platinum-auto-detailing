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
                            <Image src='/images/client-pics/ceramic4.jpg' className={`my-3 ${styles.sectionImage}`} />
                        </Col>
                        <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
                            <h2 className={styles.sectionHeading}><strong>Ceramic</strong> Coating</h2>

                            <p className={styles.sectioinSubheading}><strong className={styles.convenience}>Protect</strong> Your Car with Advanced Coating</p>
                            <p>Ceramic coating is a premium protective solution designed to keep your vehicle looking its best for years. This advanced coating forms a strong, durable barrier against environmental contaminants such as dirt, water, and road salts, preventing them from bonding to your car’s surface. </p>

                            <p>In addition to protection, ceramic coatings enhance the aesthetic appeal of your car with a deep, high-gloss shine. The coating brings out the richness of your vehicle’s paint, making it look sleek and polished while resisting fading, oxidation, and swirl marks. This superior finish ensures your car maintains a showroom-quality look far longer than conventional waxing.

                            </p>

                            <p>One of the biggest benefits of ceramic coatings is reduced maintenance. Thanks to their hydrophobic properties, water, mud, and grime slide off effortlessly, making washing and upkeep quicker and easier. Your car will stay cleaner between washes, saving you both time and money on frequent detailing. If you’re looking for a long-term solution to protect and enhance your vehicle’s exterior, ceramic coating is the ultimate choice.







                            </p>
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
                                        <li><FaCheck /> Enhances shine and resists fading and oxidation.</li>
                                        <li><FaCheck /> Repels grime for quicker, less frequent cleaning.</li>


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