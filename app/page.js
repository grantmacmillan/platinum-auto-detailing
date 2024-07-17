import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCheck, FaFire, FaTools, FaUtensils, FaSoap, FaGasPump, FaHamburger } from 'react-icons/fa';



export default function Home() {

  const cardsData = [
    {
      id: 1,
      title: 'Interior Car Detailing',
      description: 'Meticulous interior car detailing service to keep your car\'s interior spotless and fresh.',
      imgSrc: '/images/client-pics/interior1.jpg', // Replace with your image URL
      link: '/our-services'
    },
    {
      id: 2,
      title: 'Exterior Car Detailing',
      description: 'Thorough exterior car detailing to restore and protect your car\'s paint and finish.',
      imgSrc: '/images/client-pics/cleaning1.jpg', // Replace with your image URL
      link: '/our-services'
    },
    {
      id: 3,
      title: 'Clay Bar and Premium Wax',
      description: 'Advanced clay bar treatment and premium wax for a smooth and glossy car exterior.',
      imgSrc: '/images/client-pics/exterior1.jpg', // Replace with your image URL
      link: '/our-services'
    },
  ];

  return (
    <>

      <div className={styles.main}>
        <Container >
          <Row>
            <Col md={6} className={styles.overlay}>
              <h1 className={styles.heading}>We Bring the Shine to You</h1>
              <h2 className={styles.subHeading}>Exceptional Care Delivered to Your Location!</h2>
              <div className={styles.buttons}>
                <Button className={styles.bookNow}>Book Now</Button>
                <Button className={styles.viewServices}>View Services</Button>
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
    </>

  );
}