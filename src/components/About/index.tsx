import { Icon } from '@iconify/react';

import BinaryCodeImg from '../../assets/img/binarybg.png';
import CodeImg from '../../assets/img/codebg.png';
import MeImg from '../../assets/img/viniciuslima.png';

import { About as AboutType } from '../../types/about';

import ScrollFadeIn from '../FadeInAnimations/Scroll';
import RadialLights from '../RadialLights';
import SectionTitle from '../SectionTitle';

import { Container } from '../../styles/layout';
import {
  ContainerFluidEdited,
  BinaryBg,
  CodeBg,
  Me,
  Photo,
  Social,
} from './styles';

interface Props {
  data: AboutType;
}

const About = ({ data }: Props) => {
  return (
    <ContainerFluidEdited id="about">
      <Container padding>
        <ScrollFadeIn>
          <SectionTitle
            title="Quem sou?"
            description="Conheça um pouco sobre mim."
          />
        </ScrollFadeIn>

        <ScrollFadeIn animation="animate__fadeInUp">
          <Me>
            <Photo>
              <img src={MeImg} alt="Foto de Vinícius Lima" />
              <div className="border"></div>
            </Photo>

            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p className="curriculum">
              Quer me conhecer um pouco mais profissionalmente?
              <br />
              Dê uma olhadinha no meu{' '}
              <a href={data.curriculum} target="__blank">
                Curriculum Vitae
              </a>
              .
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
          </Me>

          <RadialLights top="10%" left="10%" size="80%" />
        </ScrollFadeIn>
      </Container>

      <BinaryBg src={BinaryCodeImg} alt="Imagem de um código binário" />
      <CodeBg src={CodeImg} alt="Imagem de um código html" />
    </ContainerFluidEdited>
  );
};

export default About;
