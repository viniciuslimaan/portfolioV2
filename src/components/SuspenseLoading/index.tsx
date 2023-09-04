import { Icon } from '@iconify/react';

import { Background } from './styles';

const SuspenseLoading = () => {
  return (
    <Background>
      <Icon className="icon" icon="svg-spinners:eclipse" />
    </Background>
  );
};

export default SuspenseLoading;
