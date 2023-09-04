import { useState, useEffect } from 'react';

import { Icon } from '@iconify/react';

import { Button } from './styles';

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button onClick={scrollToTop} visibility={isVisible}>
      <Icon className="icon" icon="ph:rocket-duotone" />
    </Button>
  );
};

export default ScrollToTopBtn;
