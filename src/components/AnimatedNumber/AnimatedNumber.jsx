import { useEffect, useState } from 'react';

export function AnimatedNumber({ value, delay = 0, duration = 1.4, fontSize = '4xl' }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const startTime = performance.now();
      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const eased = 1 - (1 - progress) ** 3;
        setDisplay(Math.round(value * eased));
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [value, delay, duration]);

  const sizeMap = {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  };

  return (
    <span
      className="font-serif font-light italic text-white"
      style={{
        fontSize: sizeMap[fontSize] || fontSize,
        fontWeight: 300,
        fontStyle: 'italic',
        letterSpacing: '-0.065em',
        lineHeight: 1,
      }}
    >
      {display}
    </span>
  );
}
