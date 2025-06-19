import { Outlet } from 'react-router-dom';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteFooter from '../SiteFooter/SiteFooter';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.appContainer}>
      <SiteHeader />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Layout;