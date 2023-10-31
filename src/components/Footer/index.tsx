import { Icon } from '@iconify/react';

import { Footer as FooterType } from '../../types/footer';

import { Container } from '../../styles/layout';
import { FooterBg, Social } from './styles';

interface Props {
  data: FooterType;
}

const Footer = ({ data }: Props) => {
  return (
    <Container>
      <FooterBg>
        <p>
          Feito com <Icon className="icon" icon="noto:red-heart" /> e muito{' '}
          <Icon className="icon" icon="noto:hot-beverage" />.
        </p>

        <Social>
          {data.whatsapp && (
            <a href={data.whatsapp} target="_blank" rel="noreferrer">
              <Icon icon="ph:whatsapp-logo-duotone" />
            </a>
          )}

          {data.facebook && (
            <a href={data.facebook} target="_blank" rel="noreferrer">
              <Icon icon="ph:facebook-logo-duotone" />
            </a>
          )}

          {data.instagram && (
            <a href={data.instagram} target="_blank" rel="noreferrer">
              <Icon icon="ph:instagram-logo-duotone" />
            </a>
          )}

          {data.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noreferrer">
              <Icon icon="ph:linkedin-logo-duotone" />
            </a>
          )}

          {data.github && (
            <a href={data.github} target="_blank" rel="noreferrer">
              <Icon icon="ph:github-logo-duotone" />
            </a>
          )}
        </Social>
      </FooterBg>
    </Container>
  );
};

export default Footer;
