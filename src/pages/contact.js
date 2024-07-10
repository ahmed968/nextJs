import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Contact Me</h1>
        <p>Get in touch for collaborations or inquiries.</p>
      </div>
    </Layout>
  );
}
