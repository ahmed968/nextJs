import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my skills and projects.</p>
      </div>
    </Layout>
  );
}
