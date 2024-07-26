import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaStar, FaDollarSign } from 'react-icons/fa';
import ImageSlider from "./components/ImageSlider";
import Testimonials from "./components/Testimonials";


export default function Home() {

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
              <h1 className={styles.heading}>We Bring the <strong>Shine</strong> to You</h1>
              <h2 className={styles.subHeading}>Exceptional Care Delivered to Your Location!</h2>
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
        <img src="/svgs/triangle-landing.svg" alt="Divider" className={styles.svgDivider} />
      </div>

      <section className={styles.whyChooseUsSection}>
        <Container className="py-5">
          <Row className="mb-5 justify-content-center">
            <Col md={4}>
              <h2 className={styles.sectionHeading}>Why <strong>Choose Us?</strong></h2>

              <p className={styles.sectioinSubheading}>Unmatched <strong>Quality,</strong> Unbeatable <strong className={styles.convenience}>Convenience</strong></p>
            </Col>
            <Col md={4}>
              <p>We bring top-notch car detailing services directly to your home or workplace, saving you time and effort. Our professional team uses high-quality products and techniques to ensure your vehicle looks its best.</p>
              <Link href="/about-us" passHref >
                <span className="cta-button">

                  Learn More
                </span>
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={3} className="text-center">
              <FaStar className={styles.whyChooseUsIcon} />
              <h3>Quality Service</h3>
              <p>Our team uses the best products and techniques to ensure your car looks its best.</p>

            </Col>
            <Col md={3} className="text-center">
              <FaMapMarkerAlt className={styles.whyChooseUsIcon} />
              <h3>Convenience</h3>
              <p>We come to your location, whether it's your home or workplace, saving you valuable time and effort.</p>

            </Col>

            <Col md={3} className="text-center">
              <FaDollarSign className={styles.whyChooseUsIcon} />
              <h3>Affordable Prices</h3>
              <p>We offer competitive pricing for top-notch detailing services, giving you the best value for your money.</p>

            </Col>
          </Row>
        </Container>
      </section>





      <section className={styles.servicesSection} >
        <Container className="py-5">
          <div className="text-center">
            <h2 className={styles.sectionHeading}>Our <strong>Services</strong></h2>

          </div>
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

      <section >
        <ImageSlider beforeImage="/images/mat-before.jpg" afterImage="/images/mat-after.jpg"></ImageSlider>
      </section>

      <section className="testimonials-section ">
        <Testimonials></Testimonials>
      </section>
    </>

  );
}