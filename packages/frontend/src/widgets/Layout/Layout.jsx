// src/widgets/Layout/Layout.jsx

import { Outlet } from 'react-router-dom';
import { SiteHeader } from '../SiteHeader/SiteHeader';
import { SiteFooter } from '../SiteFooter/SiteFooter';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    // Corrected the className from 'layout' to 'appContainer' to match the CSS module.
    <div className={styles.appContainer}>
      <SiteHeader />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};