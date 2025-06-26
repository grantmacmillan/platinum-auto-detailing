import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './gallery.module.css';
import ImageSlider from '../components/ImageSlider';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
    title: 'Gallery | Platinum Auto Detailing',
    description: 'Explore the gallery of Platinum Auto Detailing to see the exceptional quality and meticulous attention to detail we bring to each auto detailing project. From everyday vehicles to luxury cars, our gallery showcases our commitment to excellence.',
    keywords: 'Platinum Auto Detailing gallery, car detailing photos, interior detailing, exterior detailing, auto detailing projects, vehicle maintenance, car care results',
    metadataBase: new URL(BASE_URL),
    openGraph: {
        title: 'Gallery | Platinum Auto Detailing',
        description: 'Explore the gallery of Platinum Auto Detailing to see the exceptional quality and meticulous attention to detail we bring to each auto detailing project. From everyday vehicles to luxury cars, our gallery showcases our commitment to excellence.',
        type: 'website',
        url: `${BASE_URL}/gallery`,
        site_name: 'Platinum Auto Detailing'
    },
};


const images = [
    '/images/client-pics/lambo2.jpg',
    '/images/client-pics/lambo3.jpg',
    '/images/client-pics/lambo4.jpg',
    '/images/client-pics/lambo5.jpg',
    '/images/client-pics/interior1.jpg',
    '/images/client-pics/inside5.jpg',
    '/images/client-pics/inside3.jpg',
    '/images/client-pics/car5.jpg',
    '/images/client-pics/cleaning2.jpg',
    '/images/client-pics/cleaning3.jpg',
    '/images/client-pics/exterior1.jpg',

    '/images/client-pics/cleaning5.jpg',
    '/images/client-pics/car2.jpg',
    '/images/client-pics/suv1.jpg',
    '/images/client-pics/suv2.jpg',

    '/images/client-pics/inside6.jpg',
    '/images/client-pics/inside7.jpg',
    '/images/client-pics/inside8.jpg',
    '/images/client-pics/backseat.jpg',
    '/images/client-pics/console.jpg',
    '/images/client-pics/wheel1.jpg',
    '/images/client-pics/inside9.jpg',
    '/images/client-pics/car9.jpg',

    '/images/client-pics/ceramic3.jpg',
    '/images/client-pics/ceramic4.jpg',
    '/images/client-pics/ceramic5.jpg',

    '/images/client-pics/car20.jpg',
    '/images/client-pics/car21.jpg',

    '/images/client-pics/car22.jpg',
    '/images/after41.jpg',
    '/images/client-pics/inside42.jpg',
    '/images/client-pics/inside43.jpg',
    '/images/client-pics/inside44.jpg',




    // Add more image paths or URLs as needed
];

export default function Gallery() {
    return (
        <div>
            <div className={styles.landingContainer} >

                <Container className={`${styles.page} mt-0`}>

                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} className="mb-4">
                            <h2 className={`text-center my-4  ${styles['section-heading']}`}>Before</h2>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={'/images/before40.jpg'}
                                    alt={'/images/before40.jpg'}
                                    className={styles.image}
                                    width={900}
                                    height={600}
                                />
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={6} className="mb-4">
                            <h2 className={`text-center my-4  ${styles['section-heading']}`}>After</h2>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={'/images/after40.jpg'}
                                    alt={'/images/after40.jpg'}
                                    className={styles.image}
                                    width={900}
                                    height={600}
                                />
                            </div>
                        </Col>
                    </Row>


                    <h1 className={`text-center my-4  ${styles['section-heading']}`}>Photo Gallery</h1>
                    <p className={`text-center my-4  ${styles['section-subheading']}`}>Explore our gallery to see the impeccable results we deliver with each detailing session at Platinum Auto Detailing. From everyday vehicles to luxury cars, our gallery showcases a variety of auto detailing projects that reflect our commitment to exceptional quality and meticulous attention to detail. </p>



                    <Row>
                        {images.map((src, index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={src}
                                        alt={`Auto Detailing ${index + 1}`}
                                        className={styles.image}
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>
            <div className="custom-shape-divider-top-1721843337">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <ImageSlider beforeImage="/images/before20.jpg" afterImage="/images/after20.jpg"></ImageSlider>
            <ImageSlider beforeImage="/images/before30.jpg" afterImage="/images/after30.jpg"></ImageSlider>

        </div>



    );
}
