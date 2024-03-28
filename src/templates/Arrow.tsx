import Lottie from 'lottie-react';
import React from 'react';

import animationData from '../utils/ArrowAnimation.json';

const MovingArrow = () => (
  <div className="arrow-animation" id="arrow-animation">
    <Lottie animationData={animationData} className="ArrowAnimation" />
  </div>
);

export default MovingArrow;
