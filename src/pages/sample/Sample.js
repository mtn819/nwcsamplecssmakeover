import React from 'react';
import styles from './Sample.module.scss';

function Sample() {
  return (
    <main className={styles.sample}>
      {/**HERO */}
      <section className={styles.hero}>
        <hgroup className={styles.hero__headings}>
          <h1 className={styles.hero__superHeading}>Eating cheese</h1>
          <h2 className={styles.hero__subHeading}>
            How eating cheese can change your life
          </h2>
        </hgroup>
        <img
          className={styles.hero__img}
          src="https://picsum.photos/300/200?grayscale"
          alt=""
        />
        <hr className={styles.hero__hr} />
      </section>
      {/**TEXT */}
      <section className={styles.text}>
        <p className={styles.text__paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className={styles.text__paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </main>
  );
}

export default Sample;
