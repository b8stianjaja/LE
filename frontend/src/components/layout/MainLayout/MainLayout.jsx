import React from 'react';
import Navbar from '../Navbar/Navbar'; // Corrected import path
import Footer from '../Footer/Footer'; // Corrected import path
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => (
  <div className={styles.layout}>
    <Navbar />
    <main className={styles.mainContent}>{children}</main>
    <Footer />
  </div>
);

export default MainLayout;