import { ButtonBg } from './styles';

interface Props {
  text?: React.ReactNode | 'string';
  icon?: React.ReactNode;
  type?: 'button' | 'submit';
  color?: 'default' | 'green' | 'red' | 'blue';
  size?: 'default' | 'full';
}

const Button = ({
  text,
  icon,
  type = 'button',
  color = 'default',
  size = 'default',
}: Props) => {
  return (
    <ButtonBg type={type} color={color} size={size}>
      {icon}
      {text}
    </ButtonBg>
  );
};

export default Button;
