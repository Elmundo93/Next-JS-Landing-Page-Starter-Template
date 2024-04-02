'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import styles from '../styles/Arrow.module.css';
import animationData from '../utils/ArrowAnimation.json';

// Import the Lottie component
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const MovingArrow = () => {
  return (
    <div
      className={`${styles.arrow} flex rotate-180 items-center justify-center transition-transform`}
      id="arrow-animation"
    >
      <React.Suspense fallback={<div>Loading animation...</div>}>
        <Lottie
          animationData={animationData}
          className="ArrowAnimation size-20"
        />
      </React.Suspense>
    </div>
  );
};

export default MovingArrow;
