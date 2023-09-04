import { Icon } from '@iconify/react';

import { Portfolio } from '../../../types/portfolio';

import { CardBg, Image, Description, Links } from './styles';

interface Props extends Portfolio {
  onClick?: () => void;
}

const Card = ({ name, image, type, link, github, figma, onClick }: Props) => {
  return (
    <CardBg>
      <Image src={image} type={type} className="img" onClick={onClick}>
        <Icon className="view-icon" icon="ph:eye-duotone" />
      </Image>

      {type !== 'design' && (
        <Description>
          <p className="type">
            {type === 'web' ? 'Aplicativo Web' : 'Aplicativo Mobile'}
          </p>

          <p className="name">{name}</p>

          <Links>
            {link && (
              <a href={link} target="__blank">
                <Icon icon="ph:link-duotone" />
              </a>
            )}

            {github && (
              <a href={github} target="__blank">
                <Icon icon="ph:github-logo-duotone" />
              </a>
            )}

            {figma && (
              <a href={figma} target="__blank">
                <Icon icon="ph:figma-logo-duotone" />
              </a>
            )}
          </Links>
        </Description>
      )}
    </CardBg>
  );
};

export default Card;
