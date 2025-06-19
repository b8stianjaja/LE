import styles from './Container.module.css';

const Container = ({ children, className }) => {
  const containerClasses = `${styles.container} ${className || ''}`;
  return <div className={containerClasses}>{children}</div>;
};

export default Container;