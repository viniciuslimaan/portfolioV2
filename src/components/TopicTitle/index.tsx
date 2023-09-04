import { Content } from './styles';

interface Props {
  children: string;
}

const TopicTitle = ({ children }: Props) => {
  return <Content>{children}</Content>;
};

export default TopicTitle;
