import { Content } from './styles';

interface Props {
  title: string;
  description: string;
  position?: 'left' | 'center' | 'right';
  marginBottom?: string;
}

const SectionTitle = ({
  title,
  description,
  position = 'center',
  marginBottom = '3rem',
}: Props) => {
  return (
    <Content position={position} marginBottom={marginBottom}>
      <h2>{title}</h2>
      <p>{description}</p>
    </Content>
  );
};

export default SectionTitle;
