import React, { memo } from 'react';

import { Star, Background } from './styles';

interface Props {
  number?: number;
  children?: React.ReactNode;
}

const GenerateStarsComponent = ({ number = 250 }: Props) => {
  const GenerateStars = () => {
    const stars: React.ReactNode[] = [];

    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 1; i <= number; i++) {
      const posX = Math.floor(Math.random() * width);
      const posY = Math.floor(Math.random() * height);
      const size = Math.floor(Math.random() * 3) + 1;
      const time = Math.floor(Math.random() * (10 - 2 + 1)) + 2;

      stars.push(
        <Star
          key={i}
          posx={posX.toString()}
          posy={posY.toString()}
          size={size.toString()}
          time={time.toString()}
        />,
      );
    }

    return <>{stars}</>;
  };

  return GenerateStars();
};

const GenerateStarsMemoized = memo(GenerateStarsComponent);

const BgStars = ({ children }: Props) => {
  return (
    <Background>
      <GenerateStarsMemoized />
      {children}
    </Background>
  );
};

export default BgStars;
