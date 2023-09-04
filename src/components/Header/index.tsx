import { Icon } from '@iconify/react';

import { Header as HeaderType } from '../../types/header';

import BgStars from '../BgStars';
import MusicPlayer from '../MusicPlayer';
import Navbar from '../Navbar';

import { Container } from '../../styles/layout';
import {
  Presentation,
  Title,
  SubTitle,
  Content,
  Meteor,
  Down,
  Moon,
} from './styles';

interface Props {
  data: HeaderType;
}

const Header = ({ data }: Props) => {
  return (
    <>
      <Navbar />

      <BgStars>
        <Moon />

        <Meteor left="50vw" top="-5%" />
        <Meteor left="45vw" top="-5%" />

        <Container>
          <Content>
            <Presentation>
              Bem-vindo ao meu <span>portfólio</span>!
            </Presentation>

            <Title>{data.title}</Title>

            <SubTitle>{data.subtitle}</SubTitle>
          </Content>
        </Container>

        <Down href="#about">
          <Icon icon="ph:caret-down-duotone" />
        </Down>
      </BgStars>

      <MusicPlayer />
    </>
  );
};

export default Header;
