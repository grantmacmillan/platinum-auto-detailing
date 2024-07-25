
import ContactForm from "../components/ContactForm";
import styles from './contact.module.css';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
    title: 'Contact | Platinum Auto Detailing',

};

export default function Contact() {
    return (
        <div className={styles.main}>
            <div className={styles.contactContainer}>
                <ContactForm />

            </div>
        </div>

    );
}