
import React from 'react';
import styles from './index.less';
import { Menu } from 'antd';

const BasicLayout: React.FC = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Menu className={styles.menu}>
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Servers</Menu.Item>
          <Menu.Item key="3">Exchange Sessions</Menu.Item>
          <Menu.Item key="4">Mapping</Menu.Item>
        </Menu>
      </div>

      {/* Page Content */}
      <div className={styles.content}>
        {/* Navbar */}
        <nav className={styles.nav}>
         Home
         John Doe
        </nav>
        <div className={styles.mainContent}>
          <div className={styles.cardsTablesContainer}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicLayout;
