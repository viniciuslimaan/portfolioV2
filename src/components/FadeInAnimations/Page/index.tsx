import { Animation } from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const PageFadeIn = ({ children }: Props) => {
  return <Animation>{children}</Animation>;
};

export default PageFadeIn;
