import React from 'react';
import styles from './Layout.module.css';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className={styles.Layout}>{children}</div>
);

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;
