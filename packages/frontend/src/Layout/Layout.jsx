import { Outlet } from 'react-router-dom';
// import SiteHeader from '../SiteHeader/SiteHeader'; // Lo agregaremos después
// import SiteFooter from '../SiteFooter/SiteFooter'; // Lo agregaremos después

// El componente Outlet renderizará el componente de la página activa (ej. HomePage, AboutPage)
const Layout = () => {
  return (
    <div className="app-container">
      {/* <SiteHeader /> */}
      <main>
        <Outlet />
      </main>
      {/* <SiteFooter /> */}
    </div>
  );
};

export default Layout;