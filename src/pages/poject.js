import Layout from '../components/Layout';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>My Projects</h1>
        <p>Explore the projects I have worked on.</p>
      </div>
    </Layout>
  );
}
