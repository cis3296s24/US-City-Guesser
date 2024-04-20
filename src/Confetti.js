import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Confetti = () => {
  useEffect(() => {
    const end = Date.now() + (15 * 1000);
    const colors = ['#bb0000', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return null; // Since this component doesn't render anything
};

export default Confetti;
