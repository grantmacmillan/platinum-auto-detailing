import Image from "next/image";
import styles from "./page.module.css";
import { Container, Row, Col, Button } from 'react-bootstrap';


export default function Home() {
  return (
    <>

      <div className={styles.main}>
        <Container >
          <Row>
            <Col md={6} className={styles.overlay}>
              <h1 className={styles.heading}>Fall in Love with Your Car Again</h1>
              <h2 className={styles.subHeading}>London’s Top Rated Eco-Friendly Auto Detailing Shop</h2>
              <div className={styles.buttons}>
                <Button className={styles.bookNow}>Book Now</Button>
                <Button className={styles.viewServices}>View Services</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <img src="/svgs/triangle.svg" alt="Divider" className={styles.svgDivider} />

      </div>




      <div >
        <Container>
          <Row>
            <Col md={6}>
              <h1 className={styles.heading}>Our Services</h1>
              <p className={styles.subHeading}>We offer a wide range of services to keep your car looking its best.</p>
            </Col>
            <Col md={6}>
              <Image src="/images/logo.png" alt="Car" width={500} height={500} />
            </Col>
          </Row>
        </Container>
      </div>
    </>

  );
}