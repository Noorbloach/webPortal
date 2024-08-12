import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

export default function Pricing() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Pricing</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Pricing</li>
        </ul>
      </div>

      
    </>
  );
}
