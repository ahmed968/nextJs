import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>About Me</h1>
        <p>Learn more about my background and experience.</p>
      </div>
    </Layout>
  );
}
