import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  opacity: number;
  size: number;
}

const SnowAnimation = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const flakes: Snowflake[] = [];
      for (let i = 0; i < 200; i++) {
        flakes.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: Math.random() * 4 + 3, // 3-7 seconds
          opacity: Math.random() * 0.6 + 0.3, // 0.3-0.9
          size: Math.random() * 4 + 10, // 10-14px
        });
      }
      setSnowflakes(flakes);
    };

    createSnowflakes();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white/20 select-none animate-snowfall"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
            animationDuration: `${flake.animationDuration}s`,
            opacity: flake.opacity,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default SnowAnimation;