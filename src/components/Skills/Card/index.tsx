import { Skill } from '../../../types/skill';

import { CardBg } from './styles';

const Card = ({ icon, name }: Skill) => {
  return (
    <CardBg>
      {icon}
      <p>{name}</p>
    </CardBg>
  );
};

export default Card;
