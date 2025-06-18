import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, to, variant = 'primary' }) => {
  const className = `${styles.button} ${styles[variant]}`;
  if (to) return <Link to={to} className={className}>{children}</Link>;
  return <button className={className}>{children}</button>;
};
export default Button;