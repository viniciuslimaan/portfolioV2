import { Icon } from '@iconify/react';

import { ButtonBg } from './styles';

interface Props {
  text?: React.ReactNode | 'string';
  icon?: React.ReactNode;
  type?: 'button' | 'submit';
  color?: 'default' | 'green' | 'red' | 'blue';
  size?: 'default' | 'full';
  isLoading?: boolean;
  execute?: () => void;
}

const Button = ({
  text,
  icon,
  type = 'button',
  color = 'default',
  size = 'default',
  isLoading = false,
  execute,
}: Props) => {
  return (
    <ButtonBg type={type} color={color} size={size} onClick={execute}>
      {isLoading ? (
        <Icon className="icon" icon="svg-spinners:180-ring-with-bg" />
      ) : (
        icon
      )}
      {text}
    </ButtonBg>
  );
};

export default Button;
