
import React from 'react';
import styles from './index.less';

const BasicLayout: React.FC = (props) => {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        {/* Sidebar Content Here */}
      </div>

      {/* Page Content */}
      <div className={styles.content}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* Navbar Content Here */}
        </nav>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Search Input */}
          <div className={styles.searchContainer}>
            <input type="text" id="searchInput" placeholder="Search..." />
          </div>

          {/* Cards and Tables */}
          <div className={styles.cardsTablesContainer}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicLayout;
