import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Typed from 'typed.js';

import AstronautImg from '../../assets/img/astronaut.png';

import BgStars from '../../components/BgStars';
import Button from '../../components/Button';

import { Astronaut, Content } from './styles';

const NotFound = () => {
  const title = useRef(null);

  useEffect(() => {
    const typed = new Typed(title.current, {
      strings: ['Você se perdeu no espaço'],
      startDelay: 100,
      typeSpeed: 70,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <BgStars>
      <Content>
        <Astronaut src={AstronautImg} alt="Imagem de um astronauta" />

        <h1>
          4<span>0</span>4
        </h1>

        <p className="title">
          <span ref={title}></span>
        </p>
        <p>Ops... este pedaço do universo ainda não foi explorado.</p>
        <p>Você deveria voltar para casa, aqui pode ser perigoso!</p>

        <Link to="/">
          <Button text="Voltar para casa" />
        </Link>
      </Content>
    </BgStars>
  );
};

export default NotFound;
