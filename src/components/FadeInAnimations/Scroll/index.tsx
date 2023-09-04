import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
  animation?: string;
  children: JSX.Element | JSX.Element[];
}

const ScrollFadeIn = ({ animation, children }: Props) => {
  return (
    <ScrollAnimation
      animateIn={animation ? animation : 'animate__fadeIn'}
      animateOnce={true}
      duration={2}
      delay={300}
    >
      {children}
    </ScrollAnimation>
  );
};

export default ScrollFadeIn;
