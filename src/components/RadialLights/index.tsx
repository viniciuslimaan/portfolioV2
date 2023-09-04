import { Light } from './styles';

interface Props {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size?: string;
  blur?: string;
}

const RadialLights = ({
  top,
  bottom,
  left,
  right,
  size = '50vw',
  blur = '5rem',
}: Props) => {
  return (
    <Light
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      size={size}
      blur={blur}
    />
  );
};

export default RadialLights;
