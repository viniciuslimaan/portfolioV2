import { useState, useEffect, memo } from 'react';

import { Icon } from '@iconify/react';

import LogoImg from '../../assets/img/logo.png';

import {
  NavbarBg,
  Logo,
  Buttons,
  Button,
  ButtonsMobile,
  Hamburger,
  NavbarContainer,
} from './styles';

const Navbar = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [changeBg, setChangeBg] = useState<boolean>(false);

  function changeNavbarBg() {
    if (window.scrollY >= 60) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  }

  useEffect(() => {
    changeNavbarBg();
    window.addEventListener('scroll', changeNavbarBg);

    return () => {
      document.removeEventListener('scroll', changeNavbarBg);
    };
  }, []);

  return (
    <>
      <NavbarBg change_bg={changeBg}>
        <NavbarContainer change_bg={changeBg}>
          <Logo href="https://viniciuslimaan.com.br">
            <img src={LogoImg} alt="Logo Vinícius Lima" />
          </Logo>

          {/* Normal */}
          <Buttons>
            <Button href="#about">Quem sou?</Button>

            <Button href="#skills">Habilidades</Button>

            <Button href="#academicProjects">Projetos acadêmicos</Button>

            <Button href="#portfolio">Portfólio</Button>

            <Button href="#contact">Contato</Button>
          </Buttons>

          {/* Hamburger */}
          <Hamburger>
            <Icon
              icon={opened === false ? 'subway:menu' : 'vaadin:grid-small-o'}
              onClick={() => setOpened(!opened)}
            />
          </Hamburger>
        </NavbarContainer>
      </NavbarBg>

      <ButtonsMobile opened={opened}>
        <Button href="#about" btn_hamburger onClick={() => setOpened(!opened)}>
          Quem sou?
        </Button>

        <Button href="#skills" btn_hamburger onClick={() => setOpened(!opened)}>
          Habilidades
        </Button>

        <Button
          href="#academicProjects"
          btn_hamburger
          onClick={() => setOpened(!opened)}
        >
          Projetos acadêmicos
        </Button>

        <Button
          href="#portfolio"
          btn_hamburger
          onClick={() => setOpened(!opened)}
        >
          Portfólio
        </Button>

        <Button
          href="#contact"
          btn_hamburger
          onClick={() => setOpened(!opened)}
        >
          Contato
        </Button>
      </ButtonsMobile>
    </>
  );
};

export default memo(Navbar);
