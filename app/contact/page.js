
import ContactForm from "../components/ContactForm";
import styles from './contact.module.css';
import Testimonials from '../components/Testimonials';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
    title: 'Contact | Platinum Auto Detailing',
    description: 'Get in touch with Platinum Auto Detailing for premium car detailing services. Contact us to book an appointment, ask questions, or learn more about our services. We are here to help keep your vehicle in pristine condition.',
    keywords: 'Platinum Auto Detailing contact, car detailing services, book an appointment, car care inquiries, auto detailing questions',
    metadataBase: new URL(BASE_URL),
    openGraph: {
        title: 'Contact | Platinum Auto Detailing',
        description: 'Get in touch with Platinum Auto Detailing for premium car detailing services. Contact us to book an appointment, ask questions, or learn more about our services. We are here to help keep your vehicle in pristine condition.',
        type: 'website',
        url: `${BASE_URL}/contact`,
        site_name: 'Platinum Auto Detailing'
    },
};


export default function Contact() {
    return (
        <div >
            <div className={styles.contactContainer}>
                <ContactForm />

            </div>
            <div className="custom-shape-divider-top-1721843337">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <section className="testimonials-section ">
                <Testimonials></Testimonials>
            </section>
        </div>

    );
}