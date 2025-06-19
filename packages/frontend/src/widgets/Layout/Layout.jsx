// src/widgets/Layout/Layout.jsx

import { Outlet } from 'react-router-dom';
import { SiteHeader } from '../SiteHeader/SiteHeader'; 
import { SiteFooter } from '../SiteFooter/SiteFooter'; // This should now work correctly
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <SiteHeader />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};