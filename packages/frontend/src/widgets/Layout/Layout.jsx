import { Outlet } from 'react-router-dom';
import { SiteHeader } from '../SiteHeader';
import { SiteFooter } from '../SiteFooter'; // Make sure this is imported
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.appContainer}>
      <SiteHeader />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <SiteFooter /> {/* This is no longer commented out */}
    </div>
  );
};

export default Layout;