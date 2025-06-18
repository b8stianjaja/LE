import React from 'react';
import styles from './PageStyles.module.css';

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1>Quién Soy</h1>
      <p>
        Esta es la página "Quién Soy". Aquí puedes escribir sobre ti, tu misión y tu pasión por las terapias holísticas.
      </p>
    </div>
  );
};

export default AboutPage;