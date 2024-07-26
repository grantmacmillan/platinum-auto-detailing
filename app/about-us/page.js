import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from './about.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
    title: 'About Us | Platinum Auto Detailing',

};

const AboutUs = () => {


    return (
        <div>
            <div className={styles.landingContainer} >
                <Container className='mt-0'>
                    <div className={styles.landing}>
                        <Row>
                            <Col lg={8} className={styles.landingText}>
                                <h1 >
                                    What <span className={styles.highlightHeading}>We Do</span>
                                </h1>
                                <p className={styles.landingDescription}>
                                    We offer a comprehensive interior and exterior car detailing service designed to make your vehicle look and feel brand new. Our services include vacuuming, shampooing, leather and vinyl treatments, steam cleaning, rim and tire cleaning, exterior wash, and more.                                           </p>

                                <p className={styles.landingDescription}>
                                    At Platinum Auto Detailing, we go above and beyond to ensure our customers are completely satisfied. We use the best products and techniques available to ensure your car is as clean and fresh as possible. Our team is dedicated to delivering exceptional results every time.                                </p>

                                <p className={styles.landingDescription}>
                                    To provide the utmost convenience, we come directly to you. we perform the cleaning at your home, saving you time and hassle. Our mobile service ensures you don't have to worry about dropping off and picking up your vehicle.
                                </p>

                                <p className={styles.landingDescription}>
                                    Our team of experienced professionals is thoroughly trained in their respective fields and takes pride in their work. We guarantee that your vehicle will be free of dirt, dust, and debris when we complete the detailing.                                      </p>

                                <p className={styles.landingDescription}>
                                    We strive to provide the best service possible and ensure our customers are extremely happy with our work. Your satisfaction is our top priority, and we are committed to exceeding your expectations with every detail.                                      </p>



                            </Col>
                            <Col lg={4} className={styles.landingImage}>

                                <Image
                                    src="/images/client-pics/lambo2.jpg"
                                    alt="Lambo Cleaning"
                                    width={500}
                                    height={500}
                                    className={styles.image}
                                />
                            </Col>
                        </Row>
                        <Row>

                            <Col xs={{ span: 12, order: 2 }} lg={{ span: 4, order: 1 }} className={styles.landingImage}>

                                <Image
                                    src="/images/clear-logo.png"
                                    alt="Logo"
                                    width={500}
                                    height={500}
                                    className={styles.image}
                                />
                            </Col>
                            <Col xs={{ span: 12, order: 1 }} lg={{ span: 8, order: 2 }} className={styles.landingText}>
                                <h1>
                                    Our <span className={styles.highlightHeading}>Story</span>
                                </h1>
                                <p className={styles.landingDescription}>
                                    The story of Platinum Auto Detailing began with an unwavering commitment to excellence. What started as an inspiration among two friends quickly evolved into a thriving venture that has redefined the concept of car detailing.                                </p>
                                <p className={styles.landingDescription}>
                                    It was during those late night conversations, fueled by a mutual love for cars that the idea took root. Our founders realized that the local car detailing industry was missing a crucial element – an approach that combined attention to detail with a dedication to success. Thus, the idea of Platinum Auto Detailing was formed                                </p>





                            </Col>
                        </Row>
                    </div>
                </Container>



            </div>
            <div className="custom-shape-divider-top-1721843337">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>

            <section className="team-members-section">
                <Container>

                    <h2 className="section-heading text-center">Our Team Of Professionals</h2>
                    <p className={styles.description}>
                        Meet Ivan Fabjan and Gabriel Grobanopoulos, the visionary founders and CEO's behind Platinum Auto Detailing. In a remarkable journey that began during their twelfth-grade year, Ivan and his close friend Gabriel joined forces to bring their passion for cars to life.                    </p>



                    <Row className="justify-content-center">
                        <Col lg={4} className={styles.teamMember}>
                            <div className="text-center">
                                <Image
                                    src="/images/ivan.jpg"
                                    alt="Ivan Fabjan"
                                    width={500}
                                    height={500}
                                    className={styles.circularImage}
                                />
                            </div>
                            <p className={`text-center mt-3 mb-4 ${styles.teamHeading}`}>Ivan Fabjan | Co-Founder</p>
                        </Col>
                        <Col lg={4} className={styles.teamMember}>
                            <div className={`text-center ${styles.teamMemberImage}`}>
                                <Image
                                    src="/images/gabe.jpg"
                                    alt="Gabriel Grobanopoulos"
                                    width={500}
                                    height={500}
                                    className={styles.circularImage}
                                />
                            </div>
                            <p className={`text-center mt-3 mb-4 ${styles.teamHeading}`}>Gabriel Grobanopoulos | Co-Founder</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>

    );
};

export default AboutUs;