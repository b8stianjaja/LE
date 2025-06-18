import React from 'react';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => (
  <div className={styles.layout}>
    <Navbar />
    <main className={styles.mainContent}>{children}</main>
    <Footer />
  </div>
);

export default MainLayout;