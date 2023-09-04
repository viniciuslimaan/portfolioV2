import { Service } from '../../../types/service';

import { CardBg } from './styles';

const Card = ({ icon, title, description }: Service) => {
  return (
    <CardBg>
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </CardBg>
  );
};

export default Card;
