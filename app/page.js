import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaStar, FaDollarSign } from 'react-icons/fa';
import ImageSlider from "./components/ImageSlider";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
//pushing now

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: 'Platinum Auto Detailing - Premium Interior and Exterior Car Detailing Services',
  description: 'Platinum Auto Detailing offers premium interior and exterior car detailing services delivered directly to your location. Experience unmatched quality and convenience with our professional team.',
  keywords: 'Platinum Auto Detailing, car detailing, interior detailing, exterior detailing, mobile car cleaning, auto detailing services, vehicle maintenance, car care',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: 'Platinum Auto Detailing - Premium Interior and Exterior Car Detailing Services',
    description: 'Platinum Auto Detailing offers premium interior and exterior car detailing services delivered directly to your location. Experience unmatched quality and convenience with our professional team.',
    type: 'website',
    url: `${BASE_URL}/`,
    site_name: 'Platinum Auto Detailing'
  },
};

export default function Home() {

  const cardsData = [
    {
      id: 1,
      title: 'Interior Car Detailing',
      description: 'Meticulous interior car detailing service to keep your car\'s interior spotless and fresh.',
      imgSrc: '/images/client-pics/inside3.jpg', // Replace with your image URL
      link: '/interior-detailing'
    },
    {
      id: 2,
      title: 'Exterior Car Detailing',
      description: 'Thorough exterior car detailing to restore and protect your car\'s paint and finish.',
      imgSrc: '/images/client-pics/cleaning1.jpg', // Replace with your image URL
      link: '/exterior-detailing'
    },
    {
      id: 3,
      title: 'Ceramic Coating',
      description: 'Our advanced coatings provide long-lasting protection, enhanced gloss, and superior resistance to dirt, UV rays, and environmental damage.',
      imgSrc: '/images/client-pics/ceramic5.jpg', // Replace with your image URL
      link: '/ceramic-coating'
    },

  ];

  return (
    <>

      <div className={styles.main}>
        <Container >
          <Row>
            <Col md={6} className={styles.overlay}>
              <h1 className={styles.heading}>We Bring the <strong>Shine</strong> to You</h1>
              <h2 className={styles.subHeading}>Expert Detailing, Delivered Directly to Your Home!</h2>
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
              <p>We bring top-notch car detailing services directly to your home, saving you time and effort. Our professional team uses high-quality products and techniques to ensure your vehicle looks its best.</p>
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
              <p>We come to your location, whether it's your home, saving you valuable time and effort.</p>

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
        <ImageSlider beforeImage="/images/before20.jpg" afterImage="/images/after20.jpg"></ImageSlider>
        <ImageSlider beforeImage="/images/before30.jpg" afterImage="/images/after30.jpg"></ImageSlider>

      </section>

      <section >
        <ContactForm />
        <div className="custom-shape-divider-top-1721843337">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section className="testimonials-section ">
        <Testimonials></Testimonials>
      </section>
    </>

  );
}